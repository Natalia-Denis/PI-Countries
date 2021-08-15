import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from '../reducer';
import thunk from "redux-thunk";

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devTools)
)

export default store;