import './App.css'
import { useState } from 'react'
import Topbar from './Components/Topbar'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Pages/Hero'
import ContactUs from './Pages/ContactUs'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Faq from './Pages/Faq'
import Milestone from './Pages/SIHmilestone'
import Problem from './Pages/Problem'
import Login from './Pages/Login'
import { userContext } from './Pages/Login'

function App() {
    const [userDetails, setUserDetails] = useState(null); 


  return (
    <userContext.Provider value={userDetails}>
    <>
    <Router>
      <Topbar/>
      <Navbar />
          <Routes>
            <Route path='/'   element={<Hero />}/>
            <Route path='/contactus' element={<ContactUs/>} />
            <Route path='/faq' element={<Faq/>} />
            <Route path='/implementation' element={<Milestone/>} />
            <Route path='/problem' element={<Problem/>} />
            <Route path='/login' element={<Login setUserDetails={setUserDetails}  />} />
          </Routes>  
      <Footer />
    </Router>


    </>
    </userContext.Provider>
  )
}

export default App ; 
