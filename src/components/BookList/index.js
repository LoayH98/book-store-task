import React, { useState } from "react";
import BookCard from "../BookCard";
import "./style.css";
const notFoundImgLink =
  "https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png";
export default function BookList(props) {
  let link = "";
  const {id,SetId} =useState(0);

  return (
    <div className="book-list">
      {props.books.map((book, i) => {
        try {
          link = book.volumeInfo.imageLinks.thumbnail;
        } catch (error) {
          link = notFoundImgLink;
        }

        return (
          <BookCard
            key={i}
            title={book.volumeInfo.title}
            image={link}
            author={""}
            idOfBook={book.id}

            
          />
        );
      })}

    </div>
  );
}
