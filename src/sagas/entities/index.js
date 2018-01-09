import { fork } from 'redux-saga/effects';

import boards from './boards';
import tickets from './tickets';

export default function* entities() {
  yield [
    fork(boards),
    fork(tickets)
  ];
}
