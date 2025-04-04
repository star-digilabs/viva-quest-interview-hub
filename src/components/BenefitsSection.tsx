
import React, { useEffect, useRef } from 'react';
import { Card } from './ui/card';

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

  const features = [
    {
      tagline: "It all starts with selecting a job role",
      title: "Create Job Assessment",
      background: "#EDEAFF",
      image: "/lovable-uploads/c2ecb06e-429e-40d3-baf0-211771ee735b.png",
      points: [
        "Choose from a template or just enter any job role you want to hire for.",
        "Select topics/Skills you want to evaluate.",
        "Optionally specify questions to ask or let our AI ask relevant question dynamically.",
        "Easily emulate your company specific interview process with our customization options."
      ]
    },
    {
      tagline: "Switch to AI powered initial screening",
      title: "Let our AI conduct Interview",
      background: "#FFF5E6",
      image: "/lovable-uploads/9cadc9f2-71d4-4fa0-87d5-cefdafd45085.png",
      points: [
        "Invite candidates to appear in interview anytime, AI is available 24x7 to conduct interview.",
        "No more scheduling juggling or no show candidate.",
        "Allow the AI to ask tailored questions based on the job role and skills required.",
        "Record and transcribe candidate responses in real-time for detailed analysis.",
        "Save time and resources by automating the initial screening process."
      ]
    },
    {
      tagline: "Unbiased and quality candidate feedback",
      title: "Evaluate Candidate Feedback",
      background: "#F0FFEE",
      image: "/lovable-uploads/07eb00d2-702a-4948-afb4-5e31c74e5cdf.png",
      points: [
        "Receive comprehensive candidate profiles with detailed AI-generated feedback.",
        "Compare candidates side-by-side using our intuitive dashboard.",
        "Make data-driven hiring decisions with confidence.",
        "AI proctoring and fair AI to make sure you get right candidate, everytime.",
        "Customize feedback criteria to align with your company's hiring standards."
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 gradient-text">
          Key Platform Benefits
        </h2>

        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="fade-in-section"
              style={{ backgroundColor: feature.background }}
              className={`fade-in-section rounded-3xl shadow-lg overflow-hidden ${index % 2 === 0 ? '' : ''}`}
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="mb-4 flex items-center">
                    <div className="h-0.5 w-8 bg-gradient-to-r from-viva-purple to-viva-purple-light mr-3"></div>
                    <p className="text-viva-purple-light font-medium">{feature.tagline}</p>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-8">
                    {feature.title}
                  </h3>
                  <div className="space-y-4">
                    {feature.points.map((point, i) => (
                      <div key={i} className="flex items-start">
                        <div className="text-viva-purple text-2xl mr-4">—</div>
                        <p className="text-viva-gray-dark">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : 'md:order-2'} p-6 flex items-center justify-center`}>
                  <div className="glass-card rounded-xl overflow-hidden shadow-lg max-w-md">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
