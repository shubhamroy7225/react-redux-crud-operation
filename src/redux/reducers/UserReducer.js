import {
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
} from "../index";
const initialState = {
  isLoading: false,
  user: '',
  IsError: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_USER_SUCCESS:
      return {
        isLoading: false,
        user: action.payload,
        IsError: "",
      };

    case ADD_USER_ERROR:
      return {
        isLoading: false,
        user: [],
        IsError: action.payload,
      };
  
    default:
      return state;
  }
};
export default userReducer;
