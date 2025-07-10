import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const sectionRef = useScrollAnimation();
  const timelineRef = useStaggerAnimation(0.3);

  const experiences = [
    {
      title: "Research Intern",
      company: "GGSIPU",
      location: "Remote",
      period: "July 2024 - Aug 2024",
      description: "Lead a team of 2 Fellow Mates, and Sutdied About Audio Features ( Spectoral & Temporal Features ) in Depth, And How Audio features  overall ccontributes to a its different classes",
      achievements: [
        "Performed in Depth EDA on audio Features (MFCC, Mel-Spectrogram, chroma, etc.)",
        "Trained Various Different ML Classification Models such as SVM, Random Forest, XGBoost  Achieving only a 76% accuracy.",
        "Experimented with LSTM and CNN Based Multi label Classification.",
        "Architectured a Hybrid LSTM + CNN Model  for best Catching up the both Temporal and Spectral Features and Achieving a Increased accuracy of 86%.",
        "Performed a HyperParameter Tuning on the Final Hybrid model with Optuna"
      ]
    },
    // {
    //   title: "Full Stack Developer",
    //   company: "StartupXYZ",
    //   location: "Austin, TX",
    //   period: "2020 - 2022",
    //   description: "Developed and maintained multiple client projects using React, Node.js, and various databases. Collaborated with design team to implement pixel-perfect UIs.",
    //   achievements: [
    //     "Built 15+ responsive web applications from scratch",
    //     "Optimized database queries improving response time by 35%",
    //     "Integrated third-party APIs and payment systems"
    //   ]
    // },
    // {
    //   title: "Frontend Developer",
    //   company: "WebStudio Pro",
    //   location: "Remote",
    //   period: "2019 - 2020",
    //   description: "Specialized in creating interactive user interfaces and optimizing web performance. Worked closely with UX designers to bring mockups to life.",
    //   achievements: [
    //     "Developed reusable component library used across 10+ projects",
    //     "Achieved 95+ PageSpeed score on all production websites",
    //     "Implemented accessibility standards (WCAG 2.1 AA compliance)"
    //   ]
    // }
  ];

  return (
    <section id="experience" className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-b from-black via-gray-950 to-black' : 'bg-gradient-to-b from-gray-50 via-indigo-50/30 to-gray-50'
    }`}>
      {/* Section Flow Styling */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Wave separator at top */}
        <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={darkMode ? 'fill-black' : 'fill-gray-200'}></path>
        </svg>
        
        {/* Gradient Orbs */}
        <div className={`${darkMode ? 'opacity-100' : 'opacity-20'}`}>
          <span className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-l from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl"></span>
          <span className="absolute bottom-1/3 left-0 w-64 h-64 bg-gradient-to-r from-violet-600/15 to-purple-600/15 rounded-full blur-3xl"></span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full backdrop-blur-sm ${
            darkMode ? 'bg-white/20' : 'bg-black/20'
          }`}></div>

          {/* Experience Items */}
          <div className="space-y-12" ref={timelineRef}>
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.01, x: index % 2 === 0 ? -10 : 10 }}
                transition={{ duration: 0.4 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  whileHover={{ scale: 1.3, rotate: 180 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 backdrop-blur-sm ${
                    darkMode
                      ? 'bg-black border-blue-400 shadow-lg shadow-blue-400/50'
                      : 'bg-white border-blue-500 shadow-lg shadow-blue-500/50'
                  } z-10`}
                ></motion.div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                } md:w-1/2`}>
                  <motion.div
                    whileHover={{
                      y: -10, 
                      rotateY: index % 2 === 0 ? -5 : 5,
                      boxShadow: darkMode ? "0 25px 50px rgba(34, 197, 94, 0.3)" : "0 25px 50px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ duration: 0.4 }}
                    className={`p-6 rounded-xl transition-all duration-400 backdrop-blur-sm border ${
                      darkMode ? 'bg-white/5 border-white/10 shadow-lg hover:shadow-xl' : 'bg-white/70 border-white/90 shadow-xl hover:shadow-2xl shadow-indigo-200/40 hover:shadow-indigo-300/50'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className={`h-4 w-4 ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex justify-between m-6">

                    <div className="flex-item text-left font-serif">
                      
                    <h3 className={`text-xl font-bold mb-1 ${
                      darkMode ? 'text-slate-200' : 'text-gray-900'
                    }`}>
                      {exp.title}
                    </h3>
                    <h4 className={`text-lg font-semibold mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {exp.company}
                    </h4>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <MapPin className={`h-4 w-4 ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                      }`} />
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                      }`}>
                        {exp.location}
                      </span>
                    </div>
                    </div>
                    
                    
                    
                    <p className={`text-sm mb-4 text-center ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {exp.description}
                    </p>
                    
                    <ul className={`space-y-2 text-left ${
                      darkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-2 text-sm">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;