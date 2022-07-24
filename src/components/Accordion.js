import React, { useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './Accordion.css'
import { FaAngleRight } from 'react-icons/fa';

const Accordion = (props) => {

    const[active,setActive]=useState('')
    const[height,setHeight]=useState('0px')
    const[rotate,setRotate]=useState('')

    const content = useRef(null)

    const toggleAccordion = ()=>{
        setActive(active===''?'active':'')
        setHeight(active==='active' ? '0px':`${content.current.scrollHeight}px`)
        setRotate(active===''?'accordion--icon rotate':'accordion--title')
    }

  return (
    <div className='accordion--section'>
        <button className={`accordion ${active}`} onClick={toggleAccordion}>
            <p className='accordion--title'>{props.title}</p>
            <FaAngleRight className={`${rotate}`}/>
        </button>
        <div ref={content} style={{maxHeight:`${height}`}} className='accordion--content'>
            <h3 className='accordion--before'>Before:</h3>
            <div className='accordion--text'
                 dangerouslySetInnerHTML={{__html: props.content}}>
            </div>
            <h3 className='accordion--after'>After:</h3>
            <ReactMarkdown className='accordion--text' children={props.code}/>
        </div>
    </div>
  )
}

export default Accordion