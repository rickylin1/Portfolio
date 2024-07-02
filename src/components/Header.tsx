import React, { useState, useEffect, useRef} from 'react';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import RainbowSearchIcon from './RainbowSearch.tsx';
import RainbowMicIcon from './RainbowMic.tsx';
import RainbowCameraAltIcon from './RainbowCamera.tsx';
import RainbowBusinessCenterIcon from './RainbowBusiness.tsx';
import RainbowLightBulb from './RainbowLightbulb.tsx';
import '../styles/Header.css';
import { IoMdTime } from "react-icons/io";
import { CiMenuBurger as WhiteThreeStackIcon } from "react-icons/ci";
import gsap from 'gsap'
import RLogo from '../assets/R.png'

const Header = ({ darkMode = false, hideButtons = true}) => {
    const [input, setInput] = useState("");
    const [hint, setHint] = useState("try searching for Resume");
    const [showHistory, setShowHistory] = useState(false); // State to manage history visibility
    const [toggleShow, setToggleShow] = useState(false)

    const searchHistory = ["Ricky Lin", "Resume", "Home"]; // Your search history array

    const headerRef = useRef(null);

    useEffect(() => {
        // Ensure headerRef is available before animating
        console.log('enter effect')
        if (headerRef.current) {
            // Example animation using gsap
            gsap.from(headerRef.current, {
                opacity: 0,
                y: -50,
                duration: 1,
                ease: 'power3.out',
            });
        }
    }, []);
    

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
        if (item === 'Resume') {
            window.location.href = "https://www.rickylin.us/about"
        } else if (item === "Home") {
            window.location.href = "https://www.rickylin.us/"
        } else {
            window.location.href = "https://www.rickylin.us/RickyLin"
        }
    };

    // Conditional rendering based on toggleShow prop
    if (!toggleShow) {
        return (
            <div className = 'flex'>
                <div className="mr-auto" style={{ position: 'relative', zIndex: 9999 }}>
                    <div className="white-three-stack-icon text-white p-5 rounded-full cursor-pointer ml-auto" onClick={() => setToggleShow(true)}>
                        <WhiteThreeStackIcon size={60} />
                    </div>
                </div>

                <div>
                    <div className="align-middle white-three-stack-icon text-white p-5 rounded-full cursor-pointer ml-auto" onClick={() => setToggleShow(true)}>
                    <img className="pfp rounded-full mb-3" src={RLogo} alt="profile" />
                            <span className="text-white text-large bg-clip-text bg-gradient font-bold"
                            style={{ textShadow: "0 0 64px white" }}>Ricky</span>
                        </div>
                </div>
            </div>
        );
    }
    return (
        <div ref={headerRef} className="home__header bg-white m-5" style={{ padding: '8px', borderRadius: '20px' }}>
            <div className='home__headerLeft flex items-center'>
                <div className="white-three-stack-icon text-black p-3 rounded-full cursor-pointer ml-4" onClick={() => setToggleShow(false)}>
                    <WhiteThreeStackIcon size={60} />
                </div>
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