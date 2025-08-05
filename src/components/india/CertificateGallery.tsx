import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileText } from 'lucide-react';

const CertificateGallery: React.FC = () => {
    const { t } = useTranslation();
    const certificates = [
        {
            title: "Estudio Observacional (J Clin Biochem)",
            details: "Uso combinado de Troponina T y h-FABP para el diagnóstico temprano del SCA.",
            pdf: '/certificates/2015_India_J Clin Biochem.pdf'
        },
        {
            title: "Estudio Prospectivo (Indian Heart Journal)",
            details: "Analiza la utilidad de h-FABP como marcador temprano para infarto agudo de miocardio.",
            pdf: '/certificates/2015_Indian Heart Journal 67 (538-542).pdf'
        },
        {
            title: "Estudio Prospectivo (Copia)",
            details: "Copia del estudio sobre la utilidad de h-FABP como marcador temprano.",
            pdf: '/certificates/2015_Indian Heart Journal 67 (538-542) (1).pdf'
        }
    ];

    return (
        <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">{t('india.gallery.title')}</h2>
                    <p className="mt-4 text-lg text-gray-700">{t('india.gallery.subtitle')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-8">
                    {certificates.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <motion.div
                                className="text-center cursor-pointer group bg-white p-8 rounded-lg shadow-lg h-full flex flex-col items-center justify-start"
                                whileHover={{ scale: 1.05, y: -10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <FileText className="w-20 h-20 text-primary mb-5" />
                                <h3 className="font-bold text-xl text-primary group-hover:text-secondary">{cert.title}</h3>
                                <p className="font-semibold text-gray-600 mt-3">{cert.details}</p>
                            </motion.div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CertificateGallery;
