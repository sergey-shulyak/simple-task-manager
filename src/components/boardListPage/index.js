import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BoardList from './boardList';
import Board from './boardList/board';

const mapBoardToListElement = boardList =>
  boardList.map(board => <Board key={board.id} {...board} />);

class BoardListPage extends Component {
  componentDidMount() {
    this.props.fetchBoardList();
  }

  render() {
    const { boardList } = this.props;
    return (
      <div className="board-list-page">
        <BoardList>
          {mapBoardToListElement(boardList)}
        </BoardList>
      </div>
    );
  }
}

BoardListPage.propTypes = {
  boardList: PropTypes.arrayOf(PropTypes.object),
  fetchBoardList: PropTypes.func.isRequired
};

BoardListPage.defaultProps = {
  boardList: []
};

export default BoardListPage;
