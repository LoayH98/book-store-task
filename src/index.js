import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore , combineReducers} from 'redux'
import {Provider} from 'react-redux'
import BookIdReducer from './store/Reducers/bookIdReducer/bookIdReducer'
import SavedBooksReducer from './store/Reducers/savedBooksReducer/savedBooksReducer'
import UserReducer from './store/Reducers/userReducer/userReducer'

const rootReducer =combineReducers({
  bookId : BookIdReducer,
  savedBooks : SavedBooksReducer,
  isSigned : UserReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  
   <Provider store={store} ><App /></Provider> 
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
