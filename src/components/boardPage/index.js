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
        <Link to={boardsUrl()} className="board-page__back-link">Go back</Link>
        <a
          className="board-page__new-ticket-link"
          onClick={e => this.handleNewTicketButtonClick(e, this.props)}
        >New ticket
        </a>
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
  tickets: PropTypes.arrayOf(PropTypes.object),
  fetchBoard: PropTypes.func.isRequired,
  fetchTickets: PropTypes.func.isRequired,
  match: PropTypes.shape({ params: PropTypes.object }).isRequired
};

BoardPage.defaultProps = {
  board: {},
  tickets: []
};

export default BoardPage;
