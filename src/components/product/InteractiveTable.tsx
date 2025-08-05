import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const InteractiveTable: React.FC = () => {
  const { t } = useTranslation();
  const specs = [
    { feature: t('product_table.spec1'), value: t('product_table.spec1_val') },
    { feature: t('product_table.spec2'), value: t('product_table.spec2_val') },
    { feature: t('product_table.spec3'), value: t('product_table.spec3_val') },
    { feature: t('product_table.spec4'), value: t('product_table.spec4_val') }
  ];

  return (
    <div className="py-20 bg-white dark:bg-dark-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary dark:text-white">
            {t('product_table.title')}
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-dark-secondary shadow-lg rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 bg-primary text-white font-bold">
              <div className="p-4">{t('product_table.feature')}</div>
              <div className="p-4">{t('product_table.specification')}</div>
            </div>
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid grid-cols-2 border-b border-gray-200 dark:border-gray-700 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-dark-secondary/50' : 'bg-white dark:bg-dark-secondary'}`}
              >
                <div className="p-4 font-semibold text-gray-700 dark:text-white/80">{spec.feature}</div>
                <div className="p-4 text-gray-600 dark:text-white/60">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTable;
