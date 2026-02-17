import { useEffect, useRef, useState } from "react";
import { FileText, GraduationCap, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const useCountUp = (target, duration = 2000, active = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };

    requestAnimationFrame(animate);
  }, [active, target, duration]);

  return count;
};

const StatCard = ({ icon: Icon, target, suffix = "", labelKey, delay = 0 }) => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(target, 2000, active);

  return (
    <div
      ref={ref}
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex flex-col items-center gap-3 px-8 py-6"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 border border-blue-100">
        <Icon className="w-7 h-7 text-[#135bec]" />
      </div>
      <p className="text-4xl md:text-5xl font-bold text-[#0F172A]">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-sm md:text-base text-[#475569] font-medium text-center">
        {t(labelKey)}
      </p>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { icon: FileText, target: 10000, suffix: "+", labelKey: "stat_documents_label", delay: 0 },
    { icon: GraduationCap, target: 8500, suffix: "+", labelKey: "stat_students_label", delay: 100 },
    { icon: Globe, target: 6, suffix: "", labelKey: "stat_languages_label", delay: 200 },
  ];

  return (
    <section className="bg-white border-y border-gray-100 py-4">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {stats.map((stat) => (
            <StatCard key={stat.labelKey} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
