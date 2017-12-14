import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './ui';
import entities from './entities';

const rootReducer = combineReducers({
  router: routerReducer,
  ui,
  entities
});

export default rootReducer;
