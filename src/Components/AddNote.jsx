import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {
    const [ noteText, setNoteText ] = useState('');
    const charactersLimit = 200;

    const handleChange = (e) => {
        if(charactersLimit - e.target.value.length >= 0){
            setNoteText(e.target.value);
        }
    }
    const handleSave = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }

  return (
    <div className='note new'>
        <textarea 
            cols="10" 
            rows="8" 
            placeholder='Type to add a note...'
            value={noteText}
            onChange={handleChange}
        ></textarea>
        <div className='note-footer'>
            <small>{charactersLimit - noteText.length} Remaining</small>
            <button className='save' onClick={handleSave}>Save</button>
        </div>
    </div>
  )
}

export default AddNote