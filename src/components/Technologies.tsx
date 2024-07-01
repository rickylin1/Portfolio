import React from 'react'
import { FaPython } from "react-icons/fa";
import SkillCard from './SkillCard';


const Technologies = () => {
    const skills = [
        { title: 'ReactJS', icon: 'react' },
        { title: 'Python', icon: 'python' },
        // Add more skills as needed
      ];


  return (
    <div className="bg-white p-8">
    <h1 className="text-4xl font-bold mb-4">Technologies</h1>
    <p className="text-lg">
        Frontend
        <FaPython/>
    </p>
    {/* <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} title={skill.title} icon={skill.icon} />
            ))}
          </div>
        </div> */}
  </div>
  )
}

export default Technologies