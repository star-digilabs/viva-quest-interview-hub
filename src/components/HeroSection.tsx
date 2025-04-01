
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-36 pb-16 overflow-hidden relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 mb-6">
            Master Your Interview Skills
          </div>
          
          <h1 className="text-6xl font-bold leading-tight mb-6">
            Prepare for Success with{' '}
            <span className="text-blue-500">AI-Powered</span> Mock Interviews
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Elevate your interview performance with personalized practice
            sessions, real-time feedback, and expert analysis from our advanced
            AI interview platform.
          </p>
          
          <div className="flex gap-4 justify-center mb-16">
            <a 
              href="#" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all inline-flex items-center"
            >
              Start Practicing
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-blue-600 px-8 py-4 text-lg font-medium transition-all"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
