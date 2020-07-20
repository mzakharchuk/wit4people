import { createStore, compose, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "../_reducers";

const middlewares = [ReduxThunk];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

export default store;
