import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BiomarkerDetails: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-20 bg-white dark:bg-dark-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary dark:text-white">
            {t('product_biomarkers.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-dark-text">
            {t('product_biomarkers.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 dark:bg-dark-secondary p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4">
              <Zap className="text-secondary dark:text-secondary mr-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {t('product_biomarkers.hfabp_title')}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-dark-text/80 leading-relaxed">
              {t('product_biomarkers.hfabp_desc')}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 dark:bg-dark-secondary p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4">
              <HeartPulse className="text-secondary dark:text-secondary mr-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {t('product_biomarkers.ctnl_title')}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-dark-text/80 leading-relaxed">
              {t('product_biomarkers.ctnl_desc')}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BiomarkerDetails;
