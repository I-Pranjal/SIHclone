import React from 'react'
import Banner from '../Components/Banner'
import Results from '../Components/Results'
import WhatisSIH from '../Components/WhatisSIH'
import Ytlink from '../Components/YTLink'
import Themes from '../Components/Themes'
import ProcessFlow from '../Components/ProcessFlow'
import WhySIH from '../Components/WhySIH'
import Milestone from '../Components/Milestone'
import Committee from '../Components/Committee'

export default function Hero() {
  return (
    <div>
    <Banner  />
    <Results />
    <WhatisSIH />
    <Ytlink />
    <Themes />
    <ProcessFlow />
    <WhySIH />
    <Milestone />
    <Committee />
    </div>
  )
}
