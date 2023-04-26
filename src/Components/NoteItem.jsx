import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';

const NoteItem = ({id, text, date, handleDeleteNote}) => {
  return (
    <div className='note' key={id}>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <AiOutlineDelete onClick={() => handleDeleteNote(id)} className="delete-icon" size="1.3em" />
        </div>
    </div>
  )
}

export default NoteItem