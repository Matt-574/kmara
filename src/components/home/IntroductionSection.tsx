import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ScrollReveal from '../ui/ScrollReveal';

const IntroductionSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <ScrollReveal>
            {t('home_introduction.title')}
          </ScrollReveal>
          <p className="mt-4 text-lg text-gray-800">
            {t('home_introduction.subtitle')}
          </p>
          <p className="mt-6 text-gray-800 leading-relaxed">
            {t('home_introduction.text')}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroductionSection;
