import { Facebook, AtSign } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const platformLinks = ["features", "pricing", "document_types", "login"];
  const supportLinks = ["help_center", "terms_of_service", "privacy_policy", "contact_us"];

  return (
    <footer className="bg-[#F8FAFC] border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand — full width on sm so it doesn't sit beside a lone column */}
        <div data-aos="fade-up" className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <span className="text-2xl font-bold text-[#135bec]">XALFA</span>
          <p className="text-sm text-[#475569] leading-relaxed">
            {t("footer_tagline")}
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#135bec] transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@xalfa.uz"
              className="text-gray-400 hover:text-[#135bec] transition-colors"
            >
              <AtSign className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Platform */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col gap-3">
          <h4 className="font-bold text-[#0F172A]">{t("platform")}</h4>
          {platformLinks.map((key) => (
            <a
              key={key}
              href="#"
              className="text-sm text-[#475569] hover:text-[#135bec] transition-colors"
            >
              {t(key)}
            </a>
          ))}
        </div>

        {/* Support */}
        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col gap-3">
          <h4 className="font-bold text-[#0F172A]">{t("support")}</h4>
          {supportLinks.map((key) => (
            <a
              key={key}
              href="#"
              className="text-sm text-[#475569] hover:text-[#135bec] transition-colors"
            >
              {t(key)}
            </a>
          ))}
        </div>

        {/* Payment Methods */}
        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col gap-3">
          <h4 className="font-bold text-[#0F172A]">{t("payment_methods")}</h4>
          <div className="flex flex-wrap items-center gap-2">
            {["CLICK", "PAYME"].map((method) => (
              <span
                key={method}
                className="px-3 py-1.5 border border-gray-300 rounded text-xs font-medium text-[#475569]"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-xs text-[#94A3B8]">
        {t("footer_copyright", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
};

export default Footer;
