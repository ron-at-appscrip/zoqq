import React from 'react';
import Typography from '../ui/Typography';
import Button from '../ui/Button';
import heroBg from '../../assets/zooq-herosection-bg.png';
import Header from '../layout/Header';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className='absolute top-0 left-0 w-full p-10'>
      <Header />
      </div>
      {/* Content Overlay */}
      <div className=" z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-0">
          {/* Left Section - Headline */}
          <div className="text-left">
            <Typography variant="h2" className="text-gray-12 font-medium leading-tight">
              Revolutionizing payments<br />
              to power diverse business<br />
              <span className="bg-gradient-to-r from-gradient-purple-start to-gradient-purple-end bg-clip-text text-transparent">finances worldwide</span>
            </Typography>
          </div>

          {/* Right Section - Description and CTA */}
          <div className="text-left">
            <Typography variant="body1" className="text-gray-10 mb-8 text-lg leading-relaxed">
              From bustling corporations, growth-driven SMEs, to<br />
              independent freelancers, Zoqq is the answer to<br />
              every entity seeking an all-in-one financial<br />
              management solution.
            </Typography>

            <Button 
              variant="primary" 
              size="lg"
              className="bg-gray-12 text-white hover:bg-gray-11 transition-colors"
            >
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 