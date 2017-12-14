import { fork } from 'redux-saga/effects';
import entities from './entities';

export default function* rootSaga() {
  yield [
    fork(entities)
  ];
}
