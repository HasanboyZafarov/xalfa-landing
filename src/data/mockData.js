import { File, Book, BookOpenText, ScrollText, Presentation, Paperclip } from "lucide-react";

const fakeCards = [
  {
    id: 1,
    titleKey: "thesis",
    title: "Tezis",
    descKey: "thesis_desc",
    desc: "Ilmiy konferensiya uchun tezis annotatsiyasi va toliq matni.",
    badge: "DOCX",
    iconName: "File",
    category: "all"
  },
  {
    id: 2,
    titleKey: "coursework",
    title: "Kurs ishi",
    descKey: "coursework_desc",
    desc: "Kurs loyihasi yoki ishining barcha qismlarini shakllantirish.",
    badge: "DOCX",
    iconName: "Book",
    category: "students"
  },
  {
    id: 3,
    titleKey: "abstract",
    title: "Referat",
    descKey: "abstract_desc",
    desc: "Ilmiy konferensiya uchun tezis annotatsiyasi va toliq matni.",
    badge: "DOCX",
    price: "15,000 UZS",
    iconName: "BookOpenText",
    category: "all"
  },
  {
    id: 4,
    titleKey: "dissertation",
    title: "Dissertatsiya",
    descKey: "dissertation_desc",
    desc: "PhD yoki magistrlik dissertatsiyasi uchun kompleks yordam.",
    badge: "DOCX",
    iconName: "Presentation",
    category: "researchers"
  },
  {
    id: 5,
    titleKey: "article",
    title: "Ilmiy maqola",
    descKey: "article_desc",
    desc: "Jurnallar uchun professional ilmiy tadqiqot maqolasi.",
    badge: "DOCX",
    iconName: "ScrollText",
    category: "researchers"
  },
];

const iconMap = {
  File,
  Book,
  BookOpenText,
  ScrollText,
  Presentation,
  Paperclip
};

export { fakeCards as default, iconMap };

export const academicServices = [
  {
    id: 1,
    titleKey: "service_theses_title",
    descKey: "service_theses_desc",
    iconName: "File",
  },
  {
    id: 2,
    titleKey: "service_papers_title",
    descKey: "service_papers_desc",
    iconName: "Book",
  },
  {
    id: 3,
    titleKey: "service_presentations_title",
    descKey: "service_presentations_desc",
    iconName: "Presentation",
  },
  {
    id: 4,
    titleKey: "service_coursework_title",
    descKey: "service_coursework_desc",
    iconName: "ScrollText",
  },
  {
    id: 5,
    titleKey: "service_literature_title",
    descKey: "service_literature_desc",
    iconName: "Paperclip",
  },
  {
    id: 6,
    titleKey: "service_dissertations_title",
    descKey: "service_dissertations_desc",
    iconName: "BookOpenText",
  },
];
