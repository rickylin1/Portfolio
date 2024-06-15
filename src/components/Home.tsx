import React from 'react'
import '../styles/Home.css'
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import Search from '../components/Search';

const Home = () => {
    return (
        <div className='home'>
          {/* <h1>This is Home Page</h1> */}
    
          <div className='home__header'>
                <div className='home__headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
    
                <div className='home__headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    {/* <Tooltip title="Google Apps"> */}
                    <AppsIcon />
                    {/* </Tooltip> */}
                    {/* <Tooltip title="Google Account"> */}
                      <Avatar />
                    {/* </Tooltip> */}
                </div>
    
          </div>
    
          <div className='home__body'>
              
              <center>
                <img className='woogle__logo' src='woogle.png' alt="googlelogo" />
              </center>
              <p className='woogle__credits'>
                Made with React(love) by WVD
              </p>
              
              <div className='home__inputContainer'>
                  <Search />
    
              </div>
          </div>
        </div>
      )
    
}

export default Home