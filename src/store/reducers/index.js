import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import boardListPageReducer from './boardListPage';

const rootReducer = combineReducers({
  router: routerReducer,
  boards: boardListPageReducer
});

export default rootReducer;
