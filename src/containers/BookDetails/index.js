import React, { useEffect, useState, useRef } from "react";
import PersistentDrawerLeft from "../../components/Sidebar";
import DetailCard from "../../components/DetailCard";
import "./style.css";
import axiosInstance from "../../services/axios/axiosService";
import { connect } from "react-redux";
const notFoundImgLink =
  "https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png";
const BookDetails=(props)=> {
  const [book, setBook] = useState(0);
  const [bookDetails, setBookDetails] = useState({
    title: "",
    imgLink: notFoundImgLink,
    numberOfPages: "",
    authors: "",
    description: "",
    averageRating:0,
    ratingCount:0,
  });

  useEffect(() => {
    axiosInstance
      .get(`/books/v1/volumes?q=id:<${props.bookId}>`)
      .then((res) => {
        const result = res.data.items[0];
        let titleC, linkC, numberOfPagesC, authorsC, descriptionC,averageRatingC,ratingCountC;
        setBook(result);
        
          titleC = result.volumeInfo.title;
          if(typeof titleC === 'undefined')
          titleC="Not found"
       
        try {
          linkC = result.volumeInfo.imageLinks.thumbnail;
        } catch (e) {
          linkC = notFoundImgLink;
        }
       
          numberOfPagesC = result.volumeInfo.pageCount;
          if(typeof numberOfPagesC === 'undefined')
          numberOfPagesC = "Not found";
        
          
          authorsC = result.volumeInfo.authors;
          if(typeof authorsC === 'undefined')
          authorsC = [];
        
        
          descriptionC = result.volumeInfo.description;
          if(typeof descriptionC === 'undefined')
          descriptionC = "Not found";
       
        
          ratingCountC = result.volumeInfo.ratingsCount;
          if(typeof ratingCountC === 'undefined')
          ratingCountC = 0;
        
        
          averageRatingC = result.volumeInfo.averageRating;
          
          if(typeof averageRatingC === 'undefined')
          averageRatingC = 0;
        

        setBookDetails({
          title: titleC,
          imgLink: linkC,
          numberOfPages: numberOfPagesC,
          authors: authorsC,
          description: descriptionC,
          averageRating:averageRatingC,
          ratingCount:ratingCountC,

        });
      });
  }, []);



  return (
    <div>
      <PersistentDrawerLeft  ></PersistentDrawerLeft>
      <DetailCard
        imgLink={bookDetails.imgLink}
        title={bookDetails.title}
        numberOfPages={bookDetails.numberOfPages}
        authors={bookDetails.authors}
        description={bookDetails.description}
        averageRating={bookDetails.averageRating}
        ratingCount={bookDetails.ratingCount}
        book={book}

      ></DetailCard>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    bookId: state.bookId.bookId,
  };
};

export default connect(mapStateToProps)(BookDetails)
