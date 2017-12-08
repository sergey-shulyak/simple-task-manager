import { connect } from 'react-redux';

import { fetchBoards } from '../store/actions/boards';

import BoardListPage from '../components/boardListPage';

const mapState = ({ entities: { boards } }) => ({ boards: Object.values(boards) });

const mapDispatch = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards())
});

export default connect(mapState, mapDispatch)(BoardListPage);
