import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { motion } from 'framer-motion';

const LOGO_COLOR = '/images/kmara_logo.png';
const LOGO_WHITE = '/images/logo-kmara-blanco.png';

const Navbar: React.FC = () => {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { to: '/', text: t('navbar.home') },
        { to: '/product', text: t('navbar.product') },
        { to: '/about', text: t('navbar.about') },
        { to: '/india', text: t('navbar.india') },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Determine navbar classes based on scroll state
    const navbarClasses = scrolled
        ? 'bg-white shadow-md text-gray-800'
        : 'bg-transparent text-white';
    
    // Determine logo source based on scroll state
    const logoSrc = scrolled ? LOGO_COLOR : LOGO_WHITE;

    return (
        <motion.nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClasses}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-28">
                    
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <NavLink to="/">
                            <img className="h-24" src={logoSrc} alt="K-MARA Logo" />
                        </NavLink>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink 
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) => 
                                    `font-medium transition-colors duration-200 hover:text-secondary ${isActive ? 'text-secondary' : ''}`
                                }
                            >
                                {link.text}
                            </NavLink>
                        ))}
                    </div>

                    {/* Language Switcher and Mobile Menu Button */}
                    <div className="flex items-center">
                        <LanguageSwitcher />
                        <div className="md:hidden ml-4">
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white text-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <NavLink 
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) => 
                                    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-gray-100 ${isActive ? 'text-secondary' : ''}`
                                }
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.text}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;