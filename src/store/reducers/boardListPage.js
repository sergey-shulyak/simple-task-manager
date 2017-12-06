import { handleActions, combineActions } from 'redux-actions';
import { fetchBoardsSuccess, fetchBoardsError } from '../actions/boardListPage';

const defaultState = { boards: [] };

const reducer = handleActions({
  [combineActions(fetchBoardsSuccess, fetchBoardsError)](state, { payload, error }) {
    return { ...state, boards: error ? [] : payload, error };
  }
}, defaultState);

export default reducer;
