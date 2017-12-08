import { takeEvery, call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { getColumns } from '../api/columns';
import { columnsSchema } from '../store/schema';
import { saveColumnsToStore } from '../store/actions/columns';

import * as actions from '../store/actionTypes/columns';

function* fetchColumns({ payload: { id } }) {
  const columns = yield call(getColumns, id);
  yield put(saveColumnsToStore(normalize(columns, columnsSchema)));
}

export default function* () {
  yield takeEvery(actions.FETCH_COLUMNS, fetchColumns);
}
