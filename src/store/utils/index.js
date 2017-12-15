export function getPropertyReducer(prop) {
  return (state, { payload }) => ({ ...state, [prop]: payload });
}
