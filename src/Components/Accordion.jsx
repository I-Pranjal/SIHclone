import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import  './styling.css'

export default function AccordionUsage() {
  return (
    <div>
      <Accordion
      style={{width:'70%' , margin:'10px'}}
      >
        <AccordionSummary
          expandIcon={<img alt='image of icon'  src='./accordian.png' style={{width:'20px'}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{fontSize:'20px', fontWeight:'700', }}
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails
                  style={{fontSize:'16px', fontWeight:'500', letterSpacing:'1px'}}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
