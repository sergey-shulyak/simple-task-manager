import { takeEvery, call, put } from 'redux-saga/effects';

import { getBoardList } from '../../api';
import { fetchBoardListSuccess, fetchBoardListError } from '../../store/actions/boardListPage';

import * as actions from '../../store/actionTypes/boardListPage';

function* fetchBoards() {
  try {
    const boardList = yield call(getBoardList);
    yield put(fetchBoardListSuccess(boardList));
  } catch (error) {
    yield put(fetchBoardListError(error));
  }
}

export default function* () {
  yield takeEvery(actions.FETCH_BOARD_LIST, fetchBoards);
}
