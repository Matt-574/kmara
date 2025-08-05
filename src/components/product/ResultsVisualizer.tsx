import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ResultsVisualizer: React.FC = () => {
  const { t } = useTranslation();
  const results = [
    { icon: <AlertTriangle size={32} />, title: t('product_results.hfabp_positive'), description: t('product_results.hfabp_positive_desc'), color: 'bg-yellow-400' },
    { icon: <CheckCircle size={32} />, title: t('product_results.ctnl_positive'), description: t('product_results.ctnl_positive_desc'), color: 'bg-red-500' },
    { icon: <XCircle size={32} />, title: t('product_results.both_negative'), description: t('product_results.both_negative_desc'), color: 'bg-green-500' }
  ];

  return (
    <div className="py-20 bg-gray-100 dark:bg-dark-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary dark:text-white">
            {t('product_results.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-dark-text">
            {t('product_results.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-lg shadow-lg text-white ${result.color}`}
            >
              <div className="mb-4">{result.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{result.title}</h3>
              <p>{result.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsVisualizer;
