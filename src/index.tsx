import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css';
import App from "./views/index";

import { Provider } from "react-redux";
import configureStore from "./redux/store/index";

const store = configureStore();

interface IComponentError {
  hasError: boolean;
  error: any;
  info: any;
}

/**
 *  https://reactjs.org/docs/error-boundaries.html
 * 
 *  "...catch JavaScript errors anywhere in their child component tree, 
 *  log those errors, and display a fallback UI..."
 */
class ErrorBoundary extends React.Component<{}, IComponentError> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: {}, info: {} };
  }

  public componentDidCatch(error: any, info: any) {
    // Display fallback UI
    this.setState({ hasError: true, error, info });
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
    //console.log("ERROR", error)
    //console.log("INFO ", info)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <section>
          <h1>Sorry, something went wrong.</h1>
          <br />
          <h5>{"Got Error:"}</h5>
          <pre>{this.state.error.message}</pre>
          <br />
          <h5>{"Information:"}</h5>
          <pre>{this.state.info.componentStack}</pre>
        </section>
      );
    } else {
      return this.props.children || null;
    }
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
