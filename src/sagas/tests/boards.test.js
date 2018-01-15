import { put, call } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { fetchBoardsSaga } from '../entities/boards';
import { getBoards, getBoard } from '../../api/boards';
import * as types from '../../store/actionTypes/boards';
import { SET_BOARDS_ERROR } from '../../store/actionTypes/ui';
import { boardListSchema, boardSchema } from '../../store/schema';

import * as toasts from '../utils';

describe('Boards sagas', () => {
  it('Should fetch boards and save them on no payload', () => {
    const boards = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ];
    const data = normalize(boards, boardListSchema);
    const action = { type: types.FETCH_BOARDS };

    const expectedResults = {
      callGetBoards: call(getBoards),
      putSaveBoards: put({ type: types.SAVE_BOARDS_TO_STORE, payload: data.entities.boards })
    };

    const saga = fetchBoardsSaga(action);

    expect(saga.next().value).toEqual(expectedResults.callGetBoards);
    expect(saga.next(data).value).toEqual(expectedResults.putSaveBoards);
    expect(saga.next().done).toBe(true);
  });

  it('Should fetch one board and save it on payload provided', () => {
    const id = 42;

    const board = {
      id
    };

    const data = normalize(board, boardSchema);
    const action = { type: types.FETCH_BOARDS, payload: { id } };

    const expectedResults = {
      callGetBoard: call(getBoard, id),
      putSaveBoards: put({ type: types.SAVE_BOARDS_TO_STORE, payload: data.entities.boards })
    };

    const saga = fetchBoardsSaga(action);

    expect(saga.next().value).toEqual(expectedResults.callGetBoard);
    expect(saga.next(data).value).toEqual(expectedResults.putSaveBoards);
    expect(saga.next().done).toBe(true);
  });

  it('Should save error', () => {
    const action = { type: types.FETCH_BOARDS };

    const expectedResults = {
      callGetBoards: call(getBoards),
      putSetError: put({
        type: SET_BOARDS_ERROR,
        payload: expect.any(String)
      }),
      callShowErrorToast: call(toasts.showErrorToast, expect.any(String), expect.any(Error))
    };

    const saga = fetchBoardsSaga(action);

    expect(saga.next().value).toEqual(expectedResults.callGetBoards);
    expect(saga.next().value).toMatchObject(expectedResults.putSetError);
    expect(saga.next().value).toMatchObject(expectedResults.callShowErrorToast);
    expect(saga.next().done).toBe(true);
  });
});
