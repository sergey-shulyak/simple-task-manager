import { combineReducers } from 'redux';

import boards from './boards';
import tickets from './tickets';

export default combineReducers({
  boards,
  tickets
});
