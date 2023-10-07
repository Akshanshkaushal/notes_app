import React, { useState } from 'react'

export default function CreateArea(props) {

const [isExpanded, setExpanded] =  useState(false);

const [note, setNote] = useState({
    title: "",
    content: ""
});
console.log(note)

const handleChange = (event) => {
  const {name, value} = event.target;

  setNote((prevnotes) => {
    return{
    ...prevnotes,
    [name] : value
    }
  })
};
console.log(note)
const submitNote = (event) => {
   props.onAdd(note);

   setNote({
    title: "",
    content: ""
   })

   event.preventDefault();
}


const expand = ()=>{
    setExpanded(true);
}


  return (
    <div>
        <form>
           {isExpanded &&( <input
            name='title'
                value={note.title}
                onChange={handleChange}
                placeholder='Enter title'
            />
           )}
           
            <textarea 
                name='content'
                onClick={expand}
                value={note.content}
                onChange={handleChange}
                placeholder='enter note'
                rows={isExpanded ? 3 : 1}
            />
        </form>
    </div>
  )
}
