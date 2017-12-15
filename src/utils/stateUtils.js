export function setStateProperty(prop, payloadKey) {
  return (state, { payload }) => ({ ...state, [prop]: payload[payloadKey] });
}
