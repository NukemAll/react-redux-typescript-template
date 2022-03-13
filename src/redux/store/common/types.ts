const reduxStoreTypePrefix = "Common";

export const TYPES = {
  SetRandomNumber: reduxStoreTypePrefix.concat(".SetRandomNumber"),
}

export interface IAction {
  type: string;
  payload: any;
}

// state
export interface ICommonState {
  randomNumber: number;
}

// actions
export interface ICommonActions {
  setRandomNumber: (randomNumber: number) => void
}
