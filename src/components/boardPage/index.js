import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import omit from 'lodash/omit';

import Board from './board';
import { boardsUrl } from '../../utils/urlCreators';

import './boardPage.scss';

class BoardPage extends Component {
  componentWillMount() {
    const { board, fetchBoards, fetchTickets, match } = this.props;

    if (isEmpty(board)) {
      fetchBoards(match.params.id);
    }

    fetchTickets(match.params.id);
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
  board: PropTypes.shape({ title: PropTypes.string }),
  columns: PropTypes.arrayOf(PropTypes.object),
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchBoards: PropTypes.func.isRequired,
  fetchTickets: PropTypes.func.isRequired,
  match: PropTypes.shape({ params: PropTypes.object }).isRequired
};

BoardPage.defaultProps = {
  board: {},
  columns: []
};

export default BoardPage;
