// import { takeEvery, call, put } from 'redux-saga/effects';

// import { createBoard } from '../../api/boards';
// import { hideNewBoardModal, setBoardsError } from '../../store/actions/ui';
// import { fetchBoards } from '../../store/actions/boards';

// import * as actions from '../../store/actionTypes/ui';

// export function* submitBoard({ payload = {} }) {
//   try {
//     yield call(createBoard, payload);

//     yield put(hideNewBoardModal());
//     yield put(fetchBoards());
//   } catch (error) {
//     // TODO: Add some toast
//     yield put(setBoardsError(error));
//   }
// }

// export default function* () {
//   yield takeEvery(actions.CREATE_BOARD, submitBoard);
// }
