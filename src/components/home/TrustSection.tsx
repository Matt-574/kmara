import React from 'react';
import { motion } from 'framer-motion';
import { Ribbon, Shield, BadgeCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PinContainer } from '../ui/3d-pin';

const TrustSection: React.FC = () => {
  const { t } = useTranslation();
  const trustPoints = [
    { icon: <Shield size={32} />, title: t('home_trust.validation_title'), description: t('home_trust.validation_desc') },
    { icon: <Ribbon size={32} />, title: t('home_trust.manufacturing_title'), description: t('home_trust.manufacturing_desc') },
    { icon: <BadgeCheck size={32} />, title: t('home_trust.ce_title'), description: t('home_trust.ce_desc') }
  ];

  return (
    <div className="py-20 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold">
            {t('home_trust.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            {t('home_trust.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-24 lg:gap-8 justify-items-center pb-16">
          {trustPoints.map((point, index) => (
            <div key={index} className="h-[25rem] w-full flex items-center justify-center">
              <PinContainer title={point.title}>
                <div className="flex flex-col h-full w-[20rem] p-4 bg-white rounded-lg">
                  <div className="flex flex-col items-center text-center flex-grow">
                    <div className="text-white bg-primary p-4 inline-block rounded-full mb-6">
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-700 text-sm flex-grow">
                      {point.description}
                    </p>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
