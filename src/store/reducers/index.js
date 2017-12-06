import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import boardListPageReducer from './boards';

const rootReducer = combineReducers({
  router: routerReducer,
  boards: boardListPageReducer
});

export default rootReducer;
