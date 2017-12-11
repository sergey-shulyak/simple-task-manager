import { connect } from 'react-redux';

import { fetchBoard } from '../store/actions/boards';
import { fetchTickets } from '../store/actions/tickets';

import BoardPage from '../components/boardPage';

const mapState = ({ entities: { boards, tickets } }, { match }) => ({
  board: boards[match.params.id],
  tickets: Object.values(tickets)
});

const mapDispatch = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard({ id })),
  fetchTickets: id => dispatch(fetchTickets({ id }))
});

export default connect(mapState, mapDispatch)(BoardPage);
