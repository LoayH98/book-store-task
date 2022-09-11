import React from "react";

import PersistentDrawerLeft from "../../components/Sidebar";
import BooksList from "../../components/BookList";
import './style.css'
import { connect } from "react-redux";
const MyEbooks=(props)=> {


  return (
    <div>
      <PersistentDrawerLeft 

      ></PersistentDrawerLeft>
      <div className="bookList">
        <h1>My Ebooks</h1>
        <BooksList source='MyEbooks' books={props.savedBooks}

         ></BooksList>
      </div>
    </div>
  );
}
const mapStateToProps=state=>{
return {
  savedBooks : state.savedBooks.booksSaved
}
}
export default connect(mapStateToProps)(MyEbooks)
