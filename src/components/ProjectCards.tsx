import React from "react";
import MosaicImage from "../assets/MosaicApp.png";
import ChessImage from "../assets/ChessImage.png";
import PoliticalImage from '../assets/Political.jpg'
import Popup from './Popup.tsx'

import {
  FaReact,
  FaNode,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaSwift,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import { IoLogoFirebase } from "react-icons/io5";
import {
  SiPostman,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiAuth0,
  SiOpencv,
  SiThreedotjs,
  SiTailwindcss,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiNumpy,
  SiFlask,
  SiPandas,
  SiSelenium,
  SiAmazonec2,
  SiAwslambda,
  SiFirebase,
} from "react-icons/si";
import { TbBrandTypescript, TbBrandCpp, TbBrandCoinbase } from "react-icons/tb";

const ProjectCards = () => {
  const projects = [
    {
      title: "Harmonic Mosaic Art Mobile App",
      imageUrl: MosaicImage,
      githubUrl: "https://github.com/rickylin1/Harmonic-Mosaic-Art",
      description:
        "Designed a Spotify album cover reconstruction algorithm comprised of color harmonic images dynamically modified using PIL to visualize genres and emotions. Developed 89% accurate XGBoost gradient classifier trained on GTZAN Kaggle dataset to predict track genres using Short-time Fourier Transformations, Mel-Frequency Cepstral Coefficients, and Label Encoding via Librosa.",
      technologies: [
        "FaPython",
        "FaSwift",
        "IoLogoFirebase",
        "SiPandas",
        "SiScikitlearn",
        "SiAuth0",
      ],
    },
    {
      title: "AI Chess Engine Web App",
      imageUrl: ChessImage,
      githubUrl: "https://github.com/rickylin1/Ai-Chess-Engine",
      description:
        "Built with minimax backtracking algorithm optimized with alpha-beta pruning capable of reading 35^10 moves ahead. Designed RESTful Flask API with Postman to retrieve and interact with React UI chessboard data via a proxy. Containerized Docker images through Docker Compose to streamline deployment across development and production.",
      technologies: [
        "FaPython",
        "FaReact",
        "FaDocker",
        "TbBrandTypescript",
        "SiTailwindcss",
        "FaHtml5",
        "SiPostman",
      ],
    },
    {
      title: "2024 Election Political Bias Visualizer",
      imageUrl: PoliticalImage,
      githubUrl: "https://github.com/rickylin1/2024-Political-Bias-Visualizer",
      description:
        "Fine-tuned tensorflow model to analyze 15 popular new sources such as NY Times, NBC, and Fox News for bias. Web scraped text and audio data with Selenium and parsed with BeautifulSoup and analyzed via Gensim LLM. Converted multilingual news audio sources to text via OpenAI Whisper API model",
      technologies: [
        "SiTensorflow",
        "FaPython",
        "SiSelenium",
        "SiPandas",
        "SiScikitlearn",

      ], // Example technologies used
    },
  ];

  // Function to map technologies to icons or images
  const mapTechnologiesToIcons = (technologies) => {
    return technologies.map((tech, index) => {
      let iconComponent = null;

      // Switch case to map each technology to its respective icon or image
      switch (tech) {
        case "FaReact":
          iconComponent = <FaReact className="inline-block h-8 w-8 mx-1" />;
          break;
        case "SiPostman":
          iconComponent = <SiPostman className="inline-block h-8 w-8 mx-1" />;
          break;
        case "FaPython":
          iconComponent = <FaPython className="inline-block h-8 w-8 mx-1" />;
          break;
        case "FaNode":
          iconComponent = <FaNode className="inline-block h-8 w-8 mx-1" />;
          break;
        case "FaHtml5":
          iconComponent = <FaHtml5 className="inline-block h-8 w-8 mx-1" />;
          break;
        case "FaCss3Alt":
          iconComponent = <FaCss3Alt className="inline-block h-8 w-8 mx-1" />;
          break;
        case "FaJs":
          iconComponent = <FaJs className="inline-block h-8 w-8 mx-1" />;
          break;
        case "FaJava":
          iconComponent = <FaJava className="inline-block h-8 w-8 mx-1" />;
          break;
        case "FaSwift":
          iconComponent = <FaSwift className="inline-block h-8 w-8 mx-1" />;
          break;
        case "FaDocker":
          iconComponent = <FaDocker className="inline-block h-8 w-8 mx-1" />;
          break;
        case "FaAws":
          iconComponent = <FaAws className="inline-block h-8 w-8 mx-1" />;
          break;
        case "IoLogoFirebase":
          iconComponent = (
            <IoLogoFirebase className="inline-block h-8 w-8 mx-1" />
          );
          break;
        case "SiMongodb":
          iconComponent = <SiMongodb className="inline-block h-8 w-8 mx-1" />;
          break;
        case "SiPostgresql":
          iconComponent = (
            <SiPostgresql className="inline-block h-8 w-8 mx-1" />
          );
          break;
        case "SiGit":
          iconComponent = <SiGit className="inline-block h-8 w-8 mx-1" />;
          break;
        case "SiAuth0":
          iconComponent = <SiAuth0 className="inline-block h-8 w-8 mx-1" />;
          break;
        case "SiOpencv":
          iconComponent = <SiOpencv className="inline-block h-8 w-8 mx-1" />;
          break;
        case "SiThreedotjs":
          iconComponent = (
            <SiThreedotjs className="inline-block h-8 w-8 mx-1" />
          );
          break;
        case "SiTailwindcss":
          iconComponent = (
            <SiTailwindcss className="inline-block h-8 w-8 mx-1" />
          );
          break;
        case "SiScikitlearn":
          iconComponent = (
            <SiScikitlearn className="inline-block h-8 w-8 mx-1" />
          );
          break;
        case "SiPytorch":
          iconComponent = <SiPytorch className="inline-block h-8 w-8 mx-1" />;
          break;
        case "SiTensorflow":
          iconComponent = (
            <SiTensorflow className="inline-block h-8 w-8 mx-1" />
          );
          break;
        case "SiNumpy":
          iconComponent = <SiNumpy className="inline-block h-8 w-8 mx-1" />;
          break;
        case "SiFlask":
          iconComponent = <SiFlask className="inline-block h-8 w-8 mx-1" />;
          break;
        case "SiPandas":
          iconComponent = <SiPandas className="inline-block h-8 w-8 mx-1" />;
          break;
        case "SiSelenium":
          iconComponent = <SiSelenium className="inline-block h-8 w-8 mx-1" />;
          break;
        case "SiAmazonec2":
          iconComponent = <SiAmazonec2 className="inline-block h-8 w-8 mx-1" />;
          break;
        case "SiAwslambda":
          iconComponent = <SiAwslambda className="inline-block h-8 w-8 mx-1" />;
          break;
        case "TbBrandTypescript":
          iconComponent = (
            <TbBrandTypescript className="inline-block h-8 w-8 mx-1" />
          );
          break;
        case "TbBrandCpp":
          iconComponent = <TbBrandCpp className="inline-block h-8 w-8 mx-1" />;
          break;
        case "TbBrandCoinbase":
          iconComponent = (
            <TbBrandCoinbase className="inline-block h-8 w-8 mx-1" />
          );
          break;
        // Add more cases for other technologies as needed
        default:
          iconComponent = ""; // Placeholder for other technologies
      }

      return iconComponent;
    });
  };
  return (
<div className="bg-black pb-40">
  <div className="py-20 text-5xl text-center text-white font-bold">
    <span className="text-white">Projects</span>
  </div>

  <div className="text-large text-center text-white font-bold">
    <span className="text-white">Click to learn more!</span>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-10 py-6">
    {projects.map((project, index) => (
      <a
        href={project.githubUrl}
        key={index}
        target="_blank"
        rel="noopener noreferrer"
        className="z-40"
      >
        <div
          className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl cursor-pointer flex flex-col justify-between"
          style={{ width: "100%", maxWidth: "350px", minHeight: "500px", margin: "auto" }}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="mx-auto"
            style={{ width: "100%", height: "200px", objectFit: "contain" }}
          />
          <p className="text-center text-xl font-bold">{project.title}</p>
          <p
            className="text-center text-gray-600 flex-grow"
            style={{
              minHeight: "310px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {project.description}
          </p>
          <div className="text-center mt-2 flex-grow">
            {mapTechnologiesToIcons(project.technologies)}
          </div>
        </div>
      </a>
    ))}
  </div>
</div>
  );
};

export default ProjectCards;
