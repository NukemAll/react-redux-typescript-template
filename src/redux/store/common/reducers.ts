import { handleActions } from "redux-actions";

import * as NumberProcessing from "../../../controller/numberProcessing/index";

import {
  TYPES,
  ICommonState,
  IAction,
} from "./types";

const initialState: ICommonState = {
  randomNumber: NumberProcessing.getRandomNumber(100, 1),
};

export default handleActions({
  [TYPES.SetRandomNumber]: (state: ICommonState, action: IAction): ICommonState => {
    return { ...state, randomNumber: action.payload };
  },

}, initialState);
