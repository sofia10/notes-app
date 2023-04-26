import { useState } from 'react';
import './App.css';
import Notes from './Components/Notes';
import { nanoid } from 'nanoid';
import Search from './Components/Search';
import Header from './Components/Header';

function App() {

  const [ notes, setNotes ] = useState([{
    id: nanoid(),
    text: 'this is my first note',
    date: '02/05/2022'
  },
  {
    id: nanoid(),
    text: 'this is my second note',
    date: '02/01/2023'
  }
  ])

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleString(),
    }
    const newNotes = [ ...notes, newNote ];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const filteredItems = notes.filter((item) => item.id !== id);
    setNotes(filteredItems);
  }

  const [ searchText, setSearchText ] = useState('');

  const [ toggleMode, setToggleMode ] = useState(false);
  return (
    <div className={toggleMode ? 'dark-mode' : null}>
      <div className="container">
        <Header handleMode={setToggleMode}/>
        <Search handleSearchNote={setSearchText}/>
        <Notes notes={notes.filter((item) => item.text.toLowerCase().includes(searchText.toLowerCase()))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      </div>
    </div>
  );
}

export default App;
