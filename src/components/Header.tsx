import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import RainbowSearchIcon from './RainbowSearch.tsx';
import RainbowMicIcon from './RainbowMic.tsx';
import RainbowCameraAltIcon from './RainbowCamera.tsx';
import RainbowBusinessCenterIcon from './RainbowBusiness.tsx';
import RainbowLightBulb from './RainbowLightbulb.tsx';
import '../styles/Header.css';
import { IoMdTime } from "react-icons/io";

const Header = ({ darkMode = false, hideButtons = true }) => {
    const [input, setInput] = useState("");
    const [redirectToResume, setRedirectToResume] = useState(false);
    const [redirectToHome, setRedirectToHome] = useState(false);
    const [redirectToRickyLin, setRedirectToRickyLin] = useState(false);
    const [hint, setHint] = useState("try searching for Resume");
    const [showHistory, setShowHistory] = useState(false); // State to manage history visibility

    const searchHistory = ["Ricky Lin", "Resume", "Home"]; // Your search history array

    useEffect(() => {
        const hints = ["try searching for Ricky Lin", "try searching for Resume", "try searching for Home"];
        let currentHintIndex = 0;

        const intervalId = setInterval(() => {
            currentHintIndex = (currentHintIndex + 1) % hints.length;
            setHint(hints[currentHintIndex]);
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('You hit the Google Search button : ', input);
        let searchResult = input.toLowerCase().trim();

        if (searchResult === 'home') {
            window.location.href = "https://www.rickylin.us/";
            console.log('go home');
        } else if (searchResult === 'resume') {
            window.location.href = "https://www.rickylin.us/about";
            console.log('go resume');
        } else {
            window.location.href = "https://www.rickylin.us/RickyLin";
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(e);
        }
    };

    const handleClick = () => {
        setShowHistory(true);
    };

    const handleBlur = () => {
        setTimeout(() => setShowHistory(false), 100); // Delay to allow click on history items
    };

    const handleSearchHistoryClick = (item) => {
        setInput(item);
        setShowHistory(false);
        // Logic to redirect based on search history item
        if (item.toLowerCase() === "resume") {
            setRedirectToResume(true);
        } else {
            setRedirectToResume(false);
        }

        if (item.toLowerCase() === "home") {
            setRedirectToHome(true);
        } else {
            setRedirectToHome(false);
        }

        if (item.toLowerCase() === "ricky lin") {
            setRedirectToRickyLin(true);
        } else {
            setRedirectToRickyLin(false);
        }
    };

    return (
        <div className="home__header bg-white m-5" style={{ padding: '10px', borderRadius: '30px' }}>
            <div className='home__headerLeft'>
                <a href="https://www.rickylin.us" className="ml-4">Home</a>
                <a href="https://www.rickylin.us/about" className="ml-4">Resume</a>
            </div>

            <form className='search' onSubmit={handleSearch}>
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
                        onKeyPress={handleKeyPress} // Handle Enter key press
                        onClick={handleClick} // Show history on click
                        onBlur={handleBlur} // Hide history on blur
                    />
                    <RainbowMicIcon />
                    <div className='icons'></div>
                    <RainbowCameraAltIcon />
                </div>

                {showHistory && (
                    <div className="search__history2 mt-0 rounded-xl">
                        {searchHistory.map((item, index) => (
                            <div
                                key={index}
                                className="search__historyItem2"
                                onMouseDown={() => handleSearchHistoryClick(item)}
                                style={{
                                    maxWidth: '556px',
                                    margin: '0 auto',
                                    color: 'rgb(26, 13, 171)'
                                }}
                            >
                                <span className='flex items-center gap-3'> <IoMdTime/> {item}</span>
                            </div>
                        ))}
                    </div>
                )}

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