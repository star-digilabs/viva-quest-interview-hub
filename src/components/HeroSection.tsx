
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100 + '%';
      const y = (e.clientY / window.innerHeight) * 100 + '%';
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      <div
        className="spotlight"
        style={{
          '--x': mousePosition.x,
          '--y': mousePosition.y,
        } as React.CSSProperties}
      ></div>
      
      <div className="section flex flex-col justify-center items-center text-center z-10 animate-fade-in-up">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 bg-viva-blue-light text-viva-blue rounded-full text-sm font-medium mb-4">
            Master Your Interview Skills
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-semibold text-viva-gray-darker leading-tight max-w-4xl mb-6">
          Prepare for Success with <span className="text-viva-blue">AI-Powered</span> Mock Interviews
        </h1>
        
        <p className="text-lg md:text-xl text-viva-gray-dark max-w-2xl mb-10">
          Elevate your interview performance with personalized practice sessions, real-time feedback, and expert analysis from our advanced AI interview platform.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#how-it-works" className="button-primary group">
            Start Practicing
            <ArrowRight className="inline-block ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#features" className="button-secondary">
            Explore Features
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-viva-gray to-transparent z-0"></div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-pulse-slow">
        <a href="#features" className="flex flex-col items-center text-viva-gray-dark">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
