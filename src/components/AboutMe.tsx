import React from 'react';
import { IoBuild } from "react-icons/io5";
import { GiBulletBill } from "react-icons/gi";
import { PiBridgeLight } from "react-icons/pi";
import { IoFastFood } from "react-icons/io5";
import { HiComputerDesktop } from "react-icons/hi2";

const AboutMe = () => {
  return (
    <main className="pl-40 flex">
      <div className="bg-white p-8">
        <h1 className="text-black text-4xl md:text-6xl xl:text-7xl xl:leading-tight font-bold"
            style={{ textShadow: "0 0 100px black" }}>
          <IoBuild className="inline-block text-5xl mr-4" /> About Me
        </h1>

        <p className="text-4xl font-bold mb-4 pt-">
          Always excited to <span className="text-white" style={{ textShadow: "0 0 10px gray" }}>build!</span>
        </p>

        <div className="py-5">

          <div className="flex items-center text-2xl mb-5 font-bold">
            <GiBulletBill className="text-5xl mr-4" />
            <p>Learning...</p>
          </div>

          <div className="flex items-center text-2xl mb-5 font-bold">
            <PiBridgeLight className="text-5xl mr-4" />
            <p>From the bay</p>
          </div>

          <div className="flex items-center text-2xl mb-5 font-bold">
            <HiComputerDesktop className="text-5xl mr-4" />
            <p>with tech</p>
          </div>

          <div className="flex items-center text-2xl font-bold">
            <IoFastFood className="text-5xl mr-4" />
            <p>and food!!!</p>
          </div>
        </div>
      </div>

      <div className="p-8 ml-8 flex justify-center items-center">
        <div>
          <p className="text-2xl mb-4 mt-0">
            I'm a junior in the Computer Science & Statistics Major at the University of Illinois at Urbana-Champaign.
          </p>
          <p className="text-2xl mb-4">
            Strong background focused on web development, algorithms, systems, and data manipulation.
          </p>
          <p className="text-2xl mb-4">
            Currently learning deep learning, cloud computing, and other ML techniques.
          </p>
          <p className="text-2xl mb-4">
            Hope to engineer impactful applications that change lives.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;