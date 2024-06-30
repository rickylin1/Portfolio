import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import RainbowSearchIcon from './RainbowSearch.tsx';
import RainbowMicIcon from './RainbowMic.tsx';
import RainbowCameraAltIcon from './RainbowCamera.tsx';
import RainbowBusinessCenterIcon from './RainbowBusiness.tsx';
import RainbowLightBulb from './RainbowLightbulb.tsx';

const Header = ({ darkMode = false, hideButtons = true }) => {
    const [input, setInput] = useState("");
    const [redirectToResume, setRedirectToResume] = useState(false);
    const [redirectToHome, setRedirectToHome] = useState(false);
    const [redirectToRickyLin, setRedirectToRickyLin] = useState(false);
    const [hint, setHint] = useState("try searching for resume");

    if(darkMode){
        console.log('dark')
    }

    useEffect(() => {
        const hints = ["try searching for Ricky Lin", "try searching for resume", "try searching for home"];
        let currentHintIndex = 0;

        const intervalId = setInterval(() => {
            currentHintIndex = (currentHintIndex + 1) % hints.length;
            setHint(hints[currentHintIndex]);
        }, 3000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div className={`home__header ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className='home__headerLeft'>
                <a href="https://haunted-house-3exjxb45c-rickylin1s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="ml-4">
                    Home
                </a>
                <a href="https://galaxy-generator-m5wfwkcmo-rickylin1s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="ml-4">
                    Contact Me
                </a>
            </div>

            <form className='search'>
                <div className='search__input'>
                    <RainbowSearchIcon className='search__inputIcon' />
                    <input
                        value={input}
                        onChange={(e) => {
                            let normalizedInput = e.target.value.toLowerCase().trim();
                            setRedirectToResume(normalizedInput === "resume");
                            setRedirectToHome(normalizedInput === "home");
                            setRedirectToRickyLin(normalizedInput === "ricky lin");
                            setInput(e.target.value);
                        }}
                    />
                    <RainbowMicIcon />
                    <div className='icons'></div>
                    <RainbowCameraAltIcon />
                </div>

                <div className="hint">
                    <RainbowLightBulb />
                    {hint}
                </div>

                <div className={`search__buttons ${hideButtons ? 'search__buttonsHidden' : ''}`}>
                    <Button type='submit' variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>

                <div className={`resume ${redirectToResume ? 'resume-visible' : 'resume-hidden'}`}>
                    {redirectToResume && (
                        <>
                            <RainbowBusinessCenterIcon />
                            <Link to='/about'>Resume!</Link>
                            <RainbowBusinessCenterIcon />
                        </>
                    )}
                </div>

                <div className={`goHome ${redirectToHome ? 'goHome-visible' : 'goHome-hidden'}`}>
                    {redirectToHome && (
                        <>
                            <RainbowBusinessCenterIcon />
                            <Link to='/'>Welcome Home!</Link>
                            <RainbowBusinessCenterIcon />
                        </>
                    )}
                </div>

                <div className={`RickyLin ${redirectToRickyLin ? 'RickyLin-visible' : 'RickyLin-hidden'}`}>
                    {redirectToRickyLin && (
                        <>
                            <RainbowBusinessCenterIcon />
                            <Link to='/RickyLin'>Ricky Lin!</Link>
                            <RainbowBusinessCenterIcon />
                        </>
                    )}
                </div>
            </form>

            <div className='home__headerRight'>
                <a href="https://www.linkedin.com/in/ricky-lin1" target="_blank" rel="noopener noreferrer" className={`ml-4 ${darkMode ? 'white-text' : ''}`}>
                    Linkedin
                </a>
                <a href="https://github.com/rickylin1" target="_blank" rel="noopener noreferrer" className={`ml-4 ${darkMode ? 'white-text' : ''}`}>
                    Github
                </a>
            </div>
        </div>
    );
};

export default Header;