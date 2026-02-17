import React, { useEffect, useState } from "react";
import { Funnel, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import ServiceCard from "../ServiceCard.jsx";
import fakeCards, { iconMap } from '../../data/mockData.js'

const PayWhatYouNeed = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter cards based on selected category
  const filteredCards = selectedCategory === 'all'
    ? fakeCards
    : fakeCards.filter(card => card.category === selectedCategory);

  // Re-run AOS whenever the card list changes (filtered content is dynamic)
  useEffect(() => {
    AOS.refresh();
  }, [filteredCards]);

  const handleCreateDocument = (cardTitle) => {
    window.open('https://www.xalfa.uz', '_blank');
  };

  return (
    <div className="bg-[#f6f6f8] py-12 md:py-20">
      <div className="px-6 max-w-[1440px] mx-auto">
        {/* Header */}
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-[#0F172A] text-center">
          {t('pay_only')}
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-base md:text-lg text-[#475569] mt-2 text-center">
          {t('transparent_pricing')}
        </p>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-10 mt-10">
          {/* Sidebar - Filters and Payment */}
          <div data-aos="fade-right" className="w-full lg:w-[350px] flex flex-col gap-6">
            {/* Category Filter */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
              <p className="text-[#0F172A] flex items-center gap-2 text-lg font-medium mb-4">
                <Funnel className="text-[#135BEC] fill-[#135BEC]" />
                {t('category')}
              </p>
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-3 rounded-lg transition-colors w-full text-start font-medium ${
                    selectedCategory === 'all'
                      ? 'bg-[#135BEC] text-white'
                      : 'text-[#475569] hover:text-[#135BEC] hover:bg-[#e8effe]'
                  }`}
                >
                  {t('all_documents')}
                </button>
                <button 
                  onClick={() => setSelectedCategory('researchers')}
                  className={`px-4 py-3 rounded-lg transition-colors w-full text-start font-medium ${
                    selectedCategory === 'researchers'
                      ? 'bg-[#135BEC] text-white'
                      : 'text-[#475569] hover:text-[#135BEC] hover:bg-[#e8effe]'
                  }`}
                >
                  {t('researchers')}
                </button>
                <button 
                  onClick={() => setSelectedCategory('students')}
                  className={`px-4 py-3 rounded-lg transition-colors w-full text-start font-medium ${
                    selectedCategory === 'students'
                      ? 'bg-[#135BEC] text-white'
                      : 'text-[#475569] hover:text-[#135BEC] hover:bg-[#e8effe]'
                  }`}
                >
                  {t('students')}
                </button>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
              <p className="text-[#94A3B8] flex items-center gap-2 text-sm md:text-base font-medium mb-4">
                {t('payment_methods')}
              </p>
              <div className="flex flex-col gap-2">
                <button className="text-[#475569] px-4 py-3 rounded-lg transition-colors w-full text-start bg-[#f8fafc] hover:bg-[#e8effe] flex gap-2 justify-between items-center font-medium">
                  PAYME
                  <ShieldCheck className="text-[#22c55e] w-5 h-5" />
                </button>
                <button className="text-[#475569] px-4 py-3 rounded-lg transition-colors w-full text-start bg-[#f8fafc] hover:bg-[#e8effe] flex justify-between gap-2 items-center font-medium">
                  CLICK
                  <ShieldCheck className="text-[#22c55e] w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="flex-1">
            <div
              className={
                `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` +
                (filteredCards.length === 1 ? ' place-items-center' : '')
              }
            >
              {filteredCards.map((card, index) => (
                <div key={card.id || index} data-aos="fade-up" data-aos-delay={index * 80}>
                  <ServiceCard
                    title={t(card.titleKey)}
                    desc={t(card.descKey)}
                    badge={card.badge}
                    iconName={card.iconName}
                    iconMap={iconMap}
                    buttonText={t('create_document')}
                    onButtonClick={() => handleCreateDocument(card.titleKey)}
                  />
                </div>
              ))}
            </div>
            {/* Center single card */}
            {filteredCards.length === 1 && (
              <style>{`.grid.grid-cols-1.place-items-center { justify-items: center; }`}</style>
            )}
            {filteredCards.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No documents available for this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayWhatYouNeed;
