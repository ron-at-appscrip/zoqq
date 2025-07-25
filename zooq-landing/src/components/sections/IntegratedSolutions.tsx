import React, { useState } from 'react';
import Typography from '../ui/Typography';
import Button from '../ui/Button';
import contentCol1 from '../../assets/content/content-col1.png';
import contentCol2 from '../../assets/content/content-col2.png';

const IntegratedSolutions: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const totalSlides = 3;
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Main Heading */}
          <div >
            <Typography variant="h2" className="text-gray-12 font-medium leading-tight">
              Our Integrated{' '}
              <span className="bg-gradient-to-r from-gradient-purple-start to-gradient-purple-end bg-clip-text text-transparent">Solutions</span>
            { ' '}
              Driving Business Transformation
            </Typography>
          </div>

          {/* Right - Description */}
          <div className="space-y-6 ">
            <Typography variant="body1" className="text-gray-10 text-lg leading-relaxed">
              Our suite of payment and finance solutions is designed to help businesses send, receive, and manage money effortlessly — across borders, currencies, and platforms.
            </Typography>
          </div>
        </div>

        {/* Bottom Section - Three Divs Layout */}
        <div className="relative flex flex-col gap-4 overflow-hidden">
          <div className='self-end flex gap-2'>
            <button 
              onClick={prevSlide}
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex gap-6 overflow-hidden" >
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (650 + 24)}px)` }}
            >
              {/* First Div - Content Col 1 */}
              <div className="w-[650px] h-[400px] flex-shrink-0">
                  <img 
                    src={contentCol1} 
                    alt="Content Column 1" 
                    className="w-full h-full rounded-lg"
                  />
              </div>

              {/* Second Div - Neo Digital Banking */}
              <div className="w-[650px] h-[400px] flex-shrink-0">
                <div className="bg-white h-full rounded-xl p-6  border border-gray-3">
                  <div className="text-center">
                    <Typography variant="h3" className="text-gray-12 font-bold mb-4">
                      Neo Digital Banking:
                    </Typography>
                    <Typography variant="h3" className="text-gray-12 font-bold mb-6">
                      The Future of Business Banking is Here
                    </Typography>
                    
                    <Typography variant="body1" className="text-gray-10 text-lg leading-relaxed mb-8">
                      Move beyond the limitations of traditional banking. Our Neo Digital Banking solution provides businesses with a fully digital, agile, and intelligent banking experience, perfectly integrated with your operational needs. It's not just an account; it's a financial operating system for your business.
                    </Typography>
                    
                    <Button variant="primary" size="lg" className="bg-gray-12 text-white hover:bg-gray-11">
                      Learn More →
                    </Button>
                  </div>
                </div>
              </div>

              {/* Third Div - Content Col 2 */}
              <div className="w-[650px] h-[400px] flex-shrink-0">
                  <img 
                    src={contentCol2} 
                    alt="Content Column 2" 
                    className="w-full h-full rounded-lg"
                  />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedSolutions; 