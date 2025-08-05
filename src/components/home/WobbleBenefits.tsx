import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { useTranslation } from "react-i18next";
import { Zap, ShieldCheck, Clock, BarChart } from "lucide-react";

const WobbleBenefits: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            {t('home_benefits.title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <WobbleCard
            containerClassName="col-span-1 bg-secondary"
          >
            <div className="max-w-xs">
              <Zap className="w-10 h-10 mb-4 text-white" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                {t('home_benefits.benefit1_title')}
              </h3>
              <p className="mt-4 text-base md:text-lg text-white/80">
                {t('home_benefits.benefit1_desc')}
              </p>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 bg-primary">
            <ShieldCheck className="w-10 h-10 mb-4 text-white" />
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              {t('home_benefits.benefit2_title')}
            </h3>
            <p className="mt-4 text-base md:text-lg text-white/80">
              {t('home_benefits.benefit2_desc')}
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-gray-800">
            <div className="max-w-xl text-center mx-auto">
              <BarChart className="w-10 h-10 mb-4 text-white mx-auto" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                {t('home_benefits.benefit3_title')}
              </h3>
              <p className="mt-4 text-base md:text-lg text-white/80">
                {t('home_benefits.benefit3_desc')}
              </p>
            </div>
          </WobbleCard>
        </div>
      </div>
    </div>
  );
};

export default WobbleBenefits;
