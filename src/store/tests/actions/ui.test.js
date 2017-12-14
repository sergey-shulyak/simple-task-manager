import * as types from '../../actionTypes/ui';
import * as actions from '../../actions/ui';

describe('UI actions', () => {
  it('Should create an action to save an error', () => {
    const boardsError = new Error('Unable to fetch boards');

    const expectedAction = {
      type: types.SET_BOARDS_ERROR,
      payload: boardsError,
      error: true
    };

    const actualAction = actions.setBoardsError(boardsError);

    expect(actualAction).toEqual(expectedAction);
  });

  it('Should create an action to save tickets error', () => {
    const error = new Error('Unable to fetch tickets');

    const expectedAction = {
      type: types.SET_TICKETS_ERROR,
      payload: error,
      error: true
    };

    const actualAction = actions.setTicketsError(error);

    expect(actualAction).toEqual(expectedAction);
  });
});
