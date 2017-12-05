import { connect } from 'react-redux';
import { fetchBoardList } from '../../store/actions/boardListPage';
import BoardListPage from '../../components/boardListPage';

const mapState = ({ boards }) => ({ boardList: boards.boards });

const mapDispatch = dispatch => ({
  fetchBoardList: () => dispatch(fetchBoardList())
});

export default connect(mapState, mapDispatch)(BoardListPage);
