
import React, { useRef, useEffect } from 'react';

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden relative bg-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-viva-blue/10 to-transparent rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-40 left-10 w-48 h-48 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
      </div>
      
      <div className="section">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-blue-900">
          Benefits of using Mock Interview Platform
        </h2>
        
        {/* First Benefit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
          <div className="order-2 md:order-1 fade-in-section">
            <h3 className="text-3xl font-display font-semibold mb-4 text-gray-900">
              Comprehensive Interview Coverage
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Whether you're preparing for technical, HR, coding, or problem-solving rounds, our platform offers a complete Mock Interview experience, all in one place.
            </p>
          </div>
          <div className="order-1 md:order-2 fade-in-section">
            <img 
              src="/lovable-uploads/fec496fb-1e53-4770-bdb8-f20f1912ec18.png" 
              alt="Comprehensive Interview Coverage" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
        
        {/* Second Benefit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
          <div className="fade-in-section">
            <img 
              src="/lovable-uploads/08693f18-9222-4114-825d-610d01819ebb.png" 
              alt="Instant Feedback" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="fade-in-section">
            <h3 className="text-3xl font-display font-semibold mb-4 text-gray-900">
              Instant Feedback for Continuous Improvement
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Receive detailed, AI-generated feedback immediately after each session, highlighting your strengths and areas for improvement, enabling you to refine your skills.
            </p>
          </div>
        </div>
        
        {/* Third Benefit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 fade-in-section">
            <h3 className="text-3xl font-display font-semibold mb-4 text-gray-900">
              Flexible and Convenient Practice
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Practice anytime, anywhere, at your own pace. Whether you're a busy student or a working professional, our platform fits seamlessly into your schedule.
            </p>
          </div>
          <div className="order-1 md:order-2 fade-in-section">
            <img 
              src="/lovable-uploads/3e3af7f7-6eef-46af-8a5c-579bd4664ba5.png" 
              alt="Flexible Practice" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
