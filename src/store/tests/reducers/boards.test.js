import * as types from '../../actionTypes/boards';
import reducer from '../../reducers/boards';

describe('Boards reducer', () => {
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

    const action = { type: types.SAVE_BOARDS_TO_STORE, payload: boards };

    const expectedState = { ...boards };
    const actualState = reducer(defaultState, action);

    expect(actualState).toEqual(expectedState);
  });
});
