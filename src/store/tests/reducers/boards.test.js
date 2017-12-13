import * as types from '../../actionTypes/boards';
import reducer from '../../reducers/boards';

describe('Boards reducers', () => {
  const defaultState = {};

  it('Should return empty state by default', () => {
    const expectedState = {};
    const actualState = reducer(defaultState, {});

    expect(actualState).toEqual(expectedState);
  });

  it(`Should return state with boards on ${types.SAVE_BOARD_TO_STORE}`, () => {
    const boards = {
      1: { id: 1 },
      2: { id: 2 },
      3: { id: 3 }
    };

    const action = { type: types.SAVE_BOARDS_ERROR, payload: boards };

    const expectedState = { ...boards };
    const actualState = reducer(defaultState, action);

    expect(actualState).toEqual(expectedState);
  });

  it(`Should return error on ${types.SAVE_BOARDS_ERROR}`, () => {
    const error = new Error('Unable to fetch boards');
    const action = {
      type: types.SAVE_BOARDS_ERROR,
      payload: error,
      error: true
    };

    const expectedState = { error: error.message };
    const actualState = reducer(defaultState, action);

    expect(actualState).toEqual(expectedState);
  });
});
