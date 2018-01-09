import { connect } from 'react-redux';

import { fetchBoards } from '../store/actions/boards';
import { showEditBoardModal, showDeleteBoardModal } from '../store/actions/ui';

import BoardListPage from '../components/boardListPage';

const mapState = state => ({
  boards: Object.values(state.entities.boards),
  error: state.ui.errors.boards
});

const mapDispatch = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards()),
  showEditBoardModal: data => dispatch(showEditBoardModal(data)),
  showDeleteBoardModal: data => dispatch(showDeleteBoardModal(data))
});

export default connect(mapState, mapDispatch)(BoardListPage);
