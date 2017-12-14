import { connect } from 'react-redux';

import { fetchBoards } from '../store/actions/boards';
import { fetchTickets } from '../store/actions/tickets';

import BoardPage from '../components/boardPage';

const mapState = ({ entities: { boards, tickets }, ui: { errors } }, { match }) => ({
  board: boards[match.params.id],
  tickets: Object.values(tickets),
  errors
});

const mapDispatch = dispatch => ({
  fetchBoard: id => dispatch(fetchBoards({ id })),
  fetchTickets: id => dispatch(fetchTickets({ id }))
});

export default connect(mapState, mapDispatch)(BoardPage);
