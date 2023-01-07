import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const bindMiddleware = (middlewares: any[]) => {
  const { composeWithDevTools } = require("redux-devtools-extension");
  return composeWithDevTools(applyMiddleware(...middlewares));
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, {}, bindMiddleware([sagaMiddleware]));
sagaMiddleware.run(rootSaga);

export default store;
