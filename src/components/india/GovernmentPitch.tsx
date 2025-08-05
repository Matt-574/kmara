import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Briefcase, HeartPulse } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GovernmentPitch: React.FC = () => {
    const { t } = useTranslation();
    const pitchPoints = [
        { icon: <Shield size={40} className="text-secondary" />, title: t('india.pitch.bullet1_title'), desc: t('india.pitch.bullet1_desc') },
        { icon: <Briefcase size={40} className="text-secondary" />, title: t('india.pitch.bullet2_title'), desc: t('india.pitch.bullet2_desc') },
        { icon: <HeartPulse size={40} className="text-secondary" />, title: t('india.pitch.bullet3_title'), desc: t('india.pitch.bullet3_desc') }
    ];

    return (
        <div className="bg-primary dark:bg-dark-primary text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        {t('india.pitch.title')}
                    </h2>
                    <p className="mt-6 text-gray-300 dark:text-dark-text leading-relaxed">
                        {t('india.pitch.text_1')}
                    </p>
                     <p className="mt-4 text-gray-300 dark:text-dark-text leading-relaxed">
                        {t('india.pitch.text_2')}
                    </p>
                </motion.div>
                <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {pitchPoints.map((point, index) => (
                         <div key={index} className="bg-white/10 p-6 rounded-lg flex items-center space-x-4">
                            {point.icon}
                            <div>
                                <h3 className="font-bold text-xl">{point.title}</h3>
                                <p className="text-gray-300 dark:text-dark-text">{point.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default GovernmentPitch;