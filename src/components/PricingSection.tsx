
import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$19',
    period: 'per month',
    description: 'Perfect for beginners looking to improve their interview skills.',
    features: [
      '5 AI interview sessions',
      'Basic feedback analysis',
      'Interview recording',
      'Standard question bank',
      'Email support'
    ],
    isPopular: false,
    ctaText: 'Start Free Trial',
  },
  {
    name: 'Professional',
    price: '$49',
    period: 'per month',
    description: 'Comprehensive preparation for active job seekers.',
    features: [
      'Unlimited AI interview sessions',
      'In-depth feedback analysis',
      'Interview recording & transcription',
      'Extended question library',
      'Performance analytics',
      'Industry-specific scenarios',
      'Priority support'
    ],
    isPopular: true,
    ctaText: 'Get Started',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'for teams',
    description: 'Tailored solutions for organizations and educational institutions.',
    features: [
      'All Professional features',
      'Customizable question sets',
      'Dedicated account manager',
      'Team performance analytics',
      'Bulk user management',
      'API access',
      '24/7 support'
    ],
    isPopular: false,
    ctaText: 'Contact Sales',
  }
];

const PricingSection = () => {
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
    <section id="pricing" className="py-16 md:py-24" ref={sectionRef}>
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Simple, Transparent Pricing</h2>
          <p className="section-subtitle mx-auto">
            Choose the plan that best fits your interview preparation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card fade-in-section ${
                plan.isPopular ? 'pricing-card-highlight' : ''
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-viva-blue text-white text-sm font-medium px-4 py-1 rounded-full shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-display font-medium text-viva-gray-darker mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-3xl md:text-4xl font-display font-semibold text-viva-gray-darker">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-viva-gray-dark text-sm">
                    {plan.period}
                  </span>
                </div>
                <p className="mt-3 text-viva-gray-dark">
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-viva-blue flex-shrink-0 mr-2" />
                    <span className="text-viva-gray-darker">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-viva-blue text-white hover:bg-viva-blue-dark'
                    : 'bg-viva-gray text-viva-gray-darker hover:bg-viva-blue/10'
                } hover:shadow-md active:scale-95 w-full`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center fade-in-section">
          <p className="text-viva-gray-dark">
            All plans come with a 7-day free trial. No credit card required to start.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
