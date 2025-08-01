'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutSection = () => {
  const sectionRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const panels = panelsRef.current;
    
    // GSAP animations for each panel
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });

      // Panel entrance animation
      tl.fromTo(panel, 
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotationY: -15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 1,
          ease: "power2.out"
        }
      );

      // Stagger animation for panel elements
      tl.fromTo(panel.querySelectorAll('.panel-content > *'),
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out"
        },
        "-=0.5"
      );

      // Comic bubble effect
      if (panel.querySelector('.comic-bubble')) {
        tl.fromTo(panel.querySelector('.comic-bubble'),
          {
            scale: 0,
            rotation: -10
          },
          {
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)"
          },
          "-=0.3"
        );
      }
    });

    // Parallax effect for background elements
    gsap.to('.parallax-bg', {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const panels = [
    {
      id: 1,
      title: "The Beginning",
      subtitle: "Where it all started",
      content: "Once upon a time, in a world of endless possibilities, a curious mind discovered the magic of code. What began as simple curiosity quickly evolved into a passion for creating digital experiences that could touch lives and inspire imagination.",
      image: "/api/placeholder/400/300",
      bubbleText: "Hello World! 👋"
    },
    {
      id: 2,
      title: "The Journey",
      subtitle: "Learning and growing",
      content: "Through countless hours of experimentation, debugging sessions that felt like detective work, and moments of pure joy when code finally worked, the journey of becoming a developer unfolded. Each project became a stepping stone, each challenge a lesson learned.",
      image: "/api/placeholder/400/300",
      bubbleText: "Debugging is fun! 🐛"
    },
    {
      id: 3,
      title: "The Craft",
      subtitle: "Mastering the tools",
      content: "From vanilla JavaScript to modern frameworks, from simple websites to complex applications, the craft evolved. Learning became a continuous adventure, with new technologies constantly emerging and pushing the boundaries of what's possible.",
      image: "/api/placeholder/400/300",
      bubbleText: "React is amazing! ⚛️"
    },
    {
      id: 4,
      title: "The Future",
      subtitle: "What's next",
      content: "Today, standing at the intersection of creativity and technology, the journey continues. Every line of code is an opportunity to create something meaningful, every project a chance to push boundaries and explore new possibilities in the digital realm.",
      image: "/api/placeholder/400/300",
      bubbleText: "Let's build the future! 🚀"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 parallax-bg">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl" />
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
            My Story
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through code, creativity, and endless possibilities
          </p>
        </motion.div>

        {/* Comic Panels */}
        <div className="space-y-16">
          {panels.map((panel, index) => (
            <div
              key={panel.id}
              ref={el => panelsRef.current[index] = el}
              className={`relative ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex-row items-center gap-8 lg:gap-12`}
            >
              {/* Panel Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  {/* Comic panel border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  
                  {/* Image container */}
                  <div className="relative bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-1">
                    <div className="bg-slate-800 rounded-xl overflow-hidden">
                      {/* Placeholder image */}
                      <div className="w-full h-64 md:h-80 bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                        <div className="text-center text-white/60">
                          <div className="text-4xl mb-2">📱</div>
                          <p className="text-sm">Panel {panel.id} Image</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comic bubble */}
                  <div className="comic-bubble absolute -top-4 -right-4 bg-white text-slate-800 px-4 py-2 rounded-2xl shadow-lg transform rotate-3">
                    <p className="text-sm font-semibold">{panel.bubbleText}</p>
                    <div className="absolute bottom-0 right-4 w-0 h-0 border-l-8 border-l-white border-t-8 border-t-transparent transform translate-y-1" />
                  </div>
                </div>
              </div>

              {/* Panel Content */}
              <div className="w-full lg:w-1/2 panel-content space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {panel.title}
                  </h3>
                  <p className="text-purple-400 font-medium text-lg">
                    {panel.subtitle}
                  </p>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {panel.content}
                </p>

                {/* Progress indicator */}
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {panels.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === index ? 'bg-purple-500 scale-125' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">
                    {index + 1} of {panels.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to create something amazing?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's turn your ideas into reality with cutting-edge technology and creative solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 