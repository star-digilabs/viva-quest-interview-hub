
import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Play the background video when in view
            if (videoRef.current) {
              videoRef.current.play().catch(() => {
                console.log('Video play failed, likely due to autoplay restrictions');
              });
            }
          } else {
            // Pause when out of view to save resources
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.2 }
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

  return (
    <section id="how-it-works" className="relative py-16 md:py-24 overflow-hidden bg-gray-900" ref={sectionRef}>
      {/* Background overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-viva-gray-darker opacity-90 z-10"></div>
      </div>

      <div className="section relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left side: About text */}
          <div className="fade-in-section space-y-6">
            <div className="rounded-full bg-viva-blue/20 px-6 py-2 inline-flex items-center mb-6">
              <span className="text-viva-blue text-sm font-medium">About VivaQuest</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empowering Your Interview Success
            </h2>
            
            <p className="text-white/80 text-lg mb-4">
              VivaQuest was born from a simple observation: traditional interview preparation lacks personalization and real-time feedback, leaving candidates unprepared for the modern job market.
            </p>
            
            <p className="text-white/80 text-lg mb-4">
              Our mission is to transform interview preparation through cutting-edge AI technology that provides personalized practice, instant feedback, and comprehensive skill development.
            </p>
            
            <p className="text-white/80 text-lg mb-8">
              Whether you're a recent graduate, career changer, or seasoned professional looking to level up, VivaQuest gives you the tools to confidently tackle any interview situation.
            </p>
            
            <div className="pt-4">
              <a 
                href="#features" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all inline-flex items-center"
              >
                Discover Our Platform
              </a>
            </div>
          </div>
          
          {/* Right side: Video */}
          <div className="fade-in-section">
            <Dialog>
              <DialogTrigger asChild>
                <div className="aspect-video relative cursor-pointer overflow-hidden rounded-xl shadow-2xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" 
                    alt="About VivaQuest" 
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:bg-black/50">
                    <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-all">
                      <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-lg">
                    <p className="font-medium text-white">Watch our story</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] p-0 bg-black">
                <div className="aspect-video w-full">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="VivaQuest Story"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
