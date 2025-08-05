import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
];

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    const toggleLanguage = (code: string) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <motion.button
                className="flex items-center space-x-2 text-white font-semibold"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
            >
                <Globe size={24} />
                <span>{currentLanguage.flag}</span>
            </motion.button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-dark-secondary rounded-lg shadow-lg"
                    >
                        {languages.map(lang => (
                            <button
                                key={lang.code}
                                onClick={() => toggleLanguage(lang.code)}
                                className="w-full text-left px-4 py-2 flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-dark-tertiary"
                            >
                                <span>{lang.flag}</span>
                                <span className="text-gray-800 dark:text-white">{lang.name}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSwitcher;
