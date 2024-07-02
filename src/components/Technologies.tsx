import React, { useRef, useState, useEffect } from 'react';
import { 
    FaReact, FaNode, FaPython, FaHtml5, FaCss3Alt, FaJs, FaJava, FaSwift, 
    FaDocker, FaAws
} from 'react-icons/fa';
import { IoLogoFirebase } from "react-icons/io5";
import { SiPostman, SiMongodb, SiPostgresql, SiGit, SiAuth0, SiOpencv, SiThreedotjs, SiTailwindcss, SiScikitlearn, SiPytorch, SiTensorflow, SiNumpy, SiFlask, SiPandas, SiSelenium, SiAmazonec2, SiAwslambda } from "react-icons/si";
import { TbBrandTypescript, TbBrandCpp, TbBrandCoinbase } from "react-icons/tb";
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import gsap from 'gsap'

const Technologies = () => {
    const [isGridView, setIsGridView] = useState(true);
    const [currentTechIndex, setCurrentTechIndex] = useState(0);
    const iconRef = useRef(null);


    const technologies = [
        { icon: <FaReact size={isGridView ? 90 : 300} />, name: "React" },
        { icon: <FaNode size={isGridView ? 90 : 300} />, name: "Node.js" },
        { icon: <FaHtml5 size={isGridView ? 90 : 300} />, name: "HTML" },
        { icon: <FaCss3Alt size={isGridView ? 90 : 300} />, name: "CSS" },
        { icon: <SiTailwindcss size={isGridView ? 90 : 300} />, name: "Tailwind CSS" },
        { icon: <SiThreedotjs size={isGridView ? 90 : 300} />, name: "ThreeJS" },
        { icon: <FaJs size={isGridView ? 90 : 300} />, name: "JavaScript" },
        { icon: <TbBrandTypescript size={isGridView ? 90 : 300} />, name: "TypeScript" },
        { icon: <FaPython size={isGridView ? 90 : 300} />, name: "Python" },
        { icon: <FaJava size={isGridView ? 90 : 300} />, name: "Java" },
        { icon: <TbBrandCpp size={isGridView ? 90 : 300} />, name: "C++" },
        { icon: <TbBrandCoinbase size={isGridView ? 90 : 300} />, name: "C" },
        { icon: <FaSwift size={isGridView ? 90 : 300} />, name: "Swift" },
        { icon: <SiFlask size={isGridView ? 90 : 300} />, name: "Flask" },
        { icon: <SiPostman size={isGridView ? 90 : 300} />, name: "Postman" },
        { icon: <SiPandas size={isGridView ? 90 : 300} />, name: "Pandas" },
        { icon: <SiNumpy size={isGridView ? 90 : 300} />, name: "Numpy" },
        { icon: <SiSelenium size={isGridView ? 90 : 300} />, name: "Selenium" },
        { icon: <SiScikitlearn size={isGridView ? 90 : 300} />, name: "Scikit-learn" },
        { icon: <SiTensorflow size={isGridView ? 90 : 300} />, name: "Tensorflow" },
        { icon: <SiPytorch size={isGridView ? 90 : 300} />, name: "Pytorch" },
        { icon: <SiOpencv size={isGridView ? 90 : 300} />, name: "OpenCV" },
        { icon: <FaDocker size={isGridView ? 90 : 300} />, name: "Docker" },
        { icon: <SiAuth0 size={isGridView ? 90 : 300} />, name: "O-Auth" },
        { icon: <SiGit size={isGridView ? 90 : 300} />, name: "Git" },
        { icon: <SiAmazonec2 size={isGridView ? 90 : 300} />, name: "AWS EC2" },
        { icon: <SiAwslambda size={isGridView ? 90 : 300} />, name: "AWS Lambda" },
        { icon: <SiMongodb size={isGridView ? 90 : 300} />, name: "MongoDB" },
        { icon: <SiPostgresql size={isGridView ? 90 : 300} />, name: "Postgre SQL" },
        { icon: <IoLogoFirebase size={isGridView ? 90 : 300} />, name: "Google Firebase" },
    ];


    const handleNext = () => {
        setCurrentTechIndex((prevIndex) => (prevIndex + 1) % technologies.length);
    };

    const handlePrev = () => {
        setCurrentTechIndex((prevIndex) => 
            (prevIndex - 1 + technologies.length) % technologies.length
        );
    };

    useEffect(() => {
        if (iconRef.current) {
            gsap.fromTo(iconRef.current, 
                { x: -1000, opacity: 0, rotationY: -90 }, 
                { x: 0, opacity: 1, rotationY: 0, duration: 2 }
            );
        }
    }, [currentTechIndex]);

    return (
        <div className="z-100 bg-white p-8 text-center py-20 relative">
            <h1 className="text-black text-5xl font-bold relative pb-8">
                <span className="glow-text">Technologies</span>
            </h1>

            <button 
                className="p-3 mb-8 bg-black text-white font-bold rounded-3xl"
                onClick={() => setIsGridView(!isGridView)}
                >
                {isGridView ? "Switch to Dynamic View" : "Switch to Grid View"}
            </button>

            {isGridView ? (
                <div className="z-100 grid grid-cols-5 gap-8">
                    {technologies.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center p-4 bg-white rounded-3xl shadow-lg cursor-pointer">
                            {tech.icon}
                            <p className="mt-2 font-bold">{tech.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="z-100 flex items-center justify-between">
                <button className="flex-start" onClick={handlePrev}>
                    <MdArrowBack size={50} />
                </button>
                <div className="flex flex-col items-center mx-8" ref={iconRef}>
                    {technologies[currentTechIndex].icon}
                    <p className="mt-2 font-bold">{technologies[currentTechIndex].name}</p>
                </div>
                <button className="flex-end" onClick={handleNext}>
                    <MdArrowForward size={50} />
                </button>
            </div>
            )}

         
        </div>
    );
};

export default Technologies;