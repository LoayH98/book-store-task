import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { connect } from "react-redux";
import * as actionType from "../../store/actions";


const BookCard = (props) => {
  let link = "";
  link = props.image;

  return (
    <div className="book-card container-card">
      <img src={link} alt="Book Title"></img>
      <Link to="/book-details" onClick={()=>props.handleBookId(props.idOfBook)} className="link">
        <div id="title">{props.title}</div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookId: state.bookId.bookId,
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    handleBookId : (idOfBook)=> dispatch({type: actionType.SAVE_BOOK_ID , value:idOfBook})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
