import logger from "./logger";

/**
 *  https://redux.js.org/usage/writing-logic-thunks
 * 
 *  ...The word "thunk" is a programming term that means 
 *  "a piece of code that does some delayed work".
 * 
 *  "..."thunks" are a pattern of writing functions with logic 
 *  inside that can interact with a Redux store's dispatch and 
 *  getState methods."
 */
import thunk from "redux-thunk";

export {
  logger,
  thunk,
};