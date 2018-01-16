import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../base';

import './delete.scss';

const DeleteModal = props => (
  <Modal
    className="delete-modal"
    title={props.title}
    isShown={props.isShown}
    handleClose={props.handleClose}
    content={
      <div>
        <p className="delete-modal__message">Are you sure you want to delete
          <span className="delete-modal__accent"> {props.data.title}</span>?
        </p>
        <div className="delete-modal__button-container">
          <button
            className="delete-modal__button delete-modal__button_yes"
            onClick={event => props.handleDelete(event, props)}> Yes
          </button>
          <button
            className="delete-modal__button"
            onClick={props.handleClose}>No
          </button>
        </div>
      </div>
    }
  />
);

DeleteModal.propTypes = {
  title: PropTypes.string.isRequired,
  isShown: PropTypes.bool,
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  }),
  handleDelete: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
};

DeleteModal.defaultProps = {
  isShown: false,
  data: {}
};

export default DeleteModal;
