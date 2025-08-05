import React from 'react';
import ProductHero3D from '../components/product/ProductHero3D';
import DualBiomarkerTimeline from '../components/product/DualBiomarkerTimeline';
import BiomarkerDetails from '../components/product/BiomarkerDetails';
import StepByStepGuide from '../components/product/StepByStepGuide';
import InteractiveTable from '../components/product/InteractiveTable';
import ResultsVisualizer from '../components/product/ResultsVisualizer';
import { useTranslation } from 'react-i18next';

const ProductPage: React.FC = () => {
  const { t } = useTranslation();
  return (<>
    <div className="relative" style={{ backgroundImage: 'url(/images/1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      <div className="relative z-10 pt-32">
        <h1 className="text-center text-4xl font-bold text-white mb-16">{t('product_header.title')}</h1>
        <ProductHero3D />
      </div>
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <InteractiveTable />
      <DualBiomarkerTimeline />
      <BiomarkerDetails />
      <StepByStepGuide />
      <ResultsVisualizer />
    </div>
    </>);
};

export default ProductPage;
