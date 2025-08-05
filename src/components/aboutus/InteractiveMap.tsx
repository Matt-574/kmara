import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const cardVariants = {
    offscreen: {
        opacity: 0,
        y: 50
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const InteractiveMap: React.FC = () => {
    const { t } = useTranslation();
    const locations = [
        { name: "K-MARA HEALTHCARE S.L.", location: "Alicante, España", description: t('about_us.ecosystem.spain_desc') },
        { name: "Biopanda Reagents Ltd.", location: "Belfast, Reino Unido", description: t('about_us.ecosystem.uk_desc') },
        { name: "K-MARA CARE PVT. LTD.", location: "India", description: t('about_us.ecosystem.india_desc') }
    ];

    return (
        <div className="bg-gray-100 dark:bg-dark-secondary py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-primary dark:text-white sm:text-4xl">
                        {t('about_us.ecosystem.title')}
                    </h2>
                    <p className="mt-4 text-lg text-gray-700 dark:text-dark-text">
                        {t('about_us.ecosystem.subtitle')}
                    </p>
                </div>

                <motion.div 
                    className="grid gap-8 md:grid-cols-3"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {locations.map((location, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-white dark:bg-dark-tertiary rounded-lg shadow-lg p-8 text-center flex flex-col items-center"
                            variants={cardVariants}
                        >
                            <MapPin className="text-secondary mb-4" size={40} />
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{location.name}</h3>
                            <p className="font-semibold text-secondary text-sm mb-2">{location.location}</p>
                            <p className="text-gray-600 dark:text-dark-text/80">{location.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default InteractiveMap;
