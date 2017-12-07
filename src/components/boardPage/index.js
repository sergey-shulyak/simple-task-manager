import React from 'react';
import PropTypes from 'prop-types';

import Board from './board';

const BoardPage = ({ board, columns, tickets }) => {
  return (
    <div className="board-page">
      <Board className="board-page__board" columns={columns} tickets={tickets} {...board} />
    </div>
  );
};

BoardPage.propTypes = {
  board: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BoardPage;
