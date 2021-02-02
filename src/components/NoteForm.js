import React, { useState } from 'react'

const NoteForm = (props) => {
  const [note, setNote] = useState(props.editNote ? props.editNote.note : '')
  const [status, setStatus] = useState(props.editNote ? props.editNote.status : 'unfinished')
  const [description, setDescription] = useState(props.editNote ? props.editNote.description : '')
  const [error, setError] = useState('')

  const onFormSubmit = (e) => {
    e.preventDefault()

    try {
      props.dispatch({
        note,
        description,
        status
      })
      if (error) {
        setError('')
      }
    } catch (error) {
      setError('Error Occured on form submit. Error - ' + error)
    }

  }

  const onCheckboxChange = (e) => {
    setStatus(e.target.checked === true ? 'finished' : 'unfinished')
  }

  const onNoteChange = (e) => {
    setNote(e.target.value)
  }

  const onDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="checkbox"
        checked={status === 'finished' ? true : false}
        onChange={onCheckboxChange} />
      <input
        type="text"
        placeholder="Note..."
        value={note}
        onChange={onNoteChange}
      />
      <textarea
        placeholder="Description..."
        value={description}
        onChange={onDescriptionChange}
      />
      <div>
        <button>{props.buttonPrefix} note</button>
        {error && <p>{error}</p>}
      </div>
    </form>
  )
}

export default NoteForm