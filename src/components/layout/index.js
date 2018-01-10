import React from 'react';
import PropTypes from 'prop-types';

import EditBoardModal from '../modals/editBoard';
import DeleteBoardModal from '../modals/deleteBoard';

import './layout.scss';

const modalNames = {
  EDIT_BOARD: 'editBoard',
  DELETE_BOARD: 'deleteBoard'
};

const getModalProperty = (modals, modalName, propName) =>
  modals[modalName] && modals[modalName][propName];

const Layout = ({ modals, ...props }) => (
  <div className="layout">
    <EditBoardModal
      isShown={getModalProperty(modals, modalNames.EDIT_BOARD, 'isShown')}
      isEdit={Boolean(getModalProperty(modals, modalNames.EDIT_BOARD, 'data')
        && getModalProperty(modals, modalNames.EDIT_BOARD, 'data').id)}
      data={getModalProperty(modals, modalNames.EDIT_BOARD, 'data')}
      handleClose={props.closeEditBoardModal}
      handleChange={props.updateEditBoardModalData}
      updateBoard={props.updateBoard}
      createBoard={props.createBoard} />
    <DeleteBoardModal
      isShown={getModalProperty(modals, modalNames.DELETE_BOARD, 'isShown')}
      data={getModalProperty(modals, modalNames.DELETE_BOARD, 'data')}
      handleClose={props.closeDeleteBoardModal}
      deleteBoard={props.deleteBoard} />
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  modals: PropTypes.objectOf(PropTypes.object).isRequired,
  closeEditBoardModal: PropTypes.func.isRequired,
  updateEditBoardModalData: PropTypes.func.isRequired,
  closeDeleteBoardModal: PropTypes.func.isRequired,
  createBoard: PropTypes.func.isRequired,
  updateBoard: PropTypes.func.isRequired,
  deleteBoard: PropTypes.func.isRequired
};

export default Layout;
