
import React, { useEffect, useRef } from 'react';
import { UserPlus, Video, MessageSquare, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Create Your Profile',
    description: 'Set up your profile with your industry, role preferences, and experience level to personalize your interview practice.',
    icon: UserPlus,
  },
  {
    title: 'Choose Your Interview Type',
    description: 'Select from a variety of interview types including behavioral, technical, or role-specific scenarios.',
    icon: Video,
  },
  {
    title: 'Practice & Receive Feedback',
    description: 'Complete the interview and receive instant AI-generated feedback on your performance with actionable insights.',
    icon: MessageSquare,
  },
];

const HowItWorks = () => {
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
    <section id="how-it-works" className="py-16 md:py-24" ref={sectionRef}>
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">How VivaQuest Works</h2>
          <p className="section-subtitle mx-auto">
            A simple three-step process to transform your interview skills and boost your confidence.
          </p>
        </div>

        <div className="relative">
          {/* Line connecting the steps */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-viva-blue-light -translate-x-1/2 z-0"></div>
          
          <div className="space-y-12 md:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="fade-in-section md:flex items-center"
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                  <div className={`p-6 rounded-2xl glass ${index % 2 === 0 ? 'ml-auto mr-0' : 'ml-0 mr-auto'} max-w-md`}>
                    <h3 className="text-xl font-display font-medium text-viva-gray-darker mb-3">
                      {step.title}
                    </h3>
                    <p className="text-viva-gray-dark">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center justify-center md:w-0">
                  <div className="rounded-full bg-viva-blue h-12 w-12 flex items-center justify-center shadow-lg border-4 border-white">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-3' : 'md:pr-12 md:text-right'}`}>
                  <div className="md:hidden rounded-full bg-viva-blue h-12 w-12 flex items-center justify-center shadow-lg border-4 border-white mb-4 mx-auto">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="block text-3xl font-display font-medium text-viva-blue">
                    Step {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 fade-in-section">
          <a href="#pricing" className="button-primary group inline-flex items-center">
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
