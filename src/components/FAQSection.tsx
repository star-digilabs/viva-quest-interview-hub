
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does VivaQuest's AI interview system work?",
    answer: "VivaQuest uses advanced natural language processing and machine learning algorithms to simulate realistic interview scenarios. Our AI analyzes your responses, facial expressions, tone, and body language to provide comprehensive feedback on your performance."
  },
  {
    question: "Will I interact with real people during the mock interviews?",
    answer: "No, VivaQuest provides fully automated AI-powered interviews. This allows you to practice anytime without scheduling constraints, while still receiving professional-quality feedback and assessments."
  },
  {
    question: "What types of interviews can I practice on VivaQuest?",
    answer: "VivaQuest offers a wide range of interview types including behavioral, technical, case study, and industry-specific interviews. You can select from various roles and difficulty levels to customize your practice experience."
  },
  {
    question: "How accurate is the AI feedback compared to human feedback?",
    answer: "Our AI feedback system has been trained on thousands of real interviews and validated by HR professionals and hiring managers. While no AI is perfect, our system provides feedback that closely aligns with professional human assessments in most cases."
  },
  {
    question: "Can I access VivaQuest on my mobile device?",
    answer: "Yes, VivaQuest is fully responsive and works on desktop, tablet, and mobile devices. You'll need a device with a camera and microphone for the full interview experience."
  },
  {
    question: "Is my interview data private and secure?",
    answer: "Absolutely. We take privacy very seriously. Your interview recordings and data are encrypted and only accessible to you. We do not share your information with third parties without your explicit consent."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section id="faq" className="bg-viva-gray py-16 md:py-24" ref={sectionRef}>
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Find answers to common questions about VivaQuest's interview platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 fade-in-section"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full text-left p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-display font-medium text-viva-gray-darker pr-8">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-viva-blue flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-viva-gray-dark flex-shrink-0" />
                )}
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-viva-gray-dark rounded-b-xl bg-white">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center fade-in-section">
          <p className="text-viva-gray-dark mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="#contact"
            className="button-secondary"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
