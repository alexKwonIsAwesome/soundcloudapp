import { createStore, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import rootReducer from "../reducers/index.js";

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

const configureStore = function (initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
};

export default configureStore;
