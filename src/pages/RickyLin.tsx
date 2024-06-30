import React from 'react'
import Search from '../components/Search'
import Header from '../components/Header.tsx'
import Hero from '../components/Hero.tsx'
import Main from '../components/Main.tsx'

const RickyLin = () => {
  return (
    <>
      <Header darkMode={true} />
      <div className="flex-nowrap">
        <Hero />
      </div>
      <div className="flex-grow ml-80"> 
        <Main />
      </div>
      <div>
        this is a test
      </div>
    </>
  )
}

export default RickyLin