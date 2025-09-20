import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Footer from './Footer'
import Project from './Project'
import Contact from './Contact'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <ToastContainer/>
      <Footer/>
    </div>
  )
}

export default App