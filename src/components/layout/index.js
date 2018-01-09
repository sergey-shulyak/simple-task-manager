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
      isEdit={Boolean(getModalProperty(modals, 'newBoard', 'data')
        && getModalProperty(modals, 'newBoard', 'data').id)}
      data={getModalProperty(modals, 'newBoard', 'data')}
      handleClose={props.closeNewBoardModal}
      handleChange={props.updateNewBoardModalData}
      updateBoard={props.updateBoard}
      createBoard={props.createBoard} />
    <DeleteBoardModal
      isShown={getModalProperty(modals, 'deleteBoard', 'isShown')}
      data={getModalProperty(modals, 'deleteBoard', 'data')}
      handleClose={props.closeDeleteBoardModal}
      deleteBoard={props.deleteBoard} />
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  modals: PropTypes.objectOf(PropTypes.object).isRequired,
  closeNewBoardModal: PropTypes.func.isRequired,
  updateNewBoardModalData: PropTypes.func.isRequired,
  closeDeleteBoardModal: PropTypes.func.isRequired,
  createBoard: PropTypes.func.isRequired,
  updateBoard: PropTypes.func.isRequired,
  deleteBoard: PropTypes.func.isRequired
};

export default Layout;
