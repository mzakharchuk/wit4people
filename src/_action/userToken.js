import * as types from "../types";

export function signIn(id) {
  console.log("signIn");
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(setUserTokenSuccess("test"));
      resolve("test");
    }).catch((error) => {
      reject(error);
    });
  };

  function setUserTokenSuccess(usertoken) {
    console.log("loadCategoriesSuccess");
    return { type: types.USER_TOKEN_SUCCESS, usertoken };
  }
}

export function logOut(id) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(logOutSuccess());
      resolve(dreamer);
    }).catch((error) => {
      reject(error);
    });
  };

  function logOutSuccess() {
    return { type: types.USER_TOKEN_LOG_OUT_SUCCESS };
  }
}
