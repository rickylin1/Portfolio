// // SkillCard.js
// import React from 'react';
// import { FaReact, FaPython } from 'react-icons/fa';

// const icons = {
//   react: FaReact,
//   python: FaPython,
//   // Add more icons as needed
// };

// function SkillCard({ skill, title, icon }) {
//   const IconComponent = icons[icon];
  
//   return (
//     <div
//       className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-300"
//       onClick={() => alert(`Clicked on ${title}`)}
//     >
//       <IconComponent className="w-16 h-16 mx-auto text-blue-500" />
//       <h3 className="mt-4 text-xl font-semibold text-center">{title}</h3>
//     </div>
//   );
// }

// export default SkillCard;