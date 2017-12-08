import { handleActions, combineActions } from 'redux-actions';
import * as actions from '../actions/boards';

const defaultState = {};

const boardsReducer = handleActions({
  [combineActions(actions.saveBoardsToStore, actions.saveBoardsError)](state, { payload, error }) {
    return error ? defaultState : payload;
  },
  [actions.saveBoardToStore](state, { payload }) {
    return payload || defaultState;
  }
}, defaultState);

export default boardsReducer;
