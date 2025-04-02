
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-36 pb-16 overflow-hidden relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left side - Text content */}
          <div className="text-left fade-in-section">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 mb-6">
              Master Your Interview Skills
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Prepare for Success with{' '}
              <span className="text-blue-500">AI-Powered</span> Mock Interviews
            </h1>
            
            <p className="text-lg text-gray-600 mb-10">
              Elevate your interview performance with personalized practice
              sessions, real-time feedback, and expert analysis from our advanced
              AI interview platform.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
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

          {/* Right side - Interactive image */}
          <div className="relative fade-in-section">
            <div className="relative z-10 animate-float">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                  alt="AI Interview Session" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                
                {/* Interactive elements overlaid on the image */}
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-bounce-subtle">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                      ✓
                    </div>
                    <div className="ml-3">
                      <p className="font-bold text-sm">98% Success Rate</p>
                      <p className="text-xs text-gray-500">Job Interviews</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-pulse-slow">
                  <div className="text-center">
                    <p className="font-bold text-blue-500 text-xl">4.9/5</p>
                    <p className="text-xs text-gray-500">User Rating</p>
                    <div className="flex justify-center mt-1">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i} className="text-yellow-500">
                          {star}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-spin-slow"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
