
import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';

const BusinessSolutionsSection = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Business & Educational Solutions
          </h2>
          <div className="w-24 h-1 bg-viva-purple-light mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Business Card */}
          <div className="fade-in-section bg-gradient-to-br from-white to-purple-50 p-6 rounded-3xl shadow-lg border border-purple-100 transition-all duration-300 hover:shadow-xl overflow-hidden relative group">
            <div className="h-52 relative mb-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/88d86628-912f-4ef4-bc76-b33c9d51ba5a.png" 
                alt="Business Solutions" 
                className="h-full object-contain absolute z-10 left-1/2 -translate-x-1/2 transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-50 to-transparent rounded-xl"></div>
            </div>
            
            <div className="p-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Businesses</h3>
              <h4 className="text-xl text-viva-purple font-semibold mb-4">Hiring Partner</h4>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-viva-purple-light font-bold">•</span>
                  <span className="text-gray-600">Streamline your recruitment process</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-viva-purple-light font-bold">•</span>
                  <span className="text-gray-600">Save your time & resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-viva-purple-light font-bold">•</span>
                  <span className="text-gray-600">Improve candidate experience</span>
                </li>
              </ul>
              
              <Button 
                className="bg-gray-900 hover:bg-black text-white font-medium rounded-full px-6"
              >
                Know more
              </Button>
            </div>
          </div>
          
          {/* Educational Card */}
          <div className="fade-in-section bg-gradient-to-br from-white to-purple-50 p-6 rounded-3xl shadow-lg border border-purple-100 transition-all duration-300 hover:shadow-xl overflow-hidden relative group">
            <div className="h-52 relative mb-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/88d86628-912f-4ef4-bc76-b33c9d51ba5a.png" 
                alt="Educational Solutions" 
                className="h-full object-contain absolute z-10 left-1/2 -translate-x-1/2 transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-50 to-transparent rounded-xl"></div>
            </div>
            
            <div className="p-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Educational Institutions</h3>
              <h4 className="text-xl text-viva-purple font-semibold mb-4">Student Prep Partner</h4>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-viva-purple-light font-bold">•</span>
                  <span className="text-gray-600">Make your students interview ready</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-viva-purple-light font-bold">•</span>
                  <span className="text-gray-600">Seed professionalism</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-viva-purple-light font-bold">•</span>
                  <span className="text-gray-600">Boost confidence</span>
                </li>
              </ul>
              
              <Button 
                className="bg-gray-900 hover:bg-black text-white font-medium rounded-full px-6"
              >
                Know more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutionsSection;
