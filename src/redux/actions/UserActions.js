import { ADD_USER, ADD_USER_SUCCESS, ADD_USER_ERROR} from "../index";
export const getUser = () => {
  return {
    type: ADD_USER,
  };
};
export const getUserSuccess = (user) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: user,
  };
};
export const getUserError = (error) => {
  return {
    type: ADD_USER_ERROR,
    payload: error,
  };
};
