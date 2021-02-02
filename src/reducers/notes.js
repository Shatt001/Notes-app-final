
const notesReducer = (state, action) => {
  let newPayload = []
  switch (action.type) {
    case 'POPULATE_NOTES':
      return {
        payload: action.payload,
        meta: action.meta
      }
    case 'ADD_NOTE':
      newPayload = [
        ...state.payload,
        {
          id: action.id,
          note: action.note,
          description: action.description,
          status: action.status,
          createdAt: action.createdAt
        }
      ]

      return {
        payload: newPayload,
        meta: state.meta
      }
    case 'EDIT_NOTE':
      newPayload = state.payload.map((note) => {
        if (note.id === action.editNote.id) {
          return {
            ...note,
            ...action.editNote
          }
        } else {
          return note
        }
      })

      return {
        payload: newPayload,
        meta: state.meta
      }
    case 'REMOVE_NOTE':
      newPayload = state.payload.filter((note) => {
        if (note.id !== action.id) {
          return note
        }
      })

      return {
        payload: newPayload,
        meta: state.meta
      }
    default:
      return state
  }
}

export default notesReducer