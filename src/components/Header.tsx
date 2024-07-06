import React, { useState } from 'react';
import { Button } from '@mui/material';
import { IoMdTime } from "react-icons/io";
import { CiMenuBurger as WhiteThreeStackIcon } from "react-icons/ci";
import RLogo from '../assets/R.png';
import RainbowSearchIcon from './RainbowSearch.tsx';
import RainbowMicIcon from './RainbowMic.tsx';
import RainbowCameraAltIcon from './RainbowCamera.tsx';
import RainbowLightBulb from './RainbowLightbulb.tsx';
import '../styles/Header.css';

const Header = ({ darkMode = false, hideButtons = true }) => {
    const [input, setInput] = useState("");
    const [hint, setHint] = useState("try searching for Resume");
    const [showHistory, setShowHistory] = useState(false);
    const [showIcons, setShowIcons] = useState(false);

    const searchHistory = ["Ricky Lin", "Resume", "Home"];

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
        setTimeout(() => setShowHistory(false), 100);
    };

    const handleSearchHistoryClick = (item) => {
        setInput(item);
        setShowHistory(false);
        if (item === 'Resume') {
            window.location.href = "https://www.rickylin.us/about";
        } else if (item === "Home") {
            window.location.href = "https://www.rickylin.us/";
        } else {
            window.location.href = "https://www.rickylin.us/RickyLin";
        }
    };

    const toggleIcons = () => {
        setShowIcons(!showIcons);
    };

    return (
        <div className="flex justify-between items-center">
            {/* Left content */}
            <div className="left-content flex items-center">
                <div className="white-three-stack-icon text-white p-5 rounded-full cursor-pointer" onClick={toggleIcons}>
                    <WhiteThreeStackIcon size={60} />
                </div>
                <div className={`icons-container ${showIcons ? 'show' : ''}`}>
                    <a href="https://www.rickylin.us" className="px-4 text-white font-bold">Home</a>
                    <a href="https://www.rickylin.us/about" className="px-4 text-white font-bold">Resume</a>
                </div>
            </div>

            {/* Conditionally render the search form */}
            {showIcons && (
                <form className='search text-white' onSubmit={handleSearch}>
                    <div className='search__input text-black'>
                        <RainbowSearchIcon className='search__inputIcon' />
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            onClick={handleClick}
                            onBlur={handleBlur}
                        />
                        <RainbowMicIcon />
                        <RainbowCameraAltIcon />
                    </div>

                    {showHistory && (
                        <div className="search__history2 mt-0 rounded-xl" style={{ maxWidth: '556px', margin: '0 auto' }}>
                            {searchHistory.map((item, index) => (
                                <div
                                    key={index}
                                    className="search__historyItem2"
                                    onMouseDown={() => handleSearchHistoryClick(item)}
                                    style={{ color: 'rgb(26, 13, 171)' }}
                                >
                                    <span className='flex items-center gap-3'> <IoMdTime /> {item}</span>
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
                </form>
            )}

            {/* Right content */}
            <div className="right-content flex items-center">
                <div className={`icons-container ${showIcons ? 'show' : ''}`}>
                    <a href="https://www.linkedin.com/in/ricky-lin1" target="_blank" rel="noopener noreferrer" className="px-4 text-white font-bold">Linkedin</a>
                    <a href="https://github.com/rickylin1" target="_blank" rel="noopener noreferrer" className="px-4 text-white font-bold">Github</a>
                </div>
                <div className="white-three-stack-icon text-white p-5 rounded-full cursor-pointer" onClick={toggleIcons}>
                    <img className="pfp rounded-full" src={RLogo} alt="profile" />
                </div>
            </div>
        </div>
    );
};

export default Header;