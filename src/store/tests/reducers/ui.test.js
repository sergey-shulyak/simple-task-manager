import * as types from '../../actionTypes/ui';
import reducer from '../../reducers/ui';

describe('UI reducer', () => {
  const defaultState = {};

  it(`Should return error on ${types.SET_BOARDS_ERROR}`, () => {
    const error = new Error('Unable to fetch boards');
    const action = {
      type: types.SET_BOARDS_ERROR,
      payload: error,
      error: true
    };

    const expectedState = { errors: { boards: error.message } };
    const actualState = reducer(defaultState, action);

    expect(actualState).toEqual(expectedState);
  });


  it(`Should return error on ${types.SET_TICKETS_ERROR}`, () => {
    const error = new Error('Unable to fetch tickets');
    const action = {
      type: types.SET_TICKETS_ERROR,
      payload: error,
      error: true
    };

    const expectedState = { errors: { tickets: error.message } };
    const actualState = reducer(defaultState, action);

    expect(actualState).toEqual(expectedState);
  });
});
