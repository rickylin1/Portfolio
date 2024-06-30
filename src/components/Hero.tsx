import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import RLogo from '../assets/R.png';
import '../styles/Hero.css';

function Home() {
  const h11 = useRef<HTMLHeadingElement>(null);
  const h12 = useRef<HTMLHeadingElement>(null);
  const h13 = useRef<HTMLHeadingElement>(null);
  const myImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    if (h11.current && h12.current && h13.current && myImageRef.current) {
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
        myImageRef.current,
        {
          x: "200%",
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
        <div>
          <h1
            ref={h11}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            Hi,👋<br></br>My Name is<br></br>
          </h1>
          <h1
            ref={h12}
            className="text-white text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            Ricky
          </h1>
          <h2
            ref={h13}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            I code stuff sometimes
          </h2>
        </div>
        <div className="mt-5 md:mt-0">
          <img
            ref={myImageRef}
            className="w-1/2 md:ml-auto"
            src={RLogo}
            alt="Pavan MG"
          />
        </div>
       </main>
        </div>
  );
}

export default Home;