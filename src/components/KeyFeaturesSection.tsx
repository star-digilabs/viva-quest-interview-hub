
import React, { useRef, useEffect } from 'react';

const KeyFeaturesSection = () => {
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
    <section className="py-16 md:py-24 overflow-hidden relative bg-blue-900 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-800/50 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-40 left-10 w-48 h-48 bg-blue-700/30 rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-20">
          Key Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Feature 1 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 fade-in-section hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/10 rounded-xl p-6 mb-6 mx-auto max-w-[280px]">
              <img 
                src="/lovable-uploads/5fd6e7f4-95bd-4102-82c1-8d76873d6f47.png" 
                alt="Customized Industry Interviews" 
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-center">
              Customized Industry Interviews
            </h3>
            <p className="text-gray-300 text-center">
              Prepare with Mock Interviews tailored to your specific role and industry, ensuring your practice is focused and relevant.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 fade-in-section hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/10 rounded-xl p-6 mb-6 mx-auto max-w-[280px]">
              <img 
                src="/lovable-uploads/8fa261aa-0050-4de9-9ade-fbb3eae5f9b8.png" 
                alt="Realistic Technical Challenges" 
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-center">
              Realistic Technical Challenges
            </h3>
            <p className="text-gray-300 text-center">
              Sharpen your coding and problem-solving skills with technical interview simulations that mirror real-world challenges.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 fade-in-section hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/10 rounded-xl p-6 mb-6 mx-auto max-w-[280px]">
              <img 
                src="/lovable-uploads/7985c544-9c0e-4216-8d94-1d68685e6e05.png" 
                alt="Resume Scoring and Matching" 
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-center">
              Resume Scoring and Matching
            </h3>
            <p className="text-gray-300 text-center">
              Evaluate your resume's effectiveness and match it against any job description to see how well it fits your target role.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
