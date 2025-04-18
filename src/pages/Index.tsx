
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import KeyFeaturesSection from '../components/KeyFeaturesSection';
import AboutSection from '../components/AboutSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import PricingComparisonSection from '../components/PricingComparisonSection';
import ComparisonSection from '../components/ComparisonSection';
import CTASection from '../components/CTASection';
import WhiteboardSection from '../components/WhiteboardSection';
import BusinessSolutionsSection from '../components/BusinessSolutionsSection';

const Index = () => {
  useEffect(() => {
    // Add fade-in animation for sections when scrolling
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ComparisonSection />
      <KeyFeaturesSection />
      <WhiteboardSection />
      <HowItWorksSection />
      <BusinessSolutionsSection />
      <PricingComparisonSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
