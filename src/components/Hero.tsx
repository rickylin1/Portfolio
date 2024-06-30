import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import RLogo from '../assets/R.png';
import '../styles/Hero.css';

function Home() {
  const heroSection = useRef<HTMLDivElement>(null);
  const h14 = useRef<HTMLHeadingElement>(null);

  const [index, setIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const texts = ['Engineer', 'Uni Student', 'Lifter', 'Learner', 'Friend', 'Son'].map(text => `I am a ${text}`);

  const greetings = [
    { lang: 'English', text: 'Hi' },
    { lang: 'French', text: 'Bonjour' },
    { lang: 'Spanish', text: 'Hola' },
    { lang: 'German', text: 'Hallo' },
    { lang: 'Italian', text: 'Ciao' },
    { lang: 'Russian', text: 'Привет' },
    { lang: 'Japanese', text: 'こんにちは' },
    { lang: 'Arabic', text: 'مرحباً' },
    { lang: 'Chinese', text: '你好' },
    { lang: 'Portuguese', text: 'Olá' },
    { lang: 'Korean', text: '안녕하세요' },
    { lang: 'Hindi', text: 'नमस्ते' },
    { lang: 'Bengali', text: 'হ্যালো' },
    { lang: 'Turkish', text: 'Merhaba' },
    { lang: 'Dutch', text: 'Hallo' },
    { lang: 'Swedish', text: 'Hej' },
    { lang: 'Thai', text: 'สวัสดี' },
    { lang: 'Greek', text: 'Γεια σας' },
    { lang: 'Vietnamese', text: 'Xin chào' },
    { lang: 'Hebrew', text: 'שלום' },
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    if (heroSection.current && h14.current) {
      tl.from(
        heroSection.current,
        {
          x: "-30px", // Shift left by 30px
          duration: 1,
          ease: "Power3.easeOut",
        }
      ).from(
        ".text-dark-heading, .text-light-heading, .bg-gradient", // Select all headings with these classes
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
          stagger: 0.2, // Stagger animation for each heading
        },
        "<"
      );

      // Return a cleanup function to ensure animation runs only once
      return () => {
        tl.kill(); // Kill the animation timeline
      };
    }
  }, []); // Run once on mount

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % greetings.length);
    }, 2000); // Change greeting every 2 seconds

    return () => clearInterval(typingInterval); // Cleanup on component unmount
  }, []);

  const handleTextClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="pl-0 ml-0 mr-0 bg-black">
      <main ref={heroSection} className="mainHero pt-30 container mx-auto max-width section md:flex justify-between items-center pl-0 ml-0 mr-0">
        <div className="flex flex-col md:flex-row items-center md:items-start ml-0 pl-0">
        {/* <div className="flex flex-col md:flex-row items-center md:items-start ml-0 pl-0 bg-blue-500"> */}
          
          {/* <div className="pl-0 ml-0">
            <img
              className="w-1/2 md:w-auto" // Adjusted width for responsiveness
              src={RLogo}
              alt="R Logo"
            />
          </div> */}
          <div>
            <h1
              className="text-white text-4xl text-dark-heading dark:text-light-heading md:text-6xl xl:text-7xl xl:leading-tight font-bold"
              style={{
                textShadow: "0 0 64px white",
              }} 
            >
              {greetings[index % greetings.length].text}<br />I'm<br />
            </h1>
            <h1
              className="text-white text-4xl bg-clip-text bg-gradient md:text-6xl xl:text-7xl xl:leading-tight font-bold"
              style={{
                textShadow: "0 0 64px white",
              }} 
            >
              Ricky
            </h1> 
            <h1
              className="text-white text-4xl bg-clip-text bg-gradient md:text-6xl xl:text-7xl xl:leading-tight font-bold"
              style={{
                textShadow: "0 0 64px white",
              }} 
            >
              CS & Stats @ UIUC
            </h1>
            <h2
              ref={h14}
              className="text-white text-4xl text-dark-heading dark:text-light-heading md:text-6xl xl:text-7xl xl:leading-tight font-bold"
              style={{
                textShadow: "0 0 64px white",
              }} 
            >
              {texts[index % texts.length]}
            </h2>
            <div 
              onClick={handleTextClick}
              className={`text-lg ${isClicked ? 'text-blue-500' : 'text-white'} text-dark-heading dark:text-light-heading font-bold cursor-pointer`}
              style={{
                textShadow: "0 0 16px white", // Adjusted for smaller text
              }} 
            >
              *Click to change color
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;