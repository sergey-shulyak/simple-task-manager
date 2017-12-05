import { fork } from 'redux-saga/effects';
import boardListPage from './boardListPage';

export default function* rootSaga() {
  yield [
    fork(boardListPage)
  ];
}
