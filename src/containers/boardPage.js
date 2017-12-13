import { connect } from 'react-redux';

import { fetchBoards } from '../store/actions/boards';
import { fetchTickets } from '../store/actions/tickets';

import BoardPage from '../components/boardPage';

const mapState = ({ entities: { boards, tickets } }, { match }) => {
  if (boards.error) {
    return { error: boards.error, board: [], tickets: [] };
  } else if (tickets.error) {
    return {
      error: tickets.error,
      board: boards[match.params.id],
      tickets: []
    };
  }

  return {
    board: boards[match.params.id],
    tickets: Object.values(tickets)
  };
};

const mapDispatch = dispatch => ({
  fetchBoards: id => dispatch(fetchBoards({ id })),
  fetchTickets: id => dispatch(fetchTickets({ id }))
});

export default connect(mapState, mapDispatch)(BoardPage);
