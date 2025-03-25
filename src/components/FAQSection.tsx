
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Plus, Minus, Sparkles } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const copyAnswer = (answer: string) => {
    navigator.clipboard.writeText(answer).then(() => {
      toast({
        title: "Copied to clipboard",
        description: "Answer copied successfully!",
        duration: 2000,
      });
    });
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
    <section id="faq" className="bg-viva-gray py-16 md:py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-viva-blue opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-viva-blue opacity-5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-20 h-20 bg-viva-blue-light opacity-30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
      </div>
      
      <div className="section relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-viva-blue mr-2 animate-pulse" />
            <h2 className="section-title mx-auto">Frequently Asked Questions</h2>
            <Sparkles className="h-6 w-6 text-viva-blue ml-2 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="section-subtitle mx-auto">
            Find answers to common questions about VivaQuest's interview platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto perspective-1000">
          {faqs.map((faq, index) => (
            <Collapsible
              key={index}
              className="mb-4 fade-in-section group"
              style={{ transitionDelay: `${index * 0.1}s` }}
              open={openIndex === index}
              onOpenChange={() => toggleFAQ(index)}
            >
              <CollapsibleTrigger className="w-full text-left p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 flex justify-between items-center group-hover:bg-opacity-95 group-hover:translate-y-[-2px]">
                <span className="text-lg font-display font-medium text-viva-gray-darker pr-8">
                  {faq.question}
                </span>
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-viva-blue-light flex items-center justify-center transition-transform duration-300">
                    {openIndex === index ? (
                      <Minus className="h-4 w-4 text-viva-blue transform transition-transform duration-300" />
                    ) : (
                      <Plus className="h-4 w-4 text-viva-blue transform transition-transform duration-300" />
                    )}
                  </div>
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="overflow-hidden transition-all duration-300 ease-in-out">
                <div className="p-6 pt-4 text-viva-gray-dark rounded-b-xl bg-white border-t border-viva-gray">
                  <div className="prose max-w-none">
                    <p>{faq.answer}</p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button 
                      onClick={() => copyAnswer(faq.answer)}
                      className="text-xs text-viva-blue hover:text-viva-blue-dark flex items-center transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy
                    </button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        <div className="mt-12 text-center fade-in-section">
          <p className="text-viva-gray-dark mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="#contact"
            className="button-secondary group relative overflow-hidden"
          >
            <span className="relative z-10">Contact Support</span>
            <span className="absolute inset-0 bg-viva-blue scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 opacity-10"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
