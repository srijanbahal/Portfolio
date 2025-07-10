import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import mainImg  from "../assets/Myself.jpeg"


interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const sectionRef = useScrollAnimation();
  const highlightsRef = useStaggerAnimation(0.2);

  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Design",
      description: "Blending aesthetics with functionality to create memorable experiences."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description: "Optimizing for speed and efficiency without compromising quality."
    }
  ];

  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-b from-black via-gray-950 to-black' : 'bg-gradient-to-b from-white via-gray-50 to-white'
    }`}>
      {/* Section Flow Styling */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Wave separator at top */}
        <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity="0.25" className={darkMode ? 'fill-gray-900' : 'fill-gray-300'}></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity="0.5" className={darkMode ? 'fill-gray-800' : 'fill-gray-200'}></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={darkMode ? 'fill-black' : 'fill-gray-100'}></path>
        </svg>
        
        {/* Gradient Orbs */}
        <div className={`absolute inset-0 ${
          darkMode ? 'opacity-100' : 'opacity-20'
        }`}>
          <span className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"></span>
          <span className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-600/15 to-cyan-600/15 rounded-full blur-3xl"></span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`w-full h-120 rounded-2xl overflow-hidden backdrop-blur-sm border ${
              darkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
            }`}>
              <img
                src={mainImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-80"
            ></motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Passionate about ML & AI and Its Applications
            </h3>
            <p className={`text-lg mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm a Final year Undergrad Student, Have a very deep interest in Neural Nets and Understanding Architectures and Building Intelligent Systems. I Have a Product Driven Mindset and Im Currently Diving Deep in DL and GenAI and Exploring its Application With Developement. I Find Dvelopement Empowering and Fascinating. Looking Forward to Working and Collaborating In work and discussions related to Dev and DL.
            </p>
            <p className={`text-lg mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, Reading Or In the Gym Working Out. I believe in the
              power of technology to solve real-world problems and create positive change.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-6" ref={highlightsRef}>
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{
                    scale: 1.02,
                    y: -10,
                    rotateY: 10,
                    boxShadow: darkMode ? "0 20px 40px rgba(59, 130, 246, 0.3)" : "0 20px 40px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.4 }}
                  className={`p-4 rounded-lg backdrop-blur-sm border transition-all duration-400 ${
                    darkMode ? 'bg-white/5 border-white/10' : 'bg-white/60 border-white/80'
                  } ${darkMode ? 'shadow-md hover:shadow-lg' : 'shadow-lg hover:shadow-xl shadow-blue-200/30 hover:shadow-blue-300/40'}`}
                >
                  <div className="text-blue-500 mb-3">
                    {highlight.icon}
                  </div>
                  <h4 className={`font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {highlight.title}
                  </h4>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;