import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../containers/Home";
import BookDetails from "../containers/BookDetails";
import MyEbooks from '../containers/My Ebooks'

export default function RouterComponent(props) {

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <Home 

             />
          )}
        />
        <Route
          path="/book-details"
          exact
          component={() => (
            <BookDetails

              booksSaved={props.booksSaved}

            />
          )}
        />
        <Route
          path="/my-ebooks"
          exact
          component={() => (
            <MyEbooks booksSaved={props.booksSaved}

             
            />
          )}
        />
      </Switch>
    </Router>
  );
}
