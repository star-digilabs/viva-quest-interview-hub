
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-viva-gray-darker text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-display font-semibold mb-4">
              Viva<span className="text-viva-purple-light">Quest</span>
            </h2>
            <p className="text-viva-gray-dark mb-4">
              The ultimate AI-powered mock interview platform to prepare you for success.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-viva-gray-dark hover:text-viva-purple-light transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-viva-gray-dark hover:text-viva-purple-light transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-viva-gray-dark hover:text-viva-purple-light transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-viva-gray-dark hover:text-viva-purple-light transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-viva-gray-dark hover:text-viva-purple-light transition-colors">About Us</a></li>
              <li><a href="#" className="text-viva-gray-dark hover:text-viva-purple-light transition-colors">Careers</a></li>
              <li><a href="#" className="text-viva-gray-dark hover:text-viva-purple-light transition-colors">Blog</a></li>
              <li><a href="#" className="text-viva-gray-dark hover:text-viva-purple-light transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-viva-gray-dark">support@vivaquest.com</li>
              <li className="text-viva-gray-dark">1-800-VIVA-QUEST</li>
              <li><a href="#" className="text-viva-gray-dark hover:text-viva-purple-light transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-viva-gray-dark text-sm">
            &copy; {currentYear} VivaQuest. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-viva-gray-dark hover:text-viva-purple-light transition-colors text-sm">Terms</a>
            <a href="#" className="text-viva-gray-dark hover:text-viva-purple-light transition-colors text-sm">Privacy</a>
            <a href="#" className="text-viva-gray-dark hover:text-viva-purple-light transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
