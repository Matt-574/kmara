import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const DualBiomarkerTimeline: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="py-20 bg-gray-100 dark:bg-dark-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary dark:text-white">
            {t('product_timeline.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-dark-text">
            {t('product_timeline.subtitle')}
          </p>
        </div>
        <div className="relative">
          <div className="border-r-2 border-gray-300 dark:border-gray-700 absolute h-full top-0 left-1/2 -ml-px"></div>
          <div className="mt-8">
            <div className="flex justify-center">
              <div className="w-1/2 pr-8 text-right">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-white dark:bg-dark-tertiary p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-secondary">H-FABP</h3>
                    <p className="text-gray-600 dark:text-dark-text">{t('product_timeline.timeline_hfabp')}</p>
                  </div>
                </motion.div>
              </div>
              <div className="w-1/2 pl-8"></div>
            </div>
            <div className="flex justify-center mt-8">
              <div className="w-1/2 pr-8"></div>
              <div className="w-1/2 pl-8 text-left">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-white dark:bg-dark-tertiary p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-secondary">Troponina I</h3>
                    <p className="text-gray-600 dark:text-dark-text">{t('product_timeline.timeline_ctnl')}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualBiomarkerTimeline;
