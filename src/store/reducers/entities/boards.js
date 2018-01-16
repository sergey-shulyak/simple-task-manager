import { handleAction } from 'redux-actions';
import { saveBoardsToStore } from '../../actions/boards';

const defaultState = {};

const boardsReducer = handleAction(
  saveBoardsToStore,
  (state, { payload }) => payload || defaultState,
  defaultState
);

export default boardsReducer;
