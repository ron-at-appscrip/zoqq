import React from 'react';
import Typography from '../ui/Typography';
import Button from '../ui/Button';
import productBlock1 from '../../assets/product/product_block1.png';
import productBlock2 from '../../assets/product/product_block2.png';
import productBlock3 from '../../assets/product/product_block3.png';
import productBlock4 from '../../assets/product/product_block4.png';

const Products: React.FC = () => {
  const products = [
    {
      visual: (
        <img 
          src={productBlock1} 
          alt="Global Bank Account" 
          className="w-full h-auto rounded-lg"
        />
      )
    },
    {
 
      visual: (
        <img 
          src={productBlock2} 
          alt="Remittance" 
          className="w-full h-auto rounded-lg"
        />
      )
    },
    {
    
      visual: (
        <img 
          src={productBlock3} 
          alt="Card Issuance" 
          className="w-full h-auto rounded-lg"
        />
      )
    },
    {
   
      visual: (
        <img 
          src={productBlock4} 
          alt="Payout" 
          className="w-full h-auto rounded-lg"
        />
      )
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center flex flex-col md:flex-row items-center justify-between">          
          <Typography variant="h2" className="text-gray-12 font-medium mb-6 text-left">
            Our Core <span className="bg-gradient-to-r from-gradient-purple-start to-gradient-purple-end bg-clip-text text-transparent">Products</span> Built for{' '}
            Global Commerce
          </Typography>
          
          <Typography variant="body1" className="text-gray-11 text-justify w-full md:w-1/2 mx-auto  leading-relaxed">
            Our suite of payment and finance solutions is designed to help businesses send, receive, and manage money effortlessly — across borders, currencies, and platforms.
          </Typography>
          
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => (
              <div className="mt-8">
                {product.visual}
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 