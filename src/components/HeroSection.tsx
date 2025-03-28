
import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100 + '%';
      const y = (e.clientY / window.innerHeight) * 100 + '%';
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 bg-blue-950">
      <div
        className="spotlight"
        style={{
          '--x': mousePosition.x,
          '--y': mousePosition.y,
        } as React.CSSProperties}
      ></div>
      
      <div className="section flex flex-col justify-center items-center z-10 animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 w-full">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Mock Interview
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-8">
              Elevate Interview Preparation
            </h2>
            
            <p className="text-lg text-gray-300 mb-10">
              Get ready for your dream job with personalized Mock Interview Practice designed to mimic real-life scenarios.
            </p>
            
            <div className="mb-12">
              <a href="#how-it-works" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all inline-flex items-center">
                Start Practicing
                <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-8 mt-12">
              <div className="flex flex-col items-center">
                <div className="flex">
                  <img src="https://cdn-icons-png.flaticon.com/512/2107/2107956.png" alt="Product Hunt" className="h-8 w-8" />
                  <div className="flex ml-2">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-white text-sm mt-2">5/5 (253 reviews)</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex">
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="G2" className="h-8 w-8" />
                  <div className="flex ml-2">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-white text-sm mt-2">4.6/5 (98 reviews)</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex">
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968908.png" alt="Capterra" className="h-8 w-8" />
                  <div className="flex ml-2">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-white text-sm mt-2">4.9/5 (37 reviews)</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/f0ef46ce-1d35-4911-918e-9e8f48557af4.png" 
              alt="VivaQuest Interface" 
              className="w-full h-auto relative z-10"
            />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-purple-500 opacity-20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950 to-transparent z-0"></div>
      
      <div className="h-24"></div>
    </section>
  );
};

export default HeroSection;
