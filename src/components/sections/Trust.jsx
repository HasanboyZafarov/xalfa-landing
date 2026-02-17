import React from "react";
import { Album, GraduationCap, LibraryBig, University } from "lucide-react";
import { useTranslation } from "react-i18next";

const Trust = () => {
  const { t } = useTranslation();
  const textClass =
    "text-sm md:text-lg font-bold text-[#9199a5] hover:text-[#2b72f0] transition-colors cursor-pointer flex items-center gap-2";
  const headingClass = "text-xs sm:text-sm md:text-lg font-bold text-[#9199a5] text-center max-w-xl";
  
  return (
    <section className="py-10 md:py-15 z-50 bg-[#fff] flex flex-col items-center gap-5 px-6">
      <h2 className={headingClass}>
        {t('trusted_by')}
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 w-full">
          {/* ...existing code... */}
        </div>
          <p className={textClass}>
            <University />
            <span className="hidden sm:inline">Westminster</span>
          </p>
        <span className="flex items-center gap-5">
          <p className={textClass}>
            <GraduationCap />
            <span className="hidden sm:inline">Inha Univ</span>
          </p>
        </span>
        <span className="flex items-center gap-5">
          <p className={textClass}>
            <LibraryBig />
            <span className="hidden sm:inline">MDIST</span>
          </p>
        </span>
        <span className="flex items-center gap-5">
          <p className={textClass}>
            <Album />
            <span className="hidden sm:inline">Webster</span>
          </p>
        </span>
      </div>
    </section>
  );
};

export default Trust;
