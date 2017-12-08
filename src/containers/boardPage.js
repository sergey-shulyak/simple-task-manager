import { connect } from 'react-redux';

import { fetchBoard } from '../store/actions/boards';
import { fetchColumns } from '../store/actions/columns';
import { fetchTickets } from '../store/actions/tickets';

import BoardPage from '../components/boardPage';

// const getColumnsForBoard = (entities, id) => {
//   const columnIds = entities.boards[id].columns;
//   console.log('column ids: ', columnIds);
//   console.log('columns', Object.values(entities.columns));
//   return Object.values(entities.columns)
//     .filter(column => columnIds.includes(column.id));
// };

// const getTicketsForBoard = (entities, id) => {
//   const ticketIds = [].concat(getColumnsForBoard(entities, id).map(column => column.tickets));
//   return Object.values(entities.tickets)
//     .filter(ticket => ticketIds.includes(ticket.id));
// };

const mapState = ({ entities: { boards, columns, tickets } }, { match }) => ({
  board: boards[match.params.id],
  columns: Object.values(columns),
  tickets: Object.values(tickets)
});

const mapDispatch = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard({ id })),
  fetchColumns: id => dispatch(fetchColumns({ id })),
  fetchTickets: id => dispatch(fetchTickets({ id }))
});

export default connect(mapState, mapDispatch)(BoardPage);
