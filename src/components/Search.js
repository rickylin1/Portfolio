import React, { useState, useEffect } from 'react';
import '../styles/Search.css';
import RainbowSearchIcon from './RainbowSearch.tsx';
import { Button } from '@mui/material';
import { useStateValue } from '../pages/StateProvider.js';
import { actionTypes } from '../reducer.js';
import { Link } from "react-router-dom";
import RainbowMicIcon from './RainbowMic.tsx';
import RainbowCameraAltIcon from './RainbowCamera.tsx';
import RainbowBusinessCenterIcon from './RainbowBusiness.tsx';
import RainbowLightBulb from './RainbowLightbulb.tsx';
import { IoMdTime } from "react-icons/io";

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [redirectToResume, setRedirectToResume] = useState(false);
    const [redirectToHome, setRedirectToHome] = useState(false);
    const [redirectToRickyLin, setRedirectToRickyLin] = useState(false);
    const [hint, setHint] = useState("try searching for Resume");
    const [showHistory, setShowHistory] = useState(false);

    const searchHistory = ["Ricky Lin", "Resume", "Home"];

    useEffect(() => {
        if (hideButtons) {
            console.log('hideButtons is true');
        } else {
            console.log('hideButtons is false');
        }
    }, [hideButtons]);

    useEffect(() => {
        const hints = ["try searching for Ricky Lin", "try searching for Resume", "try searching for Home"];
        let currentHintIndex = 0;

        const intervalId = setInterval(() => {
            currentHintIndex = (currentHintIndex + 1) % hints.length;
            setHint(hints[currentHintIndex]);
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    const handleClick = () => {
        setShowHistory(true);
    };

    const handleBlur = () => {
        setTimeout(() => setShowHistory(false), 100); // Delay to allow click on history items
    };

    const handleSearchHistoryClick = (item) => {
        setInput(item);
        setShowHistory(false);
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

    const search = (e) => {
        e.preventDefault();
        console.log('You hit the Google Search button : ', input);
        let searchresult = input.toLowerCase().trim();
        if (searchresult === 'home') {
            window.location.href = "https://www.rickylin.us/";
            console.log('go home');
        } else if (searchresult === 'resume') {
            window.location.href = "https://www.rickylin.us/about";
            console.log('go resume');
        } else {
            window.location.href = "https://www.rickylin.us/RickyLin";
        }
    };

    return (
        <form className='search' onSubmit={search}>
            <div className='search__inputContainer'>
                <div className='search__input'>
                    <RainbowSearchIcon/>
                    <input
                        value={input}
                        onChange={(e) => {
                            console.log('Input changed:', e.target.value);
                            let normalizedInput = e.target.value.toLowerCase().trim();
                            if (normalizedInput === "resume") {
                                setRedirectToResume(true);
                            } else {
                                setRedirectToResume(false);
                            }

                            if (normalizedInput === "home") {
                                setRedirectToHome(true);
                            } else {
                                setRedirectToHome(false);
                            }

                            if (normalizedInput === "ricky lin") {
                                setRedirectToRickyLin(true);
                            } else {
                                setRedirectToRickyLin(false);
                            }
                            setInput(e.target.value);
                        }}
                        onClick={handleClick}
                        onBlur={handleBlur}
                    />
                    <RainbowMicIcon />
                    <div className='icons'></div>
                    <RainbowCameraAltIcon />
                </div>
                {showHistory && (
                    <div className="search__history mt-20 rounded-xl">
                        {searchHistory.map((item, index) => (
                            <div
                            key={index}
                            className="search__historyItem"
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
    );
}

export default Search;