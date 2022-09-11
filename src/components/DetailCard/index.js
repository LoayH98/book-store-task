import React,{useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'
import Rating from '@material-ui/lab/Rating';
import { connect } from "react-redux";
import * as actionType from "../../store/actions";
import './style.css'
const DetailCard=(props)=>{

     const [disable , setDisable] =useState(false) 
    const [averageRating , setAverageRating] = useState(0)
     
    let authors='';
    
    
    for(let i =0 ; i<props.authors.length ; i++){
        if(!i){
            authors+=props.authors[i]
        }else
        authors+=`, ${props.authors[i]}`
    }
  
console.log(props.book)

useEffect(()=>{
   
    checkIfPurchased()
   })
   useEffect(()=>{
    setAverageRating(props.averageRating)
    checkIfPurchased()
   },[props.averageRating])

   const checkIfPurchased=(()=>{
    if(props.isSigned){
       for(let i=0 ; i<props.savedBooks.length;i++){
           if(props.savedBooks[i].id==props.bookId)
            {   console.log('truee')
                setDisable(true);
                break
            }
       } } 
   })
   const handleBuy = ()=>{
    if(props.isSigned){
     if(!disable)
     props.handleBookSave(props.book)
    }else{
        alert('Please Sign in to buy')
    }      
}
const handleRating=(newValue)=>{
    if(props.isSigned){
        console.log(`${props.averageRating} props.averagRating`)
        console.log(`${props.ratingCount} props.ratingCount`)
        const newAverageRating =((props.averageRating*props.ratingCount + newValue)/(props.ratingCount+1))  
        console.log(`${newAverageRating} newAverageRating`)
        setAverageRating(newAverageRating) 
       }else{
           alert('Please Sign in to rate')
       }      
}
return(
    
    <>
   { console.log('render')}
    <div className='containerr'>
    <div  className="img-container">
        <img src={`${props.imgLink}`}></img>
        <div style={{textAlign:'center'}}>{`${props.numberOfPages} Pages`}</div>
    </div>
    <div  className="second-container">
        <div><strong>Title:</strong>{` ${props.title}`}</div>
        <br />
        <div><strong>By:</strong>{` ${authors}`}</div>
        <br />
        <div><strong>Price:</strong>{` 200$`}</div>
        
        <div>
        <Rating
         name="size-medium"
         precision={0.1}
         value={averageRating}
         onChange={(even,newValue ) => {
           handleRating(newValue)
         }}
       />
        {`${Math.round(averageRating * 10) / 10} `  }
        </div>

        
        
      
    </div>
    <div className="third-container">
    <div className='buyBtn'>
    <Button variant="contained" color="primary" disabled={disable} onClick={(e)=>{handleBuy()} }  >Buy</Button>
    </div>
    </div>
     </div>
        <div className='description'><strong>Description:</strong>{` ${props.description}`}</div>
    </>
)

}
const mapStateToProps = (state) => {
    return {
      bookId: state.bookId.bookId,
      savedBooks : state.savedBooks.booksSaved,
      isSigned :state.isSigned.isSigned
    };
  };
  
  const mapDispatchToProps = dispatch =>{
    return {
      handleBookId : (idOfBook)=> dispatch({type: actionType.SAVE_BOOK_ID , value:idOfBook}),
      handleBookSave : (book)=>dispatch({type:actionType.SAVE_BOOK, value:book})
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(DetailCard)