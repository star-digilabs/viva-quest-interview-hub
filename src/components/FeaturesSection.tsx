
import React, { useEffect, useRef } from 'react';
import { Video, MessageSquare, BarChart, Clock, Cpu, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Interviews',
    description: 'Engage with our intelligent AI interviewers that simulate real-world interview scenarios.',
    icon: Cpu,
  },
  {
    title: 'Video Recording',
    description: 'Record your sessions to review your body language, tone, and presentation style.',
    icon: Video,
  },
  {
    title: 'Detailed Feedback',
    description: 'Receive comprehensive feedback on your answers, communication skills, and areas for improvement.',
    icon: MessageSquare,
  },
  {
    title: 'Performance Analytics',
    description: 'Track your progress over time with detailed metrics and improvement suggestions.',
    icon: BarChart,
  },
  {
    title: 'Flexible Scheduling',
    description: 'Practice anytime, anywhere. Our platform is available 24/7 to fit your schedule.',
    icon: Clock,
  },
  {
    title: 'Privacy Focused',
    description: 'Your data and practice sessions are secure and private with our enterprise-grade security.',
    icon: ShieldCheck,
  }
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

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

    featuresRef.current.forEach((card) => {
      if (!card) return;
      
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width - 0.5) * 2; // -1 to 1
        const yPercent = (y / rect.height - 0.5) * 2; // -1 to 1
        
        card.style.transform = `perspective(1000px) rotateY(${xPercent * 5}deg) rotateX(${yPercent * -5}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
      });
    });

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="features" className="bg-viva-gray py-16 md:py-24" ref={sectionRef}>
      <div className="section relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-viva-blue/10 to-transparent rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-40 left-10 w-48 h-48 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
        </div>

        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <span className="h-[1px] w-12 bg-viva-blue"></span>
            <h2 className="section-title mx-auto">Features Designed for You</h2>
            <span className="h-[1px] w-12 bg-viva-blue"></span>
          </div>
          <p className="section-subtitle mx-auto">
            Every aspect of VivaQuest is carefully crafted to help you excel in your real interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featuresRef.current[index] = el)}
              className="feature-card fade-in-section transform transition-all duration-500 ease-out"
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="relative">
                <div className="rounded-full bg-viva-blue/10 p-4 inline-flex mb-4 group">
                  <feature.icon className="h-6 w-6 text-viva-blue relative z-10 group-hover:animate-bounce" />
                  <div className="absolute inset-0 bg-viva-blue rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </div>
                <div className="absolute -top-1 -left-1 w-10 h-10 rounded-full bg-gradient-to-br from-viva-blue/20 to-transparent blur-md animate-pulse" style={{ animationDuration: '3s' }}></div>
              </div>
              <h3 className="text-xl font-display font-medium text-viva-gray-darker mb-2">
                {feature.title}
              </h3>
              <p className="text-viva-gray-dark">
                {feature.description}
              </p>
              
              {index === 1 && (
                <div className="mt-4 overflow-hidden rounded-lg border border-viva-gray">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-auto"
                  >
                    <source src="https://cdn.dribbble.com/users/1735807/screenshots/7706161/media/514162b9ae694b2f17848a0fa9e6f752.mp4" type="video/mp4" />
                  </video>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
