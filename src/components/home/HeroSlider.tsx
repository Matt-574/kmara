import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const sliderImages = [
    '/images/slider/slide3.jpg',
    '/images/slider/slide5.jpg',
    '/images/slider/4.png',
];

const HeroSlider: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="relative h-screen w-full">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                loop={true}
                effect={'fade'}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper h-full w-full"
            >
                {sliderImages.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="h-full w-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${src})` }}
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                <div className="text-center text-white p-4">
                    <motion.h1 
                        className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-secondary">{t('hero.title_part1')}</span>
                        <br />
                        <span>{t('hero.title_part2')}</span>
                    </motion.h1>
                    <motion.p 
                        className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {t('hero.subtitle')}
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row justify-center gap-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link to="/product" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                            {t('hero.productButton')}
                        </Link>
                        <Link to="/about" className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                            {t('hero.missionButton')}
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
