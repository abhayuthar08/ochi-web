import React from 'react'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Cards from './components/Cards'
import Reviews from './components/Reviews'
import Eyes from './components/Eyes'
import Footer from './components/Footer'






function App() {
  return (
   <div className='w-full h-screen  text-white '>
    <NavBar/>
    <LandingPage/>
    <Marquee/>
    <About/>
    <Cards/>
    <Eyes/>
    <Reviews/>
    <Footer></Footer>
   </div>
  )
}

export default App