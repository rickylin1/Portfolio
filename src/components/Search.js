import React, { useState, useEffect } from 'react';
import '../styles/Search.css';
import SearchIcon from "@mui/icons-material/Search";
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
    const [hint, setHint] = useState("try searching for Ricky Lin");

    useEffect(() => {
        const hints = ["try searching for Ricky Lin", "try searching for home"];
        let currentHintIndex = 0;

        const intervalId = setInterval(() => {
            currentHintIndex = (currentHintIndex + 1) % hints.length;
            setHint(hints[currentHintIndex]);
        }, 3000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    const search = (e) => {
        e.preventDefault();
        console.log('You hit the Google Search button : ', input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        });
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
                        if (normalizedInput === "ricky lin") {
                            setRedirectToResume(true);
                        } else {
                            setRedirectToResume(false);
                        }
                        if (normalizedInput === "home") {
                            setRedirectToHome(true);
                        } else {
                            setRedirectToHome(false);
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
        

            <div className='test search__buttons'>
                
                <Button className={hideButtons ? 'search__buttonsHidden' : ''} type='submit' onClick={search} variant="outlined">Google Search</Button>
                <Button className={hideButtons ? 'search__buttonsHidden' : ''} variant="outlined">I'm Feeling Lucky</Button>
            </div>

                 <div className={`resume ${redirectToResume ? 'resume-visible' : 'resume-hidden'}`}>
                {redirectToResume && (
                    <>
                        <RainbowBusinessCenterIcon />
                        <Link to='/about'>Hidden Resume!</Link>
                        <RainbowBusinessCenterIcon />
                    </>
                )}
            </div>

            <div className={`home ${redirectToHome ? 'home-visible' : 'home-hidden'}`}>
                {redirectToHome && (
                    <>
                        <RainbowBusinessCenterIcon />
                        <Link to='/'>Welcome Home!</Link>
                        <RainbowBusinessCenterIcon />
                    </>
                )}
            </div>
        </form>
    );
}

export default Search;
