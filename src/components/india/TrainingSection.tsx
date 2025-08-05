import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Zap, Target, Award } from 'lucide-react';

const TrainingSection: React.FC = () => {
    const { t } = useTranslation();

    const keyPoints = [
        {
            icon: <Zap size={40} className="text-secondary" />,
            title: t('india.training.point1_title'),
            desc: t('india.training.point1_desc')
        },
        {
            icon: <Target size={40} className="text-secondary" />,
            title: t('india.training.point2_title'),
            desc: t('india.training.point2_desc')
        },
        {
            icon: <Award size={40} className="text-secondary" />,
            title: t('india.training.point3_title'),
            desc: t('india.training.point3_desc')
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    return (
        <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
                        {t('india.training.title')}
                    </h2>
                    <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto">
                        {t('india.training.text_1')}
                    </p>
                    <p className="mt-2 text-lg text-gray-700 max-w-4xl mx-auto">
                        {t('india.training.text_2')}
                    </p>
                </motion.div>

                <motion.div 
                    className="grid md:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {keyPoints.map((point, index) => (
                        <motion.div 
                            key={index}
                            className="bg-gray-50 p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
                            variants={itemVariants}
                        >
                            <div className="p-4 bg-secondary/10 rounded-full mb-6">
                                {point.icon}
                            </div>
                            <h3 className="font-bold text-xl text-primary mb-3">{point.title}</h3>
                            <p className="text-gray-600">{point.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TrainingSection;
