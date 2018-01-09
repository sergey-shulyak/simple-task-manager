import React from 'react';
import PropTypes from 'prop-types';

import NewBoardModal from '../modals/NewBoard';
import DeleteBoardModal from '../modals/DeleteBoard';

import './layout.scss';

const getModalProperty = (modals, modalName, propName) =>
  modals[modalName] && modals[modalName][propName];

const Layout = ({ modals, ...props }) => (
  <div className="layout">
    <NewBoardModal
      isShown={getModalProperty(modals, 'newBoard', 'isShown')}
      handleClose={props.closeNewBoardModal}
      handleChange={props.updateNewBoardModalData}
      createBoard={props.createBoard} />
    <DeleteBoardModal
      isShown={getModalProperty(modals, 'deleteBoard', 'isShown')}
      data={getModalProperty(modals, 'deleteBoard', 'data')}
      deleteBoard={props.deleteBoard}
      handleClose={props.closeDeleteBoardModal} />
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  modals: PropTypes.objectOf(PropTypes.object).isRequired,
  closeNewBoardModal: PropTypes.func.isRequired,
  updateNewBoardModalData: PropTypes.func.isRequired,
  createBoard: PropTypes.func.isRequired,
  closeDeleteBoardModal: PropTypes.func.isRequired
};

export default Layout;
