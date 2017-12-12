import { fork } from 'redux-saga/effects';
import boards from './boards';
import tickets from './tickets';

export default function* rootSaga() {
  yield [
    fork(boards),
    fork(tickets)
  ];
}
