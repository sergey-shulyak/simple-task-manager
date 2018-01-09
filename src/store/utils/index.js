export const getPropertyReducer = prop =>
  (state, { payload }) => ({ ...state, [prop]: payload });

export const getModalDataPropertyReducer = modalName =>
  (state, { payload }) => ({
    ...state,
    [modalName]: {
      ...state[modalName],
      data: { ...state[modalName].data, ...payload }
    }
  });
