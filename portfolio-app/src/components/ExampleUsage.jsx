'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import Lottie from 'lottie-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useThreeAnimation } from '@/hooks/useThreeAnimation';

// Example Lottie animation data
const exampleLottieData = {
  "v": "5.7.4",
  "fr": 30,
  "ip": 0,
  "op": 60,
  "w": 100,
  "h": 100,
  "nm": "Example Animation",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Shape Layer",
      "sr": 1,
      "ks": {
        "o": { "a": 0, "k": 100 },
        "r": { "a": 0, "k": 0 },
        "p": { "a": 0, "k": [50, 50, 0] },
        "a": { "a": 0, "k": [0, 0, 0] },
        "s": { "a": 0, "k": [100, 100, 100] }
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "d": 1,
              "ty": "el",
              "s": { "a": 0, "k": [50, 50] },
              "p": { "a": 0, "k": [0, 0] }
            },
            {
              "ty": "fl",
              "c": { "a": 0, "k": [0.5, 0.8, 1, 1] },
              "o": { "a": 0, "k": 100 }
            }
          ]
        }
      ]
    }
  ]
};

const AnimatedBox = () => {
  const { meshRef, setRotationSpeed, setFloatAnimation } = useThreeAnimation();
  
  setRotationSpeed(0.01);
  setFloatAnimation(0.3, 1.5);

  return (
    <Box ref={meshRef} args={[1, 1, 1]}>
      <meshStandardMaterial color="#3b82f6" />
    </Box>
  );
};

const ExampleUsage = () => {
  const { elementRef, animateOnScroll } = useScrollAnimation();

  return (
    <div ref={elementRef} className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Example Usage
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This section demonstrates how to use all the installed libraries and custom hooks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Framer Motion Example */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Framer Motion</h3>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <p className="text-gray-300">
                Hover and click this card to see Framer Motion animations in action!
              </p>
            </motion.div>
            
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg mx-auto"
            />
          </motion.div>

          {/* Three.js Example */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-64 lg:h-80"
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <AnimatedBox />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </motion.div>
        </div>

        {/* Lottie Example */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Lottie Animation</h3>
          <div className="flex justify-center">
            <div className="w-32 h-32">
              <Lottie 
                animationData={exampleLottieData}
                loop={true}
                autoplay={true}
              />
            </div>
          </div>
        </motion.div>

        {/* GSAP Scroll Animation Example */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            GSAP Scroll Animations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  Item {item}
                </h4>
                <p className="text-gray-300">
                  This item animates in as you scroll to it.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExampleUsage; 