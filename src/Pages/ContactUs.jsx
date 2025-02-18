import React from 'react'
import '../Components/styling.css'
import { contactLink } from '../assets/data'
import { shadows } from '@mui/system'

function ContactUs() {
  return (
    <div className='container'>
     <h1><center>Contact Us</center></h1>

     {/* // There will a div with three sub-divisions and each containing respective contents  */}
     <div style={{display:'flex', padding:'3rem'}}>
      <div style={{display:'flex', height:'auto', justifyItems:'center', alignItems:'center'}}>
        <img src='./contactus-logo.png' style={{width:'auto', height:'11rem'}} />
        <div 
  style={{
    maxWidth: '50%',
    padding: '2rem',
    height: '80vh',
    backgroundColor: '#f9f9f9', // Softer background color for a cleaner look
    borderRadius: '1rem',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Adds subtle shadow for depth
    display: 'flex',
    flexDirection: 'column', // Enables vertical layout for child elements
    alignItems: 'center', // Centers children horizontally
    justifyContent: 'center', // Centers children vertically
    gap: '1rem', // Adds spacing between child elements
    border: '1px solid #ddd' // Thin border for a polished look
  }}
>        <h1>ASK A QUESTION </h1>
        <div>
          <select id='contact-input' style={{backgroundColor:"white"}}>
            <option>Select Category</option>
            <option>Partners</option>
            <option>Sponsors</option>
            <option>Participate as team</option>
            <option>Host SIH centre</option>
            <option>SPOC</option>
          </select>
          <input type='text'  id='contact-input' placeholder='Your name'></input>
          <input type='text' id='contact-input' placeholder='Your Email'></input>
          <input type='textarea' id='contact-input' placeholder='Message'></input>
          <button id='contactSend'>
            Send Message 
          </button>
        </div>
      </div>

      </div>

      
      <div id='contactLinks'>
      {contactLink.map((contact , key) => (
        <div 
        style={{
          display: 'flex', 
          alignItems: 'center', 
          // justifyContent: 'center', 
          textAlign: 'center' // Ensure text aligns properly
        }}
      >
        <p 
          id="contactusLink" 
          style={{
            display: 'flex', 
            alignItems: 'center', 
            // justifyContent: 'center', 
            gap: '10px' // Add spacing between image and text
          }}
        >
          <img 
            src={contact.link} 
            style={{
              width: '40px', 
              display: 'block' 
            }} 
            alt="Contact Icon" 
          />
          {contact.point}
        </p>
      </div>
      
      ))}
      </div>

      
     </div>
    </div>
  )
}

export default ContactUs
