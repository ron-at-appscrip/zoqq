import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import WelcomeStats from './components/sections/WelcomeStats';
import Brands from './components/sections/Brands';
import Products from './components/sections/Products';
import IntegratedSolutions from './components/sections/IntegratedSolutions';
import HowItWorks from './components/sections/HowItWorks';
import ExpenseManagement from './components/sections/ExpenseManagement';


function App() {
  return (
    <div className="min-h-screen bg-white">
     
      
      <main>
        <Hero />
        <Brands />
        <WelcomeStats />
        <Products />
        <IntegratedSolutions />
        <HowItWorks />
        <ExpenseManagement />
       
    
      </main>
    <Footer />  
    </div>
  );
}

export default App;
