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

  console.log("first")
  console.log(notes)

  // function n() {
    
  //   const titles = notes.map((x, i) => {
  //     const t = x.title;
  //     return t;
  //   });
  
  //   return titles;  
  // }
  
  // console.log("calling fn");
  // console.log(n());  
  

  return (
 <>
   <Header/>
   <CreateArea onAdd = {addNote}/>
   {notes.map((noteItem, index) => {
    if(noteItem.title || noteItem.content !== ""){
      return(
   <Notes
    key={index}
    id={index}
    title={noteItem.title}
    content={noteItem.content}
    onDelete = {deleteNote}
   />
      );
    } else{
      return null;
    }
   })}
   <Footer/>
 </>
  );
}

export default App;
