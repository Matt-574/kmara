import React from 'react';
import { motion, useInView } from 'framer-motion';
import { CountUp } from 'use-count-up';
import { useTranslation } from 'react-i18next';

const AnimatedStats: React.FC = () => {
    const { t } = useTranslation();
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    
    const stats = [
        { value: 60, suffix: '%', label: t('india.stats.stat1') },
        { value: 52, suffix: '%', label: t('india.stats.stat2') },
        { value: 2.17, suffix: ` ${t('numbers:billions')}`, label: t('india.stats.stat3'), decimals: 2 },
    ];

    return (
        <div 
            ref={ref} 
            className="relative bg-cover bg-center text-white py-20 px-4 sm:px-6 lg:px-8"
            style={{ backgroundImage: "url('/images/india fotos.png')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative max-w-7xl mx-auto text-center">
                <motion.h2 
                    className="text-3xl font-extrabold sm:text-4xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    {t('india.stats.title')}
                </motion.h2>
                <motion.p 
                    className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    {t('india.stats.subtitle')}
                </motion.p>
                <div className="mt-16 grid gap-12 md:grid-cols-3">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                        >
                            <span className="text-5xl font-bold text-secondary">
                                <CountUp isCounting={isInView} end={stat.value} duration={3} decimalPlaces={stat.decimals || 0} />
                                {stat.suffix}
                            </span>
                            <p className="mt-4 text-gray-200">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AnimatedStats;