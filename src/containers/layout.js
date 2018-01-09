import { connect } from 'react-redux';
import Layout from '../components/layout';

import * as uiActions from '../store/actions/ui';
import * as boardsActions from '../store/actions/boards';

const mapState = ({ ui }) => ({
  modals: ui.modals
});

const mapDispatch = dispatch => ({
  closeNewBoardModal: () => dispatch(uiActions.hideNewBoardModal()),
  updateNewBoardModalData: event => dispatch(uiActions.updateNewBoardModalData(event)),
  closeDeleteBoardModal: () => dispatch(uiActions.hideDeleteBoardModal()),
  createBoard: board => dispatch(boardsActions.createBoard(board)),
  updateBoard: board => dispatch(boardsActions.updateBoard(board)),
  deleteBoard: id => dispatch(boardsActions.deleteBoard(id))
});

export default connect(mapState, mapDispatch)(Layout);
