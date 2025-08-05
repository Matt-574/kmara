import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import productTest from '/images/product_test.png';
import kmaraLogo from '/images/kmara_logo.png';

const ProductHeader: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      className="relative bg-cover bg-center pt-32 pb-20 bg-product-header"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl lg:text-7xl font-extrabold mb-8 text-primary"
        >
          {t('product_header.title')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <img src={kmaraLogo} alt="Kmara Logo" className="h-20 mx-auto" />
        </motion.div>

        <div className="flex justify-center items-center space-x-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4"
          >
            <p className="text-lg font-semibold text-white">⚡ {t('product_header.feature1')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4"
          >
            <p className="text-lg font-semibold text-white">✅ {t('product_header.feature3')}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="my-8 mb-16"
        >
          <img src={productTest} alt="Product Test" className="h-[512px] mx-auto" />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 inline-block"
          >
            <p className="text-lg font-semibold text-white">📊 {t('product_header.feature2')}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductHeader;
