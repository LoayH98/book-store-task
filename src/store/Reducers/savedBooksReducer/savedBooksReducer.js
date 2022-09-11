import * as actionType from "../../actions";

const initialState = {
  booksSaved: [],
};

const SavedBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SAVE_BOOK:
      return {
        booksSaved: [...state.booksSaved, action.value],
      };
  }
  return state;
};

export default SavedBooksReducer;
