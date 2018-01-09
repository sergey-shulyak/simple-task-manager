import { createActions } from 'redux-actions';

import * as actions from '../actionTypes/ui';

export const {
  showEditBoardModal,
  hideEditBoardModal,
  updateEditBoardModalData,
  showDeleteBoardModal,
  hideDeleteBoardModal,
  setBoardsError,
  setTicketsError
} =
  createActions(
    {
      [actions.SHOW_EDIT_BOARD_MODAL]: data => ({ isShown: true, data }),
      [actions.HIDE_EDIT_BOARD_MODAL]: () => ({ isShown: false }),
      // TODO убрать обработку события отсюда
      [actions.UPDATE_EDIT_BOARD_MODAL_DATA]: event => ({
        [event.target.name]: event.target.value
      }),
      [actions.SHOW_DELETE_BOARD_MODAL]: data => ({ isShown: true, data }),
      [actions.HIDE_DELETE_BOARD_MODAL]: () => ({ isShown: false })
    },
    actions.SET_BOARDS_ERROR,
    actions.SET_TICKETS_ERROR
  );
