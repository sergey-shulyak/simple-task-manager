import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';

import Board from './board';

class BoardPage extends Component {
  componentWillMount() {
    const { board, fetchBoard, fetchColumns, fetchTickets, match } = this.props;
    if (!board) {
      fetchBoard(match.params.id);
    }

    fetchColumns(match.params.id);
    fetchTickets(match.params.id);
  }

  render() {
    const { board, columns, tickets, match } = this.props;

    return (
      <div className="board-page">
        <Board
          className="board-page__board"
          columns={columns}
          tickets={tickets}
          match={match}
          {...omit(board, 'columns', 'tickets')}
        />
      </div>
    );
  }
}

BoardPage.propTypes = {
  board: PropTypes.shape({ title: PropTypes.string }).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchBoard: PropTypes.func.isRequired,
  fetchColumns: PropTypes.func.isRequired,
  fetchTickets: PropTypes.func.isRequired,
  match: PropTypes.shape({ params: PropTypes.object }).isRequired
};

export default BoardPage;
