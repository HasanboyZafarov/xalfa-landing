import React from "react";
import { useTranslation } from "react-i18next";
import { academicServices, iconMap } from "./../../data/mockData";
import Container from "../Container";
import AcademicCard from "../AcademicCard";

const Write = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-32 z-10 bg-[#fff]">
      <Container>
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-[#0F172A] text-center">
          {t("write_title")}
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-base md:text-lg text-[#475569] mt-2 text-center">
          {t("write_subtitle")}
        </p>
        <div
          className={
            `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20` +
            (academicServices.length === 1 ? ' place-items-center' : '')
          }
        >
          {academicServices.map((service, i) => (
            <div key={service.id} data-aos="fade-up" data-aos-delay={i * 80}>
              <AcademicCard
                title={t(service.titleKey)}
                desc={t(service.descKey)}
                iconName={service.iconName}
                iconMap={iconMap}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Write;
