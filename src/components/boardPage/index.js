import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import Board from './board';
import { boardsUrl } from '../../utils/urlCreators';

import './boardPage.scss';

class BoardPage extends Component {
  componentWillMount() {
    const { board, fetchBoard, fetchTickets, match } = this.props;

    if (isEmpty(board)) {
      fetchBoard(match.params.id);
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
          tickets={tickets}
          {...board}
        />
      </div>
    );
  }
}

BoardPage.propTypes = {
  board: PropTypes.shape({ title: PropTypes.string }),
  columns: PropTypes.arrayOf(PropTypes.object),
  tickets: PropTypes.arrayOf(PropTypes.object),
  fetchBoard: PropTypes.func.isRequired,
  fetchTickets: PropTypes.func.isRequired,
  match: PropTypes.shape({ params: PropTypes.object }).isRequired
};

BoardPage.defaultProps = {
  board: {},
  columns: [],
  tickets: []
};

export default BoardPage;
