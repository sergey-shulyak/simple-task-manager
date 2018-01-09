export const getPropertyReducer = prop =>
  (state, { payload }) => {
    console.log('Payload', payload);
    return ({ ...state, [prop]: payload });
  }

export const getModalDataPropertyReducer = modalName =>
  (state, { payload }) => ({
    ...state,
    [modalName]: {
      ...state[modalName],
      data: { ...state[modalName].data, ...payload }
    }
  });
