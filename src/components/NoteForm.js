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

  const onRemoveClick = (e) => {
    e.preventDefault();
    try {
      props.dispatchRemove();
      if (error) {
        setError('')
      }
    } catch (error) {
      setError('Error Occured on note remove. Error - ' + error)
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
    <form className="form" onSubmit={onFormSubmit}>
      <input
        className="text-input"
        type="text"
        placeholder="Note..."
        value={note}
        onChange={onNoteChange}
      />
      <textarea
        className="textarea-input"
        placeholder="Description..."
        value={description}
        onChange={onDescriptionChange}
      />
      <div className="form__block">
        <input
          className="cb-input"
          type="checkbox"
          checked={status === 'finished' ? true : false}
          onChange={onCheckboxChange} />
        <button className="button">{props.buttonPrefix} note</button>
        {props.dispatchRemove &&
          <button
            className="button button--remove"
            onClick={onRemoveClick}>Remove
          </button>}
      </div>
      {error && <div className="form__error">{error}</div>}
    </form>
  )
}

export default NoteForm