export type Project = {
  slug: string;
  title: string;
  year: string;
  imageSrc: string;
  imageAlt: string;
  /** Опциональный короткий луп для ховера (только десктоп). */
  hoverVideoSrc?: string;
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
    imageSrc: "/Screenshot 2026-07-07 at 17.38.57.png",
    imageAlt: "",
    hoverVideoSrc: "/0708.mp4",
    contractor: "Яндекс Музыка",
    budget: "3,5 млн ₽",
    shootingType: "Запись и монтаж лайв-выступления",
    description:
      "Многокамерная запись живого выступления для Яндекс Музыки: съёмка концерта в реальном времени, синхронизация звука и последующий монтаж под релиз на стриминговых площадках.",
    deliverables: [
      "Многокамерная съёмка",
      "Многокамерный монтаж с  согласованными заказчиком акцентами",
      "Профессиональная  цветокоррекция",
    ],
  },
  {
    slug: "kulturny-marafon-2025",
    title: "Культурный Марафон 2025",
    year: "2025",
    imageSrc: "/2026-07-09_01-18-05.png",
    imageAlt: "",
    hoverVideoSrc: "/culture-marathon.mp4",
    contractor: "Минкульт РФ × Яндекс Книги",
    budget: "7 млн ₽",
    shootingType: "Постановочные съёмки",
    description:
      "Съемки в рамках проекта «Культурный Марафон» по инициативе Министерства Культуры РФ и Яндекс Книг.",
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
    hoverVideoSrc: "/bookmate.mp4",
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
    slug: "nasledie-korolya-i-shuta",
    title: "Документальный фильм «Наследие Короля и Шута»",
    year: "",
    imageSrc: "/2026-07-08_04-40-59.png",
    imageAlt: "",
    hoverVideoSrc: "/kingandjester.mp4",
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
    slug: "avito-puteshestviya-conference",
    title: "Онлайн-конференция Авито Путешествия",
    year: "",
    imageSrc: "/2026-07-09_00-35-00.png",
    imageAlt: "",
    hoverVideoSrc: "/avitotravel.mp4",
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
