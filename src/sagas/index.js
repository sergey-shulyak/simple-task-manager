import { fork } from 'redux-saga/effects';
import entities from './entities';
// import modals from './modals';

export default function* rootSaga() {
  yield [
    fork(entities)
    // fork(modals)
  ];
}
