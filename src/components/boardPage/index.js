import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import { Link } from 'react-router-dom';

import Board from './board';
import { boardsUrl } from '../../utils/urlCreators';

import './boardPage.scss';

class BoardPage extends Component {
  componentWillMount() {
    const { board, fetchBoard, fetchTickets } = this.props;
    if (!board) {
      fetchBoard(board.id);
    }

    fetchTickets(board.id);
  }

  render() {
    const { board, tickets } = this.props;

    return (
      <div className="board-page">
        <Link to={boardsUrl()} className="link-button board-page__back-link">Go back</Link>
        <Board
          className="board-page__board"
          columns={board.columns}
          tickets={tickets}
          {...omit(board, 'columns', 'tickets')}
        />
      </div>
    );
  }
}

BoardPage.propTypes = {
  board: PropTypes.shape({ title: PropTypes.string }).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object),
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchBoard: PropTypes.func.isRequired,
  fetchTickets: PropTypes.func.isRequired
};

BoardPage.defaultProps = {
  columns: []
};

export default BoardPage;
