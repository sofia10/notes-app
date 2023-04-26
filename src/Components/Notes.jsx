import React from 'react'
import AddNote from './AddNote'
import NoteItem from './NoteItem'

const Notes = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <div className='notes-list'>
        {notes.map((note) => (
            <NoteItem text={note.text} date={note.date} id={note.id} handleDeleteNote={handleDeleteNote}/>
        ))}
        <AddNote handleAddNote={handleAddNote}/>
    </div>
  )
}

export default Notes