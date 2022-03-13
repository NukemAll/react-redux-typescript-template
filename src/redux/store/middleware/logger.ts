import * as commonTypes from "../common/types";

export default function loggerMiddleware() {
  return (next) => (action) => {

    switch (action.type) {
      case commonTypes.TYPES:

        break;
      default:
        console.log("$$LOGGER ", action);
    }

    return next(action);
  };
}