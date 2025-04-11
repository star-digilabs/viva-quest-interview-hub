
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    content: "VivaQuest transformed my interview approach completely. The AI feedback pointed out habits I wasn't aware of, and after just a few practice sessions, I landed my dream job at a top tech company.",
    author: "Sarah Johnson",
    title: "Software Engineer",
    rating: 5,
  },
  {
    id: 2,
    content: "The realistic interview simulations helped me overcome my anxiety. The detailed feedback on my communication style was eye-opening and helped me refine my responses.",
    author: "Michael Chen",
    title: "Product Manager",
    rating: 5,
  },
  {
    id: 3,
    content: "I used VivaQuest to prepare for management interviews after years in individual contributor roles. The focused practice helped me articulate my leadership experience effectively.",
    author: "Priya Patel",
    title: "Engineering Manager",
    rating: 5,
  },
  {
    id: 4,
    content: "As someone switching careers, I needed specialized interview practice. VivaQuest customized questions to my situation and helped me bridge the gap to my new industry.",
    author: "David Rodriguez",
    title: "Data Scientist",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = testimonials.length - 1;
  const intervalRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Handle automatic sliding
  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = window.setInterval(() => {
        setActiveIndex((current) => (current === maxIndex ? 0 : current + 1));
      }, 5000);
    };

    startInterval();

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [maxIndex]);

  // Reset interval on manual navigation
  const resetInterval = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        setActiveIndex((current) => (current === maxIndex ? 0 : current + 1));
      }, 5000);
    }
  };

  const handlePrev = () => {
    setActiveIndex((current) => (current === 0 ? maxIndex : current - 1));
    resetInterval();
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === maxIndex ? 0 : current + 1));
    resetInterval();
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'text-viva-purple fill-viva-purple' : 'text-viva-gray-dark'
          }`}
        />
      ));
  };

  return (
    <section className="bg-viva-purple/10 py-12 md:py-16" ref={sectionRef}>
      <div className="section">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="section-title mx-auto">Success Stories from VivaQuest Users</h2>
          <p className="section-subtitle mx-auto">
            Read how VivaQuest has helped job seekers across industries ace their interviews.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 fade-in-section">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full px-4"
                >
                  <div className="glass p-8 rounded-2xl">
                    <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                    <blockquote className="text-lg md:text-xl text-viva-gray-darker mb-6">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="rounded-full bg-viva-purple w-12 h-12 flex items-center justify-center text-white font-medium text-lg">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="font-display font-medium text-viva-gray-darker">
                          {testimonial.author}
                        </p>
                        <p className="text-viva-gray-dark text-sm">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white border border-viva-gray shadow-sm hover:shadow-md transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-viva-gray-darker" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    resetInterval();
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? 'bg-viva-purple w-6'
                      : 'bg-viva-gray-dark bg-opacity-30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white border border-viva-gray shadow-sm hover:shadow-md transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-viva-gray-darker" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
