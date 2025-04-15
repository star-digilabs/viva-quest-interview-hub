
import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from './ui/carousel';

const WhiteboardSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const features = [
    {
      title: "Real-time collaborative white board",
      points: [
        "Interactive space for problem-solving and brainstorming",
        "Drag-and-drop, draw, and text tools to ease your job",
        "Easy collaboration for design and logic discussions",
        "Save and share solutions for post-session review"
      ],
      image: "/lovable-uploads/f95e0572-d6b9-45d4-b407-348bc61b107b.png"
    },
    {
      title: "AI-Powered Interview Analysis",
      points: [
        "Real-time feedback on your communication patterns",
        "Detailed reports on answer quality and structure",
        "Personalized improvement suggestions after each practice",
        "Track your progress over time with performance analytics"
      ],
      image: "/lovable-uploads/909bc351-4a1a-4b39-ab68-e385010882cb.png"
    },
    {
      title: "Industry-Specific Question Bank",
      points: [
        "Thousands of questions tailored to your field",
        "Questions updated regularly to match current trends",
        "Practice with real interview scenarios from top companies",
        "Adjust difficulty levels based on your experience"
      ],
      image: "/lovable-uploads/88d86628-912f-4ef4-bc76-b33c9d51ba5a.png"
    }
  ];

  const totalSlides = features.length;

  // Auto-advance carousel
  useEffect(() => {
    const startAutoplay = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000); // Change slide every 5 seconds
    };

    startAutoplay();

    // Reset the timer when the slide changes manually
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalSlides]);

  // Intersection observer for animations
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

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-16 bg-gradient-to-r from-viva-purple to-viva-purple-light text-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Step Into the Ultimate Interview Experience
          </h2>
          <p className="text-xl">
            Experience a professional-grade interview setup designed for success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section animate-float">
            <Carousel className="w-full">
              <CarouselContent>
                {features.map((feature, index) => (
                  <CarouselItem key={index} className={index === currentSlide ? 'block' : 'hidden'}>
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-auto rounded-lg shadow-2xl transition-opacity duration-500"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          
          <div className="fade-in-section transition-all duration-500">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0 hidden'}`}
              >
                <h3 className="text-3xl font-bold mb-6 text-viva-bg">
                  {feature.title}
                </h3>
                
                <ul className="space-y-4">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="inline-block mt-1">•</span>
                      <span className="text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="mt-8">
              <Button className="bg-white text-viva-purple hover:bg-viva-bg hover:text-viva-purple-light font-medium px-8 py-5 rounded-full text-lg">
                Schedule Your Session Now
              </Button>
            </div>
            
            <div className="flex items-center justify-start mt-8 gap-2">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Previous feature"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <div className="flex space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Next feature"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteboardSection;
