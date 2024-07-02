import React, { useState } from 'react';
import '../styles/Home.css';
import { NavLink } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import Search from '../components/Search';
import RLogo from '../assets/R.png';
import Google from '../assets/Google.png';

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`home ${darkMode ? 'dark' : 'light'}`}>
            <div className='home__header'>
                <div className='home__headerLeft'>
                    <a href="https://www.rickylin.us" className="ml-4">
                        Home
                    </a>
                    <a href="https://www.rickylin.us/about" className="ml-4">
                        Resume
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

                    <AppsIcon />
                    <img className="pfp" src={RLogo} alt="profile" />
                </div>
            </div>

            <div className='home__body'>
                <center>
                    <img className="Googlelogo" src={Google} alt="googlelogo" />
                </center>
                <p className='google__credits'>
                    Made with love by Ricky
                </p>

                <div className='home__inputContainer'>
                    <Search />
                </div>
            </div>

        </div>
    );
};

export default Home;
