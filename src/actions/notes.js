export const addNote = (id, note, description, status, createdAt) => {
  return {
    type: 'ADD_NOTE',
    id,
    note,
    description,
    status,
    createdAt
  }
}

export const editNote = (editNote) => {
  return {
    type: 'EDIT_NOTE',
    editNote
  }
}

export const removeNote = (id) => {
  return {
    type: 'REMOVE_NOTE',
    id
  }
}
