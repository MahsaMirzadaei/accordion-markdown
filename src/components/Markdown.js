import React, { useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import './Markdown.css'

export const Markdown = ({onAdd}) => {

    const[name,setName] = useState('')
    const[markdown,setMarkdown] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault();
        onAdd({name,markdown})
        setMarkdown('')
        setName('')
    }
  return (
    <form className='form' onSubmit={onSubmit}>
        <input className='input input-name' type="text" placeholder='Code-Version' value={name}
        onChange = {(e)=>setName(e.target.value)}/>
        <textarea className='input input-markdown'  type="text" placeholder='Markdown-Code' value={markdown} autoFocus
        onChange = {(e)=>setMarkdown(e.target.value)}/>
        <button className='convert'>Convert</button>
     </form>   
  )
}
