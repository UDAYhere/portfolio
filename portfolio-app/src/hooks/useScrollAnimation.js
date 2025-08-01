'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useScrollAnimation = () => {
  const elementRef = useRef(null);

  const animateOnScroll = (animation, trigger = null) => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const triggerElement = trigger || element;

    gsap.fromTo(
      element,
      animation.from || { opacity: 0, y: 50 },
      {
        ...animation.to || { opacity: 1, y: 0 },
        duration: animation.duration || 1,
        ease: animation.ease || "power2.out",
        scrollTrigger: {
          trigger: triggerElement,
          start: animation.start || "top 80%",
          end: animation.end || "bottom 20%",
          toggleActions: animation.toggleActions || "play none none reverse",
          ...animation.scrollTrigger
        }
      }
    );
  };

  const animateStagger = (selector, animation, stagger = 0.1) => {
    if (!elementRef.current) return;

    const elements = elementRef.current.querySelectorAll(selector);
    
    gsap.fromTo(
      elements,
      animation.from || { opacity: 0, y: 30 },
      {
        ...animation.to || { opacity: 1, y: 0 },
        duration: animation.duration || 0.8,
        ease: animation.ease || "power2.out",
        stagger: stagger,
        scrollTrigger: {
          trigger: elementRef.current,
          start: animation.start || "top 80%",
          end: animation.end || "bottom 20%",
          toggleActions: animation.toggleActions || "play none none reverse",
          ...animation.scrollTrigger
        }
      }
    );
  };

  const parallaxEffect = (speed = 0.5) => {
    if (!elementRef.current) return;

    gsap.to(elementRef.current, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  };

  const pinElement = (duration = "100%") => {
    if (!elementRef.current) return;

    ScrollTrigger.create({
      trigger: elementRef.current,
      start: "top top",
      end: duration,
      pin: true,
      pinSpacing: false
    });
  };

  useEffect(() => {
    return () => {
      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return {
    elementRef,
    animateOnScroll,
    animateStagger,
    parallaxEffect,
    pinElement
  };
}; 