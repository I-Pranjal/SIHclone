import React from 'react'
import './styling.css'

const Results = () => {
  return (
    <div className='results'>
    <div id='container' >  
      <div id='resultDiv'>
      <img src='./new.gif' id='new-gif' />
        See result for the SIH - Batch 1 
        <button >
          <img id='eye' src='./eye-open.png' />
          View
        </button>
      </div>

      <div id='resultDiv'>    
            <img src='./new.gif' id='new-gif' />
        See result for the SIH - Batch 2
        <button >
          <img id='eye' src='./eye-open.png' />
          View
        </button>
      </div>

      <div id='resultDiv'>
      <img src='./new.gif' id='new-gif' />
        See result for the SIH - Batch 3 
        <button >
          <img id='eye' src='./eye-open.png' />
          View
        </button>
      </div>

      <div id='resultDiv'>
        <img src='./new.gif' id='new-gif' />
        Nodal Center List for SIH 2024
        <button >
          <img id='eye' src='./eye-open.png' />
          View
        </button>
      </div>

      </div>
    </div>
  )
}
export default Results
