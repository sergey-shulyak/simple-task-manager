import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'form-serialize';

import Modal from '../base';
import modalNames from '../modalNames';
import * as icons from '../../misc/fontAwesomeIcons';

import './editTicket.scss';

const handleSubmit = (event, props) => {
  event.preventDefault();

  const formData = {
    ...serialize(event.target, { hash: true }),
    boardId: props.board.id
  };

  if (props.isEdit) {
    props.updateTicket(props.board.id, { id: props.data.id, ...formData });
  } else {
    props.createTicket(props.board.id, formData);
  }
};

const handleChange = (event, props) => {
  const data = { [event.target.name]: event.target.value };
  props.handleChange(modalNames.EDIT_TICKET, data);
};

const EditTicketModal = props => (
  <Modal
    className="edit-ticket"
    title={props.isEdit ? `Edit ${props.data.title}` : 'New Ticket'}
    isShown={props.isShown}
    handleClose={() => props.handleClose(modalNames.EDIT_TICKET)}
    content={
      <form onSubmit={event => handleSubmit(event, props)} method="POST">
        <label htmlFor="title" className="edit-ticket__label">Title</label>
        <input
          className="edit-ticket__input"
          id="title"
          name="title"
          type="text"
          placeholder="Type some title"
          defaultValue={props.data.title}
          onChange={event => handleChange(event, props)} />

        <label htmlFor="description" className="edit-ticket__label">Description</label>
        <input
          className="edit-ticket__input"
          id="description"
          name="description"
          type="text"
          placeholder="Type some description"
          defaultValue={props.data.description}
          onChange={event => handleChange(event, props)} />

        <label htmlFor="priority" className="edit-ticket__label">
          {icons.priorityIcons[props.data.priority]} Priority
        </label>
        <select
          name="priority"
          id="priority"
          className="edit-ticket__input"
          defaultValue={props.data.priority}
          onChange={event => handleChange(event, props)}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <label htmlFor="type" className="edit-ticket__label">
          {icons.typeIcons[props.data.type]} Type
        </label>
        <select
          name="type"
          id="type"
          className="edit-ticket__input"
          defaultValue={props.data.type}
          onChange={event => handleChange(event, props)}>
          <option value="feature">Feature</option>
          <option value="task">Task</option>
          <option value="bug">Bug</option>
        </select>

        <label htmlFor="columnId" className="edit-ticket__label">Status</label>
        <select
          name="columnId"
          id="columnId"
          className="edit-ticket__input"
          defaultValue={props.data.columnId}
          onChange={event => handleChange(event, props)}>
          {props.board.columns && props.board.columns.map(column =>
            <option key={column.id} value={column.id}>{column.title}</option>)}
        </select>

        <input
          className="edit-ticket__submit"
          id="submit"
          type="submit"
          value={props.isEdit ? 'Update' : 'Save'} />
      </form>}
  />
);

EditTicketModal.propTypes = {
  isShown: PropTypes.bool,
  isEdit: PropTypes.bool,
  title: PropTypes.string,
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    priority: PropTypes.string,
    type: PropTypes.string,
    columnId: PropTypes.string,
    boardId: PropTypes.string
  }),
  board: PropTypes.shape({
    id: PropTypes.string,
    columns: PropTypes.array
  }),
  handleClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  createTicket: PropTypes.func.isRequired
};

EditTicketModal.defaultProps = {
  isShown: false,
  isEdit: false,
  title: '',
  data: {},
  board: {
    id: '',
    columns: []
  }
};

export default EditTicketModal;
