import React from 'react';
import Typography from '../ui/Typography';
import stepsContainer from '../../assets/steps_container.png';

const HowItWorks: React.FC = () => {


  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Left - Main Title */}
            <div>
              <Typography variant="h2" className="text-gray-12 font-bold leading-tight">
                How Our{' '}
                <span className="bg-gradient-to-r from-gradient-purple-start to-gradient-purple-end bg-clip-text text-transparent">Platform</span>
                {' '}
                Works Simplified in 3 Easy Steps
              </Typography>
            </div>

            {/* Right - Description */}
            <div>
              <Typography variant="body1" className="text-gray-10 text-lg leading-relaxed">
                From sign-up to global payouts — get up and running in no time with our streamlined onboarding process, built to save you time and help you grow faster.
              </Typography>
            </div>
          </div>

        

          {/* Three Steps */}
          <img src={stepsContainer} alt="Steps Container" />
      
      </div>
    </section>
  );
};

export default HowItWorks; 