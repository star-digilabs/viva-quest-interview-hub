
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
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      <div
        className="spotlight"
        style={{
          '--x': mousePosition.x,
          '--y': mousePosition.y,
        } as React.CSSProperties}
      ></div>
      
      <div className="section flex flex-col justify-center items-center text-center z-10 animate-fade-in-up">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 bg-viva-blue-light text-viva-blue rounded-full text-sm font-medium mb-4">
            Master Your Interview Skills
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-semibold text-viva-gray-darker leading-tight max-w-4xl mb-6">
          Prepare for Success with <span className="text-viva-blue">AI-Powered</span> Mock Interviews
        </h1>
        
        <p className="text-lg md:text-xl text-viva-gray-dark max-w-2xl mb-10">
          Elevate your interview performance with personalized practice sessions, real-time feedback, and expert analysis from our advanced AI interview platform.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <a href="#how-it-works" className="button-primary group">
            Start Practicing
            <ArrowRight className="inline-block ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <button 
                className="button-secondary flex items-center justify-center group" 
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="mr-2 h-4 w-4 text-viva-blue group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] p-0 bg-black">
              <div className="aspect-video w-full">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="VivaQuest Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Floating mockup animation */}
        <div className="relative w-full max-w-2xl mx-auto mt-8 mb-16">
          <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/20 animate-float">
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=800" 
              alt="VivaQuest Interface" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium">Interview in progress</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-viva-blue opacity-20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 opacity-20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-viva-gray to-transparent z-0"></div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-pulse-slow">
        <a href="#features" className="flex flex-col items-center text-viva-gray-dark">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
