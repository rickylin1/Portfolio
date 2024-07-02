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

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [redirectToResume, setRedirectToResume] = useState(false);
    const [redirectToHome, setRedirectToHome] = useState(false);
    const [redirectToRickyLin, setRedirectToRickyLin] = useState(false);
    const [hint, setHint] = useState("try searching for Resume");

    useEffect(() => {
        if (hideButtons) {
            console.log('hideButtons is true');
        } else {
            console.log('hideButtons is false');
        }
    }, [hideButtons]);

    useEffect(() => {
        const hints = ["try searching for Ricky Lin", "try searching for Resume", "try searching for Home"];
        //NOTE MAYBE ADD REDIRECT TO PROJECTS OR LINKEDIN OR OTHER THINGS
        let currentHintIndex = 0;

        const intervalId = setInterval(() => {
            currentHintIndex = (currentHintIndex + 1) % hints.length;
            setHint(hints[currentHintIndex]);
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    const search = (e) => {
        e.preventDefault();
        console.log('You hit the Google Search button : ', input);
        let searchresult = input.toLowerCase().trim()
        if(searchresult == 'home'){
            window.location.href = "https://www.rickylin.us/"
            console.log('go home')
        }

        else if(searchresult == 'resume'){
            window.location.href = "https://www.rickylin.us/about"
            console.log('go resume')
        }
        
        else{
        window.location.href = "https://www.rickylin.us/RickyLin"
        }
    };

    return (
        <form className='search'>
            <div className='search__input'>
                <RainbowSearchIcon className='search__inputIcon' />
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
                <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
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