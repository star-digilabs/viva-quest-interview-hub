
import React, { useEffect, useRef } from 'react';

const ComparisonSection = () => {
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

  const oldWaySteps = [
    { text: "Hire me", icon: "/lovable-uploads/d198b86a-2d31-4332-acbd-6c1b2b2356c3.png" },
    { text: "Accessing resumes", icon: "/lovable-uploads/5fd6e7f4-95bd-4102-82c1-8d76873d6f47.png" },
    { text: "Access over 1000 applications", icon: "/lovable-uploads/5fd6e7f4-95bd-4102-82c1-8d76873d6f47.png" },
    { text: "Access cover letter", icon: "/lovable-uploads/5fd6e7f4-95bd-4102-82c1-8d76873d6f47.png" },
    { text: "Select me", icon: "/lovable-uploads/d198b86a-2d31-4332-acbd-6c1b2b2356c3.png" },
    { text: "I am the best fit for this job", icon: "/lovable-uploads/d198b86a-2d31-4332-acbd-6c1b2b2356c3.png" },
    { text: "I hope this email finds you well", icon: "/lovable-uploads/d198b86a-2d31-4332-acbd-6c1b2b2356c3.png" },
  ];

  const newWaySteps = [
    { text: "AI conducts initial screening", icon: "/lovable-uploads/d198b86a-2d31-4332-acbd-6c1b2b2356c3.png" },
    { text: "Candidates interviewed by AI", icon: "/lovable-uploads/d198b86a-2d31-4332-acbd-6c1b2b2356c3.png" },
    { text: "Automated skill assessment", icon: "/lovable-uploads/d198b86a-2d31-4332-acbd-6c1b2b2356c3.png" },
    { text: "Objective candidate evaluation", icon: "/lovable-uploads/d198b86a-2d31-4332-acbd-6c1b2b2356c3.png" },
  ];

  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            How it Works
          </h2>
          <p className="text-lg text-viva-gray-dark max-w-3xl mx-auto">
            VivaQuest brings forth a new way to vet and hire your desired talent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Old Way */}
          <div className="fade-in-section border rounded-3xl shadow-lg p-8 relative">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800">The Old Way</h3>
            </div>
            
            <div className="relative">
              {/* Central confused person */}
              <div className="mx-auto w-40 h-40 flex items-center justify-center mb-6">
                <div className="bg-purple-100 rounded-full p-4 w-full h-full flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/07eb00d2-702a-4948-afb4-5e31c74e5cdf.png" 
                    alt="Confused person" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>
              
              {/* Surrounding elements */}
              <div className="flex flex-wrap justify-center gap-4">
                {oldWaySteps.map((step, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 rounded-full px-4 py-2 flex items-center shadow-sm max-w-[200px]"
                    style={{
                      position: index < 4 ? 'relative' : 'relative',
                      top: index % 2 === 0 ? '10px' : '-10px',
                      left: index % 3 === 0 ? '-20px' : index % 3 === 1 ? '0px' : '20px',
                    }}
                  >
                    <span className="text-sm text-gray-700">{step.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* New Way */}
          <div className="fade-in-section border border-viva-purple-light rounded-3xl shadow-lg p-8 relative">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold gradient-text">The New Way</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg w-full max-w-lg">
                <img 
                  src="/lovable-uploads/9cadc9f2-71d4-4fa0-87d5-cefdafd45085.png" 
                  alt="AI Interview Platform" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {newWaySteps.map((step, index) => (
                  <div 
                    key={index} 
                    className="bg-purple-50 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm"
                    style={{
                      position: 'relative',
                      transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`,
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-viva-purple to-viva-purple-light flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <span className="text-sm text-viva-gray-dark">{step.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#features" className="button-primary inline-block">
            See How VivaQuest Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
