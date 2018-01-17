import { connect } from 'react-redux';
import Layout from '../components/layout';

import * as modals from '../store/actions/ui';
import * as boards from '../store/actions/boards';
import * as tickets from '../store/actions/tickets';

const mapState = ({ entities, ui }) => ({
  board: Object.values(entities.boards)[0],
  modals: ui.modals
});

const mapDispatch = dispatch => ({
  hideModal: modalName => dispatch(modals.hideModal(modalName)),
  updateModalData: (modalName, data) => dispatch(modals.updateModalData(modalName, data)),
  createBoard: board => dispatch(boards.createBoard(board)),
  updateBoard: (board, meta) => dispatch(boards.updateBoard(board, meta)),
  deleteBoard: id => dispatch(boards.deleteBoard(id)),
  createTicket: (boardId, data) => dispatch(tickets.createTicket(boardId, data)),
  updateTicket: (boardId, data) => dispatch(tickets.updateTicket(boardId, data)),
  deleteTicket: (boardId, ticketId) => dispatch(tickets.deleteTicket(boardId, ticketId))
});

export default connect(mapState, mapDispatch)(Layout);
