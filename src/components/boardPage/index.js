import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Board from './board';
import { BOARDS_URL } from '../../utils/urlCreators';

import modalNames from '../modals/modalNames';

import './boardPage.scss';

class BoardPage extends Component {
  componentWillMount() {
    const { fetchBoard, fetchTickets, match } = this.props;

    fetchBoard(match.params.id);
    fetchTickets(match.params.id);
  }

  handleNewTicketButtonClick = (event, props) =>
    props.showModal(modalNames.EDIT_TICKET);

  render() {
    const { board, tickets, showModal } = this.props;

    return (
      <div className="board-page">
        <Link to={BOARDS_URL} className="board-page__back-link">Go back</Link>
        <button
          className="board-page__new-ticket-link"
          onClick={e => this.handleNewTicketButtonClick(e, this.props)}
        >New ticket
        </button>
        <Board
          className="board-page__board"
          tickets={tickets}
          showModal={showModal}
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
  match: PropTypes.shape({ params: PropTypes.object }).isRequired,
  showModal: PropTypes.func.isRequired
};

BoardPage.defaultProps = {
  board: {},
  tickets: []
};

export default BoardPage;
