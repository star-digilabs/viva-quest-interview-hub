
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
    <section id="features" className="bg-viva-gray py-16 md:py-24" ref={sectionRef}>
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Features Designed to Enhance Your Interview Preparation</h2>
          <p className="section-subtitle mx-auto">
            Every aspect of VivaQuest is carefully crafted to help you excel in your real interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card fade-in-section"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-full bg-viva-blue-light p-3 inline-flex mb-4">
                <feature.icon className="h-6 w-6 text-viva-blue" />
              </div>
              <h3 className="text-xl font-display font-medium text-viva-gray-darker mb-2">
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

export default FeaturesSection;
