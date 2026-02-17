import React from "react";
import { useTranslation } from "react-i18next";

const ServiceCard = ({
  title,
  desc,
  iconName,
  badge,
  buttonText,
  onButtonClick,
  iconMap,
}) => {
  const { t } = useTranslation();
  const IconComponent = iconMap && iconName ? iconMap[iconName] : null;

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 w-full max-w-sm shadow-sm hover:shadow-md transition-shadow">
      {/* Icon and Badge */}
      <div className="flex items-start justify-between mb-4">
        <div className="bg-blue-100 p-4 rounded-xl">
          {IconComponent ? (
            <IconComponent className="text-[#135bec] w-6 h-6" />
          ) : (
            <div className="text-[#135bec] text-2xl">📄</div>
          )}
        </div>
        {badge && (
          <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-md">
            {badge}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-4">{desc}</p>

      {/* Button */}
      <button
        onClick={onButtonClick}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
      >
        {buttonText || t("create_document")}
      </button>
    </div>
  );
};

export default ServiceCard;
