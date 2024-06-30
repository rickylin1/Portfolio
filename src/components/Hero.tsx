import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import RLogo from '../assets/R.png';
import '../styles/Hero.css';

function Home() {
  const heroSection = useRef<HTMLDivElement>(null);
  const h14 = useRef<HTMLHeadingElement>(null);

  const [index, setIndex] = useState(0);
  const texts = ['Engineer', 'Uni Student', 'Lifter', 'Learner', 'Lover'].map(text => `I am a ${text}`);

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

  // Typing effect logic for changing text every 2 seconds
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(typingInterval); // Cleanup on component unmount
  }, [texts]);

  return (
    <div>
      <main ref={heroSection} className="pt-30 container mx-auto max-width section md:flex justify-between items-center">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="mr-8 md:mr-12">
            <img
              className="w-1/2 md:w-auto" // Adjusted width for responsiveness
              src={RLogo}
              alt="R Logo"
            />
          </div>
          <div>
            <h1
              className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
              style={{
                textShadow: "0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)",
              }} // Text glow effect
            >
              Hi, 👋<br />My Name is<br />
            </h1>
            <h1
              className="text-2xl bg-clip-text bg-gradient md:text-4xl xl:text-5xl xl:leading-tight font-bold"
              style={{
                textShadow: "0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)",
              }} // Text glow effect
            >
              Ricky
            </h1> 
            <h1
              className="text-2xl bg-clip-text bg-gradient md:text-4xl xl:text-5xl xl:leading-tight font-bold"
              style={{
                textShadow: "0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)",
              }} // Text glow effect
            >
              CS & Stats @ UIUC
            </h1>
            <h2
              ref={h14}
              className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
              style={{
                textShadow: "0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)",
              }} // Text glow effect
            >
              {texts[index]}
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;