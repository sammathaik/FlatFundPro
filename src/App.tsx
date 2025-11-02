import { useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import StatsSection from './components/StatsSection';
import EnhancedPaymentForm from './components/EnhancedPaymentForm';

function App() {
  const formRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen">
      <Header onLogoClick={scrollToTop} />
      <div ref={heroRef as React.RefObject<HTMLDivElement>} className="pt-20">
        <HeroSection onGetStarted={scrollToForm} />
      </div>
      <HowItWorks />
      <StatsSection />
      <div ref={formRef as React.RefObject<HTMLDivElement>}>
        <EnhancedPaymentForm />
      </div>
    </div>
  );
}

export default App;
