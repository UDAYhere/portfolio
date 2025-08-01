'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const SkillsSection = () => {
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isOrbiting, setIsOrbiting] = useState(true);

  const skills = [
    {
      id: 1,
      name: "React",
      icon: "⚛️",
      color: "#61DAFB",
      description: "Building dynamic user interfaces with modern React patterns, hooks, and state management. Creating reusable components and optimizing performance.",
      level: "Advanced"
    },
    {
      id: 2,
      name: "JavaScript",
      icon: "🟨",
      color: "#F7DF1E",
      description: "Mastering ES6+ features, async programming, and modern JavaScript patterns. From vanilla JS to complex applications.",
      level: "Expert"
    },
    {
      id: 3,
      name: "Next.js",
      icon: "⚡",
      color: "#000000",
      description: "Full-stack development with Next.js, server-side rendering, and API routes. Building scalable applications with optimal performance.",
      level: "Advanced"
    },
    {
      id: 4,
      name: "Three.js",
      icon: "🎨",
      color: "#000000",
      description: "Creating immersive 3D experiences and interactive graphics. From simple animations to complex 3D applications.",
      level: "Intermediate"
    },
    {
      id: 5,
      name: "GSAP",
      icon: "✨",
      color: "#88CE02",
      description: "Professional-grade animations and scroll-triggered effects. Crafting smooth, performant animations that enhance user experience.",
      level: "Advanced"
    },
    {
      id: 6,
      name: "Framer Motion",
      icon: "🎭",
      color: "#0055FF",
      description: "Declarative animations and gesture-based interactions. Creating fluid, responsive animations with React.",
      level: "Advanced"
    },
    {
      id: 7,
      name: "Tailwind CSS",
      icon: "🎨",
      color: "#06B6D4",
      description: "Utility-first CSS framework for rapid UI development. Building responsive, accessible, and beautiful interfaces.",
      level: "Expert"
    },
    {
      id: 8,
      name: "Node.js",
      icon: "🟢",
      color: "#339933",
      description: "Server-side JavaScript development and backend APIs. Building scalable server applications and RESTful services.",
      level: "Intermediate"
    }
  ];

  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;

    // Create orbiting animation
    const tl = gsap.timeline({ repeat: -1 });
    
    skills.forEach((skill, index) => {
      const angle = (index * 360) / skills.length;
      const radius = 200; // Orbit radius
      
      tl.to(`#skill-${skill.id}`, {
        x: Math.cos((angle * Math.PI) / 180) * radius,
        y: Math.sin((angle * Math.PI) / 180) * radius,
        duration: 20,
        ease: "none"
      }, index * (20 / skills.length));
    });

    // Pause/resume orbit on hover
    const handleMouseEnter = () => {
      if (isOrbiting) {
        tl.pause();
        setIsOrbiting(false);
      }
    };

    const handleMouseLeave = () => {
      if (!isOrbiting) {
        tl.resume();
        setIsOrbiting(true);
      }
    };

    orbit.addEventListener('mouseenter', handleMouseEnter);
    orbit.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      orbit.removeEventListener('mouseenter', handleMouseEnter);
      orbit.removeEventListener('mouseleave', handleMouseLeave);
      tl.kill();
    };
  }, [skills.length, isOrbiting]);

  return (
    <section 
      ref={containerRef}
      id="skills" 
      className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Orbit Container */}
        <div className="relative flex justify-center items-center min-h-[600px] md:min-h-[700px]">
          {/* Profile Picture Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-20"
          >
            <div className="relative">
              {/* Profile picture placeholder */}
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
                <div className="text-white text-4xl md:text-5xl">👨‍💻</div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse" />
            </div>
          </motion.div>

          {/* Orbiting Skills */}
          <div 
            ref={orbitRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            {skills.map((skill, index) => {
              const angle = (index * 360) / skills.length;
              const radius = 200;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={skill.id}
                  id={`skill-${skill.id}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    position: 'absolute',
                    x: x,
                    y: y,
                  }}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="group cursor-pointer"
                >
                  {/* Skill Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl"
                    style={{
                      boxShadow: `0 0 20px ${skill.color}40`,
                    }}
                  >
                    <span className="text-2xl md:text-3xl">{skill.icon}</span>
                  </motion.div>

                  {/* Skill Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-lg text-white text-sm font-medium whitespace-nowrap"
                  >
                    {skill.name}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Orbit Ring (visual guide) */}
          <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] border border-white/10 rounded-full" />
        </div>

        {/* Expanded Skill Card */}
        <AnimatePresence>
          {hoveredSkill && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="mt-12 max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                    style={{ backgroundColor: `${hoveredSkill.color}20` }}
                  >
                    {hoveredSkill.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{hoveredSkill.name}</h3>
                    <p className="text-purple-400 font-medium">{hoveredSkill.level}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  {hoveredSkill.description}
                </p>

                {/* Skill level indicator */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Proficiency:</span>
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: hoveredSkill.level === 'Expert' ? '100%' : hoveredSkill.level === 'Advanced' ? '85%' : '70%' }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                  <span className="text-sm text-purple-400 font-medium">{hoveredSkill.level}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skills Grid for Mobile */}
        <div className="mt-16 md:hidden">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            All Skills
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredSkill(skill)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{skill.name}</h4>
                    <p className="text-purple-400 text-sm">{skill.level}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's combine our skills to create something extraordinary together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 