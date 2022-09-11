import * as actionType from "../../actions";

const initialState = {
  isSigned: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_SIGNED:
      return {
        isSigned: true,
      };

    case actionType.SET_UNSIGNED:
      return {
        isSigned: false,
      };
  }
  return state;
};

export default UserReducer;
