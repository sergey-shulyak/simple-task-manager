import { handleActions, combineActions } from 'redux-actions';
import { fetchBoardListSuccess, fetchBoardListError } from '../../actions/boardListPage';

const defaultState = { boards: [] };

const reducer = handleActions({
  [combineActions(
    fetchBoardListSuccess,
    fetchBoardListError
  )](state, { payload, error }) {
    return { ...state, boards: error ? [] : payload, error };
  }
}, defaultState);

export default reducer;
