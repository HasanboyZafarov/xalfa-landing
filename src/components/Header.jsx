import {useState} from 'react';
import {ChevronDown} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LanguageSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  
  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'uz', name: 'UZ' },
    { code: 'ru', name: 'RU' },
    { code: 'ky', name: 'KY' },
    { code: 'kk', name: 'KZ' },
    { code: 'kaa', name: 'QQ' },
  ];

  const selectedLang = languages.find(lang => lang.code === i18n.language);

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative cursor-pointer">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[#135bec] focus:ring-offset-1 cursor-pointer"
      >
        <span className="text-gray-700 font-medium">{selectedLang?.name}</span>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-16 bg-white rounded-lg border border-gray-200 shadow-lg z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg cursor-pointer${
                i18n.language === language.code ? 'bg-blue-50 text-[#135bec] font-medium' : 'text-gray-700'
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 md:px-20 py-4 max-w-[1440px] mx-auto">
        <div>
          <span className="text-2xl font-bold text-[#135bec]">XALFA</span>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSelect />
          <button onClick={() => window.open('https://www.xalfa.uz')} className="px-4 py-2 bg-[#135bec] text-white rounded-lg hover:bg-[#0d42b0] transition-colors cursor-pointer">{t('sign_in')}</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
