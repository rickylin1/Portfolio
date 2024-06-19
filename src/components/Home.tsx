import React from 'react'
import '../styles/Home.css'
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import Search from '../components/Search';
import RLogo from '../assets/R.png'
import Google from '../assets/Google.png'

const Home = () => {
    return (
        <div className='home'>
    
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
                      <img className = "pfp" src = {RLogo}></img>
                    {/* </Tooltip> */}
                </div>
    
          </div>
    
          <div className='home__body'>
              
              <center>
                <img className = "Googlelogo" src= {Google} alt="googlelogo" />
              </center>
              <p className='google__credits'>
                Made with love by Ricky
              </p>
              
              <div className='home__inputContainer'>
                  <Search />
    
              </div>
          </div>
        </div>
      )
    
}

export default Home