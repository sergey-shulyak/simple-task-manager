import { connect } from 'react-redux';

import { fetchBoards } from '../store/actions/boards';

import BoardListPage from '../components/boardListPage';

const mapState = ({ entities: { boards }, ui: { errors } }) => ({
  boards: Object.values(boards),
  error: errors.boards
});

const mapDispatch = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards())
});

export default connect(mapState, mapDispatch)(BoardListPage);
