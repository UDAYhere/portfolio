'use client';

import { motion } from 'framer-motion';

const ConsistentSpacing = ({ children, className = '', fullHeight = false }) => {
  return (
    <motion.div
      className={`py-20 px-4 sm:px-6 lg:px-8 ${fullHeight ? 'min-h-screen' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.div>
  );
};

export default ConsistentSpacing; 