import React from "react";

const AcademicCard = ({ title, desc, iconName, iconMap }) => {
  const IconComponent = iconMap && iconName ? iconMap[iconName] : null;
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 w-full max-w-sm transition-shadow">
      {/* Icon and Badge */}
      <div className="flex items-start justify-between mb-4">
        <div className="bg-blue-100 p-4 rounded-xl">
          {IconComponent ? (
            <IconComponent className="text-[#135bec] w-6 h-6" />
          ) : (
            <div className="text-[#135bec] text-2xl">📄</div>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-4">{desc}</p>
    </div>
  );
};

export default AcademicCard;
