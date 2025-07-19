import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import GraphGptImg from '../assets/GraphGpt.png'
import Classification from '../assets/E2EClassification.png'
import SmartATS from '../assets/SmartATS.png'
import Sockets from '../assets/sockets.png'
import imple from '../assets/imple.png'
import paytm from '../assets/paytm.png'
import visionX from '../assets/VisionX.png'
import tradingSys from '../assets/Trading-sys.png'
import tweets from '../assets/tweets.png'
import groupChat from '../assets/groupChat.png'


interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'serious' | 'fun'>('serious');
  const sectionRef = useScrollAnimation();

  const seriousProjects = [
    {
      title: "GraphGPT",
      description: "Conversational GPT with Non-Linear Chat Flow as Our Thougts are, and very Efficient Assistant for all Your day to Day tasks.",
      src: GraphGptImg, 
      tech: ["React", "FastAPI", "MongoDB", "Python", "LangChain"],
      github: "https://github.com/srijanbahal/Grpah-Gpt",
      demo: "https://example.com"
    },
    {
      title: "Smart ATS",
      description: "An intelligent multi-agent ATS system leveraging fine-tuned LLMs, RAG, and dynamic analytics for personalized resume-job matching and career profiling",
      src: SmartATS,
      tech: ["Python", "FastAPI", "CrewAI", "langhcain", "StreamLit"],
      github: "https://github.com/srijanbahal/Smart-ATS---Resume-Analyzer"
    },
    
    {
      title: "AI Trading Assistant",
      description: "A Multi Agent Assistant with hierarichal Architure, Which Basically Analyze the Risk, Opportunity and Advice around the Stock Market.",
      src: tradingSys,
      tech: ["Python", "FastAPI", "CrewAI", "langhcain", "StreamLit"],
      github: "https://github.com/srijanbahal/financial-Analysis-agent",
      demo: "https://example.com"
    },
    
    {
      title: "Sentiment Analysis On Tweets",
      description: "A comparative study of traditional and transformer-based models for large-scale tweet sentiment analysis, focusing on interpretability, optimization, and semantic understanding.",
      src: tweets,
      tech: ["Pytorch", "Python", "FastAPI", "StreamLit"],
      github: "https://github.com/srijanbahal/Sentiment-Analysis-Using-BiLSTM-and-MHSA",
      demo: "https://example.com"
    }
    ,
    {
      title: "Full Stack Group chat Application",
      description: "A Comprhensive Multi User Group Chat Application, Where user Can Signin/signout, Create groups and chat Real time and Do Calls and video Calls Real time.",
      src: groupChat,
      tech: ["Typescript", "React", "WebSockets", "FastAPI"],
      github: "https://github.com/srijanbahal/Group-Chat-Application",
      demo: "https://example.com"
    }
    ,
    {
      title: "E2E Multi Label Kidney Disease Classification",
      description: "A multi-label deep learning assistant for detecting co-occurring kidney diseases from CT scans with model interpretability and MLOps integration",
      src: Classification,
      tech: ["Python", "StreamLit", "DVC", "MlFLow"],
      github: "https://github.com/srijanbahal/Kidney-Disease-Classification-Deep-Learning-End-To-End-Pipeline",
      demo: "https://example.com"
    },

  ];

  const funProjects = [
    {
      title: "VisionX",
      description: "AI-powered app that suggests activities and music based on current weather and your mood.",
      src: visionX,
      tech: ["React", "NextJS", "Python", "FastAPI"],
      github: "https://github.com/srijanbahal/VisionX",
      demo: "https://example.com"
    },
    {
      title: "PayTM Like Clone",
      description: "A full-stack Paytm-like web application built from scratch enabling secure user authentication, wallet management, and seamless peer-to-peer transactions",
      src: paytm,
      tech: ["React", "NodeJS", "ExpressJS", "PostgreSQL"],
      github: "https://github.com/srijanbahal/Sentiment-Analysis-Using-BiLSTM-and-MHSA",
      demo: "https://example.com"
    },
    {
      title: "Learning & Implementing Papers From Scratch",
      description: "Just My learnings & Implementations From Scratch of some Cool DL/Ml Research Papers ",
      src: imple,
      tech: ["Pytorch", "Python", "TensorFlow", "keras"],
      github: "https://github.com/srijanbahal/Learning-and-Implementing-dl-research-papers",
      demo: "https://example.com"
    },
    {
      title: "Multi User Group Chat Backend",
      description: "A real-time, multi-user group chat system in C++ using socket programming and multithreaded concurrency for scalable communication.",
      src: Sockets,
      tech: ["C++", "Sockets", "MultiThreading", "Concurrency Handling "],
      github: "https://github.com/srijanbahal/MultiUserGroupChatApp",
      demo: "https://example.com"
    }
  ];

  const currentProjects = activeTab === 'serious' ? seriousProjects : funProjects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-b from-black via-gray-950 to-black' : 'bg-gradient-to-b from-white via-blue-50/30 to-white'
    }`}>
      {/* Section Flow Styling */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Wave separator at top */}
        <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className={darkMode ? 'fill-gray-950' : 'fill-gray-200'}></path>
        </svg>
        
        {/* Gradient Orbs */}
        <div className={`${darkMode ? 'opacity-100' : 'opacity-20'}`}>
          <span className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl"></span>
          <span className="absolute bottom-0 right-1/3 w-72 h-72 bg-gradient-to-r from-pink-600/15 to-red-600/15 rounded-full blur-3xl"></span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          
          {/* Tab Navigation */}
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveTab('serious')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-400 flex items-center space-x-2 backdrop-blur-sm ${
                activeTab === 'serious'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : darkMode
                  ? 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  : 'bg-black/10 text-gray-700 hover:bg-black/20 border border-black/20'
              }`}
            >
              <Briefcase className="h-5 w-5" />
              <span>Serious Projects</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveTab('fun')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-400 flex items-center space-x-2 backdrop-blur-sm ${
                activeTab === 'fun'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : darkMode
                  ? 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  : 'bg-black/10 text-gray-700 hover:bg-black/20 border border-black/20'
              }`}
            >
              <Sparkles className="h-5 w-5" />
              <span>Fun Projects</span>
            </motion.button>
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {currentProjects.map((project, index) => (
              <motion.div 
                key={`${activeTab}-${index}`}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  y: -15,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: darkMode ? "0 30px 60px rgba(59, 130, 246, 0.4)" : "0 30px 60px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`rounded-xl overflow-hidden transition-all duration-400 backdrop-blur-sm border ${
                  darkMode ? 'bg-white/5 border-white/10 shadow-lg hover:shadow-2xl' : 'bg-white/70 border-white/90 shadow-xl hover:shadow-2xl shadow-blue-200/40 hover:shadow-blue-300/50'
                }`}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    transition={{ duration: 0.6 }}
                    src={project.src}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.4 }}
                        className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                          darkMode ? 'bg-white/10 text-gray-300 border-white/20' : 'bg-black/10 text-gray-700 border-black/20'
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      href={project.github}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-400 backdrop-blur-sm border ${
                        darkMode
                          ? 'bg-white/10 text-gray-300 hover:bg-white/20 border-white/20'
                          : 'bg-black/10 text-gray-700 hover:bg-black/20 border-black/20'
                      }`}
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </motion.a>
                    {/* <motion.a
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      href={project.demo}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-400"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </motion.a> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;