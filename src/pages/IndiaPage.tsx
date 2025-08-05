import React from 'react';
import AnimatedStats from '../components/india/AnimatedStats';
import IndiaTeamTable from '../components/india/IndiaTeamTable';
import CertificateGallery from '../components/india/CertificateGallery';
import GovernmentPitch from '../components/india/GovernmentPitch';
import IndiaFlag3D from '../components/india/IndiaFlag3D';
import TrainingSection from '../components/india/TrainingSection';

const IndiaPage: React.FC = () => {
    return (
        <div className="bg-white">
            <AnimatedStats />
            <IndiaFlag3D />
            <IndiaTeamTable />
            <CertificateGallery />
            <GovernmentPitch />
            <TrainingSection />
        </div>
    );
};

export default IndiaPage;
