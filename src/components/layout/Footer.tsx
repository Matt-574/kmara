import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import KmaraLogo from '/images/kmara_logo.png';

const Footer: React.FC = () => {
    const { t, i18n } = useTranslation();
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { to: '/', text: t('navbar.home') },
        { to: '/product', text: t('navbar.product') },
        { to: '/about', text: t('navbar.about') },
        { to: '/india', text: t('navbar.india') },
    ];
    
    return (
        <footer className="bg-white text-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <img src={KmaraLogo} alt="K-MARA Logo" className="h-32" />
                        <p className="mt-4 text-gray-600 max-w-sm">
                            {t('footer.about')}
                        </p>
                    </div>
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold text-primary">{t('footer.quick_links')}</h3>
                        <ul className="mt-4 space-y-2">
                            {navLinks.map(link => (
                                <li key={link.to}>
                                    <NavLink to={link.to} className="text-gray-600 hover:text-primary transition-colors">
                                        {link.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:col-span-1">
                        {/* Placeholder for contact info or social media links */}
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8 text-center text-gray-500">
                    <p>{t('footer.copyright', { year: currentYear })}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;