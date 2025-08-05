import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Microscope, Clock, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const StepByStepGuide: React.FC = () => {
  const { t } = useTranslation();
  const steps = [
    { icon: <Beaker size={32} />, title: t('product_guide.step1_title'), description: t('product_guide.step1_desc') },
    { icon: <Microscope size={32} />, title: t('product_guide.step2_title'), description: t('product_guide.step2_desc') },
    { icon: <Clock size={32} />, title: t('product_guide.step3_title'), description: t('product_guide.step3_desc') },
    { icon: <FileText size={32} />, title: t('product_guide.step4_title'), description: t('product_guide.step4_desc') }
  ];

  return (
    <div className="py-20 bg-white dark:bg-dark-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary dark:text-white">
            {t('product_guide.title')}
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-secondary text-white w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-dark-text">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepByStepGuide;
