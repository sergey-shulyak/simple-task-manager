import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
/* eslint-disable import/no-extraneous-dependencies */
import { composeWithDevTools } from 'redux-devtools-extension';
/* eslint-enable */

import rootReducer from './reducers';
import rootSaga from '../sagas';

const INITIAL_STATE = {};

export const history = createHistory();
const router = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(router, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
