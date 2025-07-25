import React from 'react';
import Typography from '../ui/Typography';
import Button from '../ui/Button';
import pricingBg from '../../assets/pricingsection-bg.png';
import expenseManagement from '../../assets/expense.png';
const   ExpenseManagement: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={pricingBg} 
          alt="Expense Management Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Content */}
          <div>
            <Typography variant="h2" className="text-gray-12 font-semibold leading-tight mb-6">
              Expense Management: Intelligent Control Over Company Spending
            </Typography>
            
            <Typography variant="body1" className="text-gray-10 text-lg leading-relaxed mb-8">
              Say goodbye to manual expense reports, lost receipts, and uncontrolled spending. Our Expense Management solution automates every step of the expense process, giving you real-time visibility and complete control over your company's expenditures.
            </Typography>
            
            <Button 
              variant="primary" 
              size="lg"
              className="bg-gray-12 text-white hover:bg-gray-11 transition-colors"
            >
              Learn More →
            </Button>
          </div>

          {/* Right Section - Interactive UI */}
          <div className="relative">
            <img src={expenseManagement} alt="Expense Management" height={352} width={408} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpenseManagement; 