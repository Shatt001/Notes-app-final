export const addHistory = (id, modification, note) => {
  return {
    type: 'ADD_HISTORY',
    id,
    modification,
    note
  }
}
