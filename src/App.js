import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import { Markdown } from './components/Markdown';
import ReactMarkdown from 'react-markdown';

function App() {

  const[marks,setMarks]=useState([{
    id: '1a',
    name: 'Code-Name/Code-Version',
    markdown : `# h1`,
    result : 'hi'
  },])
  const addMark = (e)=>{
   const id = Math.floor(Math.random()*10000) + 1;
   const newMark = {id,...e}
   setMarks([...marks,newMark])
   console.log(marks)
  }

  return (
    <div className="App">
      <div className='markdown'>
       <Markdown onAdd={addMark} />
      </div>
      <div className='result'>
        <h1 className = 'result--title'>Result</h1>
        {marks.map((mark)=>(
          <Accordion title = {mark.name} content = {mark.markdown} key = {mark.id} code = {mark.markdown}/>
        ))}

      </div>
    </div>
  );
}

export default App;
