import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';

import * as actions from '../actions/ui';
import * as reducers from '../utils';

const defaultState = {};

const errors = handleActions({
  [actions.setBoardsError]: reducers.getPropertyReducer('boards'),
  [actions.setTicketsError]: reducers.getPropertyReducer('tickets')
}, defaultState);

const modals = handleActions({
  [combineActions(actions.showEditBoardModal, actions.hideEditBoardModal)]:
    reducers.getPropertyReducer('editBoard'),
  [actions.updateEditBoardModalData]: reducers.getModalDataPropertyReducer('editBoard'),
  [combineActions(actions.showDeleteBoardModal, actions.hideDeleteBoardModal)]:
    reducers.getPropertyReducer('deleteBoard')
}, defaultState);

export default combineReducers({
  modals,
  errors
});
