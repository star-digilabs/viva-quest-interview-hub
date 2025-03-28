
import React from 'react';

const SecondaryHeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-50 text-gray-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need help to land your dream job?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Practice with experts from FAANG and top tech companies. Get personalized feedback to help you nail the interviews that matter most.
            </p>
            <a 
              href="#" 
              className="inline-block bg-blue-500 text-white font-medium px-8 py-4 rounded-full hover:bg-blue-600 transition-colors"
            >
              Practice with Experts
            </a>
          </div>
          
          <div className="relative fade-in-section">
            <img 
              src="/lovable-uploads/0014a827-c1e3-4cf9-90d1-7782c413ef35.png" 
              alt="Practice with experts" 
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-blue-400 opacity-20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-purple-500 opacity-20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryHeroSection;
