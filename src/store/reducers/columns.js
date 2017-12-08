import { handleActions, combineActions } from 'redux-actions';
import { saveColumnsToStore, saveColumnsError } from '../actions/columns';

const defaultState = {};

const columnsReducer = handleActions({
  [combineActions(saveColumnsToStore, saveColumnsError)](state, { payload, error }) {
    return error ? defaultState : payload;
  }
}, defaultState);

export default columnsReducer;
