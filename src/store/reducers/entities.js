import { combineReducers } from 'redux';

import boards from './boards';
import columns from './columns';
import tickets from './tickets';

export default combineReducers({
  boards,
  columns,
  tickets
});
