import { handleActions, combineActions } from 'redux-actions';
import * as actions from '../actions/boards';

const defaultState = {};

const boardsReducer = handleActions({
  [combineActions(actions.saveBoardsToStore, actions.saveBoardsError)](state, { payload, error }) {
    return error
      ? { error: payload.message }
      : payload || defaultState;
  }
}, defaultState);

export default boardsReducer;
