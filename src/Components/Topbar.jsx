import React from 'react'
import './styling.css'
import LoginButton from './LoginButton'

const Topbar = () => {
  return (
    <div className='topbar'>
      <img id='logoSIH' src='../SIH2024-logo.png' />
      <LoginButton />
    </div>
  )
}

export default Topbar
