import React from 'react';
import PropTypes from 'prop-types';

import Modal from './base';

const handleDelete = (event, props) => {
  event.preventDefault();

  props.deleteBoard(props.data.id);
};

const DeleteBoardModal = props => (
  <Modal
    title="Delete Board"
    isShown={props.isShown}
    handleClose={props.handleClose}
    content={
      <div>
        <p>Are you sure you want to delete {props.data.title}</p>
        <button name="yes" onClick={event => handleDelete(event, props)}>
          Yes
        </button>
        <button name="no" onClick={props.handleClose}>No</button>
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
