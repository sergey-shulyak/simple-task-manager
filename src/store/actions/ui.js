import { createActions } from 'redux-actions';

import * as actions from '../actionTypes/ui';

export const {
  showNewBoardModal,
  hideNewBoardModal,
  updateNewBoardModalData,
  showDeleteBoardModal,
  hideDeleteBoardModal,
  setBoardsError,
  setTicketsError
} =
  createActions(
    {
      [actions.SHOW_NEW_BOARD_MODAL]: () => true,
      [actions.HIDE_NEW_BOARD_MODAL]: () => false,
      [actions.UPDATE_NEW_BOARD_MODAL_DATA]: event => ({
        [event.target.name]: event.target.value
      }),
      [actions.SHOW_DELETE_BOARD_MODAL]: data => ({
        isShown: true,
        data
      }),
      [actions.HIDE_DELETE_BOARD_MODAL]: () => ({ isShown: false })
    },
    actions.SET_BOARDS_ERROR,
    actions.SET_TICKETS_ERROR
  );
