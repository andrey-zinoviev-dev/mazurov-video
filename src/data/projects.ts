export type Project = {
  slug: string;
  title: string;
  year: string;
  /** Пустая строка — обложка ещё не загружена (плейсхолдер в UI). */
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

/** Порядок проектов на главной (остальные — на /projects/). */
export const HOME_PROJECT_SLUGS = [
  "te-kto-pishut-hity",
  "8-bit",
  "yandex-uchebnik-teachers-conference-2026",
  "reklama-yandex-uchebnik",
  "yam-session-2024",
  "kulturny-marafon-2025",
  "reklama-bookmate",
  "nasledie-korolya-i-shuta",
  "avito-puteshestviya-conference",
  "neil-shery",
] as const;

const PROJECTS: Project[] = [
  {
    slug: "te-kto-pishut-hity",
    title: "Те, кто пишут хиты",
    year: "",
    imageSrc: "/MPreviews/te-kto-pishut-hity/cover.jpg",
    imageAlt: "",
    hoverVideoSrc: "/MPreviews/te-kto-pishut-hity/preview.mp4",
    contractor: "Яндекс Музыка",
    budget: "",
    shootingType: "Документальный фильм",
    description:
      "Документальный фильм для Яндекс Музыки про российских саунд-продюсеров.",
    deliverables: [
      "Съёмка интервью",
      "Документальный монтаж",
      "Цветокоррекция и сведение звука",
    ],
  },
  {
    slug: "8-bit",
    title: "8 БИТ",
    year: "",
    imageSrc: "/MPreviews/8-bit/cover.jpg",
    imageAlt: "",
    hoverVideoSrc: "/MPreviews/8-bit/preview.mp4",
    contractor: "ЯОбразование",
    budget: "",
    shootingType: "Документальный фильм",
    description:
      "Серия документальных фильмов для ЯОбразования про современные технологии.",
    deliverables: [
      "Серия документальных фильмов",
      "Съёмка и монтаж",
      "Пост-продакшн полного цикла",
    ],
  },
  {
    slug: "yandex-uchebnik-teachers-conference-2026",
    title: "Конференция Яндекс Учебника для учителей информатики 2026",
    year: "2026",
    imageSrc: "/MPreviews/yandex-uchebnik-teachers-conference-2026/cover.jpg",
    imageAlt: "",
    hoverVideoSrc:
      "/MPreviews/yandex-uchebnik-teachers-conference-2026/preview.mp4",
    contractor: "Яндекс Учебник",
    budget: "",
    shootingType: "Прямая трансляция",
    description:
      "Прямая многокамерная трансляция конференции Яндекс Учебника для учителей информатики со световой застройкой от нашей команды.",
    deliverables: [
      "Многокамерная прямая трансляция",
      "Световая застройка",
      "Запись и обработка эфира",
    ],
  },
  {
    slug: "reklama-yandex-uchebnik",
    title: "Реклама ЯУчебник",
    year: "",
    imageSrc: "/MPreviews/reklama-yandex-uchebnik/cover.jpg",
    imageAlt: "",
    hoverVideoSrc: "/MPreviews/reklama-yandex-uchebnik/preview.mp4",
    contractor: "Яндекс Учебник",
    budget: "",
    shootingType: "Постановочные съёмки",
    description:
      "9 рекламных роликов про сервис для подготовки к ЕГЭ.",
    deliverables: [
      "Постановочные съёмки",
      "Серия рекламных роликов",
      "Адаптации под разные площадки",
    ],
  },
  {
    slug: "yam-session-2024",
    title: "YAM Session 2024",
    year: "2024",
    imageSrc: "/MPreviews/YAM/yam.01_03_56_24.Still002.jpg",
    imageAlt: "",
    hoverVideoSrc: "/MPreviews/YAM/yam_Sub_01-opt.mp4",
    contractor: "Яндекс Музыка",
    budget: "3,5 млн ₽",
    shootingType: "Запись и монтаж лайв-выступления",
    description:
      "Многокамерная запись живого выступления для Яндекс Музыки: съёмка концерта в реальном времени, синхронизация звука и последующий монтаж под релиз на стриминговых площадках.",
    deliverables: [
      "Многокамерная съёмка",
      "Многокамерный монтаж с согласованными заказчиком акцентами",
      "Профессиональная цветокоррекция",
    ],
  },
  {
    slug: "kulturny-marafon-2025",
    title: "Культурный Марафон 2025",
    year: "2025",
    imageSrc: "/MPreviews/KULTUR/videoframe_160744.01_31_33_11.Still003.jpg",
    imageAlt: "",
    hoverVideoSrc: "/MPreviews/KULTUR/videoframe_160744_Sub_01-opt.mp4",
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
    imageSrc: "/MPreviews/bookmate/Lundmoen CCv01 CGv02.00_03_22_05.Still003.jpg",
    imageAlt: "",
    hoverVideoSrc: "/MPreviews/bookmate/bookmate-opt.mp4",
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
    title: "Наследие Короля и Шута",
    year: "",
    imageSrc: "/MPreviews/kish/kish.00_28_59_01.Still002.jpg",
    imageAlt: "",
    hoverVideoSrc: "/MPreviews/kish/kish_Sub_01-opt.mp4",
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
    imageSrc: "/MPreviews/avito/yam.01_33_38_00.Still002.jpg",
    imageAlt: "",
    hoverVideoSrc: "/MPreviews/avito/avito-preview-opt.mp4",
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
  {
    slug: "neil-shery",
    title: "Нэил Шери - Пускай",
    year: "",
    imageSrc: "/MPreviews/nail shary/neil shery.00_00_59_09.Still003.jpg",
    imageAlt: "",
    hoverVideoSrc: "/MPreviews/nail shary/neil shery_Sub_01-opt.mp4",
    contractor: "Нэил Шери",
    budget: "1,5 млн ₽",
    shootingType: "Видеоклип",
    description:
      "Клип для Нэйил Шери: постановочные съёмки, работа с актёрами и художественный монтаж.",
    deliverables: [
      "Постановочные съёмки",
      "Работа с актёрами",
      "Художественный монтаж",
    ],
  },
  {
    slug: "nastezh",
    title: "Настежь",
    year: "",
    imageSrc: "/MPreviews/nastezh/nastezh.00_00_34_11.Still002.jpg",
    imageAlt: "",
    hoverVideoSrc: "/MPreviews/nastezh/nastezh_Sub_01-opt.mp4",
    contractor: "Настежь",
    budget: "1,5 млн ₽",
    shootingType: "Видеоклип",
    description:
      "Клип для Настежь: постановочные съёмки, работа с актёрами и художественный монтаж.",
    deliverables: [
      "Постановочные съёмки",
      "Работа с актёрами",
      "Художественный монтаж",
    ],
  },
  {
    slug: "gorodskie-geroi-avtonomnye-dostavshchiki",
    title: "Городские герои: секреты автономных доставщиков",
    year: "",
    imageSrc: "",
    imageAlt: "",
    contractor: "",
    budget: "",
    shootingType: "Прямая трансляция",
    description:
      "Прямая многокамерная трансляция со световой застройкой, разработанной под креативную застройку локации.",
    deliverables: [
      "Многокамерная прямая трансляция",
      "Световая застройка под локацию",
      "Запись и обработка эфира",
    ],
  },
  {
    slug: "plenarnoe-zasedanie-it-yazyki-narodov-rossii",
    title:
      "Пленарное заседание III стратегической сессии «Информационные технологии и языки народов России»",
    year: "",
    imageSrc: "",
    imageAlt: "",
    contractor: "",
    budget: "",
    shootingType: "Прямая трансляция",
    description:
      "Прямая многокамерная трансляция со световой застройкой от нашей команды.",
    deliverables: [
      "Многокамерная прямая трансляция",
      "Световая застройка",
      "Запись и обработка эфира",
    ],
  },
  {
    slug: "yace-2025",
    title: "YAC/E 2025",
    year: "2025",
    imageSrc: "",
    imageAlt: "",
    contractor: "Яндекс",
    budget: "",
    shootingType: "Прямая трансляция",
    description:
      "Трансляция в рамках онлайн-конференции для учителей YAC/E 2025.",
    deliverables: [
      "Прямая трансляция",
      "Режиссура эфира",
      "Запись и обработка",
    ],
  },
  {
    slug: "plus-dacha",
    title: "Плюс Дача",
    year: "",
    imageSrc: "/MPreviews/plus-dacha/cover.jpg",
    imageAlt: "",
    hoverVideoSrc: "/MPreviews/plus-dacha/preview.mp4",
    contractor: "",
    budget: "",
    shootingType: "Запись и монтаж лайв-выступления",
    description: "Многокамерная съёмка и монтаж концертного / шоу-формата.",
    deliverables: [
      "Многокамерная съёмка",
      "Монтаж лайв-выступления",
      "Пост-продакшн",
    ],
  },
  {
    slug: "vizitka-avito-nedvizhimost-cd",
    title:
      "Визитка коммерческого директора жилой и загородной недвижимости «Авито Недвижимость»",
    year: "",
    imageSrc: "",
    imageAlt: "",
    contractor: "Авито Недвижимость",
    budget: "",
    shootingType: "Бренд-видео",
    description:
      "Съёмка и монтаж ролика для представления кандидата в номинации.",
    deliverables: [
      "Съёмка и монтаж",
      "Цветокоррекция и графика",
      "Сведение звука",
    ],
  },
  {
    slug: "motion-avito-nedvizhimost-opener",
    title: "Открывающий моушн-ролик для конференции Авито Недвижимости",
    year: "",
    imageSrc: "",
    imageAlt: "",
    contractor: "Авито Недвижимость",
    budget: "",
    shootingType: "Motion Design",
    description:
      "По референсам заказчика предложены творческие решения, сценарные переходы и выполнен последующий монтаж.",
    deliverables: [
      "Концепция и анимация",
      "Сценарные переходы",
      "Финальный моушн-ролик",
    ],
  },
  {
    slug: "yandex-internal-info-video",
    title: "Информационный ролик для внутреннего использования компании Яндекс",
    year: "",
    imageSrc: "",
    imageAlt: "",
    contractor: "Яндекс",
    budget: "",
    shootingType: "Motion Design",
    description:
      "Информационный ролик для внутреннего использования компании Яндекс.",
    deliverables: [
      "Motion Design",
      "Монтаж",
      "Финальная сборка ролика",
    ],
  },
  {
    slug: "lekciya-mobilnaya-razrabotka",
    title: "Лекция по мобильной разработке",
    year: "",
    imageSrc: "/MPreviews/lekciya-mobilnaya-razrabotka/cover.jpg",
    imageAlt: "",
    hoverVideoSrc: "/MPreviews/lekciya-mobilnaya-razrabotka/preview.mp4",
    contractor: "",
    budget: "",
    shootingType: "Съёмка лекции",
    description:
      "Типовая трансляция лекции из конференц-зала с несколькими камерами и захватом презентации спикера.",
    deliverables: [
      "Многокамерная съёмка",
      "Захват презентации",
      "Монтаж записи",
    ],
  },
  {
    slug: "mk-prepodavateli-informatiki",
    title: "МК для преподавателей информатики",
    year: "",
    imageSrc: "",
    imageAlt: "",
    contractor: "",
    budget: "",
    shootingType: "Съёмка мастер-класса",
    description:
      "Типовая трансляция лекции из переговорной с одной камерой, светом и подготовкой оборудования для презентации или лайв-кодинга.",
    deliverables: [
      "Съёмка с одной камерой",
      "Свет и подготовка оборудования",
      "Монтаж записи",
    ],
  },
  {
    slug: "lekcii-dlya-shkolnikov",
    title: "Лекции для школьников",
    year: "",
    imageSrc: "/MPreviews/lekcii-dlya-shkolnikov/cover.jpg",
    imageAlt: "",
    hoverVideoSrc: "/MPreviews/lekcii-dlya-shkolnikov/preview.mp4",
    contractor: "",
    budget: "",
    shootingType: "Съёмка лекции",
    description: "Запись лекции для школьников.",
    deliverables: ["Съёмка лекции", "Монтаж записи"],
  },
  {
    slug: "webinars-avito-nedvizhimost",
    title: "Вебинары для Авито Недвижимости",
    year: "",
    imageSrc: "/MPreviews/webinars-avito-nedvizhimost/cover.jpg",
    imageAlt: "",
    hoverVideoSrc: "/MPreviews/webinars-avito-nedvizhimost/preview.mp4",
    contractor: "Авито Недвижимость",
    budget: "",
    shootingType: "Вебинар",
    description:
      "Типовой онлайн-вебинар: подключение удалённых спикеров, сбор программы с графикой на нашей стороне и выпуск в эфир.",
    deliverables: [
      "Подключение удалённых спикеров",
      "Эфирная графика",
      "Запись и обработка",
    ],
  },
  {
    slug: "webinar-garantiya-dohoda-45-dney",
    title: "Вебинар «Гарантия дохода за 45 дней»",
    year: "",
    imageSrc: "/MPreviews/webinar-garantiya-dohoda-45-dney/cover.jpg",
    imageAlt: "",
    hoverVideoSrc: "/MPreviews/webinar-garantiya-dohoda-45-dney/preview.mp4",
    contractor: "",
    budget: "",
    shootingType: "Вебинар",
    description:
      "Типовой онлайн-вебинар: подключение удалённых спикеров, сбор программы с графикой на нашей стороне и выпуск в эфир.",
    deliverables: [
      "Подключение удалённых спикеров",
      "Эфирная графика",
      "Запись и обработка",
    ],
  },
  {
    slug: "otchet-mitap-vremya",
    title: "Отчетный ролик митапа «Время»",
    year: "",
    imageSrc: "",
    imageAlt: "",
    contractor: "",
    budget: "",
    shootingType: "Отчётный ролик",
    description: "Отчётный ролик с митапа «Время».",
    deliverables: ["Съёмка мероприятия", "Монтаж отчётного ролика"],
  },
  {
    slug: "otchet-shad-2026",
    title: "Отчетный ролик встречи преподавателей ШАД 2026",
    year: "2026",
    imageSrc: "",
    imageAlt: "",
    contractor: "ШАД",
    budget: "",
    shootingType: "Отчётный ролик",
    description: "Отчётный ролик встречи преподавателей ШАД 2026.",
    deliverables: ["Съёмка мероприятия", "Монтаж отчётного ролика"],
  },
  {
    slug: "otchet-delo-v-reklame",
    title: "Отчетный ролик с конференции «Дело в рекламе»",
    year: "",
    imageSrc: "",
    imageAlt: "",
    contractor: "",
    budget: "",
    shootingType: "Отчётный ролик",
    description: "Отчётный ролик с конференции «Дело в рекламе».",
    deliverables: ["Съёмка мероприятия", "Монтаж отчётного ролика"],
  },
  {
    slug: "otchet-yandex-museum",
    title: "Отчетный ролик с фестиваля Яндекс музея",
    year: "",
    imageSrc: "",
    imageAlt: "",
    contractor: "Яндекс",
    budget: "",
    shootingType: "Отчётный ролик",
    description: "Отчётный ролик с фестиваля Яндекс музея.",
    deliverables: ["Съёмка мероприятия", "Монтаж отчётного ролика"],
  },
  {
    slug: "otchet-yam-premiya",
    title: "Отчетный ролик с музыкальной премии ЯМузыки",
    year: "",
    imageSrc: "",
    imageAlt: "",
    contractor: "Яндекс Музыка",
    budget: "",
    shootingType: "Отчётный ролик",
    description: "Отчётный ролик с музыкальной премии ЯМузыки.",
    deliverables: ["Съёмка мероприятия", "Монтаж отчётного ролика"],
  },
];

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

/** Уникальные типы съёмки в порядке первого появления. */
export function getProjectShootingTypes(
  projects: Project[] = PROJECTS,
): string[] {
  const seen = new Set<string>();
  const types: string[] = [];

  for (const project of projects) {
    if (!project.shootingType || seen.has(project.shootingType)) continue;
    seen.add(project.shootingType);
    types.push(project.shootingType);
  }

  return types;
}

/** Проекты для блока на главной — в порядке HOME_PROJECT_SLUGS. */
export function getHomeProjects(): Project[] {
  return HOME_PROJECT_SLUGS.map((slug) => getProjectBySlug(slug)).filter(
    (project): project is Project => project !== undefined,
  );
}
