import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Typing from 'react-typing-effect';
import '../styles/Hero.css';

function Home() {
  const heroSection = useRef<HTMLDivElement>(null);
  const [showTyping, setShowTyping] = useState(false);

  const texts = [
    'My friend', 'Mon ami', 'Mi amigo', 'Mein Freund', 'Mio amico', 'Мой друг', '私の友達', 'صديقي', '我的朋友', 'Meu amigo', '내 친구', 'मेरे दोस्त', 'আমার বন্ধু', 'Arkadaşım', 'Min ven', 'เพื่อนของฉัน', 'Ο φίλος μου', 'Bạn của tôi', 'החבר שלי'
  ];

  const farewells = [
    'Goodbye', 'Au revoir', 'Adiós', 'Auf Wiedersehen', 'Addio', 'До свидания', 'さようなら', 'وداعاً', '再见', 'Adeus', '안녕히 가세요', 'अलविदा', 'বিদায়', 'Güle güle', 'Farvel', 'ลาก่อน', 'Αντίο', 'Tạm biệt', 'להתראות'
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    if (heroSection.current) {
      tl.from(
        heroSection.current,
        {
          x: "-30px", // Shift left by 30px
          duration: 1,
          ease: "Power3.easeOut",
        }
      ).add(() => {
        // Wait for 1 second then show typing effect
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

  return (
    <div className="py-20 pl-0 ml-0 mr-0 bg-black">
      <main ref={heroSection} className="pl-40 flex justify-between items-center h-1/3">
        <div className="flex flex-col items-start">
          {showTyping ? (
            <>
              <Typing
                text={farewells}
                speed={100}
                eraseSpeed={50}
                eraseDelay={2000}
                typingDelay={500}
                className="text-white text-4xl text-dark-heading dark:text-light-heading md:text-6xl xl:text-7xl xl:leading-tight font-bold"
                style={{ textShadow: "0 0 64px white" }}
              />
              <Typing
                text={texts}
                speed={100}
                eraseSpeed={50}
                eraseDelay={2000}
                typingDelay={500}
                className="text-white text-4xl text-dark-heading dark:text-light-heading md:text-6xl xl:text-7xl xl:leading-tight font-bold mt-4"
                style={{ textShadow: "0 0 64px white" }}
              />
            </>
          ) : (
            <h1
              className="text-white text-4xl text-dark-heading dark:text-light-heading md:text-6xl xl:text-7xl xl:leading-tight font-bold"
              style={{ textShadow: "0 0 64px white" }}
            >
              {/* Placeholder for timing */}
            </h1>
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;