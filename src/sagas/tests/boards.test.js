import { put, call } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { fetchBoards } from '../boards';
import { getBoards, getBoard } from '../../api/boards';
import * as types from '../../store/actionTypes/boards';
import { boardListSchema, boardSchema } from '../../store/schema';

describe('Boards sagas', () => {
  it('Should call getBoards on no payload', () => {
    const boards = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ];
    const { entities } = normalize(boards, boardListSchema);
    const action = { type: types.FETCH_BOARDS };

    const expectedResults = {
      callGetBoards: call(getBoards),
      putSaveBoards: put({ type: types.SAVE_BOARDS_TO_STORE, payload: entities.boards })
    };

    const saga = fetchBoards(action);

    expect(saga.next().value).toEqual(expectedResults.callGetBoards);
    expect(saga.next(boards).value).toEqual(expectedResults.putSaveBoards);
    expect(saga.next().done).toBe(true);
  });

  it('Should fetch one board and save it on payload provided', () => {
    const id = 42;

    const board = {
      id
    };

    const { entities } = normalize(board, boardSchema);
    const action = { type: types.FETCH_BOARDS, payload: { id } };

    const expectedResults = {
      callGetBoard: call(getBoard, id),
      putSaveBoards: put({ type: types.SAVE_BOARDS_TO_STORE, payload: entities.boards })
    };

    const saga = fetchBoards(action);

    expect(saga.next().value).toEqual(expectedResults.callGetBoard);
    expect(saga.next(board).value).toEqual(expectedResults.putSaveBoards);
    expect(saga.next().done).toBe(true);
  });

  it('Should save error', () => {
    const action = { type: types.FETCH_BOARDS };

    const expectedError = new Error('Unexpected input given to normalize. Expected type to be "object", found "undefined".');
    const expectedResults = {
      callGetBoards: call(getBoards),
      putSaveError: put({
        type: types.SAVE_BOARDS_ERROR,
        error: true,
        payload: expectedError
      })
    };

    const saga = fetchBoards(action);

    expect(saga.next().value).toEqual(expectedResults.callGetBoards);
    expect(saga.next().value).toEqual(expectedResults.putSaveError);
    expect(saga.next().done).toBe(true);
  });
});
