'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Sphere, Box, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

// 3D Project Components
const CloudProject = ({ isHovered, onClick }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} onClick={onClick} className="cursor-pointer">
        {/* Cloud base */}
        <Sphere args={[1, 16, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
        </Sphere>
        {/* Cloud puffs */}
        <Sphere args={[0.6, 12, 12]} position={[-0.8, 0.3, 0]}>
          <meshStandardMaterial color="#ffffff" transparent opacity={0.7} />
        </Sphere>
        <Sphere args={[0.7, 12, 12]} position={[0.8, 0.2, 0]}>
          <meshStandardMaterial color="#ffffff" transparent opacity={0.7} />
        </Sphere>
        <Sphere args={[0.5, 12, 12]} position={[0, 0.8, 0]}>
          <meshStandardMaterial color="#ffffff" transparent opacity={0.7} />
        </Sphere>
        
        {/* Glow effect when hovered */}
        {isHovered && (
          <Sphere args={[1.5, 16, 16]}>
            <meshStandardMaterial color="#87CEEB" transparent opacity={0.3} />
          </Sphere>
        )}
      </group>
    </Float>
  );
};

const WebAppProject = ({ isHovered, onClick }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.8}>
      <group ref={meshRef} onClick={onClick} className="cursor-pointer">
        {/* Main building */}
        <Box args={[1.5, 2, 1.5]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#4A90E2" />
        </Box>
        {/* Windows */}
        <Box args={[0.2, 0.3, 0.1]} position={[-0.4, 0.5, 0.8]}>
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
        </Box>
        <Box args={[0.2, 0.3, 0.1]} position={[0.4, 0.5, 0.8]}>
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
        </Box>
        <Box args={[0.2, 0.3, 0.1]} position={[-0.4, -0.5, 0.8]}>
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
        </Box>
        <Box args={[0.2, 0.3, 0.1]} position={[0.4, -0.5, 0.8]}>
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
        </Box>
        
        {/* Glow effect when hovered */}
        {isHovered && (
          <Box args={[2, 2.5, 2]}>
            <meshStandardMaterial color="#4A90E2" transparent opacity={0.3} />
          </Box>
        )}
      </group>
    </Float>
  );
};

const MobileAppProject = ({ isHovered, onClick }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.008;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
      <group ref={meshRef} onClick={onClick} className="cursor-pointer">
        {/* Phone body */}
        <Box args={[0.8, 1.6, 0.1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#2C3E50" />
        </Box>
        {/* Screen */}
        <Box args={[0.7, 1.4, 0.05]} position={[0, 0, 0.06]}>
          <meshStandardMaterial color="#3498DB" emissive="#3498DB" emissiveIntensity={0.3} />
        </Box>
        {/* Home button */}
        <Cylinder args={[0.08, 0.08, 0.02, 8]} position={[0, -0.6, 0.06]}>
          <meshStandardMaterial color="#34495E" />
        </Cylinder>
        
        {/* Glow effect when hovered */}
        {isHovered && (
          <Box args={[1, 1.8, 0.2]}>
            <meshStandardMaterial color="#3498DB" transparent opacity={0.3} />
          </Box>
        )}
      </group>
    </Float>
  );
};

const GameProject = ({ isHovered, onClick }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.015;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={1.2} floatIntensity={0.6}>
      <group ref={meshRef} onClick={onClick} className="cursor-pointer">
        {/* Game controller */}
        <Box args={[1.2, 0.8, 0.3]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#E74C3C" />
        </Box>
        {/* Joysticks */}
        <Cylinder args={[0.1, 0.1, 0.2, 8]} position={[-0.3, 0.2, 0.2]}>
          <meshStandardMaterial color="#2C3E50" />
        </Cylinder>
        <Cylinder args={[0.1, 0.1, 0.2, 8]} position={[0.3, -0.2, 0.2]}>
          <meshStandardMaterial color="#2C3E50" />
        </Cylinder>
        {/* Buttons */}
        <Sphere args={[0.08, 8, 8]} position={[0.4, 0.2, 0.2]}>
          <meshStandardMaterial color="#F39C12" />
        </Sphere>
        <Sphere args={[0.08, 8, 8]} position={[-0.4, -0.2, 0.2]}>
          <meshStandardMaterial color="#9B59B6" />
        </Sphere>
        
        {/* Glow effect when hovered */}
        {isHovered && (
          <Box args={[1.5, 1.1, 0.4]}>
            <meshStandardMaterial color="#E74C3C" transparent opacity={0.3} />
          </Box>
        )}
      </group>
    </Float>
  );
};

// Project Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-2xl w-full border border-purple-500/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Project Icon */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl mb-4">
                {project.icon}
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-purple-400 font-medium">{project.category}</p>
            </div>

            {/* Project Description */}
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Technologies Used */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center"
              >
                View Demo →
              </motion.a>
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 text-center"
              >
                View Code →
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "CloudSync Platform",
      category: "Cloud Infrastructure",
      description: "A comprehensive cloud synchronization platform that enables seamless data management across multiple devices and services. Features real-time synchronization, advanced security protocols, and intuitive user interface.",
      icon: "☁️",
      demoLink: "#",
      githubLink: "#",
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Socket.io"],
      component: CloudProject
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      category: "Web Application",
      description: "A modern e-commerce management dashboard with real-time analytics, inventory management, and customer relationship tools. Built with cutting-edge technologies for optimal performance and scalability.",
      icon: "🛒",
      demoLink: "#",
      githubLink: "#",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      component: WebAppProject
    },
    {
      id: 3,
      title: "Fitness Tracker App",
      category: "Mobile Application",
      description: "A comprehensive fitness tracking mobile application with workout planning, progress monitoring, and social features. Includes GPS tracking, heart rate monitoring, and personalized recommendations.",
      icon: "💪",
      demoLink: "#",
      githubLink: "#",
      technologies: ["React Native", "Firebase", "Redux", "Expo", "HealthKit"],
      component: MobileAppProject
    },
    {
      id: 4,
      title: "Adventure Quest Game",
      category: "Game Development",
      description: "An immersive 3D adventure game with stunning graphics, engaging storyline, and multiplayer capabilities. Features dynamic environments, character customization, and real-time multiplayer battles.",
      icon: "🎮",
      demoLink: "#",
      githubLink: "#",
      technologies: ["Unity", "C#", "Blender", "Photon", "PlayFab"],
      component: GameProject
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section 
      id="projects" 
      className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 overflow-hidden"
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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* 3D Scene Container */}
              <div className="relative h-80 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 overflow-hidden backdrop-blur-sm">
                <Canvas
                  camera={{ position: [0, 0, 5], fov: 60 }}
                  className="w-full h-full"
                >
                  <ambientLight intensity={0.4} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
                  
                  <project.component
                    isHovered={hoveredProject === project.id}
                    onClick={() => handleProjectClick(project)}
                  />
                  
                  <OrbitControls 
                    enableZoom={false} 
                    enablePan={false}
                    autoRotate 
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 4}
                  />
                </Canvas>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{project.icon}</span>
                      <span className="text-purple-400 text-sm font-medium">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-purple-500/10 flex items-center justify-center"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleProjectClick(project)}
                    className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
                  >
                    View Project
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge technology and creative solutions.
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
              Start a Project →
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProjectsSection; 