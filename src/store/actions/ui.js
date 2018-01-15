import { createActions } from 'redux-actions';

import * as actions from '../actionTypes/ui';

const withModalNameMetadata = payloadCreator => ([
  payloadCreator,
  modalName => ({ modalName })
]);

export const {
  showModal,
  hideModal,
  updateModalData,
  setBoardsError,
  setTicketsError
} =
  createActions(
    {
      [actions.SHOW_MODAL]: withModalNameMetadata(
        (modalName, data) => ({ isShown: true, data })
      ),
      [actions.HIDE_MODAL]: withModalNameMetadata(
        () => ({ isShown: false })
      ),
      [actions.UPDATE_MODAL_DATA]: withModalNameMetadata(
        (modalName, data) => ({ ...data })
      )
    },
    actions.SET_BOARDS_ERROR,
    actions.SET_TICKETS_ERROR
  );
