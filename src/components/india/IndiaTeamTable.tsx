import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const tableVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const rowVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
};

const IndiaTeamTable: React.FC = () => {
    const { t } = useTranslation();
    const teamData = [
        { name: t('india.team.member1_name'), value: t('india.team.member1_value'), source: "K-MARA" },
        { name: t('india.team.member2_name'), value: t('india.team.member2_value'), source: "K-MARA" },
        { name: t('india.team.member3_name'), value: t('india.team.member3_value'), source: "K-MARA" },
        { name: t('india.team.member4_name'), value: t('india.team.member4_value'), source: "K-MARA" },
        { name: t('india.team.member5_name'), value: t('india.team.member5_value'), source: "K-MARA" },
        { name: t('india.team.member6_name'), value: t('india.team.member6_value'), source: "TECCI" },
        { name: t('india.team.member7_name'), value: t('india.team.member7_value'), source: "K-MARA" }
    ];
    
    return (
        <div className="bg-white dark:bg-dark-background py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-white">{t('india.team.title')}</h2>
                    <p className="mt-4 text-lg text-gray-700 dark:text-dark-text max-w-3xl mx-auto">{t('india.team.subtitle')}</p>
                </div>
                <motion.div 
                    className="overflow-hidden"
                    variants={tableVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="hidden md:grid grid-cols-12 bg-primary text-white font-bold text-left rounded-t-lg">
                        <div className="col-span-4 p-4">{t('india.team.col_name')}</div>
                        <div className="col-span-6 p-4">{t('india.team.col_value')}</div>
                        <div className="col-span-2 p-4">{t('india.team.col_source')}</div>
                    </div>
                    {teamData.map((member, index) => (
                        <motion.div 
                            key={index} 
                            className="md:grid md:grid-cols-12 border-b border-gray-200 dark:border-gray-700 last:border-b-0 md:items-center bg-white dark:bg-dark-secondary shadow-md rounded-lg mb-4 md:shadow-none md:rounded-none md:mb-0"
                            variants={rowVariants}
                        >
                            <div className="col-span-12 md:col-span-4 p-4">
                                <p className="font-bold text-gray-900 dark:text-white">{member.name.includes('(') ? member.name.split(' (')[0] : member.name}</p>
                                {member.name.includes('(') && <p className="text-gray-500 dark:text-dark-text text-sm">({member.name.split(' (')[1]}</p>}
                            </div>
                            <div className="col-span-12 md:col-span-6 p-4 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700">
                                <span className="font-bold text-gray-600 dark:text-white/80 md:hidden">{t('india.team.col_value')}: </span>
                                <span className="text-gray-700 dark:text-dark-text/80">{member.value}</span>
                            </div>
                            <div className="col-span-12 md:col-span-2 p-4 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700">
                                 <span className="font-bold text-gray-600 dark:text-white/80 md:hidden">{t('india.team.col_source')}: </span>
                                <span className="text-gray-500 dark:text-dark-text/60 font-medium">{member.source}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default IndiaTeamTable;