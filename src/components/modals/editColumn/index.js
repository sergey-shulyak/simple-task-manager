import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'form-serialize';

import Modal from '../base';

import modalNames from '../modalNames';

import './editColumn.scss';

const splice = (arr, start, deleteCount, ...items) => [
  ...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount)
];

const handleSubmit = (event, props) => {
  event.preventDefault();

  const { id, boardId, columns, isNew = false } = props.data;
  const formData = serialize(event.target, { hash: true });

  const existingColumn = columns.find(column =>
    column.id === id);
  const columnIndex = columns.indexOf(existingColumn);

  const newColumns = existingColumn
    ? splice(columns, columnIndex, 1, { ...existingColumn, ...formData })
    : [...columns, { id, ...formData }];

  props.updateBoard({
    id: boardId,
    columns: newColumns
  }, { onlyColumns: true, isNew, columnTitle: formData.title });
};

const handleChange = (event, props) => {
  const data = { [event.target.name]: event.target.value };
  props.handleChange(modalNames.EDIT_COLUMN, data);
};

const EditColumnModal = props => (
  <Modal
    className="edit-column"
    title={props.isEdit ? `Edit ${props.data.title}` : 'New Column'}
    isShown={props.isShown}
    handleClose={() => props.handleClose(modalNames.EDIT_COLUMN)}
    content={
      <form onSubmit={event => handleSubmit(event, props)} method="POST">
        <label htmlFor="title" className="edit-column__label">Title</label>
        <input
          className="edit-column__input"
          id="title"
          name="title"
          type="text"
          placeholder="Type some title"
          defaultValue={props.data.title}
          onChange={event => handleChange(event, props)} />

        <input
          className="edit-column__submit"
          id="submit"
          type="submit"
          value={props.isEdit ? 'Update' : 'Save'} />
      </form>}
  />
);

EditColumnModal.propTypes = {
  isShown: PropTypes.bool,
  isEdit: PropTypes.bool,
  title: PropTypes.string,
  data: PropTypes.shape({
    title: PropTypes.string,
    columns: PropTypes.array
  }),
  handleClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  updateBoard: PropTypes.func.isRequired
};

EditColumnModal.defaultProps = {
  isShown: false,
  isEdit: false,
  title: '',
  data: {
    title: '',
    columns: []
  }
};

export default EditColumnModal;
