import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const IndiaCertificateGallery: React.FC = () => {
  const { t } = useTranslation();

  const certificates = [
    {
      title: "Certificado India 1",
      description: "Descripción del primer certificado para India.",
      file: "/certificates/india/GOBIERNO DE LA INDIA.pdf"
    },
    {
      title: "Certificado India 2",
      description: "Descripción del segundo certificado para India.",
      file: "/certificates/india/HOSPITALES DE LA INDIA.pdf"
    },
    {
      title: "Certificado India 3",
      description: "Descripción del tercer certificado para India.",
      file: "/certificates/india/LABORATORIOS DE LA INDIA.pdf"
    }
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            {t('india.certificates.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('india.certificates.subtitle')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{t(certificate.title)}</h3>
                <p className="text-gray-600 mb-4">{t(certificate.description)}</p>
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                >
                  {t('india.certificates.view_button')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndiaCertificateGallery;
