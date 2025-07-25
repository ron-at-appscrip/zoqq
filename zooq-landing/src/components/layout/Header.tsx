import React, { useState } from 'react';
import Button from '../ui/Button';
import logo from '../../assets/zooq-logo.svg';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="w-full">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Zoqq" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden rounded-lg bg-gray-14 shadow-glass backdrop-blur-glass p-3 py-1 2xl:flex space-x-8">
            <Button variant="text" className="text-accent-4 border-b border-accent-4">Home</Button>
            <Button variant="text" className="text-gray-11">Products</Button>
            <Button variant="text" className="text-gray-11">Solution</Button>
            <Button variant="text" className="text-gray-11">Use Cases</Button>
            <Button variant="text" className="text-gray-11">Resources</Button>
            <Button variant="text" className="text-gray-11">Company</Button>
            <Button variant="text" className="text-gray-11">Contact Us</Button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-6">
            <Button variant="primary" className="bg-white text-gray-11 border border-gray-3 px-12 hidden 2xl:block">Sign Up</Button>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="2xl:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
              aria-label="Toggle mobile menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-12 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-12 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-12 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`2xl:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className="bg-gray-14 shadow-glass backdrop-blur-glass rounded-lg p-4 space-y-4">
            <Button variant="text" className="text-accent-4 border-b border-accent-4 w-full justify-start">Home</Button>
            <Button variant="text" className="text-gray-11 w-full justify-start">Products</Button>
            <Button variant="text" className="text-gray-11 w-full justify-start">Solution</Button>
            <Button variant="text" className="text-gray-11 w-full justify-start">Use Cases</Button>
            <Button variant="text" className="text-gray-11 w-full justify-start">Resources</Button>
            <Button variant="text" className="text-gray-11 w-full justify-start">Company</Button>
            <Button variant="text" className="text-gray-11 w-full justify-start">Contact Us</Button>
            <div className="pt-4 border-t border-gray-3">
              <Button variant="primary" className="bg-white text-gray-11 border border-gray-3 w-full">Sign Up</Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 