import {ADD_USERS,ADD_USERS_SUCCESS,ADD_USERS_ERROR,ADD_USER,UPDATE_USER,DELETE_USER_SUCCESS} from "../index"
export const addUsers = () => {
    return {
      type: ADD_USERS,
    };
  };
  export const addUsersSuccess = (users) => {
    return {
      type: ADD_USERS_SUCCESS,
      payload: users,
    };
  };
  export const addUsersError = (error) => {
    return {
      type: ADD_USERS_ERROR,
      payload: error,
    };
  };
  export const addUserSuccess = (user) => {
    return {
      type: ADD_USER,
      payload: user,
    };
  };
  
  export const updateUser = (data) => {
    return {
      type: UPDATE_USER,
      payload: data,
    };
  };

  export const deleteUserData = (id) => {
    return {
      type: DELETE_USER_SUCCESS,
      payload: id,
    };
  };