import {
  ADD_USERS,
  ADD_USERS_SUCCESS,
  ADD_USERS_ERROR,
  UPDATE_USER,
  DELETE_USER_SUCCESS,
} from "../index";
const initialState = {
  isLoading: false,
  users: [],
  IsError: "",
};
let newArray = [];
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_USERS_SUCCESS:
      newArray.push(action.payload);
      return {
        isLoading: false,
        users: newArray,
        IsError: "",
      };

    case ADD_USERS_ERROR:
      return {
        isLoading: false,
        users: [],
        IsError: "",
      };
    case UPDATE_USER:
      let elementsIndex = state.users.findIndex(
        (item) => item.id === action.payload.id
      );
      let array = [...state.users];
      array[elementsIndex] = action.payload;
      return {
        users: array,
      };
      case DELETE_USER_SUCCESS:
        let Index = state.users.findIndex(
          (item) => item.id === action.payload
        );
        let arrayData = [...state.users];
        arrayData.splice(Index, 1);
        return{
          users:arrayData
        }
  
    default:
      return state;
  }
};
export default usersReducer;
