import React, { useState } from 'react';
import '../styles/Search.css'
import SearchIcon from "@mui/icons-material/Search";
import RainbowSearchIcon from './RainbowSearch.tsx';
import Button from '@mui/material/Button'
//import { Tooltip } from '@mui/core';
// import { useHistory } from 'react-router-dom';
import { useStateValue } from '../pages/StateProvider.js';
import { actionTypes } from '../reducer.js';
import { Link } from "react-router-dom";
import RainbowMicIcon from './RainbowMic.tsx';
import RainbowCameraAltIcon from './RainbowCamera.tsx';
import RainbowBusinessCenterIcon from './RainbowBusiness.tsx';


function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [redirectToResume, setRedirectToResume] = useState(false); 
    // const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        console.log('You hit the Google Search button : ',input);

        //history.push('/search');
        dispatch({
            // eslint-disable-next-line
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        });

        //input to output
        // history.push('/search');

    };

  return (
    <form className='search'>
        <div className='search__input'>
            <RainbowSearchIcon className='search__inputIcon' />
            <input value={input} onChange={(e) => {
                console.log('Input changed:', e.target.value);
                if (e.target.value === "Ricky Lin") {
                    setRedirectToResume(true);
                }
                setInput(e.target.value)
            }
            }/>
            <RainbowMicIcon></RainbowMicIcon>
            <div className='icons'>
                A 
            </div>
            <RainbowCameraAltIcon></RainbowCameraAltIcon>
        </div>
        <div className = 'resume'>
        {redirectToResume && (
            <>
                <RainbowBusinessCenterIcon></RainbowBusinessCenterIcon>

                <Link to='/about'>Hidden Resume!</Link>

                <RainbowBusinessCenterIcon></RainbowBusinessCenterIcon>
                </>
            )}
        </div>

        {!hideButtons ? (
                    <div className='search__buttons'>
                    <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
        ) : (
            <div className='search__buttons'>
            <Button className='search__buttonsHidden' type='submit' onClick={search} variant="outlined" >Google Search</Button>
            <Button className='search__buttonsHidden' variant="outlined" >I'm Feeling Lucky</Button>
        </div>
        )}

         

    </form>
  );
}

export default Search;