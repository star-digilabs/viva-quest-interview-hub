
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const HeroSection = () => {
  return (
    <section className="pt-36 pb-16 overflow-hidden relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
            Master Your Interview Skills
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Prepare for Success with 
            <span className="block md:inline"><span className="text-blue-500"> AI-Powered</span> Mock Interviews</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Elevate your interview performance with personalized practice
            sessions, real-time feedback, and expert analysis from our advanced
            AI interview platform.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a href="#how-it-works" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all inline-flex items-center">
              Start Practicing
              <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 px-8 py-4 text-lg font-medium transition-all">
              Explore Features
            </a>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <Dialog>
              <DialogTrigger asChild>
                <div className="aspect-video max-w-4xl mx-auto relative cursor-pointer group">
                  <img 
                    src="/lovable-uploads/dbb56d40-9a2d-4f97-bf19-33f929358b3c.png" 
                    alt="VivaQuest Dashboard" 
                    className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-white bg-opacity-20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg">
                    <p className="font-medium text-gray-800">Watch how it works</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] p-0 bg-black">
                <div className="aspect-video w-full">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="VivaQuest How It Works"
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

export default HeroSection;
