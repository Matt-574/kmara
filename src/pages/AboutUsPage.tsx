import React from 'react';
import PhilosophySection from '../components/aboutus/PhilosophySection';
import TeamGrid from '../components/aboutus/TeamGrid';
import AdvisoryBoardSection from '../components/aboutus/AdvisoryBoardSection';
import InteractiveMap from '../components/aboutus/InteractiveMap';
import AboutUsCertificateGallery from '../components/aboutus/AboutUsCertificateGallery';

const AboutUsPage: React.FC = () => {
    return (
        <>
            <PhilosophySection />
            <InteractiveMap />
            <AdvisoryBoardSection />
            <TeamGrid />
            <AboutUsCertificateGallery />
        </>
    );
};

export default AboutUsPage;
