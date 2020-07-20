import * as types from "../types";

// export default function categoryReducer(state = [], action) {
//   switch (action.type) {
//     case types.LOAD_CATEGORIES_SUCCESS:
//       return action.categories;
//     // case types.CREATE_CATEGORY_SUCCESS:
//     //   return [...state, action.category]
//     default:
//       return state;
//   }
// }

export default function dreamTypesReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_DREAM_TYPE_SUCCESS:
      return action.dreamsType;
    // case types.CREATE_CATEGORY_SUCCESS:
    //   return [...state, action.category]
    default:
      return state;
  }
}
