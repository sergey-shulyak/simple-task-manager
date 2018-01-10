import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../base';

import './deleteBoard.scss';

const handleDelete = (event, props) => {
  event.preventDefault();

  props.deleteBoard(props.data.id);
};

const DeleteBoardModal = props => (
  <Modal
    className="delete-board"
    title="Delete Board"
    isShown={props.isShown}
    handleClose={props.handleClose}
    content={
      <div>
        <p className="delete-board__message">Are you sure you want to
          <span className="delete-board__accent"> delete {props.data.title}</span>?
        </p>
        <div className="delete-board__button-container">
          <button
            className="delete-board__button delete-board__button_yes"
            onClick={event => handleDelete(event, props)}> Yes
          </button>
          <button
            className="delete-board__button delete-board__button_no"
            onClick={props.handleClose}>No
          </button>
        </div>
      </div>
    }
  />
);

DeleteBoardModal.propTypes = {
  isShown: PropTypes.bool,
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  }),
  deleteBoard: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
};

DeleteBoardModal.defaultProps = {
  isShown: false,
  data: {}
};

export default DeleteBoardModal;
