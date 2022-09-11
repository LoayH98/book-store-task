import React, {  Component } from "react";
import LoadingSpinner from '../../components/LoadingSpinner';
import SearchArea from "../../components/SearchArea";
import BookList from "../../components/BookList";
import Loader from '../../components/Backdrop'
import "./style.css";
import axiosInstance from '../../services/axios/axiosService';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
      prevSearchField:"prev",
      loading : false,
      itemCount :0,
      firstTime : false ,
      
    };
  }
  handleSearch=(e)=>{
      
      this.setState({searchField : e.target.value})
      
  }
  searchBook= (e)=>{
    e.preventDefault();
      if(this.state.prevSearchField!=this.state.searchField){
        this.setState({loading:false ,firstTime:true , books:[] ,prevSearchField:this.state.searchField })
        this.load();
      
        
      }

  }


  handleScroll = () => { 
    
    if (
      window.scrollY + window.innerHeight + 200 >=
      document.documentElement.scrollHeight
    ) {
      
         this.load();
         window.removeEventListener("scroll", this.handleScroll);
         this.setState({loading:true})
         
    }
  };

  load(){
    axiosInstance.get(`/books/v1/volumes?q='${this.state.searchField}'&startIndex=${this.state.itemCount}&maxResults=20`)
    .then(res=>{
      try{
        const books = res.data
        this.setState({books:[...this.state.books,...books.items]})
        this.setState({itemCount:this.state.itemCount+20 , firstTime:false ,loading:false ,});
      }catch{
        const element =document.getElementById('noData')
        this.setState({loading:false})
        if(this.state.books){
            element.innerHTML=`End of Data for '${this.state.searchField}'`
            window.removeEventListener("scroll", this.handleScroll);
            
        }else{
          element.innerHTML=`No Data for ${this.state.searchField}`
        }
        element.classList.remove('hide-noData')
      }


    });
  }


  componentDidMount() {
   
      window.addEventListener("scroll",  this.handleScroll);
    this.state.firstTime=false;
  }

  componentDidUpdate(){
    
    setTimeout(()=>{
      window.addEventListener("scroll",  this.handleScroll);
    },500);
    
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  callbackFromParentBooks=(data)=>{ //call back t share id of the book that should be loaded in detail page
    this.props.callbackFromParentHome(data)
  }

  render() {
        return (
      <div className="books">
        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
        <BookList books={this.state.books} callbackFromParentBooks={this.callbackFromParentBooks} source='Books'/>
        <Loader open={this.state.firstTime} />
        <LoadingSpinner open={this.state.loading} />
        <h6 className='hide-noData noData' id='noData'></h6>
      </div>
    );
    
    
  }

}

export default Books;
