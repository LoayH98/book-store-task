import * as actionType from "../../actions";

const initialState = {
  bookId: "",
};

const BookIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SAVE_BOOK_ID:
      return {
        bookId: action.value,
      };
  }
  return state;
};

export default BookIdReducer;
