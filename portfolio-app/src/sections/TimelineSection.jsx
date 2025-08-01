'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TimelineSection = () => {
  const timelineRef = useRef(null);
  const containerRef = useRef(null);
  const milestonesRef = useRef([]);

  const milestones = [
    {
      id: 1,
      year: "2024",
      title: "Senior Developer",
      category: "Career",
      description: "Leading development teams and architecting scalable solutions for enterprise clients. Mentoring junior developers and driving technical excellence.",
      icon: "🚀",
      color: "#8B5CF6"
    },
    {
      id: 2,
      year: "2023",
      title: "Full Stack Developer",
      category: "Career",
      description: "Building end-to-end applications with modern technologies. Specializing in React, Node.js, and cloud infrastructure.",
      icon: "💻",
      color: "#06B6D4"
    },
    {
      id: 3,
      year: "2022",
      title: "Frontend Specialist",
      category: "Career",
      description: "Creating stunning user interfaces and interactive experiences. Mastering React, TypeScript, and modern CSS frameworks.",
      icon: "🎨",
      color: "#F59E0B"
    },
    {
      id: 4,
      year: "2021",
      title: "Computer Science Degree",
      category: "Education",
      description: "Graduated with honors in Computer Science. Focused on software engineering, algorithms, and web technologies.",
      icon: "🎓",
      color: "#10B981"
    },
    {
      id: 5,
      year: "2020",
      title: "First Freelance Project",
      category: "Learning",
      description: "Launched first successful freelance project. Learned client communication, project management, and real-world development.",
      icon: "🌟",
      color: "#EF4444"
    },
    {
      id: 6,
      year: "2019",
      title: "Web Development Bootcamp",
      category: "Education",
      description: "Intensive 6-month bootcamp covering modern web development. Built portfolio projects and learned industry best practices.",
      icon: "📚",
      color: "#8B5CF6"
    },
    {
      id: 7,
      year: "2018",
      title: "First Line of Code",
      category: "Learning",
      description: "Wrote the first Hello World program. Discovered passion for programming and problem-solving through code.",
      icon: "👋",
      color: "#06B6D4"
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const timeline = timelineRef.current;
    const milestones = milestonesRef.current;

    if (!container || !timeline) return;

    // Create horizontal scroll timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Animate timeline path
    tl.to(timeline, {
      x: -(timeline.scrollWidth - container.clientWidth),
      ease: "none"
    });

    // Animate milestones as they enter viewport
    milestones.forEach((milestone, index) => {
      const milestoneTl = gsap.timeline({
        scrollTrigger: {
          trigger: milestone,
          start: "left center",
          end: "right center",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      });

      // Initial state
      gsap.set(milestone, {
        opacity: 0,
        scale: 0.8,
        y: 50
      });

      // Animate in
      milestoneTl.to(milestone, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      });

      // Animate out
      milestoneTl.to(milestone, {
        opacity: 0.3,
        scale: 0.9,
        y: -20,
        duration: 0.6,
        ease: "power2.in"
      }, "+=0.2");
    });

    // Parallax effect for background elements
    gsap.to('.timeline-bg', {
      xPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="timeline" 
      className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 timeline-bg">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A timeline of my career, education, and learning milestones
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div 
          ref={containerRef}
          className="relative h-screen flex items-center overflow-hidden"
        >
          {/* Timeline Path */}
          <div 
            ref={timelineRef}
            className="absolute top-1/2 transform -translate-y-1/2 flex items-center min-w-max"
            style={{ left: '50vw' }}
          >
            {/* Creative Path Background */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-30" />
            
            {/* Animated Path Particles */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-2">
              <div className="w-full h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-60 animate-pulse" />
            </div>

            {/* Milestones */}
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                ref={el => milestonesRef.current[index] = el}
                className="relative flex flex-col items-center mx-16 first:ml-0 last:mr-0"
                style={{ minWidth: '300px' }}
              >
                {/* Milestone Dot */}
                <div className="relative z-10">
                  <div 
                    className="w-6 h-6 rounded-full border-4 border-white shadow-lg"
                    style={{ backgroundColor: milestone.color }}
                  />
                  {/* Pulse effect */}
                  <div 
                    className="absolute inset-0 w-6 h-6 rounded-full animate-ping opacity-75"
                    style={{ backgroundColor: milestone.color }}
                  />
                </div>

                {/* Milestone Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute top-12 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 shadow-2xl w-80"
                >
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: `${milestone.color}20`, border: `1px solid ${milestone.color}40` }}
                    >
                      {milestone.category}
                    </span>
                    <span className="text-2xl">{milestone.icon}</span>
                  </div>

                  {/* Year and Title */}
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold text-white mb-1">{milestone.year}</h3>
                    <h4 className="text-lg font-semibold text-purple-400">{milestone.title}</h4>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${((milestones.length - index) / milestones.length) * 100}%`,
                          background: `linear-gradient(90deg, ${milestone.color}, ${milestone.color}80)`
                        }}
                      />
                    </div>
                    <span className="text-xs text-gray-400">
                      {index + 1} of {milestones.length}
                    </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-white/60 text-sm mb-2">Scroll to explore timeline</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-150" />
              <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse delay-300" />
            </div>
          </div>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden mt-16 px-4">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Line */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-transparent" />
                )}

                {/* Milestone */}
                <div className="flex items-start gap-4">
                  {/* Milestone Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div 
                      className="w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                      style={{ backgroundColor: milestone.color }}
                    >
                      <span className="text-xl">{milestone.icon}</span>
                    </div>
                  </div>

                  {/* Milestone Content */}
                  <div className="flex-1 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 shadow-2xl">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: `${milestone.color}20`, border: `1px solid ${milestone.color}40` }}
                      >
                        {milestone.category}
                      </span>
                      <span className="text-lg font-bold text-purple-400">{milestone.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
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
          className="text-center mt-20 px-4"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to write the next chapter?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's create something amazing together and add another milestone to this journey.
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
              Let's Connect →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection; 