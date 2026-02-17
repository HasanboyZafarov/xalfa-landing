import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Header
      "sign_in": "Sign In",

      // Hero
      "ai_for_academia": "AI FOR ACADEMIA",
      "ai_powered": "AI-Powered",
      "academic": "Academic",
      "excellence": "Excellence",
      "hero_desc": "Accelerate your research in Central Asia. Generate structured theses, research papers, and academic presentations in minutes with advanced AI tailored for higher education.",
      "get_started": "Get Started",

      // Trust
      "trusted_by": "TRUSTED BY STUDENTS & RESEARCHERS ACROSS CENTRAL ASIA",

      // Write section
      "write_title": "Everything You Need to Write",
      "write_subtitle": "Select from a wide range of academic writing services tailored to your university needs.",
      "service_theses_title": "Theses",
      "service_theses_desc": "Structure your bachelor's or master's thesis with comprehensive outlines and chapter drafts.",
      "service_papers_title": "Research Papers",
      "service_papers_desc": "Generate well-cited research papers adhering to APA, MLA, or Harvard citation styles.",
      "service_presentations_title": "Presentations",
      "service_presentations_desc": "Create compelling slide decks and speaker notes for your defense or seminar.",
      "service_coursework_title": "Course Work",
      "service_coursework_desc": "Get help with essays, case studies, and lab reports for your daily coursework.",
      "service_literature_title": "Literature Reviews",
      "service_literature_desc": "Synthesize vast amounts of academic literature into coherent review sections.",
      "service_dissertations_title": "Dissertations",
      "service_dissertations_desc": "Advanced support for PhD candidates including methodology suggestions and data analysis interpretation.",

      // PayWhatYouNeed
      "pay_only": "Pay Only For What You Need",
      "transparent_pricing": "Transparent pay-per-document pricing. No monthly commitments.",
      "category": "Category",
      "all_documents": "All Documents",
      "researchers": "For Researchers",
      "students": "For Students",
      "payment_methods": "LOCAL PAYMENT METHODS",
      "create_document": "Create Document",
      "per_doc": "per doc",
      "thesis": "Thesis",
      "thesis_desc": "Thesis annotation and full text for scientific conferences.",
      "coursework": "Coursework",
      "coursework_desc": "Formatting all parts of a course project or work.",
      "abstract": "Abstract",
      "abstract_desc": "Thesis annotation and full text for scientific conferences.",
      "dissertation": "Dissertation",
      "dissertation_desc": "Complex assistance for PhD or master's dissertations.",
      "article": "Scientific Article",
      "article_desc": "Professional scientific research articles for journals.",

      // How It Works
      "how_it_works": "How XALFA Works?",
      "three_steps": "From blank page to first draft in three simple steps",
      "step_login_title": "1. Secure Login",
      "step_login_desc": "Sign in securely using your Google account to access your personal dashboard.",
      "step_choose_title": "2. Choose Type",
      "step_choose_desc": "Select the document type you need and provide a brief topic or prompt.",
      "step_generate_title": "3. Generate",
      "step_generate_desc": "Watch the AI draft your content in seconds, review it, and download.",

      // Footer
      "footer_tagline": "Empowering students and researchers in Central Asia with next-generation AI tools.",
      "platform": "Platform",
      "support": "Support",
      "features": "Features",
      "pricing": "Pricing",
      "document_types": "Document Types",
      "login": "Login",
      "help_center": "Help Center",
      "terms_of_service": "Terms of Service",
      "privacy_policy": "Privacy Policy",
      "contact_us": "Contact Us",
      "footer_copyright": "© {{year}} XALFA. All rights reserved.",
    }
  },
  uz: {
    translation: {
      // Header
      "sign_in": "Kirish",

      // Hero
      "ai_for_academia": "AKADEMIYA UCHUN AI",
      "ai_powered": "AI Bilan Ishlaydigan",
      "academic": "Akademik",
      "excellence": "Mukammallik",
      "hero_desc": "Markaziy Osiyoda o'z tadqiqotingizni tezlashtiring. AI yordamida ilmiy tezislar, tadqiqot maqolalari va akademik prezentatsiyalarni chiroyli tuzilishda bir necha daqiqada yarating.",
      "get_started": "Boshlash",

      // Trust
      "trusted_by": "MARKAZIY OSIYODAGI TALABALAR VA TADQIQOTCHILAR TOMONIDAN ISHONILGAN",

      // Write section
      "write_title": "Yozish Uchun Kerakli Hamma Narsa",
      "write_subtitle": "Universitetingiz ehtiyojlariga moslashtirilgan keng akademik yozish xizmatlari tanlovi.",
      "service_theses_title": "Tezislar",
      "service_theses_desc": "Keng qamrovli mazmun va bob qoralamalar bilan bakalavr yoki magistr dissertatsiyangizni tuzilmalang.",
      "service_papers_title": "Tadqiqot maqolalari",
      "service_papers_desc": "APA, MLA yoki Garvard iqtibos uslublariga rioya qilgan holda yaxshi iqtibos qilingan maqolalar yarating.",
      "service_presentations_title": "Taqdimotlar",
      "service_presentations_desc": "Himoya yoki seminaringiz uchun ta'sirchan slaydlar va ma'ruzachi eslatmalari yarating.",
      "service_coursework_title": "Kurs ishi",
      "service_coursework_desc": "Kundalik o'quv jarayoni uchun insho, keys-tadqiqot va laboratoriya hisobotlari bilan yordam oling.",
      "service_literature_title": "Adabiyot sharhlari",
      "service_literature_desc": "Ko'plab akademik adabiyotlarni izchil sharh bo'limlariga sintez qiling.",
      "service_dissertations_title": "Dissertatsiyalar",
      "service_dissertations_desc": "PhD nomzodlari uchun metodologiya tavsiyalari va ma'lumotlar tahlilini o'z ichiga olgan ilg'or yordam.",

      // PayWhatYouNeed
      "pay_only": "Faqat Kerak Boʻlganiga To'lem Qiling",
      "transparent_pricing": "Shaffof hujjat boshiga to'lem. Oylik to'lovlar yo'q.",
      "category": "Kategoriya",
      "all_documents": "Barcha hujjatlar",
      "researchers": "Tadqiqotchilar uchun",
      "students": "Talabalar uchun",
      "payment_methods": "MAHALLIY TO'LOV USULLARI",
      "create_document": "Hujjat yaratish",
      "per_doc": "hujjat uchun",
      "thesis": "Tezis",
      "thesis_desc": "Ilmiy konferensiya uchun tezis annotatsiyasi va toliq matni.",
      "coursework": "Kurs ishi",
      "coursework_desc": "Kurs loyihasi yoki ishining barcha qismlarini shakllantirish.",
      "abstract": "Referat",
      "abstract_desc": "Ilmiy konferensiya uchun tezis annotatsiyasi va toliq matni.",
      "dissertation": "Dissertatsiya",
      "dissertation_desc": "PhD yoki magistrlik dissertatsiyasi uchun kompleks yordam.",
      "article": "Ilmiy maqola",
      "article_desc": "Jurnallar uchun professional ilmiy tadqiqot maqolasi.",

      // How It Works
      "how_it_works": "XALFA Qanday Ishlaydi?",
      "three_steps": "Bo'sh sahifadan birinchi qoralamaga uch oddiy bosqichda",
      "step_login_title": "1. Xavfsiz Kirish",
      "step_login_desc": "Shaxsiy panelingizga kirish uchun Google hisobingiz orqali xavfsiz tarzda kiring.",
      "step_choose_title": "2. Turni Tanlang",
      "step_choose_desc": "Kerakli hujjat turini tanlang va qisqa mavzu yoki ko'rsatma kiriting.",
      "step_generate_title": "3. Yarating",
      "step_generate_desc": "AI bir necha soniya ichida kontentingizni qoralaydi — ko'rib chiqing va yuklab oling.",

      // Footer
      "footer_tagline": "Markaziy Osiyodagi talabalar va tadqiqotchilarni keyingi avlod AI vositalari bilan kuchaytirish.",
      "platform": "Platforma",
      "support": "Yordam",
      "features": "Xususiyatlar",
      "pricing": "Narxlar",
      "document_types": "Hujjat turlari",
      "login": "Kirish",
      "help_center": "Yordam markazi",
      "terms_of_service": "Foydalanish shartlari",
      "privacy_policy": "Maxfiylik siyosati",
      "contact_us": "Biz bilan bog'laning",
      "footer_copyright": "© {{year}} XALFA. Barcha huquqlar himoyalangan.",
    }
  },
  ru: {
    translation: {
      // Header
      "sign_in": "Войти",

      // Hero
      "ai_for_academia": "ИИ ДЛЯ АКАДЕМИИ",
      "ai_powered": "Управляемый ИИ",
      "academic": "Академический",
      "excellence": "Совершенство",
      "hero_desc": "Ускорьте свои исследования в Центральной Азии. Генерируйте структурированные тезисы, научные работы и академические презентации за считанные минуты с использованием передовых ИИ, разработанных для высшего образования.",
      "get_started": "Начать",

      // Trust
      "trusted_by": "ДОВЕРЯЮТ СТУДЕНТЫ И ИССЛЕДОВАТЕЛИ ПО ВСЕЙ ЦЕНТРАЛЬНОЙ АЗИИ",

      // Write section
      "write_title": "Всё необходимое для написания",
      "write_subtitle": "Широкий выбор академических услуг, адаптированных под нужды вашего университета.",
      "service_theses_title": "Тезисы",
      "service_theses_desc": "Структурируйте бакалаврскую или магистерскую диссертацию с подробными планами и черновиками глав.",
      "service_papers_title": "Научные работы",
      "service_papers_desc": "Создавайте хорошо процитированные научные работы в стилях APA, MLA или Harvard.",
      "service_presentations_title": "Презентации",
      "service_presentations_desc": "Создайте привлекательные слайды и заметки докладчика для защиты или семинара.",
      "service_coursework_title": "Курсовая работа",
      "service_coursework_desc": "Получите помощь с эссе, кейс-стади и лабораторными отчётами для повседневной учёбы.",
      "service_literature_title": "Литературные обзоры",
      "service_literature_desc": "Синтезируйте большой массив академической литературы в связные разделы обзора.",
      "service_dissertations_title": "Диссертации",
      "service_dissertations_desc": "Расширенная поддержка PhD-кандидатов: предложения по методологии и интерпретация анализа данных.",

      // PayWhatYouNeed
      "pay_only": "Платите только за то, что вам нужно",
      "transparent_pricing": "Прозрачное ценообразование за документ. Без ежемесячных платежей.",
      "category": "Категория",
      "all_documents": "Все документы",
      "researchers": "Для исследователей",
      "students": "Для студентов",
      "payment_methods": "МЕСТНЫЕ МЕТОДЫ ОПЛАТЫ",
      "create_document": "Создать документ",
      "per_doc": "за документ",
      "thesis": "Тезис",
      "thesis_desc": "Аннотация тезиса и полный текст для научных конференций.",
      "coursework": "Курсовая работа",
      "coursework_desc": "Форматирование всех частей курсового проекта или работы.",
      "abstract": "Реферат",
      "abstract_desc": "Аннотация тезиса и полный текст для научных конференций.",
      "dissertation": "Диссертация",
      "dissertation_desc": "Комплексная помощь в написании диссертаций докторов и магистра.",
      "article": "Научная статья",
      "article_desc": "Профессиональные научные исследовательские статьи для журналов.",

      // How It Works
      "how_it_works": "Как работает XALFA?",
      "three_steps": "От чистого листа до первого черновика за три простых шага",
      "step_login_title": "1. Безопасный вход",
      "step_login_desc": "Войдите безопасно через свой аккаунт Google для доступа к личному кабинету.",
      "step_choose_title": "2. Выберите тип",
      "step_choose_desc": "Выберите нужный тип документа и укажите краткую тему или подсказку.",
      "step_generate_title": "3. Создайте",
      "step_generate_desc": "ИИ составит ваш контент за секунды — проверьте и скачайте.",

      // Footer
      "footer_tagline": "Поддержка студентов и исследователей Центральной Азии с помощью AI-инструментов нового поколения.",
      "platform": "Платформа",
      "support": "Поддержка",
      "features": "Функции",
      "pricing": "Цены",
      "document_types": "Типы документов",
      "login": "Войти",
      "help_center": "Центр помощи",
      "terms_of_service": "Условия использования",
      "privacy_policy": "Политика конфиденциальности",
      "contact_us": "Свяжитесь с нами",
      "footer_copyright": "© {{year}} XALFA. Все права защищены.",
    }
  },
  ky: {
    translation: {
      // Header
      "sign_in": "Кирүү",
      // Hero
      "ai_for_academia": "АКАДЕМИЯ ҮЧҮН AI",
      "ai_powered": "AI менен иштеген",
      "academic": "Академиялык",
      "excellence": "Мыктылык",
      "hero_desc": "Борбордук Азиядагы изилдөөлөрүңүздү тездетиңиз. AI жардамы менен илимий тезистер, изилдөө макалалары жана академиялык презентацияларды бир нече мүнөттүн ичинде жаратыңыз.",
      "get_started": "Баштоо",
      // Trust
      "trusted_by": "БОРБОРДУК АЗИЯНЫН СТУДЕНТТЕРИ ЖАНА ИЗИЛДӨӨЧҮЛӨРҮ ИШЕНЕТ",
      // Write
      "write_title": "Жазуу үчүн керектүү баары",
      "write_subtitle": "Университетиңиздин муктаждыктарына ылайыкташтырылган академиялык жазуу кызматтарынын кеңири тандоосу.",
      "service_theses_title": "Тезистер",
      "service_theses_desc": "Бакалавр же магистрдик диссертацияңызды кеңири мазмун жана бөлүм долбоорлору менен структуралаңыз.",
      "service_papers_title": "Изилдөө макалалары",
      "service_papers_desc": "APA, MLA же Harvard шилтеме стилдерине ылайык жакшы шилтемеленген макалалар жаратыңыз.",
      "service_presentations_title": "Презентациялар",
      "service_presentations_desc": "Коргоо же семинарыңыз үчүн таасирлүү слайддар жана докладчы эскертмелерин жаратыңыз.",
      "service_coursework_title": "Курстук иш",
      "service_coursework_desc": "Күнүмдүк окуу үчүн эссе, кейс-изилдөө жана лабораториялык отчеттор менен жардам алыңыз.",
      "service_literature_title": "Адабий сереп",
      "service_literature_desc": "Академиялык адабияттарды ырааттуу сереп бөлүмдөрүнө синтездеңиз.",
      "service_dissertations_title": "Диссертациялар",
      "service_dissertations_desc": "PhD талапкерлери үчүн методология сунуштарын жана маалымат анализин чечмелөөнү камтыган колдоо.",
      // PayWhatYouNeed
      "pay_only": "Керектүүсүнө гана төлөңүз",
      "transparent_pricing": "Ачык-айкын документ башына баа. Айлык төлөмдөр жок.",
      "category": "Категория",
      "all_documents": "Бардык документтер",
      "researchers": "Изилдөөчүлөр үчүн",
      "students": "Студенттер үчүн",
      "payment_methods": "ЖЕРГИЛИКТҮҮ ТӨЛӨМ ЫКМАЛАРЫ",
      "create_document": "Документ түзүү",
      "per_doc": "документ үчүн",
      "thesis": "Тезис",
      "thesis_desc": "Илимий конференция үчүн тезис аннотациясы жана толук тексти.",
      "coursework": "Курстук иш",
      "coursework_desc": "Курстук долбоор же иштин бардык бөлүктөрүн форматтоо.",
      "abstract": "Реферат",
      "abstract_desc": "Илимий конференция үчүн тезис аннотациясы жана толук тексти.",
      "dissertation": "Диссертация",
      "dissertation_desc": "PhD же магистрдик диссертация үчүн комплекстүү жардам.",
      "article": "Илимий макала",
      "article_desc": "Журналдар үчүн профессионалдык илимий изилдөө макалалары.",
      // How It Works
      "how_it_works": "XALFA кантип иштейт?",
      "three_steps": "Бош барактан биринчи долбоорго үч жөнөкөй кадамда",
      "step_login_title": "1. Коопсуз кирүү",
      "step_login_desc": "Жеке панелиңизге кирүү үчүн Google каттоо эсебиңиз аркылуу коопсуз кириңиз.",
      "step_choose_title": "2. Түрүн тандаңыз",
      "step_choose_desc": "Керектүү документтин түрүн тандап, кыска тема же нускама жазыңыз.",
      "step_generate_title": "3. Жаратыңыз",
      "step_generate_desc": "AI бир нече секунданын ичинде мазмунуңузду жасайт — карап чыгыңыз жана жүктөңүз.",
      // Footer
      "footer_tagline": "Борбордук Азиянын студенттери жана изилдөөчүлөрүн кийинки муун AI куралдары менен күчтөндүрүү.",
      "platform": "Платформа",
      "support": "Колдоо",
      "features": "Мүмкүнчүлүктөр",
      "pricing": "Баалар",
      "document_types": "Документ түрлөрү",
      "login": "Кирүү",
      "help_center": "Жардам борбору",
      "terms_of_service": "Колдонуу шарттары",
      "privacy_policy": "Купуялык саясаты",
      "contact_us": "Биз менен байланышыңыз",
      "footer_copyright": "© {{year}} XALFA. Бардык укуктар корголгон.",
    }
  },
  kk: {
    translation: {
      // Header
      "sign_in": "Кіру",
      // Hero
      "ai_for_academia": "АКАДЕМИЯ ҮШІН AI",
      "ai_powered": "AI-мен жұмыс істейтін",
      "academic": "Академиялық",
      "excellence": "Шеберлік",
      "hero_desc": "Орталық Азиядағы зерттеулеріңізді жеделдетіңіз. AI көмегімен ғылыми тезистер, зерттеу мақалалары және академиялық презентацияларды бірнеше минутта жасаңыз.",
      "get_started": "Бастау",
      // Trust
      "trusted_by": "ОРТАЛЫҚ АЗИЯ СТУДЕНТТЕРІ МЕН ЗЕРТТЕУШІЛЕРІ СЕНЕДІ",
      // Write
      "write_title": "Жазу үшін қажеттінің бәрі",
      "write_subtitle": "Университетіңіздің қажеттіліктеріне бейімделген академиялық жазу қызметтерінің кең таңдауы.",
      "service_theses_title": "Тезистер",
      "service_theses_desc": "Бакалавр немесе магистрлік диссертацияңызды кешенді мазмұн мен тарау жобалары арқылы құрылымдаңыз.",
      "service_papers_title": "Зерттеу мақалалары",
      "service_papers_desc": "APA, MLA немесе Harvard сілтеме стильдеріне сәйкес жақсы дәйексөзделген мақалалар жасаңыз.",
      "service_presentations_title": "Презентациялар",
      "service_presentations_desc": "Қорғауыңыз немесе семинарыңыз үшін тартымды слайдтар мен баяндамашы жазбаларын жасаңыз.",
      "service_coursework_title": "Курстық жұмыс",
      "service_coursework_desc": "Күнделікті оқу үшін эссе, кейс-зерттеу және зертханалық есептермен көмек алыңыз.",
      "service_literature_title": "Әдебиет шолулары",
      "service_literature_desc": "Академиялық әдебиеттерді жүйелі шолу бөлімдеріне синтездеңіз.",
      "service_dissertations_title": "Диссертациялар",
      "service_dissertations_desc": "PhD үміткерлері үшін методология ұсыныстары мен деректер талдауын түсіндіруді қамтитын кеңейтілген қолдау.",
      // PayWhatYouNeed
      "pay_only": "Тек қажеттіге ғана төлеңіз",
      "transparent_pricing": "Ашық құжат басына баға. Ай сайынғы төлемдер жоқ.",
      "category": "Санат",
      "all_documents": "Барлық құжаттар",
      "researchers": "Зерттеушілер үшін",
      "students": "Студенттер үшін",
      "payment_methods": "ЖЕРГІЛІКТІ ТӨЛЕМ ӘДІСТЕРІ",
      "create_document": "Құжат жасау",
      "per_doc": "құжат үшін",
      "thesis": "Тезис",
      "thesis_desc": "Ғылыми конференция үшін тезис аннотациясы және толық мәтіні.",
      "coursework": "Курстық жұмыс",
      "coursework_desc": "Курстық жоба немесе жұмыстың барлық бөліктерін пішімдеу.",
      "abstract": "Реферат",
      "abstract_desc": "Ғылыми конференция үшін тезис аннотациясы және толық мәтіні.",
      "dissertation": "Диссертация",
      "dissertation_desc": "PhD немесе магистрлік диссертация үшін кешенді көмек.",
      "article": "Ғылыми мақала",
      "article_desc": "Журналдар үшін кәсіби ғылыми зерттеу мақалалары.",
      // How It Works
      "how_it_works": "XALFA қалай жұмыс істейді?",
      "three_steps": "Бос беттен бірінші жобаға үш қарапайым қадамда",
      "step_login_title": "1. Қауіпсіз кіру",
      "step_login_desc": "Жеке панеліңізге кіру үшін Google тіркелгіңіз арқылы қауіпсіз кіріңіз.",
      "step_choose_title": "2. Түрін таңдаңыз",
      "step_choose_desc": "Қажетті құжат түрін таңдап, қысқа тақырып немесе нұсқаулық енгізіңіз.",
      "step_generate_title": "3. Жасаңыз",
      "step_generate_desc": "AI бірнеше секундта мазмұныңызды жасайды — тексеріп жүктеңіз.",
      // Footer
      "footer_tagline": "Орталық Азия студенттері мен зерттеушілерін келесі буын AI құралдарымен қуаттандыру.",
      "platform": "Платформа",
      "support": "Қолдау",
      "features": "Мүмкіндіктер",
      "pricing": "Бағалар",
      "document_types": "Құжат түрлері",
      "login": "Кіру",
      "help_center": "Анықтама орталығы",
      "terms_of_service": "Қолдану шарттары",
      "privacy_policy": "Құпиялылық саясаты",
      "contact_us": "Бізбен байланысыңыз",
      "footer_copyright": "© {{year}} XALFA. Барлық құқықтар қорғалған.",
    }
  },
  kaa: {
    translation: {
      // Header
      "sign_in": "Kiriw",
      // Hero
      "ai_for_academia": "AKADEMİYA USHÍN AI",
      "ai_powered": "AI menen isleytuǵın",
      "academic": "Akademiyalıq",
      "excellence": "Kemállik",
      "hero_desc": "Orta Aziyada ilimiy izertlewlerinizdi tezlestiriń. AI járdeminde ilimiy tezisler, izertlew maqalalary hám akademiyalıq prezentatsiyalardı birneshe minutte jaratıń.",
      "get_started": "Baslaw",
      // Trust
      "trusted_by": "ORTA AZIYA STUDENTLERI HÁM IZERTLEWSHILERI ISENIW BİLDİREDİ",
      // Write
      "write_title": "Jazıw ushın kerekli hámmesi",
      "write_subtitle": "Universitetiñizdiń talablarına moslastırılǵan akademiyalıq jazıw xızmetleriniń keń tańlawı.",
      "service_theses_title": "Tezisler",
      "service_theses_desc": "Bakalavr yaki magistrlik dissertatsiyańızdı keng mazmun hám bólim jolbarlary menen dúziń.",
      "service_papers_title": "İzertlew maqalaları",
      "service_papers_desc": "APA, MLA yaki Harvard silteme stillerine muwapıq jaqsı siltemelengen maqalalar jaratıń.",
      "service_presentations_title": "Prezentatsiyalar",
      "service_presentations_desc": "Qorǵaw yaki seminarıńız ushın tásirli slaydlar hám báyánshi eskertpelerin jaratıń.",
      "service_coursework_title": "Kurs jumısı",
      "service_coursework_desc": "Kúndelikli oqıw ushın esse, keys-izertlew hám laboratoriyalıq esabatlar menen járdem alıń.",
      "service_literature_title": "Ádebiyat shólkemleri",
      "service_literature_desc": "Akademiyalıq ádebiyatlardı izbe-iz shólkem bólimlerine sintez etiń.",
      "service_dissertations_title": "Dissertatsiyalar",
      "service_dissertations_desc": "PhD dáwegerler ushın metodologiya usınısları hám maǵlıwmat talawın túsindiriwdi ózine alǵan qollaw.",
      // PayWhatYouNeed
      "pay_only": "Tek kerekligine tóleń",
      "transparent_pricing": "Ashıq hújjet basına baǵa. Aylıq tólemler joq.",
      "category": "Kategoriya",
      "all_documents": "Barlıq hújjetler",
      "researchers": "İzertlewshiler ushın",
      "students": "Studentler ushın",
      "payment_methods": "JERGILIKLI TÓLEM USILLARI",
      "create_document": "Hújjet jaratıw",
      "per_doc": "hújjet ushın",
      "thesis": "Tezis",
      "thesis_desc": "İlimiy konferentsiya ushın tezis annotatsiyası hám tolıq mátini.",
      "coursework": "Kurs jumısı",
      "coursework_desc": "Kurs jobası yaki jumısınıń barlıq bólimlerin formatlaw.",
      "abstract": "Referat",
      "abstract_desc": "İlimiy konferentsiya ushın tezis annotatsiyası hám tolıq mátini.",
      "dissertation": "Dissertatsiya",
      "dissertation_desc": "PhD yaki magistrlik dissertatsiya ushın kompleksli járdem.",
      "article": "İlimiy maqala",
      "article_desc": "Jurnallar ushın kásibiy ilimiy izertlew maqalaları.",
      // How It Works
      "how_it_works": "XALFA qanday isleydi?",
      "three_steps": "Bos betden birinshi jobǵa úsh ańsat qadamda",
      "step_login_title": "1. Qáwipsiz kiriw",
      "step_login_desc": "Shaxsiy paneligizge kiriw ushın Google esabıńız arqalı qáwipsiz kiriń.",
      "step_choose_title": "2. Túrin tańlań",
      "step_choose_desc": "Kerekli hújjet túrin tańlap, qısqa tema yaki kórsetpe kiriting.",
      "step_generate_title": "3. Jaratıń",
      "step_generate_desc": "AI birneshe sekund ishinde mazmunıńızdı jaratadı — qarap shıǵıń hám júklep alıń.",
      // Footer
      "footer_tagline": "Orta Aziya studentleri hám izertlewshilerin kelesi ásir AI quralları menen kúsheytiwge járdem beriwi.",
      "platform": "Platforma",
      "support": "Járdem",
      "features": "Múmkinshilikler",
      "pricing": "Baǵalar",
      "document_types": "Hújjet túrleri",
      "login": "Kiriw",
      "help_center": "Járdem orayı",
      "terms_of_service": "Paydalanıw shártleri",
      "privacy_policy": "Maxpiylik siyasatı",
      "contact_us": "Biz menen baylanısıń",
      "footer_copyright": "© {{year}} XALFA. Barlıq huqıqlar qorǵalǵan.",
    }
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz',
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
