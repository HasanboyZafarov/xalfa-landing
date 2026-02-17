import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "../../assets/hero-left.svg";
import Blur from "../Blur";
import Container from "../Container";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-32 z-10 bg-[#f6f6f8]">
      <Container>
        <Blur location={{ x: "right", y: "top" }} />
        <Blur location={{ x: "left", y: "bottom" }} />
        <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-center z-10">
          <div className="flex flex-col gap-6 md:gap-10 w-full lg:w-1/2 z-10">
            <p className="text-sm text-[#135bec] flex items-center gap-2">
              <span className="bg-[#135bec] w-[12px] h-[12px] rounded-full inline-block"></span>
              {t('ai_for_academia')}
            </p>
            <h1 className="font-bold">
              <p className="text-4xl md:text-6xl text-[#0f172a]">{t('ai_powered')}</p>
              <p className="text-4xl md:text-6xl text-[#2b72f0]">{t('academic')}</p>
              <p className="text-4xl md:text-6xl text-[#5499f7]">{t('excellence')}</p>
            </h1>
            <p className="text-base md:text-lg text-[#475569]">
              {t('hero_desc')}
            </p>
            <button
              onClick={() => window.open("https://www.xalfa.uz", "_blank")}
              className="px-5 py-3 bg-[#135bec] text-white rounded-lg hover:bg-[#0d42b0] transition-colors cursor-pointer flex items-center gap-2 shadow-lg w-max transition-transform z-10"
            >
              {t('get_started')}
              <ArrowRight className="w-6 h-6 text-[#fff]" />
            </button>
          </div>
          <div className="w-full lg:w-1/2 z-10">
            <img src={heroImage} alt="Hero" className="w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
