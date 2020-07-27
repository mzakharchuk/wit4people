import * as types from "../types";
import categoryAPI from "../api/categoryAPI";
import { dreamers, dreamer } from "./mock";

export function getDreamersType() {
  console.log("start :getDreamType");
  // return (dispatch) => {
  //   return new Promise((resolve, reject) => {
  //     categoryAPI
  //       .get("http://localhost:8899/v1/dream-types?pageNumber=1&pageSize=10") //https://jsonplaceholder.typicode.com/todos/1
  //       .then(({ data }) => {
  //         console.log("getDreamType");
  //         dispatch(loadCategoriesSuccess(data));
  //         resolve(data);
  //       })
  //       .catch((error) => {
  //         throw error;
  //         reject(error);
  //       });
  //   });
  // };

  return (dispatch) => {
    return new Promise((resolve, reject) => {
      console.log("getDreamType");
      dispatch(loadCategoriesSuccess(dreamers));
      resolve(dreamers);
    }).catch((error) => {
      reject(error);
    });
  };

  function loadCategoriesSuccess(dreamers) {
    return { type: types.LOAD_DREAMERS_TYPE_SUCCESS, dreamers };
  }
}

export function getDreamer(id) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      console.log("getDreamType");
      dispatch(loadCategoriesSuccess(dreamer));
      resolve(dreamer);
    }).catch((error) => {
      reject(error);
    });
  };

  function loadCategoriesSuccess(dreamers) {
    return { type: types.LOAD_DREAMERS_TYPE_SUCCESS, dreamers };
  }
}
