import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileText } from 'lucide-react';

const AboutUsCertificateGallery: React.FC = () => {
    const { t } = useTranslation();
    const certificates = [
        {
            title: "Estudio Clínico HFABP",
            details: "Análisis clínico detallado sobre la proteína de unión a ácidos grasos cardíaca.",
            pdf: '/certificates/general/ESTUDIO CLINICO HFABP.pdf'
        },
        {
            title: "Estudio de Vietnam HFABP",
            details: "Investigación sobre la aplicación de HFABP en el contexto de Vietnam.",
            pdf: '/certificates/general/ESTUDIO VIETNAM HFABP.pdf'
        },
        {
            title: "Estudio Clínico HFABP (Egipto)",
            details: "Resultados del estudio clínico realizado en Egipto sobre HFABP.",
            pdf: '/certificates/general/Estudio Clinico HFABP EGYPT.pdf'
        },
        {
            title: "Cartas y Estudios Dr. Aranda",
            details: "Documentación y estudios compilados por el Dr. Aranda.",
            pdf: '/certificates/general/Letter and Studies DR. ARANDA.pdf'
        },
        {
            title: "JACC Vol. 50, No. 11, 2007",
            details: "Publicación científica en el Journal of the American College of Cardiology.",
            pdf: '/certificates/general/1-s2.0-S0735109707027349-main.pdf'
        },
        {
            title: "JACC Vol. 55, No. 14, 2010",
            details: "Publicación científica en el Journal of the American College of Cardiology.",
            pdf: '/certificates/general/1-s2.0-S0735109710012519-main.pdf'
        }
    ];

    return (
        <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">{t('about_us.gallery.title')}</h2>
                    <p className="mt-4 text-lg text-gray-700">{t('about_us.gallery.subtitle')}</p>
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

export default AboutUsCertificateGallery;
