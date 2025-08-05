import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { useTranslation } from "react-i18next";

export const IndiaFlag3DPin: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="h-96 w-full flex items-center justify-center">
      <PinContainer
        title={t('india.flag_pin.title')}
        href="/india"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {t('india.flag_pin.header')}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              {t('india.flag_pin.description')}
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-b from-orange-500 via-white to-green-600 relative">
            <div className="absolute h-full w-full flex items-center justify-center">
              <div className="h-8 w-8 bg-blue-800 rounded-full" />
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};
