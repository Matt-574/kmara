import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Eye, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1 },
};

const FlipCard: React.FC<{ icon: JSX.Element; title: string; description: string }> = ({ icon, title, description }) => {
    return (
        <motion.div
            className="w-full h-64 [perspective:1000px]"
            variants={cardVariants}
        >
            <motion.div
                className="relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d]"
                whileHover={{ rotateY: 180 }}
            >
                {/* Front */}
                <div className="absolute w-full h-full bg-white dark:bg-dark-secondary rounded-xl shadow-lg flex flex-col items-center justify-center [backface-visibility:hidden]">
                    <div className="mb-4">{icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h3>
                </div>
                
                {/* Back */}
                <div className="absolute w-full h-full bg-secondary text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h4 className="text-xl font-bold mb-2">{title}</h4>
                    <p>{description}</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const PhilosophySection: React.FC = () => {
    const { t } = useTranslation();
    const philosophyItems = [
        { icon: <BookOpen size={40} className="text-secondary" />, title: t('about_us.philosophy.history'), description: t('about_us.philosophy.history_desc') },
        { icon: <Target size={40} className="text-secondary" />, title: t('about_us.philosophy.mission'), description: t('about_us.philosophy.mission_desc') },
        { icon: <Eye size={40} className="text-secondary" />, title: t('about_us.philosophy.vision'), description: t('about_us.philosophy.vision_desc') },
        { icon: <Heart size={40} className="text-secondary" />, title: t('about_us.philosophy.values'), description: t('about_us.philosophy.values_desc') },
    ];

    return (
        <div className="bg-primary dark:bg-dark-primary py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    {t('about_us.philosophy.title')}
                </h2>
                <p className="mt-4 text-lg text-gray-300 dark:text-dark-text">
                    {t('about_us.philosophy.subtitle')}
                </p>
            </div>
            <motion.div 
                className="mt-20 max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.2 }}
            >
                {philosophyItems.map((item, index) => (
                    <FlipCard key={index} {...item} />
                ))}
            </motion.div>
        </div>
    );
};

export default PhilosophySection;
