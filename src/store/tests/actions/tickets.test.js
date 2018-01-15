import * as types from '../../actionTypes/tickets';
import * as actions from '../../actions/tickets';

describe('Tickets actions', () => {
  it('Should create an action to fetch tickets', () => {
    const boardId = 42;

    const expectedAction = {
      type: types.FETCH_TICKETS,
      payload: { id: boardId }
    };

    const actualAction = actions.fetchTickets(boardId);

    expect(actualAction).toEqual(expectedAction);
  });

  it('Should create an action to save tickets to store', () => {
    const tickets = {
      1: { id: 1 },
      2: { id: 2 },
      3: { id: 3 }
    };

    const incomingPayload = {
      entities: {
        tickets
      }
    };

    const expectedAction = {
      type: types.SAVE_TICKETS_TO_STORE,
      payload: tickets
    };

    const actualAction = actions.saveTicketsToStore(incomingPayload);

    expect(actualAction).toEqual(expectedAction);
  });
});
