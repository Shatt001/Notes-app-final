const historyReducer = (state, action) => {
  let newPayload = []
  switch (action.type) {
    case 'POPULATE_HISTORY':
      return {
        payload: action.payload,
        meta: action.meta
      }
    case 'ADD_HISTORY':
      newPayload = [
        ...state.payload,
        {
          id: action.id,
          modification: action.modification,
          note: action.note
        }
      ]

      return {
        payload: newPayload,
        meta: state.meta
      }
    default:
      return state
  }
}

export default historyReducer