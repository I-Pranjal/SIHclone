import React from 'react'
import '../Components/styling.css'
import { guidelinePoints, milestoneImportant } from '../assets/data'

export default function Milestone() {
  return (
    <div className='container'>
      <img src='./implementation-image.png' width={"100%"}/>

      <div id='content'>
      <h1 id='milestone-guideline'>
      Guidelines for Deployment of Smart India Hackathon (SIH2024) Winning Projects
      </h1>
      <p id='milestone-points'>
      The Smart India Hackathon (SIH) is envisioned to promote innovation and out-of-the-box thinking among young minds and aims to institutionalize a model for harnessing the creativity and technical expertise of millions of Indian students for the direct benefit of our nation. Through the Smart India Hackathon 2024 (SIH2024), the Ministry of Education’s Innovation Cell (MIC) tried to crowdsource solutions for improving governance and quality of life and provide young citizens with an opportunity to co-create and present innovative solutions to India's pressing needs.
      <br/>
Post SIH, the Ministry of Education is committed to the further development, implementation, and deployment of SIH-winning ideas by effectively supporting the concerned ministries/departments. Hence, to initiate the development and deployment of SIH-winning ideas, the concerned Ministry/ Departments (Problem Statement given agency) is requested to follow the guidelines indicated below.
      </p>
      {guidelinePoints.map((bulletin, key) => (
      <div id='milestone-points'> 
        <p><span style={{backgroundColor:'#0d1d6a', padding:'5px', fontWeight:'bolder', color:'white'}}>{bulletin.id}</span>
        {bulletin.point}</p>
      </div>
      ))}

      <p style={{fontSize:'30px', fontWeight:'bold', padding:'0'}}>INTELLECTUAL PROPERTY ( IP ) </p>
      <p id='milestone-points'>
      The Intellectual Property (IP) of the solution resides with the students who have developed and deployed the solution post-Hackathon but the concerned ministry will have lifetime access to the solution for free. This has been done to encourage Startups to be created out of the developed solutions while also keeping in mind the interest of the involved ministries.
        </p>
        <ul>
      {milestoneImportant.map((bulletin, index) => (
        <li id='milestone-points'> 
        <p>{bulletin.point}</p>
       </li>
      ))} 
      </ul>
      </div>
    </div>
  )
}
