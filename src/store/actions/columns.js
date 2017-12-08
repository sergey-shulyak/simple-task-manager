import { createActions } from 'redux-actions';

import * as actions from '../actionTypes/columns';

export const { fetchColumns, saveColumnsToStore, saveColumnsError } = createActions(
  {
    [actions.SAVE_COLUMNS_TO_STORE]: ({ entities }) => entities.columns
  },
  actions.FETCH_COLUMNS,
  actions.SAVE_COLUMNS_ERROR
);
