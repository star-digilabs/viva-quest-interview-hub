
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const PricingComparisonSection = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden relative bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-viva-gray-darker">
            Take your interview preparation to the next level!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in-section">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">VivaQuest</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check className="h-6 w-6 text-viva-blue mr-3 flex-shrink-0" />
                <p className="text-viva-gray-darker">Enjoy free, unlimited interview practices.</p>
              </div>
              
              <div className="flex items-start">
                <Check className="h-6 w-6 text-viva-blue mr-3 flex-shrink-0" />
                <p className="text-viva-gray-darker">Interview practices for up to 5 minutes.</p>
              </div>
              
              <div className="flex items-start">
                <Check className="h-6 w-6 text-viva-blue mr-3 flex-shrink-0" />
                <p className="text-viva-gray-darker">Focus on interviews tailored to specific roles.</p>
              </div>
              
              <div className="flex items-start">
                <Check className="h-6 w-6 text-viva-blue mr-3 flex-shrink-0" />
                <p className="text-viva-gray-darker">Leverage real-time analytics for immediate insights.</p>
              </div>
              
              <div className="flex items-start">
                <Check className="h-6 w-6 text-viva-blue mr-3 flex-shrink-0" />
                <p className="text-viva-gray-darker">Analyze key factors to improve performance effectively.</p>
              </div>
            </div>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-purple-100 rounded-2xl shadow-md p-8 border border-purple-200 relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">VivaQuest <span className="text-purple-600">Rise</span></h3>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6">
                Get Started
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-purple-600 font-medium">Longer Interview Practices</p>
                  <p className="text-gray-600">Up to 15 or 30 minutes.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Check className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-purple-600 font-medium">Resume-Based Practices</p>
                  <p className="text-gray-600">Personalized to your skills and experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Check className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-purple-600 font-medium">Company-Level Questions</p>
                  <p className="text-gray-600">Questions targeted to your dream company.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Check className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-purple-600 font-medium">Job Description-Based Interviews</p>
                  <p className="text-gray-600">For any job description for a role in the company</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Check className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-purple-600 font-medium">Resume Analyzer and Builder</p>
                  <p className="text-gray-600">AI-powered tools to create and analyze ATS-friendly resume in seconds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparisonSection;
