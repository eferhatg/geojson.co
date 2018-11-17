import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./logic";
import logger from "redux-logger";

const initialState = {  

};

const middleware = [thunk, logger];
const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}


const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )


const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;

