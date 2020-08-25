import { combineReducers } from "redux";

import dreamers from "./dreamers";
import userToken from "./userToken";

const allReducers = combineReducers({
  dreamers,
  userToken,
});
export default allReducers;
