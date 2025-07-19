import React from 'react';
import { Download, FileText, Award, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

interface ResumeProps {
  darkMode: boolean;
}

const Resume: React.FC<ResumeProps> = ({ darkMode }) => {
  const sectionRef = useScrollAnimation();
  const cardsRef = useStaggerAnimation(0.2);

  const education = [
    {
      degree: "Bachelors of Technology In Artificial Intelligence & Data Science",
      school: "Guru Gobind Singh IndraPrastha University, New Delhi",
      year: "2019",
      gpa: "7.3/10"
    },
    // {
    //   degree: "Full Stack Web Development Bootcamp",
    //   school: "Tech Academy",
    //   year: "2018",
    //   gpa: "Certificate"
    // }
  ];

  const certifications = [
    {
      name: "Machine Learning By Andrew Ng",
      issuer: "Coursera",
      year: "2024"
    },
    {
      name: "Deep Learning Specialization By Andrew Ng",
      issuer: "Coursera",
      year: "2024"
    },
    // {
    //   name: "Google Cloud Professional Cloud Architect",
    //   issuer: "Google Cloud",
    //   year: "2022"
    // },
    {
      name: "Web Developement Course",
      issuer: "Udemy",
      year: "2023"
    }
  ];

  return (
    <section id="resume" className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-b from-black via-gray-950 to-black' : 'bg-gradient-to-b from-white via-purple-50/30 to-white'
    }`}>
      {/* Section Flow Styling */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Wave separator at top */}
        <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M892.25,114.72c-56.51,18.99-118.42,29.16-178.66,21.69C637.94,127.4,562.58,108.16,487,96.69c-37.17-5.64-75.21-10.89-113.84-11.26-61.39-.59-121.24,8.86-181.84,17.11C131.47,109.92,70.87,118.54,0,120V0H1200V95.8C1132.19,118.92,1012.82,96.31,892.25,114.72Z" className={darkMode ? 'fill-gray-950' : 'fill-gray-200'}></path>
        </svg>
        
        {/* Gradient Orbs */}
        <div className={`${darkMode ? 'opacity-100' : 'opacity-20'}`}>
          <span className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full blur-3xl"></span>
          <span className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/15 to-indigo-600/15 rounded-full blur-3xl"></span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          
          <motion.a
            href="https://drive.google.com/file/d/1hRH1iROHcWBP6mjFNxMdngnrN-tU2rO1/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -3, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-400 shadow-lg"
          >
            <Download className="h-5 w-5" />
            <span>Download Resume</span>
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8" ref={cardsRef}>
          {/* Education */}
          <motion.div 
            whileHover={{
              scale: 1.01,
              y: -10,
              rotateY: -5,
              boxShadow: darkMode ? "0 25px 50px rgba(59, 130, 246, 0.4)" : "0 25px 50px rgba(0, 0, 0, 0.1)",
              animationDelay: 1,
            
            }}
            transition={{ duration: 0.4 }}
            className={`p-8 rounded-xl backdrop-blur-sm border transition-all duration-400 ${
              darkMode ? 'bg-white/5 border-white/10 shadow-lg' : 'bg-white/70 border-white/90 shadow-xl shadow-green-200/40'
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className={`h-8 w-8 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Education
              </h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 10, scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                  className={`border-l-4 border-blue-500 pl-6 backdrop-blur-sm ${
                    darkMode ? 'bg-white/5' : 'bg-black/5'
                  } p-4 rounded-r-lg`}
                >
                  <h4 className={`text-lg font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {edu.degree}
                  </h4>
                  <p className={`text-sm mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {edu.school}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {edu.year}
                    </span>
                    <span className={`text-sm font-medium ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {edu.gpa}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            whileHover={{
              scale: 1.01,
              y: -10,
              rotateY: 5,
              boxShadow: darkMode ? "0 25px 50px rgba(139, 92, 246, 0.3)" : "0 25px 50px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ duration: 0.4 }}
            className={`p-8 rounded-xl backdrop-blur-sm border transition-all duration-400 ${
              darkMode ? 'bg-white/5 border-white/10 shadow-lg' : 'bg-white/70 border-white/90 shadow-xl shadow-purple-200/40'
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Award className={`h-8 w-8 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Certifications
              </h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 10, scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                  className={`border-l-4 border-purple-500 pl-6 backdrop-blur-sm ${
                    darkMode ? 'bg-white/5' : 'bg-black/5'
                  } p-4 rounded-r-lg`}
                >
                  <h4 className={`text-lg font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {cert.name}
                  </h4>
                  <p className={`text-sm mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {cert.issuer}
                  </p>
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Resume Preview */}
        <motion.div 
          whileHover={{
            scale: 1.01,
            y: -10,
            boxShadow: darkMode ? "0 30px 60px rgba(59, 130, 246, 0.3)" : "0 30px 60px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ duration: 0.4 }}
          className={`mt-12 p-8 rounded-xl backdrop-blur-sm border transition-all duration-400 ${
            darkMode ? 'bg-white/5 border-white/10 shadow-lg' : 'bg-white/70 border-white/90 shadow-xl shadow-blue-200/40'
          }`}
        >
          <div className="flex items-center space-x-3 mb-6">
            <FileText className={`h-8 w-8 ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`} />
            <h3 className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Overview
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Professional Summary
              </h4>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {/* Experienced Full Stack Developer with 5+ years of expertise in building 
                scalable web applications. Proven track record of leading development teams 
                and delivering high-quality solutions that drive business growth. */}
                A Final Year DS underGrad, Just love to learn and Deep Dive About Neural Nets and Tech and Implement them in Real World Application to  Make Something brilliant And Impactful.
                Have Worked in research and Now looking for Using my Skills to Work in Corporate. <br />
              </p>
              <span className="text-sm font-normal pt-4 text-white">Looking for New Opportunities.</span>
            </div>
            
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Key Achievements
              </h4>
              <ul className={`space-y-2 text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <li>• Architectured a Hybrid CNN+LSTM model for Multi-Label Audio Classification</li>
                <li>• Runner up in AceHack Hackathon 2023 & Participated in 3+ Hackathons</li>
                <li>• Solved 200+ DSA Questions on LeetCode and 5 Star on HackerRank in C++ and Problem Solving</li>
                <li>• Working on a Complier For AI Reseach Paper</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;