export const getPropertyReducer = prop =>
  (state, { payload }) => ({ ...state, [prop]: payload });

export const modalReducer = (state, { payload, meta }) => ({
  ...state, [meta.modalName]: payload
});

export const modalDataPropertyReducer = (state, { payload, meta }) => ({
  ...state,
  [meta.modalName]: {
    ...state[meta.modalName],
    data: { ...state[meta.modalName].data, ...payload }
  }
});
