'use client';

import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Float, Environment, useGLTF } from '@react-three/drei';
import { Suspense, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

// Typewriter effect component
const TypewriterText = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="text-white"
      >
        |
      </motion.span>
    </motion.span>
  );
};

// Floating skill icons component
const FloatingSkillIcon = ({ position, icon, color, speed = 1 }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <boxGeometry args={[0.5, 0.5, 0.1]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.8}
          emissive={color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </mesh>
    </Float>
  );
};

// Desk setup component
const DeskSetup = () => {
  const deskRef = useRef();
  const laptopRef = useRef();
  const monitorRef = useRef();

  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={deskRef}>
      {/* Desk */}
      <mesh position={[0, -1, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[4, 0.1, 2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Laptop */}
      <group ref={laptopRef} position={[0, -0.8, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 0.05, 1]} />
          <meshStandardMaterial color="#2C2C2C" />
        </mesh>
        <mesh position={[0, 0.3, -0.4]} rotation={[0.3, 0, 0]}>
          <boxGeometry args={[1.5, 0.05, 1]} />
          <meshStandardMaterial color="#1A1A1A" />
        </mesh>
      </group>

      {/* Monitor */}
      <group ref={monitorRef} position={[0, 0.5, -1]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 1.2, 0.1]} />
          <meshStandardMaterial color="#2C2C2C" />
        </mesh>
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[1.8, 1]} />
          <meshStandardMaterial color="#00FF00" emissive="#00FF00" emissiveIntensity={0.2} />
        </mesh>
      </group>

      {/* Coffee cup */}
      <mesh position={[1.5, -0.7, 0.5]}>
        <cylinderGeometry args={[0.2, 0.2, 0.4, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Plant */}
      <mesh position={[-1.5, -0.7, 0.5]}>
        <sphereGeometry args={[0.3, 8, 8]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
    </group>
  );
};

// Main 3D scene component
const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
        
        <DeskSetup />
        
        {/* Floating skill icons */}
        <FloatingSkillIcon position={[-2, 2, 0]} icon="react" color="#61DAFB" speed={1} />
        <FloatingSkillIcon position={[2, 1.5, 1]} icon="js" color="#F7DF1E" speed={1.2} />
        <FloatingSkillIcon position={[0, 3, -1]} icon="next" color="#000000" speed={0.8} />
        <FloatingSkillIcon position={[-1.5, 1, 2]} icon="three" color="#000000" speed={1.1} />
        <FloatingSkillIcon position={[1.5, 2.5, -0.5]} icon="gsap" color="#88CE02" speed={0.9} />
        <FloatingSkillIcon position={[0, 1, 3]} icon="framer" color="#0055FF" speed={1.3} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Suspense>
    </Canvas>
  );
};

// Smooth scroll function
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Creative
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Developer
            </span>
          </motion.h1>
          
          {/* Typewriter tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light"
          >
            I craft experiences that merge creativity with code.
          </motion.div>
          
          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              Start Journey →
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection; 