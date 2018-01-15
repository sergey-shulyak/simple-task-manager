import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

import EditBoardModal from '../modals/editBoard';
import DeleteModal from '../modals/delete';
import EditTicketModal from '../modals/editTicket';

import modalNames from '../modals/modalNames';

import './layout.scss';

const getModalProperty = (propName, modalName, modals) =>
  modals[modalName] && modals[modalName][propName];

const getData = (modalName, modals) =>
  getModalProperty('data', modalName, modals);

const isShown = (modalName, modals) =>
  getModalProperty('isShown', modalName, modals);

const isEdit = (modalName, modals) =>
  Boolean(getData(modalName, modals) && getData(modalName, modals).id);

const getDeleteBoardHandler = deleteBoard => (event, props) => {
  event.preventDefault();
  deleteBoard(props.data.id);
};

const getDeleteTicketHandler = deleteTicket => (event, props) => {
  event.preventDefault();
  deleteTicket(props.data.boardId, props.data.id);
};

const Layout = ({ modals, ...props }) => (
  <div className="layout">
    <ToastContainer autoClose={3000} hideProgressBar newestOnTop />

    <EditBoardModal
      isShown={isShown(modalNames.EDIT_BOARD, modals)}
      isEdit={isEdit(modalNames.EDIT_BOARD, modals)}
      data={getData(modalNames.EDIT_BOARD, modals)}
      handleClose={props.hideModal}
      handleChange={props.updateModalData}
      updateBoard={props.updateBoard}
      createBoard={props.createBoard} />

    <DeleteModal
      title="Delete Board"
      isShown={isShown(modalNames.DELETE_BOARD, modals)}
      data={getData(modalNames.DELETE_BOARD, modals)}
      handleClose={() => props.hideModal(modalNames.DELETE_BOARD)}
      handleDelete={getDeleteBoardHandler(props.deleteBoard)} />

    <EditTicketModal
      isShown={isShown(modalNames.EDIT_TICKET, modals)}
      isEdit={isEdit(modalNames.EDIT_TICKET, modals)}
      data={getData(modalNames.EDIT_TICKET, modals)}
      handleClose={props.hideModal}
      handleChange={props.updateModalData}
      createTicket={props.createTicket}
      updateTicket={props.updateTicket}
      board={props.board} />

    <DeleteModal
      title="Delete Ticket"
      isShown={isShown(modalNames.DELETE_TICKET, modals)}
      data={getData(modalNames.DELETE_TICKET, modals)}
      handleClose={() => props.hideModal(modalNames.DELETE_TICKET)}
      handleDelete={getDeleteTicketHandler(props.deleteTicket)} />
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  board: PropTypes.shape({
    id: PropTypes.string,
    columns: PropTypes.array
  }),
  modals: PropTypes.objectOf(PropTypes.object).isRequired,
  hideModal: PropTypes.func.isRequired,
  updateModalData: PropTypes.func.isRequired,
  createBoard: PropTypes.func.isRequired,
  updateBoard: PropTypes.func.isRequired,
  deleteBoard: PropTypes.func.isRequired,
  createTicket: PropTypes.func.isRequired,
  updateTicket: PropTypes.func.isRequired,
  deleteTicket: PropTypes.func.isRequired
};

Layout.defaultProps = {
  board: {}
};

export default Layout;
