import * as types from "../types";

export default function userTokenReducer(state = [], action) {
  console.log("userTokenReducer", state, action);
  switch (action.type) {
    case types.USER_TOKEN_SUCCESS:
      return action.usertoken;
    case types.USER_TOKEN_LOG_OUT_SUCCESS:
      return null;
    // case types.CREATE_CATEGORY_SUCCESS:
    //   return [...state, action.category]
    default:
      return state;
  }
}
