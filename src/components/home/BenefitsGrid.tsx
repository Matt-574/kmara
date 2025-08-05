import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, ShieldCheck, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const cardVariants = {
    offscreen: {
        opacity: 0,
        y: 50,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const BenefitsGrid: React.FC = () => {
    const { t } = useTranslation();
    const benefits = [
        { icon: <Clock size={32} />, title: t('home_benefits.benefit1_title'), description: t('home_benefits.benefit1_desc') },
        { icon: <ShieldCheck size={32} />, title: t('home_benefits.benefit2_title'), description: t('home_benefits.benefit2_desc') },
        { icon: <Zap size={32} />, title: t('home_benefits.benefit3_title'), description: t('home_benefits.benefit3_desc') },
        { icon: <TrendingUp size={32} />, title: t('home_benefits.benefit4_title'), description: t('home_benefits.benefit4_desc') }
    ];

  return (
    <div className="bg-white dark:bg-dark-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary dark:text-white">
              {t('home_benefits.title')}
            </h2>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2 grid sm:grid-cols-2 gap-8"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative bg-gray-50 dark:bg-dark-secondary p-8 rounded-xl shadow-lg overflow-hidden"
                variants={cardVariants}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10">
                    <div className="text-secondary mb-4 inline-block p-4 bg-secondary/10 rounded-full">
                        {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-dark-text">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsGrid;
