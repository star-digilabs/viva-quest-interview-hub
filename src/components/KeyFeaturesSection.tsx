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

  const features = [
    {
      title: 'Customized Industry Interviews',
      description: 'Prepare with Mock Interviews tailored to your specific role and industry, ensuring your practice is focused and relevant.',
      icon: '/lovable-uploads/5fd6e7f4-95bd-4102-82c1-8d76873d6f47.png',
    },
    {
      title: 'Realistic Technical Challenges',
      description: 'Sharpen your coding and problem-solving skills with technical interview simulations that mirror real-world challenges.',
      icon: '/lovable-uploads/8fa261aa-0050-4de9-9ade-fbb3eae5f9b8.png',
    },
    {
      title: 'Resume Scoring and Matching',
      description: 'Evaluate your resume\'s effectiveness and match it against any job description to see how well it fits your target role.',
      icon: '/lovable-uploads/7985c544-9c0e-4216-8d94-1d68685e6e05.png',
    },
    {
      title: 'Performance Analytics',
      description: 'Track your progress with detailed metrics and visualizations that highlight your improvement areas and strengths over time.',
      icon: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'Expert Review Sessions',
      description: 'Connect with industry professionals for personalized feedback and coaching to further refine your interview skills.',
      icon: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'AI Communication Coach',
      description: 'Receive real-time guidance on your communication style, body language, and delivery to help you present confidently.',
      icon: 'https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
    }
  ];

  return (
    <section className="py-16 md:py-24 overflow-hidden relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-20 gradient-text">
          Key Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card fade-in-section transform transition-all duration-500 ease-out"
            >
              {/* Icon container */}
              <div className="rounded-full bg-viva-purple/10 p-4 inline-flex mb-4 group">
                <img src={feature.icon} alt={feature.title} className="h-6 w-6 text-viva-purple relative z-10" />
              </div>
              
              <h3 className="text-2xl font-display font-semibold mb-4 gradient-text">
                {feature.title}
              </h3>
              <p className="text-viva-gray-dark">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
