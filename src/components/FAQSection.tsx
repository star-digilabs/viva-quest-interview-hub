
import React, { useState, useEffect, useRef } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "What is a Mock Interview?",
    answer: "A mock interview is a simulation of an actual job interview, designed to help you practice your responses and get comfortable with the interview process. It helps identify strengths and areas for improvement before facing a real interview."
  },
  {
    question: "How does online Mock Interview practice work?",
    answer: "Our platform uses AI to simulate realistic interview scenarios. You'll answer questions just like in a real interview, and receive immediate feedback on your responses, body language, and presentation skills. You can practice anytime, anywhere, using your computer or mobile device."
  },
  {
    question: "Can I practice for technical interviews on this platform?",
    answer: "Yes, our platform offers specialized technical interview simulations for various roles including software engineering, data science, and IT positions. These include coding challenges, problem-solving questions, and technical knowledge assessments tailored to your specific field."
  },
  {
    question: "Can I practice multiple Mock Interviews?",
    answer: "Absolutely! You can practice as many mock interviews as you'd like. We recommend regular practice sessions to build confidence and refine your skills. Our subscription plans offer unlimited access to various interview types and industries."
  },
  {
    question: "How quickly will I get feedback on my Mock Interview?",
    answer: "You'll receive immediate feedback right after completing your interview session. Our AI analyzes your responses in real-time and provides comprehensive feedback on content, delivery, and presentation aspects. You can also review recorded sessions later for self-assessment."
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
    <section id="faq" className="py-12 md:py-16 relative overflow-hidden bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-viva-gray-dark mb-8">
              Got a question? We're here to answer!
            </p>
            <a 
              href="#" 
              className="inline-block text-viva-purple hover:text-viva-purple-light font-medium border-2 border-viva-purple hover:border-viva-purple-light rounded-full px-8 py-3 transition-colors"
            >
              View all FAQs
            </a>
          </div>

          <div className="md:w-2/3 fade-in-section">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button
                    className="flex justify-between items-center w-full py-6 text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-xl font-medium text-gray-900">{faq.question}</span>
                    <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                      <Plus className="h-6 w-6 text-viva-purple" />
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
