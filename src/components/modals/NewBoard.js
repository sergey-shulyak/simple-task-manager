import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'form-serialize';

import Modal from './base';

const handleSubmit = (event, createBoard) => {
  event.preventDefault();

  const formData = serialize(event.target, { hash: true });
  createBoard(formData);
};

const NewBoardModal = props => (
  <Modal
    title="New Board"
    isShown={props.isShown}
    handleClose={props.handleClose}
    content={
      <form onSubmit={event => handleSubmit(event, props.createBoard)} method="POST">
        <label htmlFor="title"><p>Title:</p></label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Type some title"
          value={props.data.title}
          onChange={props.handleChange} />

        <label htmlFor="description"><p>Description:</p></label>
        <input
          id="description"
          name="description"
          type="text"
          placeholder="Type some description"
          value={props.data.description}
          onChange={props.handleChange} />

        <p><input id="submit" type="submit" value="Save" /></p>
      </form>}
  />
);

NewBoardModal.propTypes = {
  isShown: PropTypes.bool,
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  }),
  handleClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  createBoard: PropTypes.func.isRequired
};

NewBoardModal.defaultProps = {
  isShown: false,
  data: {}
};

export default NewBoardModal;
