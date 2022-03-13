import {
  TYPES,
  ICommonActions
} from "./types";

export const setRandomNumber = (randomNumber: number) => {
  return (dispatch) => {

    dispatch({
      type: TYPES.SetRandomNumber,
      payload: randomNumber,
    });

  };
}
