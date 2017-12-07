import { fork } from 'redux-saga/effects';
import boards from './boards';

export default function* rootSaga() {
  yield [
    fork(boards)
  ];
}
