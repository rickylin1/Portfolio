import React from 'react'
import Search from '../components/Search'
import Header from '../components/Header.tsx'
import Hero from '../components/Hero.tsx'
import Main from '../components/Main.tsx'
import AboutMe from '../components/AboutMe.tsx'
import ProjectCards from '../components/ProjectCards.tsx'
import Technologies from '../components/Technologies.tsx'
import Contact from '../components/Contact.tsx'
import Footer from '../components/Footer.tsx'

const RickyLin = () => {
  return (
    <>
      <Header darkMode={true} />
      <div>
        <Hero />
      </div>
      <div className="ml-80"> 
        <Main />
      </div>
      <AboutMe></AboutMe>
      <ProjectCards></ProjectCards>
      <Technologies></Technologies>
      <Footer/>

    </>
  )
}

export default RickyLin