import { CheckCircle2, Circle, Loader2, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const sections = [
  { key: "Introduction",        status: "done" },
  { key: "Literature Review",   status: "done" },
  { key: "Methodology",         status: "done" },
  { key: "Results & Discussion",status: "typing" },
  { key: "Conclusion",          status: "pending" },
];

const HeroMockup = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full max-w-md mx-auto select-none">
      {/* Floating badge — top right */}
      <div className="absolute -top-4 -right-4 z-20 bg-white border border-gray-100 shadow-lg rounded-xl px-3 py-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-semibold text-[#0F172A]">AI Ready</span>
      </div>

      {/* Main card */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

        {/* Browser chrome */}
        <div className="bg-[#f6f6f8] px-4 py-3 flex items-center gap-2 border-b border-gray-100">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="text-xs text-gray-400 ml-2 font-mono">xalfa.uz</span>
        </div>

        <div className="p-5">
          {/* Topic input */}
          <div className="mb-3">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1">
              {t("mockup_topic_label")}
            </p>
            <div className="bg-[#f6f6f8] rounded-lg px-3 py-2.5 text-sm text-[#0F172A] border border-gray-200 leading-snug">
              {t("mockup_topic_value")}
              <span className="inline-block w-0.5 h-4 bg-[#135bec] ml-0.5 animate-pulse align-middle" />
            </div>
          </div>

          {/* Document type pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { key: "mockup_type_thesis",      active: true  },
              { key: "mockup_type_article",     active: false },
              { key: "mockup_type_coursework",  active: false },
            ].map(({ key, active }) => (
              <span
                key={key}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  active
                    ? "bg-[#135bec] text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {t(key)}
              </span>
            ))}
          </div>

          {/* Generate button */}
          <button className="w-full bg-[#135bec] hover:bg-[#0d42b0] transition-colors text-white rounded-xl py-2.5 text-sm font-semibold mb-4 flex items-center justify-center gap-2 cursor-default">
            <Sparkles className="w-4 h-4" />
            {t("mockup_generate_btn")}
          </button>

          {/* Section progress list */}
          <div className="space-y-1.5">
            {sections.map(({ key, status }) => (
              <div
                key={key}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs ${
                  status === "done"
                    ? "bg-green-50"
                    : status === "typing"
                    ? "bg-blue-50"
                    : "bg-gray-50"
                }`}
              >
                {status === "done" && (
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                )}
                {status === "typing" && (
                  <Loader2 className="w-4 h-4 text-[#135bec] shrink-0 animate-spin" />
                )}
                {status === "pending" && (
                  <Circle className="w-4 h-4 text-gray-300 shrink-0" />
                )}

                <span
                  className={
                    status === "done"
                      ? "text-[#0F172A] font-medium"
                      : status === "typing"
                      ? "text-[#135bec] font-medium"
                      : "text-gray-400"
                  }
                >
                  {key}
                </span>

                {status === "typing" && (
                  <span className="ml-auto text-[10px] text-[#135bec] animate-pulse font-medium">
                    {t("mockup_generating")}
                  </span>
                )}
                {status === "done" && (
                  <span className="ml-auto text-[10px] text-green-500 font-medium">
                    {t("mockup_done")}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating stat — bottom left */}
      <div className="absolute -bottom-4 -left-4 z-20 bg-white border border-gray-100 shadow-lg rounded-xl px-3 py-2">
        <p className="text-[10px] text-gray-400">{t("mockup_time_label")}</p>
        <p className="text-sm font-bold text-[#135bec]">~3 min</p>
      </div>
    </div>
  );
};

export default HeroMockup;
