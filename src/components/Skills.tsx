import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const sectionRef = useScrollAnimation();
  const skillsRef = useStaggerAnimation(0.15);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Streamlit", level: 75 },
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "FastAPI", level: 90 },
        { name: "Flask", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "Django", level: 70 },
      ]
    },
    {
      title: "Machine Learning & GenAI",
      skills: [
        { name: "TensorFlow", level: 81 },
        { name: "PyTorch", level: 88 },
        { name: "Deep Neural Networks", level: 85 },
        { name: "LangChain", level: 87 },
        { name: "CrewAI", level: 85 },
      ]
    },
    {
      title: "Data & Vector Stores",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Pinecone", level: 80 },
        { name: "Neo4j", level: 75 },
        { name: "FAISS", level: 80 },
      ]
    },
    {
      title: "MLOps & Tools",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
        { name: "MLflow", level: 75 },
        { name: "DVC", level: 70 },
        { name: "AWS EC2", level: 75 },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "TypeScript", level: 78 },
        { name: "JavaScript", level: 80 },
        { name: "C++", level: 90 },
        { name: "SQL", level: 75 },
      ]
    }
  ];
  

  return (
    <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-b from-black via-gray-950 to-black' : 'bg-gradient-to-b from-gray-50 via-purple-50/30 to-gray-50'
    }`}>
      {/* Section Flow Styling */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Wave separator at top */}
        <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={darkMode ? 'fill-gray-950' : 'fill-gray-200'}></path>
        </svg>
        
        {/* Gradient Orbs */}
        <div className={`${darkMode ? 'opacity-100' : 'opacity-20'}`}>
          <span className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></span>
          <span className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/15 to-pink-600/15 rounded-full blur-3xl animate-pulse delay-500"></span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8" ref={skillsRef}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              whileHover={{
                scale: 1.02,
                y: -10,
                rotateX: 5,
                boxShadow: darkMode ? "0 25px 50px rgba(139, 92, 246, 0.3)" : "0 25px 50px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.4 }}
              className={`p-6 rounded-xl backdrop-blur-sm border transition-all duration-400 ${
                darkMode ? 'bg-white/5 border-white/10' : 'bg-white/70 border-white/90'
              } ${darkMode ? 'shadow-lg hover:shadow-xl' : 'shadow-xl hover:shadow-2xl shadow-purple-200/40 hover:shadow-purple-300/50'}`}
            >
              <h3 className={`text-xl font-bold mb-6 text-center ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 backdrop-blur-sm ${
                      darkMode ? 'bg-white/10' : 'bg-black/10'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;