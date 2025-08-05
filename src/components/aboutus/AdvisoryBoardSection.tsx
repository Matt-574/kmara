import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, ClipboardCheck, Lightbulb } from 'lucide-react';

const AdvisoryBoardSection: React.FC = () => {
  const { t } = useTranslation();

  const advisors = [
    {
      nameKey: 'ralf_name',
      roleKey: 'ralf_role',
      descKey: 'ralf_desc',
      image: '/images/Ralf.png',
    },
    {
      nameKey: 'doctor_name',
      roleKey: 'doctor_role',
      descKey: 'doctor_desc',
      image: '/images/Miguel A.png',
    },
    {
 nameKey: 'sekhar_name',
      roleKey: 'sekhar_role',
      descKey: 'sekhar_desc',
      image: '/images/Sekhar.png',
    },
  ];

  const advisoryPoints = [
    { icon: <Target className="w-8 h-8 text-white" />, textKey: 'bullet_1' },
    { icon: <ClipboardCheck className="w-8 h-8 text-white" />, textKey: 'bullet_2' },
    { icon: <Lightbulb className="w-8 h-8 text-white" />, textKey: 'bullet_3' },
  ];

  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            {t('about_us.advisory.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t('about_us.advisory.subtitle')}
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 mb-8" dangerouslySetInnerHTML={{ __html: t('about_us.advisory.text_1') }}></p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advisoryPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  className="bg-primary/90 text-white p-6 rounded-xl flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                >
                  <div className="bg-primary p-3 rounded-full mb-4">
                    {point.icon}
                  </div>
                  <p>{t(`about_us.advisory.${point.textKey}`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="space-y-16">
            {advisors.map((advisor, index) => (
              <motion.div 
                key={index}
                className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <div className="md:w-1/3">
                  <img src={advisor.image} alt={t(`about_us.advisory.${advisor.nameKey}`)} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-2/3 p-8 text-left">
                  <h3 className="text-2xl font-bold text-primary">{t(`about_us.advisory.${advisor.nameKey}`)}</h3>
                  <p className="text-lg font-semibold text-gray-600 mb-4">{t(`about_us.advisory.${advisor.roleKey}`)}</p>
                  <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: t(`about_us.advisory.${advisor.descKey}`) }}></p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryBoardSection;
