
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const communityUsers = [
  {
    name: 'Lavanya R',
    role: 'Software Engineer',
    quote: 'The way interviewer ask the questions and time management. This was very useful to me.',
    emoji: '😊'
  },
  {
    name: 'Sajitha K',
    role: 'Software Tester',
    quote: 'It is fantastic to get the Analytics and the Correct answer what went well',
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
  return (
    <section className="bg-viva-gray-light py-16 md:py-24">
      <div className="section">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl font-bold text-viva-gray-darker mb-6">
            Join Our Community of Happy Users
          </h2>
          
          <div className="relative max-w-5xl mx-auto px-4">
            <div className="flex justify-center space-x-8">
              {communityUsers.map((user, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-2xl shadow-md w-80 text-center relative"
                >
                  <div className="absolute top-4 right-4 text-3xl">{user.emoji}</div>
                  <p className="text-viva-gray-dark mb-4 italic">"{user.quote}"</p>
                  <div className="font-semibold text-viva-gray-darker">{user.name}</div>
                  <div className="text-viva-gray-dark text-sm">{user.role}</div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button 
                className="p-2 rounded-full bg-viva-gray-light hover:bg-viva-gray-dark/10 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-viva-gray-darker" />
              </button>
              <div className="flex space-x-2">
                {communityUsers.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-2 w-2 rounded-full ${
                      i === 0 ? 'bg-viva-blue w-6' : 'bg-viva-gray-dark bg-opacity-30'
                    }`} 
                  />
                ))}
              </div>
              <button 
                className="p-2 rounded-full bg-viva-gray-light hover:bg-viva-gray-dark/10 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-viva-gray-darker" />
              </button>
            </div>
            
            <div className="mt-16 text-center text-6xl font-bold text-viva-blue">
              100K+
              <div className="text-lg text-viva-gray-dark font-normal mt-2">
                Interview Practices Taken
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
