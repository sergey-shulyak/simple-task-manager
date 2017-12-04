import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const INITIAL_STATE = {};

/* eslint-disable no-underscore-dangle */
const store = createStore(combineReducers({
  routing: routerReducer
}), INITIAL_STATE, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

export default store;
