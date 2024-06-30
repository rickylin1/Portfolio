import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import RLogo from '../assets/R.png';
import '../styles/Hero.css';

function Home() {
  const h11 = useRef<HTMLHeadingElement>(null);
  const h12 = useRef<HTMLHeadingElement>(null);
  const h13 = useRef<HTMLHeadingElement>(null);
  const h14 = useRef<HTMLHeadingElement>(null);
  const myImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    if (h11.current && h12.current && h13.current && h14.current && myImageRef.current) {
      tl.from(
        h11.current,
        {
          x: "-100%",
          delay: 0.8,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h14.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myImageRef.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
    }
  }, []);

  return (
    <div>
      <main className="pt-30 container mx-auto max-width section md:flex justify-between items-center">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="mr-8 md:mr-12">
            <img
              ref={myImageRef}
              className="w-1/2 md:w-auto" // Adjusted width for responsiveness
              src={RLogo}
              alt="R Logo"
            />
          </div>
          <div>
            <h1
              ref={h11}
              className="text-stone-400 text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
            >
              Hi, 👋<br />My Name is<br />
            </h1>
            <h1
              ref={h12}
              className="text-black text-2xl bg-clip-text bg-gradient md:text-4xl xl:text-5xl xl:leading-tight font-bold"
            >
              Ricky
            </h1> 
            <h1
              ref={h13}
              className="text-stone-400 text-2xl bg-clip-text bg-gradient md:text-4xl xl:text-5xl xl:leading-tight font-bold"
            >
              CS & Stats @ UIUC
            </h1>
            <h2
              ref={h14}
              className="text-stone-400 text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
            >
              I code stuff sometimes
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;