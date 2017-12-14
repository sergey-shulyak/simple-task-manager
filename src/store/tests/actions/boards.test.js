import * as types from '../../actionTypes/boards';
import * as actions from '../../actions/boards';

describe('Boards actions', () => {
  it('Should create an action to fetch boards', () => {
    const expectedAction = {
      type: types.FETCH_BOARDS
    };

    const actualAction = actions.fetchBoards();

    expect(actualAction).toEqual(expectedAction);
  });

  it('Should create an action to save boards to store', () => {
    const boards = {
      1: { id: 1 },
      2: { id: 2 },
      3: { id: 3 }
    };

    const incomingPayload = {
      entities: {
        boards
      }
    };

    const expectedAction = {
      type: types.SAVE_BOARDS_TO_STORE,
      payload: boards
    };

    const actualAction = actions.saveBoardsToStore(incomingPayload);

    expect(actualAction).toEqual(expectedAction);
  });

  it('Should create an action to save one board to store', () => {
    const board = { id: 1 };
    const incomingPayload = {
      entities: {
        boards: board
      }
    };

    const expectedAction = {
      type: types.SAVE_BOARDS_TO_STORE,
      payload: board
    };

    const actualAction = actions.saveBoardsToStore(incomingPayload);

    expect(actualAction).toEqual(expectedAction);
  });
});
