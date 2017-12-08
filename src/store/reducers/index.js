import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import entities from './entities';

const rootReducer = combineReducers({
  router: routerReducer,
  entities
});

export default rootReducer;
