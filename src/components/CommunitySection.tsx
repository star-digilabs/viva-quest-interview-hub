
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";

const communityUsers = [
  {
    name: 'Lavanya R',
    role: 'Software Engineer',
    quote: 'The way interviewer ask the questions and time managment. This was very usefull to me. This is a',
    emoji: '😊'
  },
  {
    name: 'Sajitha K',
    role: 'Software Tester',
    quote: 'It is fantastic to get the Analytics and the Correct answer what went well what to improve',
    emoji: '😊'
  },
  {
    name: 'Rocky C',
    role: 'Software Tester',
    quote: 'its a good platform to practice or preparations for interview',
    emoji: '😊'
  }
];

const CommunitySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  
  React.useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    // Call once to set the initial index
    onSelect();
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-viva-bg py-16 md:py-24">
      <div className="section">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl font-bold gradient-text mb-12">
            Join Our Community of Happy Users
          </h2>
          
          <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
            {/* 100K+ Counter on the left side */}
            <div className="w-full md:w-1/3 mb-10 md:mb-0 text-center md:text-left">
              <div className="text-6xl md:text-8xl font-bold gradient-text">
                100K+
              </div>
              <div className="text-lg text-viva-gray-dark font-normal mt-2">
                Interview Practices<br />Taken
              </div>
            </div>
            
            {/* Testimonial carousel on the right */}
            <div className="w-full md:w-2/3 relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                setApi={setApi}
                className="w-full"
              >
                <CarouselContent>
                  {communityUsers.map((user, index) => (
                    <CarouselItem key={index} className="md:basis-[calc(100%-40px)]">
                      <div className="glass-card p-6 pt-8 pb-8 relative">
                        <div className="absolute -top-4 right-6 text-4xl gradient-bg rounded-full p-2 w-10 h-10 flex items-center justify-center">
                          {user.emoji}
                        </div>
                        <p className="text-viva-gray-dark mb-4 text-lg">{user.quote}</p>
                        <div className="mt-8">
                          <div className="font-semibold text-viva-gray-darker">{user.name}</div>
                          <div className="text-viva-gray-dark text-sm">({user.role})</div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center items-center mt-8">
                  <CarouselPrevious className="static transform-none h-10 w-10 rounded-full border-none shadow-md bg-white hover:bg-gray-100 mr-4">
                    <ChevronLeft className="h-6 w-6" />
                  </CarouselPrevious>
                  <div className="flex space-x-2">
                    {communityUsers.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-2 rounded-full ${
                          i === activeIndex ? 'bg-gradient-to-r from-viva-purple to-viva-purple-light w-6' : 'bg-gray-300 w-2'
                        }`} 
                      />
                    ))}
                  </div>
                  <CarouselNext className="static transform-none h-10 w-10 rounded-full border-none shadow-md bg-white hover:bg-gray-100 ml-4">
                    <ChevronRight className="h-6 w-6" />
                  </CarouselNext>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
