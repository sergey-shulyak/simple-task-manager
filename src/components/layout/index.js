import React from 'react';
import PropTypes from 'prop-types';

import EditBoardModal from '../modals/editBoard';
import DeleteBoardModal from '../modals/deleteBoard';

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

const Layout = ({ modals, ...props }) => (
  <div className="layout">
    <EditBoardModal
      isShown={isShown(modalNames.EDIT_BOARD, modals)}
      isEdit={isEdit(modalNames.EDIT_BOARD, modals)}
      data={getData(modalNames.EDIT_BOARD, modals)}
      handleClose={props.hideModal}
      handleChange={props.updateModalData}
      updateBoard={props.updateBoard}
      createBoard={props.createBoard} />
    <DeleteBoardModal
      isShown={isShown(modalNames.DELETE_BOARD, modals)}
      data={getData(modalNames.DELETE_BOARD, modals)}
      handleClose={props.hideModal}
      deleteBoard={props.deleteBoard} />
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  modals: PropTypes.objectOf(PropTypes.object).isRequired,
  hideModal: PropTypes.func.isRequired,
  updateModalData: PropTypes.func.isRequired,
  createBoard: PropTypes.func.isRequired,
  updateBoard: PropTypes.func.isRequired,
  deleteBoard: PropTypes.func.isRequired
};

export default Layout;
