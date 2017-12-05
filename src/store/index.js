import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
/* eslint-disable import/no-extraneous-dependencies */
import { composeWithDevTools } from 'redux-devtools-extension';
/* eslint-enable */

import rootReducer from './reducers';
import rootSaga from '../sagas';

const INITIAL_STATE = {};

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
/* eslint-enable */

sagaMiddleware.run(rootSaga);

export default store;
