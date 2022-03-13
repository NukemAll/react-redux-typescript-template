import { Component } from "react";
// import logo from "../images/logo.svg";

import { connect } from "react-redux";
import * as IRedux from "../redux/interface";

import * as NumberProcessing from "../controller/numberProcessing/index";

interface IProps extends IRedux.IPropsRedux { }

interface IState { }

/**
 * entry point
 * 
 */
class App extends Component<IProps, IState> {

  constructor(props) {
    super(props);

    this.state = {};

  }


  //
  // render
  //
  public render() {
    const randomNumberFromReduxStore = this.props.reduxStateCommon.randomNumber;
    const randomNumber = NumberProcessing.getRandomNumber(100, 1);

    return (
      <div>
        <div
          style={{
            paddingTop: "10%",
            textAlign: "center"
          }}
        >
          {randomNumberFromReduxStore}
        </div>
        <div
          style={{
            paddingTop: 20,
            textAlign: "center"
          }}
        >
          <button
            onClick={(e) => {
              this.props.reduxActionsCommon.setRandomNumber(randomNumber)
            }}
          >
            {"set random number"}
          </button>
        </div>
      </div>
    );
  }
}

export default connect(IRedux.mapStateToProps, IRedux.mapDispatchToProps)(App);
