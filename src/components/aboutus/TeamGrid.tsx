import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  link?: string;
}

const TeamGrid: React.FC = () => {
  const { t } = useTranslation();
  const teamMembers: TeamMember[] = [
    { name: "Polixena Bellver", role: t('about_us.team.member1_role'), description: t('about_us.team.member1_desc'), image: '/images/Polixena.png' },
    { name: "Mª Ángeles García", role: t('about_us.team.member2_role'), description: t('about_us.team.member2_desc'), image: '/images/M. Ángeles.png' },
    { name: "Dr. Sekhar Kidambi", role: t('about_us.team.member3_role'), description: t('about_us.team.member3_desc'), image: '/images/Sekhar.png', link: "/india" }
  ];

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedMember = teamMembers.find(member => member.name === selectedId);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('about_us.team.title')}
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
            <motion.div
                key={member.name}
                layoutId={member.name}
                onClick={() => setSelectedId(member.name)}
                className="text-center cursor-pointer group"
            >
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover"/>
                </div>
                <div className="mt-4">
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                </div>
            </motion.div>
            ))}
        </div>

        <AnimatePresence>
            {selectedId && selectedMember && (
            <motion.div
                layoutId={selectedId}
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
            >
                <motion.div 
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto flex flex-col items-center text-center p-8"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg -mt-24 border-4 border-white">
                        <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover"/>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-2xl font-bold text-gray-800">{selectedMember.name}</h3>
                        <p className="text-primary text-lg">{selectedMember.role}</p>
                        <p className="mt-4 text-gray-600">{selectedMember.description}</p>
                        {selectedMember.link && (
                        <Link to={selectedMember.link} className="text-primary hover:underline mt-6 inline-block font-semibold">
                            {t('about_us.team.more_button')} &rarr;
                        </Link>
                        )}
                    </div>
                </motion.div>
            </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
};

export default TeamGrid;