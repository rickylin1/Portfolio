import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Typing from 'react-typing-effect';
import RLogo from '../assets/R.png';
import '../styles/Hero.css';

function Home() {
  const heroSection = useRef<HTMLDivElement>(null);
  const h1Ref1 = useRef<HTMLHeadingElement>(null);
  const h1Ref2 = useRef<HTMLHeadingElement>(null);
  const h1Ref3 = useRef<HTMLHeadingElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [showTyping, setShowTyping] = useState(false);

  const texts = ['Engineer.', '<Athlete>','print(Uni Student)',  '#Problem Solver', '.Gym Rat',  '<Developer/>','def Friend():', 'void Creator()', ].map(text => `I am a ${text}`);

  const greetings = [
    'Hi', 'Bonjour', 'Hola', 'Hallo', 'Ciao', 'Привет', 'こんにちは', 'مرحباً', '你好', 'Olá', '안녕하세요', 'नमस्ते', 'হ্যালো', 'Merhaba', 'Hallo', 'Hej', 'สวัสดี', 'Γεια σας', 'Xin chào', 'שלום'
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    if (heroSection.current && h1Ref1.current && h1Ref2.current && h1Ref3.current) {
      tl.from(
        heroSection.current,
        {
          x: "-30px", // Shift left by 30px
          duration: 1,
          ease: "Power3.easeOut",
        }
      ).from(
        h1Ref1.current,
        {
          x: "-100%",
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<"
      ).from(
        h1Ref2.current,
        {
          x: "-100%",
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<0.2"
      ).from(
        h1Ref3.current,
        {
          x: "-100%",
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<0.2"
      ).add(() => {
        // Wait for 1 seconds then show typing effect
        setTimeout(() => {
          setShowTyping(true);
        }, 1000);
      });

      // Return a cleanup function to ensure animation runs only once
      return () => {
        tl.kill(); // Kill the animation timeline
      };
    }
  }, []); // Run once on mount

  const handleTextClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="pl-0 ml-0 mr-0 bg-black">
      <main ref={heroSection} className="mainHero pt-30 container mx-auto max-width section md:flex justify-between items-center pl-0 ml-0 mr-0">
        <div className="flex flex-col md:flex-row items-center md:items-start ml-0 pl-0">
          <div>
            {showTyping ? (
              <Typing
                text={greetings}
                speed={100}
                eraseSpeed={50}
                eraseDelay={2000}
                typingDelay={500}
                className="text-white text-4xl text-dark-heading dark:text-light-heading md:text-6xl xl:text-7xl xl:leading-tight font-bold"
                style={{ textShadow: "0 0 64px white" }}
              />
            ) : (
              <h1
                className="text-white text-4xl text-dark-heading dark:text-light-heading md:text-6xl xl:text-7xl xl:leading-tight font-bold"
                style={{ textShadow: "0 0 64px white" }}
              >
                {/* Placeholder for timing */}
              </h1>
            )}
            <h1
              ref={h1Ref1}
              className="text-white text-4xl bg-clip-text bg-gradient md:text-6xl xl:text-7xl xl:leading-tight font-bold"
              style={{ textShadow: "0 0 64px white" }}
            >
              I'm
            </h1>
            <h1
              ref={h1Ref2}
              className="text-white text-4xl bg-clip-text bg-gradient md:text-6xl xl:text-7xl xl:leading-tight font-bold"
              style={{ textShadow: "0 0 64px white" }}
            >
              Ricky
            </h1>
            <h1
              ref={h1Ref3}
              className="text-white text-4xl bg-clip-text bg-gradient md:text-6xl xl:text-7xl xl:leading-tight font-bold"
              style={{ textShadow: "0 0 64px white" }}
            >
              CS & Stats @ UIUC
            </h1>
            {showTyping && (
              <Typing
                text={texts}
                speed={100}
                eraseSpeed={50}
                eraseDelay={2000}
                typingDelay={500}
                className="text-white text-4xl text-dark-heading dark:text-light-heading md:text-6xl xl:text-7xl xl:leading-tight font-bold"
                style={{ textShadow: "0 0 64px white" }}
              />
            )}
            {/* <div 
              onClick={handleTextClick}
              className={`text-lg ${isClicked ? 'text-blue-500' : 'text-white'} text-dark-heading dark:text-light-heading font-bold cursor-pointer`}
              style={{ textShadow: "0 0 16px white" }}
            >
              *Click to change color
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;