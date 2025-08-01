'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const useThreeAnimation = () => {
  const meshRef = useRef();
  const { camera, scene } = useThree();

  // Animation state
  const animationState = useRef({
    rotationSpeed: 0.01,
    floatAmplitude: 0.1,
    floatFrequency: 1,
    scaleMin: 0.8,
    scaleMax: 1.2,
    scaleSpeed: 1
  });

  // Rotation animation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += animationState.current.rotationSpeed;
      meshRef.current.rotation.y += animationState.current.rotationSpeed;
    }
  });

  // Float animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * animationState.current.floatFrequency) * animationState.current.floatAmplitude;
    }
  });

  // Scale animation
  useFrame((state) => {
    if (meshRef.current) {
      const scale = animationState.current.scaleMin + (animationState.current.scaleMax - animationState.current.scaleMin) * 
        (Math.sin(state.clock.elapsedTime * animationState.current.scaleSpeed) + 1) / 2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  const setRotationSpeed = (speed) => {
    animationState.current.rotationSpeed = speed;
  };

  const setFloatAnimation = (amplitude, frequency) => {
    animationState.current.floatAmplitude = amplitude;
    animationState.current.floatFrequency = frequency;
  };

  const setScaleAnimation = (minScale, maxScale, speed) => {
    animationState.current.scaleMin = minScale;
    animationState.current.scaleMax = maxScale;
    animationState.current.scaleSpeed = speed;
  };

  const createParticles = (count = 1000) => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      colors[i * 3] = Math.random();
      colors[i * 3 + 1] = Math.random();
      colors[i * 3 + 2] = Math.random();
    }
    
    return { positions, colors };
  };

  const createWaveGeometry = (width = 10, height = 10, segments = 32) => {
    const geometry = new THREE.PlaneGeometry(width, height, segments, segments);
    const positions = geometry.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 2] = Math.sin(positions[i] * 0.5) * Math.cos(positions[i + 1] * 0.5) * 0.5;
    }
    
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
    
    return geometry;
  };

  return {
    meshRef,
    setRotationSpeed,
    setFloatAnimation,
    setScaleAnimation,
    createParticles,
    createWaveGeometry,
    camera,
    scene
  };
}; 