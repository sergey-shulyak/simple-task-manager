import { connect } from 'react-redux';
import Layout from '../components/layout';

import * as uiActions from '../store/actions/ui';
import * as boardsActions from '../store/actions/boards';
import * as ticketsActions from '../store/actions/tickets';

const mapState = ({ entities, ui }) => ({
  board: Object.values(entities.boards)[0],
  modals: ui.modals
});

const mapDispatch = dispatch => ({
  hideModal: modalName => dispatch(uiActions.hideModal(modalName)),
  updateModalData: (modalName, data) => dispatch(uiActions.updateModalData(modalName, data)),
  createBoard: board => dispatch(boardsActions.createBoard(board)),
  updateBoard: board => dispatch(boardsActions.updateBoard(board)),
  deleteBoard: id => dispatch(boardsActions.deleteBoard(id)),
  createTicket: (boardId, data) => dispatch(ticketsActions.createTicket(boardId, data)),
  updateTicket: (boardId, data) => dispatch(ticketsActions.updateTicket(boardId, data)),
  deleteTicket: (boardId, ticketId) => dispatch(ticketsActions.deleteTicket(boardId, ticketId))
});

export default connect(mapState, mapDispatch)(Layout);
