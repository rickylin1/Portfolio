import React from 'react';
import { 
    FaReact, FaNode, FaPython, FaHtml5, FaCss3Alt, FaJs, FaJava, FaSwift, 
    FaDocker, FaAws
} from 'react-icons/fa';

import { IoLogoFirebase } from "react-icons/io5";
import { SiPostman, SiMongodb, SiPostgresql, SiGit, SiAuth0, SiOpencv, SiThreedotjs, SiTailwindcss, SiScikitlearn, SiPytorch, SiTensorflow, SiNumpy, SiFlask, SiPandas, SiSelenium, SiAmazonec2, SiAwslambda} from "react-icons/si";
import { TbBrandTypescript, TbBrandCpp, TbBrandCoinbase } from "react-icons/tb";

const Technologies = () => {
    const technologies = [
        { icon: <FaReact size={100} />, name: "React" },
        { icon: <FaNode size={100} />, name: "Node.js" },
        { icon: <FaHtml5 size={100} />, name: "HTML" },
        { icon: <FaCss3Alt size={100} />, name: "CSS" },
        { icon: <SiTailwindcss size={100} />, name: "Tailwind CSS" },
        { icon: <SiThreedotjs size={100} />, name: "ThreeJS" },
        { icon: <FaJs size={100} />, name: "JavaScript" },
        { icon: <TbBrandTypescript size={100} />, name: "TypeScript" },
        { icon: <FaPython size={100} />, name: "Python" },
        { icon: <FaJava size={100} />, name: "Java" },
        { icon: <TbBrandCpp size={100} />, name: "C++" },
        { icon: <TbBrandCoinbase size={100} />, name: "C" },
        { icon: <FaSwift size={100} />, name: "Swift" },
        { icon: <SiFlask size={100} />, name: "Flask" },
        { icon: <SiPostman size={100} />, name: "Postman" },
        { icon: <SiPandas size={100} />, name: "Pandas" },
        { icon: <SiNumpy size={100} />, name: "Numpy" },
        { icon: <SiSelenium size={100} />, name: "Selenium" },
        { icon: <SiScikitlearn size={100} />, name: "Scikit-learn" },
        { icon: <SiTensorflow size={100} />, name: "Tensorflow" },
        { icon: <SiPytorch size={100} />, name: "Pytorch" },
        { icon: <SiOpencv size={100} />, name: "OpenCV" },
        { icon: <FaDocker size={100} />, name: "Docker" },
        { icon: <SiAuth0 size={100} />, name: "O-Auth" },
        { icon: <SiGit size={100} />, name: "Git" },
        { icon: <SiAmazonec2 size={100} />, name: "AWS EC2" },
        { icon: <SiAwslambda size={100} />, name: "AWS Lambda" },
        { icon: <SiMongodb size={100} />, name: "MongoDB" },
        { icon: <SiPostgresql size={100} />, name: "Postgre SQL" },
        { icon: <IoLogoFirebase size={100} />, name: "Google Firebase" },

    ];

    return (
        <div className="bg-white p-8 text-center">
            <h1 className="text-black text-5xl font-bold mb-8 relative">
                <span className="glow-text" style={{ textShadow: "0 0 5px #ccc, 0 0 10px #ccc, 0 0 15px #ccc, 0 0 20px #ccc, 0 0 25px #ccc, 0 0 30px #ccc, 0 0 35px #ccc, 0 0 40px #ccc" }}>Technologies</span>
            </h1>

            <div className="grid grid-cols-5 gap-8">
                {technologies.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {tech.icon}
                        <p className="mt-2 font-bold">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Technologies;