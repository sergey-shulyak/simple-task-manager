export const getPropertyReducer = prop =>
  (state, { payload }) => ({ ...state, [prop]: payload });

export const getModalReducer = () =>
  (state, { payload, meta }) => ({ ...state, [meta.modalName]: payload });

export const getModalDataPropertyReducer = () =>
  (state, { payload, meta }) => ({
    ...state,
    [meta.modalName]: {
      ...state[meta.modalName],
      data: { ...state[meta.modalName].data, ...payload }
    }
  });
