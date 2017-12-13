import * as types from '../../actionTypes/tickets';
import reducer from '../../reducers/tickets';

describe('Tickets reducers', () => {
  const defaultState = {};

  it('Should return empty state by default', () => {
    const expectedState = {};
    const actualState = reducer(defaultState, {});

    expect(actualState).toEqual(expectedState);
  });

  it(`Should return state with tickets on ${types.SAVE_TICKETS_TO_STORE}`, () => {
    const tickets = {
      1: { id: 1 },
      2: { id: 2 },
      3: { id: 3 }
    };

    const action = { type: types.SAVE_TICKETS_TO_STORE, payload: tickets };

    const expectedState = { ...tickets };
    const actualState = reducer(defaultState, action);

    expect(actualState).toEqual(expectedState);
  });

  it(`Should return error on ${types.SAVE_TICKETS_ERROR}`, () => {
    const error = new Error('Unable to fetch tickets');
    const action = {
      type: types.SAVE_TICKETS_ERROR,
      payload: error,
      error: true
    };

    const expectedState = { error: error.message };
    const actualState = reducer(defaultState, action);

    expect(actualState).toEqual(expectedState);
  });
});
