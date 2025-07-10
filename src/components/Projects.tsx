import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'serious' | 'fun'>('serious');
  const sectionRef = useScrollAnimation();

  const seriousProjects = [
    {
      title: "GraphGPT",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "VisionX",
      description: "Collaborative project management tool with real-time updates, file sharing, and team analytics.",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Stock Risk Analysis Assistant",
      description: "Business intelligence dashboard with interactive charts, real-time data visualization, and reporting.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Learning & Implementing Papers From Scratch",
      description: "Business intelligence dashboard with interactive charts, real-time data visualization, and reporting.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Sentiment Analysis On Tweets",
      description: "Business intelligence dashboard with interactive charts, real-time data visualization, and reporting.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
      github: "https://github.com",
      demo: "https://example.com"
    }
    ,
    {
      title: "E2E Multi Label Kidney Disease Classification",
      description: "Interactive virtual pet that learns from user interactions and grows with unique personality traits.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Three.js", "Machine Learning", "Local Storage"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  const funProjects = [
    {
      title: "Weather Mood Generator",
      description: "AI-powered app that suggests activities and music based on current weather and your mood.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "OpenWeatherAPI", "Spotify API", "TensorFlow.js"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Retro Game Collection",
      description: "Collection of classic arcade games recreated using modern web technologies with pixel-perfect graphics.",
      image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["JavaScript", "Canvas API", "Web Audio API", "CSS Animations"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Virtual Pet Simulator",
      description: "Interactive virtual pet that learns from user interactions and grows with unique personality traits.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Three.js", "Machine Learning", "Local Storage"],
      github: "https://github.com",
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
                    src={project.image}
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
                    <motion.a
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      href={project.demo}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-400"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </motion.a>
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