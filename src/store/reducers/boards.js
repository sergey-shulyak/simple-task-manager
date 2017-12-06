import { handleActions, combineActions } from 'redux-actions';
import { saveBoardsToStore, saveBoardsError } from '../actions/boards';

const defaultState = [];

const boardsReducer = handleActions({
  [combineActions(saveBoardsToStore, saveBoardsError)](state, { payload, error }) {
    return error ? defaultState : payload;
  }
}, defaultState);

export default boardsReducer;
