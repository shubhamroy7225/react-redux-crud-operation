import {
  getUsers,
  getUsersSuccess,
  getUsersError,
  updateUser,
} from "../actions/UserActions";
import axios from "axios";
export const getAllUsers = () => {
  return (dispatch) => {
    dispatch(getUsers());
    axios(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        dispatch(getUsersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getUsersError(error));
      });
  };
};

