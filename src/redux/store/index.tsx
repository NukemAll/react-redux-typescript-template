import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { logger, thunk } from "./middleware/index";

import * as IRedux from "../interface";

import reducerCommon from "./common/reducers";

import { composeWithDevTools } from "@redux-devtools/extension";

const combinedReducers: IRedux.ICombinedReducers = {
  reducerCommon,
}

const rootReducer = combineReducers(combinedReducers);

const configureStore = () => {
  const middlewares = [thunk, logger];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const env = process.env.NODE_ENV.trim();

  return createStore(
    rootReducer,
    (env === "development")
      ? composeWithDevTools(middleWareEnhancer)
      : compose(middleWareEnhancer),
  );
};

export default configureStore;
