'use client';

import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  id, 
  className = '', 
  delay = 0,
  fullHeight = false 
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={`py-20 ${fullHeight ? 'min-h-screen' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
};

export default Section; 