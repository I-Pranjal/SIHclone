import React from 'react'
import AccordionUsage from '../Components/Accordion'
import '../Components/styling.css'


function Faq() {
  return (
    <div id='faq-container'>
      <div id='faq-top'>
      <p
      style={{color:'#e5552d', fontSize:'29px', fontWeight:'700'}}
      >GENERAL FAQ</p>
      <button id='registerBtn'>
        Register
      </button>
      </div>
      <div>
      <AccordionUsage />
      <AccordionUsage />
      <AccordionUsage />
      <AccordionUsage />
      <AccordionUsage />
      <AccordionUsage />
      <AccordionUsage />
      <AccordionUsage />
      <AccordionUsage />
      <AccordionUsage />

      </div>
    </div>
  )
}

export default Faq
