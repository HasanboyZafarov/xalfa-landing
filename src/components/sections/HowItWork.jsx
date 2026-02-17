import { Lock, LayoutGrid, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const HowItWork = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Lock,
      titleKey: "step_login_title",
      descKey: "step_login_desc",
    },
    {
      icon: LayoutGrid,
      titleKey: "step_choose_title",
      descKey: "step_choose_desc",
    },
    {
      icon: Check,
      titleKey: "step_generate_title",
      descKey: "step_generate_desc",
    },
  ];

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] text-center">
        {t("how_it_works")}
      </h2>
      <p className="text-base md:text-lg text-[#475569] mt-2 text-center">
        {t("three_steps")}
      </p>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-30 max-w-4xl mx-auto mt-12">
        {/* Connecting line — only visible on md+ */}
        <div className="hidden md:block absolute top-[38px] left-[16.7%] right-[16.7%] h-px bg-gray-200 z-0" />

        {steps.map(({ icon: Icon, titleKey, descKey }) => (
          <div key={titleKey} className="relative flex flex-col items-center text-center z-10">
            <span className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 border border-gray-200 mb-4">
              <Icon className="w-10 h-10 text-blue-500" />
            </span>
            <h3 className="text-2xl font-bold text-[#0F172A]">{t(titleKey)}</h3>
            <p className="text-[#475569] text-sm mt-2">{t(descKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWork;
