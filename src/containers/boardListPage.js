import { connect } from 'react-redux';

import { fetchBoards } from '../store/actions/boardListPage';

import BoardListPage from '../components/boardListPage';

const mapState = ({ boards }) => ({ boards: boards.boards });

const mapDispatch = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards())
});

export default connect(mapState, mapDispatch)(BoardListPage);
