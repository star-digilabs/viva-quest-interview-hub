
import React from 'react';
import { Button } from './ui/button';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-viva-purple to-viva-purple-light text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start practicing today and <span className="text-viva-bg">land your dream job</span>
            </h2>
            <p className="text-lg mb-8">
              Try our mock interview tool for free today. Start practicing and improving
              your skills immediately.
            </p>
            <Button className="bg-white text-viva-purple hover:bg-viva-bg hover:text-viva-purple-light font-medium px-8 py-6 rounded-full text-lg">
              Sign Up - It's Free
            </Button>
          </div>
          
          <div className="relative fade-in-section hidden md:block">
            <img 
              src="/lovable-uploads/32023af3-991f-4248-9f15-ad8d31973ad3.png" 
              alt="Interview practice resources" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
