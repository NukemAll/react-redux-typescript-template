import { bindActionCreators } from "redux";

// actions
import * as ReduxActionsCommon from "./store/common/actions";

// types and interfaces
import * as ReduxTypesCommon from "./store/common/types";


// interface to extend component props
export interface IPropsRedux extends IActionsRedux, IStateRedux { }

// redux configure store 
export interface ICombinedReducers {
  reducerCommon: any;
}

// redux states 
export interface IStateRedux {
  reduxStateCommon: ReduxTypesCommon.ICommonState
}

// redux actions
export interface IActionsRedux {
  reduxActionsCommon: ReduxTypesCommon.ICommonActions
}

// interface for redux connect function -> states
export const mapStateToProps = (state: ICombinedReducers): IStateRedux => {
  return {
    reduxStateCommon: state.reducerCommon
  };
};

// interface for redux connect function -> actions
export const mapDispatchToProps = (dispatch): IActionsRedux => {
  return {
    reduxActionsCommon: bindActionCreators(ReduxActionsCommon, dispatch),
  };
};
