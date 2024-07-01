import React, {useRef} from 'react';
import { FaRegHeart } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Farewell from './Farewell.tsx';

const Footer = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };
  
  const mainRef = useRef(null);


  return (
    <>
        <Farewell/>

        <div ref={mainRef} className='bg-white py-10'>
            <div className='flex items-center'>
                <span className="pl-40 text-small font-bold text-black pr-2">
                    made in react & tailwind with 
                </span>
                <FaRegHeart className="h-5 w-auto " style = {{color:'black', textShadow: "0 0 10px black" }}/>

                <div className='flex-grow flex justify-end pr-40 z-50'>
                    <a href="https://github.com/rickylin1" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-10 w-auto" style = {{color:'black'}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/ricky-lin1" target="_blank" rel="noopener noreferrer" className="ml-4">
                        <CiLinkedin className="h-10 w-auto" style = {{color:'black'}}/>
                    </a>
                </div>
            </div>

            <div className = "py-10">
                <span className="pl-40 py-10 text-3xl font-bold text-black">
                    Contact Me! 
                </span>
                <div className='pl-40'>
                    <span className="text-3xl font-bold text-black">
                        rickyl3@illinois.edu
                    </span>
                </div>
            </div>
        </div>
    </>
  );
};

export default Footer;