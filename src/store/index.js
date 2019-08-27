import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from 'redux-promise';

export function configureStore( initialState = {} ) {
  const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhances( applyMiddleware( thunk, promiseMiddleware ))
  );

  return store;
}