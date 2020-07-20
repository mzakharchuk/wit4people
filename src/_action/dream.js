import * as types from "../types";
import categoryAPI from "../api/categoryAPI";

// export function loadCategories() {
//   return (dispatch) => {
//     return new Promise((resolve, reject) => {
//       categoryAPI
//         .get("/categoryAll")
//         .then(({ data }) => {
//           dispatch(loadCategoriesSuccess(data));
//           resolve(data);
//         })
//         .catch((error) => {
//           throw error;
//           reject(error);
//         });
//     });
//   };

//   function loadCategoriesSuccess(categories) {
//     return { type: types.LOAD_CATEGORIES_SUCCESS, categories };
//   }
// }

export function getDreamType() {
  console.log("start :getDreamType");
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      categoryAPI
        .get("http://localhost:8899/v1/dream-types?pageNumber=1&pageSize=10") //https://jsonplaceholder.typicode.com/todos/1
        .then(({ data }) => {
          console.log("getDreamType");
          dispatch(loadCategoriesSuccess(data));
          resolve(data);
        })
        .catch((error) => {
          throw error;
          reject(error);
        });
    });
  };

  function loadCategoriesSuccess(dreamsType) {
    return { type: types.LOAD_DREAM_TYPE_SUCCESS, dreamsType };
  }
}
