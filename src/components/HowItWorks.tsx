
import React, { useEffect, useRef } from 'react';
import { UserPlus, Video, MessageSquare, ArrowRight, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const steps = [
  {
    title: 'Create Your Profile',
    description: 'Set up your profile with your industry, role preferences, and experience level to personalize your interview practice.',
    icon: UserPlus,
  },
  {
    title: 'Choose Your Interview Type',
    description: 'Select from a variety of interview types including behavioral, technical, or role-specific scenarios.',
    icon: Video,
  },
  {
    title: 'Practice & Receive Feedback',
    description: 'Complete the interview and receive instant AI-generated feedback on your performance with actionable insights.',
    icon: MessageSquare,
  },
];

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
    <section id="how-it-works" className="relative py-16 md:py-24 overflow-hidden" ref={sectionRef}>
      {/* Video background with overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-viva-gray-darker opacity-90 z-10"></div>
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
        >
          <source src="https://cdn.dribbble.com/users/107759/screenshots/4714866/media/4440d1839ba3bd63a5961a8e513a1f7a.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="section relative z-20">
        <div className="text-center mb-16">
          <div className="rounded-full bg-viva-blue/20 px-6 py-2 inline-flex items-center mb-6 mx-auto">
            <span className="text-viva-blue text-sm font-medium">Simple Three-Step Process</span>
          </div>
          <h2 className="section-title mx-auto text-white">How VivaQuest Works</h2>
          <p className="section-subtitle mx-auto text-white/80">
            A streamlined approach to transform your interview skills and boost your confidence.
          </p>
        </div>

        <div className="relative">
          {/* Line connecting the steps */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-viva-blue-light -translate-x-1/2 z-0"></div>
          
          <div className="space-y-12 md:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="fade-in-section md:flex items-center mb-16"
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                  <div className={`p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all ${index % 2 === 0 ? 'ml-auto mr-0' : 'ml-0 mr-auto'} max-w-md transform hover:-translate-y-2 hover:shadow-xl duration-300`}>
                    <h3 className="text-xl font-display font-medium text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/70">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center justify-center md:w-0">
                  <div className="rounded-full bg-viva-blue h-12 w-12 flex items-center justify-center shadow-lg border-4 border-viva-gray-darker relative">
                    <div className="absolute inset-0 bg-viva-blue rounded-full animate-ping opacity-30" style={{ animationDuration: '3s' }}></div>
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-3' : 'md:pr-12 md:text-right'}`}>
                  <div className="md:hidden rounded-full bg-viva-blue h-12 w-12 flex items-center justify-center shadow-lg border-4 border-viva-gray-darker mb-4 mx-auto">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="block text-3xl font-display font-medium text-viva-blue">
                    Step {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 fade-in-section relative">
          <Dialog>
            <DialogTrigger asChild>
              <button className="button-primary group inline-flex items-center">
                <Play className="mr-2 h-4 w-4" />
                Watch How It Works
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
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
          
          {/* Animated particles */}
          <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-viva-blue animate-float opacity-70"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-white animate-float opacity-30" style={{ animationDuration: '6s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-viva-blue-light animate-float opacity-50" style={{ animationDuration: '8s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
