import React from 'react'
import '../styles/Home.css';

const Header = () => {
  return (
    <div className='home__header'>
        <div className='home__headerLeft'>
            <a href="https://haunted-house-3exjxb45c-rickylin1s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="ml-4">
                Home
            </a>
            <a href="https://galaxy-generator-m5wfwkcmo-rickylin1s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="ml-4">
                Contact Me
            </a>
            
            {/* <a href="https://haunted-house-3exjxb45c-rickylin1s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="ml-4">
                Spooky House
            </a>
            <a href="https://galaxy-generator-m5wfwkcmo-rickylin1s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="ml-4">
                Galaxy Generator
            </a> */}
        </div>

        <div className='home__headerRight'>
            <a href="https://www.linkedin.com/in/ricky-lin1" target="_blank" rel="noopener noreferrer" className="ml-4">
                Linkedin
            </a>
            <a href="https://github.com/rickylin1" target="_blank" rel="noopener noreferrer" className="ml-4">
                Github
            </a>
            {/* <button onClick={toggleDarkMode}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button> */}

        </div>
    </div>
  )
}

export default Header