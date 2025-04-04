
import React, { useRef, useEffect } from 'react';

const HowItWorksSection = () => {
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

  const steps = [
    {
      title: "Create Your Profile",
      description: "Set up your profile with your industry, role preferences, and experience level to personalize your interview practice.",
    },
    {
      title: "Choose Your Interview Type",
      description: "Select from a variety of interview types including behavioral, technical, or role-specific scenarios.",
    },
    {
      title: "Practice & Receive Feedback",
      description: "Complete the interview and receive instant AI-generated feedback on your performance with actionable insights.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24">
      <div className="section">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            How VivaQuest Works
          </h2>
          <p className="text-lg md:text-xl text-viva-gray-dark max-w-3xl mx-auto">
            A simple three-step process to transform your interview skills and boost your confidence.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-viva-purple-light/30 z-0"></div>

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center mb-24 relative z-10 fade-in-section">
            <div className="md:w-1/2 md:text-right md:pr-12 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-3">
                Create Your Profile
              </h3>
              <p className="text-viva-gray-dark">
                Set up your profile with your industry, role preferences, and experience level to personalize your interview practice.
              </p>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-viva-purple to-viva-purple-light flex items-center justify-center text-white font-bold text-xl z-20 shadow-lg">
                1
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              {/* Empty space for alignment on right side */}
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center mb-24 relative z-10 fade-in-section">
            <div className="md:w-1/2 md:text-right md:pr-12 mb-8 md:mb-0 md:order-1">
              {/* Empty space for alignment on left side */}
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-viva-purple to-viva-purple-light flex items-center justify-center text-white font-bold text-xl z-20 shadow-lg">
                2
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 md:order-2">
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-3">
                Choose Your Interview Type
              </h3>
              <p className="text-viva-gray-dark">
                Select from a variety of interview types including behavioral, technical, or role-specific scenarios.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center relative z-10 fade-in-section">
            <div className="md:w-1/2 md:text-right md:pr-12 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-3">
                Practice & Receive Feedback
              </h3>
              <p className="text-viva-gray-dark">
                Complete the interview and receive instant AI-generated feedback on your performance with actionable insights.
              </p>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-viva-purple to-viva-purple-light flex items-center justify-center text-white font-bold text-xl z-20 shadow-lg">
                3
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              {/* Empty space for alignment on right side */}
            </div>
          </div>
        </div>

        <div className="text-center mt-16 fade-in-section">
          <a 
            href="#pricing" 
            className="button-primary inline-block"
          >
            Start Your Interview Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
