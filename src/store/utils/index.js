export const getPropertyReducer = prop =>
  (state, { payload }) => ({ ...state, [prop]: payload });

export const getModalPropertyReducer = (modalName, prop) =>
  (state, { payload }) => ({
    ...state, [modalName]: { ...state[modalName], [prop]: payload }
  });

export const getModalReducer = modalName =>
  (state, { payload }) => ({
    ...state, [modalName]: { ...state[modalName], ...payload }
  });

export const getModalDataPropertyReducer = modalName =>
  (state, { payload }) => ({
    ...state,
    [modalName]: {
      ...state[modalName],
      data: { ...state[modalName].data, ...payload }
    }
  });
