export type Project = {
  slug: string;
  title: string;
  year: string;
  imageSrc: string;
  imageAlt: string;
  contractor: string;
  budget: string;
  shootingType: string;
  /** Короткое описание для страницы проекта. */
  description: string;
  /** Что было сделано в рамках проекта. */
  deliverables: string[];
};

const PROJECTS: Project[] = [
  {
    slug: "yam-session-2024",
    title: "YAM Session 2024",
    year: "2024",
    imageSrc: "https://picsum.photos/seed/videoprod-p1/1600/900",
    imageAlt: "",
    contractor: "Яндекс Музыка",
    budget: "3,5 млн ₽",
    shootingType: "Запись и монтаж лайв-выступления",
    description:
      "Многокамерная запись живого выступления для Яндекс Музыки: съёмка концерта в реальном времени, синхронизация звука и последующий монтаж под релиз на стриминговых площадках.",
    deliverables: [
      "Многокамерная съёмка выступления",
      "Сведение и синхронизация звука",
      "Монтаж и цветокоррекция релизной версии",
    ],
  },
  {
    slug: "kulturny-marafon-2025",
    title: "Культурный Марафон 2025",
    year: "2025",
    imageSrc: "/2026-07-08_04-46-55.png",
    imageAlt: "",
    contractor: "Минкульт РФ × Яндекс Книги",
    budget: "7 млн ₽",
    shootingType: "Постановочные съёмки",
    description:
      "Постановочный проект для совместной инициативы Минкульта РФ и Яндекс Книг. Разработка сценария, подбор локаций и продакшн полного цикла для просветительской кампании.",
    deliverables: [
      "Разработка сценария и раскадровки",
      "Продакшн полного цикла",
      "Серия роликов для digital-размещения",
    ],
  },
  {
    slug: "reklama-bookmate",
    title: "Реклама Букмейт",
    year: "",
    imageSrc: "/2026-07-08_04-28-40.png",
    imageAlt: "",
    contractor: "Яндекс Книги",
    budget: "2,5 млн ₽",
    shootingType: "Постановочные съёмки",
    description:
      "Рекламный ролик для сервиса Букмейт: постановочные съёмки, работа с актёрами и художественный монтаж под имидж-кампанию сервиса.",
    deliverables: [
      "Кастинг и постановочные съёмки",
      "Художественный монтаж",
      "Адаптации под разные площадки",
    ],
  },
  {
    slug: "reklama-yandex-uchebnik",
    title: "Реклама Яндекс Учебника",
    year: "",
    imageSrc: "https://picsum.photos/seed/videoprod-p1/1600/900",
    imageAlt: "",
    contractor: "Яндекс Образование",
    budget: "6,5 млн ₽",
    shootingType: "Постановочные съёмки",
    description:
      "Имиджевая рекламная кампания для Яндекс Учебника. Постановочные съёмки в нескольких локациях и производство серии роликов для образовательной аудитории.",
    deliverables: [
      "Съёмки в нескольких локациях",
      "Серия рекламных роликов",
      "Цветокоррекция и графика",
    ],
  },
  {
    slug: "nasledie-korolya-i-shuta",
    title: "Документальный фильм «Наследие Короля и Шута»",
    year: "",
    imageSrc: "/2026-07-08_04-40-59.png",
    imageAlt: "",
    contractor: "Кинопоиск",
    budget: "1,5 млн ₽",
    shootingType: "Документальный фильм",
    description:
      "Документальный проект для Кинопоиска: съёмка интервью, работа с архивными материалами и монтаж полнометражной документальной истории.",
    deliverables: [
      "Съёмка интервью",
      "Работа с архивными материалами",
      "Монтаж полнометражной версии",
    ],
  },
  {
    slug: "live-koncerty-plyus-dacha",
    title: "Лайв-концерты артистов на Плюс Даче",
    year: "",
    imageSrc: "https://picsum.photos/seed/videoprod-p3/1600/900",
    imageAlt: "",
    contractor: "Яндекс",
    budget: "2,5 млн ₽",
    shootingType: "Лайв-съёмки",
    description:
      "Серия лайв-концертов на Плюс Даче: многокамерная съёмка выступлений разных артистов и оперативный монтаж контента для публикации.",
    deliverables: [
      "Многокамерная лайв-съёмка",
      "Запись и сведение звука",
      "Оперативный монтаж контента",
    ],
  },
  {
    slug: "avito-puteshestviya-conference",
    title: "Онлайн-конференция Авито Путешествия",
    year: "",
    imageSrc: "https://picsum.photos/seed/videoprod-p1/1600/900",
    imageAlt: "",
    contractor: "Авито",
    budget: "1,5 млн ₽",
    shootingType: "Прямая трансляция",
    description:
      "Организация и техническое сопровождение прямой трансляции онлайн-конференции Авито Путешествия: режиссура эфира, микширование сигнала и вывод потока на площадки.",
    deliverables: [
      "Режиссура прямого эфира",
      "Микширование видео и звука",
      "Вывод трансляции на площадки",
    ],
  },
];

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
