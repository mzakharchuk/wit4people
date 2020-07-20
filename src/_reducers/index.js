import { combineReducers } from "redux";

import categories from "./category";

const allReducers = combineReducers({
  categories,
});
export default allReducers;
