import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import IntroductionSection from '../components/home/IntroductionSection';
import WobbleBenefits from '../components/home/WobbleBenefits';
import TrustSection from '../components/home/TrustSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSlider />
      <IntroductionSection />
      <WobbleBenefits />
      <TrustSection />
    </div>
  );
};

export default HomePage;
