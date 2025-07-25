import React from 'react';
import Typography from '../ui/Typography';

const WelcomeStats: React.FC = () => {
  const stats = [
    {
      figure: "250+",
      description: "countries served worldwide"
    },
    {
      figure: "$10B+",
      description: "in annual payment volume"
    },
    {
      figure: "99.99%",
      description: "system uptime guaranteed"
    },
    {
      figure: "1M+",
      description: "businesses powered by our platform"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Headline */}
          <div>
            <Typography variant="h2" className=" text-primary-12 font-medium leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-gradient-purple-start to-gradient-purple-end bg-clip-text text-transparent">ZOQQ</span>
              {
                " "
              }
              Your Partner { " "}
               in Modern Finance
            </Typography>
          </div>

          {/* Right - Description */}
          <div>
            <Typography variant="body1" className="text-gray-11  leading-relaxed">
              Revolutionizing the way businesses manage their money, globally and efficiently. At ZOQQ we combine cutting-edge technology with deep financial expertise to deliver a suite of products and solutions that empower SMEs and Corporates to thrive in today's interconnected world.
            </Typography>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-primary-1 rounded-xl p-8 text-center hover:bg-primary-2 transition-shadow cursor-pointer"
            >
              <Typography variant="h2" className="text-primary-7 font-bold mb-3">
                {stat.figure}
              </Typography>
              <Typography variant="body1" className="text-gray-10">
                {stat.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeStats; 