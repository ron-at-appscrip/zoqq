import React from 'react';
import sequoiaLogo from '../../assets/brand/squoia.svg';
import lightspeedLogo from '../../assets/brand/lightspeed.svg';
import shimaCapitalLogo from '../../assets/brand/shima-capital.svg';

const Brands: React.FC = () => {
  const logos = [
    { src: sequoiaLogo, alt: 'Sequoia' },
    { src: shimaCapitalLogo, alt: 'Shima Capital' },
    { src: lightspeedLogo, alt: 'Lightspeed' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Scrolling Container */}
        <div className="relative overflow-hidden">
          {/* Top Row */}
          <div className="flex animate-scroll-left">
            {logos.map((logo, index) => (
              <div key={`top-${index}`} className="flex-shrink-0 mx-12">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-12 w-auto opacity-40 grayscale"
                />
              </div>
            ))}
            {/* Duplicate logos for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`top-duplicate-${index}`} className="flex-shrink-0 mx-12">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-12 w-auto opacity-40 grayscale"
                />
              </div>
            ))}
          </div>

          {/* Bottom Row - Offset */}
          <div className="flex animate-scroll-right mt-8">
            {/* Start with second logo to create offset */}
            {logos.slice(1).concat(logos.slice(0, 1)).map((logo, index) => (
              <div key={`bottom-${index}`} className="flex-shrink-0 mx-12">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-12 w-auto opacity-40 grayscale"
                />
              </div>
            ))}
            {/* Duplicate logos for seamless loop */}
            {logos.slice(1).concat(logos.slice(0, 1)).map((logo, index) => (
              <div key={`bottom-duplicate-${index}`} className="flex-shrink-0 mx-12">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-12 w-auto opacity-40 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands; 