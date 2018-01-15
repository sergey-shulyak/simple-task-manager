import { createActions } from 'redux-actions';

import * as actions from '../actionTypes/ui';

export const {
  showModal,
  hideModal,
  updateModalData,
  setBoardsError,
  setTicketsError
} =
  createActions(
    {
      [actions.SHOW_MODAL]: [
        (modalName, data) => ({ isShown: true, data }),
        modalName => ({ modalName })
      ],
      [actions.HIDE_MODAL]: [
        () => ({ isShown: false }),
        modalName => ({ modalName })
      ],
      [actions.UPDATE_MODAL_DATA]: [
        (modalName, data) => ({ ...data }),
        modalName => ({ modalName })
      ]
    },
    actions.SET_BOARDS_ERROR,
    actions.SET_TICKETS_ERROR
  );
