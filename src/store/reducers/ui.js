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
  [combineActions(actions.showModal, actions.hideModal)]:
    reducers.modalReducer,
  [actions.updateModalData]: reducers.modalDataPropertyReducer
}, defaultState);

export default combineReducers({
  modals,
  errors
});
