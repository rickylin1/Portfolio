import React from "react";
import { IoBuild } from "react-icons/io5";
import { GiBulletBill } from "react-icons/gi";
import { PiBridgeLight } from "react-icons/pi";
import { IoFastFood } from "react-icons/io5";
import { HiComputerDesktop } from "react-icons/hi2";

const AboutMe = () => {
  return (
    <main className="pl-20 flex py-22">
<div className="flex p-8">
  <div className="w-1/2 p-8 py-10 rounded-3xl">
    <h1
      className="text-white text-4xl md:text-6xl xl:text-7xl xl:leading-tight font-bold"
      style={{ whiteSpace: "nowrap" }}
    >
      {/* <IoBuild className="inline-block text-5xl mr-4" /> */}
    </h1>

    <p className="text-white text-4xl font-bold mb-4 pt-">
  Always excited to<br />
  <span
    className="text-white text-4xl bg-clip-text bg-gradient md:text-6xl xl:text-7xl xl:leading-tight font-bold"
    style={{ textShadow: "0 0 64px white" }}
  >
    <IoBuild className="inline-block text-5xl mr-4" />
    build!
  </span>
</p>

    <div className="py-5">
      {/* <div className="text-white flex items-center text-2xl mb-5 font-bold">
        <GiBulletBill className="text-5xl mr-4" />
        <p>Learning...</p>
      </div> */}

      <div className="text-white flex items-center text-2xl mb-5 font-bold">
        <PiBridgeLight className="text-5xl mr-4" />
        <p>bay</p>
      </div>

      <div className="text-white flex items-center text-2xl mb-5 font-bold">
        <HiComputerDesktop className="text-5xl mr-4" />
        <p>tech</p>
      </div>

      <div className="text-white flex items-center text-2xl font-bold">
        <IoFastFood className="text-5xl mr-4" />
        <p>food!!!</p>
      </div>
    </div>
  </div>

  <div className="w-1/2 pl-20 ml-8 content-center text-white font-medium">
    <p className="max-w-3xl text-2xl italic tracking-tighter font-normal text-balance mb-4 mt-4">
      "I'm a junior studying Computer Science & Statistics at the
      University of Illinois at Urbana-Champaign. My background primarily
      focuses on software engineering, algorithms, systems, and data
      manipulation. Currently working on deep learning, cloud computing,
      and other ML techniques. One day, I hope to engineer impactful
      applications that change lives."
    </p>

    <div className="text-center text-white italic tracking-tighter font-normal">
      - me
    </div>
    
    <div className="text-center text-white italic tracking-tighter font-normal">
      circa 2024
    </div>
  </div>
</div>

    </main>
  );
};

export default AboutMe;
