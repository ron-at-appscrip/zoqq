import React from 'react';
import Typography from '../ui/Typography';
import Button from '../ui/Button';
import logo from '../../assets/footer/zooq-footer-logo.svg';
import instaIcon from '../../assets/footer/insta.svg';
import facebookIcon from '../../assets/footer/facebook.svg';
import xIcon from '../../assets/footer/x.svg';
import githubIcon from '../../assets/footer/github.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-12 text-white rounded-lg rounded-b-none">
      <div className="bg-primary-12 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            {/* Left Column - Question Text */}
            <div className="flex-1 text-center lg:text-left">
              <Typography variant="h2" className="text-white text-2xl sm:text-3xl lg:text-4xl">
                Ready to Take{' '}
                <span className="bg-gradient-to-r from-gradient-purple-start to-gradient-purple-end bg-clip-text text-transparent">
                  Full Control
                </span>{' '}
                of Your Expenses?
              </Typography>
            </div>

            {/* Right Column - Email Input and Button */}
            <div className="flex-1 lg:flex-none w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-[500px] bg-primary-13 rounded-lg">
                <input
                  type="email"
                  placeholder="What is your email?"
                  className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-primary-8"
                />
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-white text-primary-12 hover:bg-gray-2 px-8"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          {/* Left Column - Company Information */}
          <div className="flex flex-col gap-4 w-full lg:w-[30%] text-center lg:text-left">
            <img src={logo} alt="ZOQQ" height={32} width={86} className="mx-auto lg:mx-0" />
            <Typography variant="body1" className="text-gray-5 leading-relaxed text-sm sm:text-base">
              Revolutionizing the way businesses manage their money, globally and efficiently. At ZOQQ: we combine cutting-edge technology with deep financial expertise to deliver a suite of products and solutions that empower SMEs and Corporates to thrive in today's interconnected world.
            </Typography>
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-gray-12 hover:bg-gray-2 w-full sm:w-auto"
            >
              Start Now
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 w-full lg:w-auto">
            {/* Company Column */}
            <div className="text-center sm:text-left">
              <Typography variant="body1" className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">
                Company
              </Typography>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Button variant="text" className="text-gray-5 hover:text-white underline !p-0 text-center sm:text-left text-sm">
                    Home
                  </Button>
                </li>
                <li>
                  <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                    About Us
                  </Button>
                </li>
                <li>
                  <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                    Mission
                  </Button>
                </li>
                <li>
                  <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                    Vision
                  </Button>
                </li>
                <li>
                  <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                    Corporate Overview
                  </Button>
                </li>
                <li>
                  <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                    Our People
                  </Button>
                </li>
                <li>
                  <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                    Investors
                  </Button>
                </li>
                <li>
                  <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                    Media Room
                  </Button>
                </li>
              </ul>
            </div>

            {/* Products Column */}
            <div className="text-center sm:text-left">
              <Typography variant="body1" className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">
                Products
              </Typography>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                    Business Accounts
                  </Button>
                </li>
                <li>
                  <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                    Spend
                  </Button>
                </li>
                <li>
                  <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                    Payments
                  </Button>
                </li>
                <li>
                  <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                    Platform APIs and Embedded Finance
                  </Button>
                </li>
                <li>
                  <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                    Banking as a Service
                  </Button>
                </li>
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="text-center sm:text-left">
              <Typography variant="body1" className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">
                Solutions
              </Typography>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                    Financial Institutions
                  </Button>
                </li>
                <li>
                  <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                    Platforms & Enterprises
                  </Button>
                </li>
                <li>
                  <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                    Travel
                  </Button>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              {/* Contacts Column */}
              <div>
                <Typography variant="body1" className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">
                  Contacts
                </Typography>
                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                      +12498924234
                    </Button>
                  </li>
                  <li>
                    <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                      info@zoqq.com
                    </Button>
                  </li>
                </ul>
              </div>

              {/* Legal Column */}
              <div className='mt-5'>
                <Typography variant="body1" className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">
                  Legal
                </Typography>
                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                      Terms of Use
                    </Button>
                  </li>
                  <li>
                    <Button variant="text" className="text-gray-5 hover:text-white !p-0 text-center sm:text-left text-sm">
                      Privacy Policy
                    </Button>
                  </li>
                </ul>

                <div className="flex gap-4 mt-8 sm:mt-12 justify-center sm:justify-start">
                  <img src={instaIcon} alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8" />
                  <img src={facebookIcon} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8" />
                  <img src={xIcon} alt="X (Twitter)" className="w-6 h-6 sm:w-8 sm:h-8" />
                  <img src={githubIcon} alt="GitHub" className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Back to Top */}
      <div className="border-t border-primary-10 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Typography variant="body2" className="text-gray-3 text-center md:text-left text-xs sm:text-sm">
              Copyright © ZOQQ. All rights reserved. 2025
            </Typography>
            <Button variant="text" className="text-gray-3 hover:text-white text-xs sm:text-sm">
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 