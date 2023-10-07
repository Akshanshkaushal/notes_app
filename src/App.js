import { useState } from 'react';
import './App.css';
import CreateArea from './components/CreateArea';
import Footer from './components/Footer';
import Header from './components/Header';
import Notes from './components/Notes';

function App() {

  const [notes, setNotes]  = useState([]);

  const addNote = (newNote) => {
    setNotes(
      prevNotes => {
      return [...prevNotes,newNote];
      }
    )
  }

  const deleteNote = (id) => {
    setNotes(
      prevNotes => {
       return prevNotes.filter((noteItem, index) => {
          return id !== index;
        })
      }
    )
  }

  return (
 <>
   <Header/>
   <CreateArea onAdd = {addNote}/>
   {notes.map((noteItem, index) => {
   <Notes
    key={index}
    id={index}
    title={noteItem.title}
    content={noteItem.content}
    onDelete = {deleteNote}
   />
  })}
   <Footer/>
 </>
  );
}

export default App;
