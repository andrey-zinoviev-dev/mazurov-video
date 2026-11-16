import type { Metadata } from "next";

import {
  Accordion,
  AccordionLabeledList,
} from "@/components/Accordion/Accordion";
import { Container } from "@/components/Container/Container";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { Matrix, MatrixKey } from "@/components/Matrix/Matrix";
import { MetaText } from "@/components/MetaText/MetaText";
import { ProjectCover } from "@/components/Projects/ProjectCover";
import { ServiceHero } from "@/components/ServiceHero/ServiceHero";
import { Headline } from "@/components/Typography/Headline";
import { getProjectBySlug } from "@/data/projects";
import { serviceJsonLd } from "@/lib/jsonld/builders";
import styles from "./page.module.css";

const SERVICE_NAME = "Многокамерная съемка фестивалей, концертов и шоу";
const SERVICE_DESCRIPTION =
  "У события остаётся запись для полноценного релиза — с чистым звуком и энергией живого выступления для зрителей вне площадки.";
const SERVICE_PATH = "/services/shows/";

export const metadata: Metadata = {
  title:
    "Многокамерная съемка концертов, фестивалей и шоу | B2B Продакшн Москва",
  description:
    "Профессиональная съемка живых выступлений. Запись чистого многоканального звука, резервирование видеопотоков и поэтапный регламент согласования монтажа.",
  alternates: {
    canonical: SERVICE_PATH,
  },
  openGraph: {
    title:
      "Многокамерная съемка концертов, фестивалей и шоу | B2B Продакшн Москва",
    description:
      "Профессиональная съемка живых выступлений. Запись чистого многоканального звука, резервирование видеопотоков и поэтапный регламент согласования монтажа.",
    url: SERVICE_PATH,
    type: "website",
  },
};

const B2B_GUARANTEES = [
  {
    title: "Съёмка по программе",
    description: "Ракурсы и расстановку камер согласуем по трек-листу.",
  },
  {
    title: "Запись видео и звука",
    description:
      "Пишем камеры и общий монтаж, отдельно — звук пульта и зала.",
  },
  {
    title: "Порядок приёмки",
    description: "Утверждаем монтаж, затем переходим к цвету и звуку.",
  },
] as const;

const RISK_MATRIX = [
  {
    pain: "Плохой звук на записи: «глухой» гул зала или, наоборот, «сухие» инструменты с пульта без эмоций публики.",
    solution:
      "Забираем чистый исходный аудио- и видеоряд на площадке, а затем дорабатываем и сводим проект до финального стандарта на этапе пост-продакшна."
      // "Сведение звука с двух источников. Записываем чистый многоканальный звук прямо с FOH-пульта и параллельно ставим микрофоны в зале (Ambience Mics) для создания объемного живого звучания.",
  },
  {
    pain: "Брак картинки: мерцание LED-экранов на заднике, «мыльное» изображение или рассинхрон звука и картинки.",
    solution:
      "Техническая настройка до шоу. Предсъемочная калибровка камер под световой партер площадки и единая аппаратная синхронизация оборудования (Timecode).",
  },
  {
    pain: "Утеря ключевого момента: сбой техники или карты памяти на уникальном фрагменте шоу, который невозможно переснять.",
    solution:
      "Двойной контур записи (ISO + Master). Каждая камера пишет видео на локальную карту памяти и одновременно передает сигнал на центральный видеосервер ПТС.",
  },
  {
    pain: "Бесконечный монтаж на месяцы: хаотичные правки от артиста и менеджмента, которые затягивают процесс и срывают релизы.",
    solution:
      "Регламент Picture Lock. Поэтапное утверждение: сначала жестко фиксируется видеоряд (черновой монтаж), и только потом подключается цветокоррекция и сведение звука.",
  },
] as const;

const FORMAT_MATRIX = [
  {
    format: "Официальный фильм-концерт",
    specs:
      "Полная видеоверсия выступления в максимальном разрешении с готовым объёмным звуком.",
    purpose:
      "Релиз на стриминговых платформах, ТВ, в онлайн-кинотеатрах или продажа медиаправ.",
  },
  {
    format: "Промо-ролики для анонсов (16:9 / 9:16)",
    specs:
      "Короткие видео, смонтированные строго из уже согласованных кадров концерта.",
    purpose:
      "Промо-кампании будущих туров, анонсы в соцсетях, материалы для СМИ.",
  },
  {
    format: "Исходные аудиодорожки (Мультитрек)",
    specs:
      "Полный архив раздельной записи каждого инструмента, вокала и микрофонов зала.",
    purpose:
      "Передача звукорежиссеру артиста или лейблу для студийной переработки или издания LIVE-альбома.",
  },
] as const;

const PORTFOLIO_CASES = [
  {
    slug: "yam-session-2024",
    title: "YAM Session 2024",
    scale: "Яндекс Музыка",
    task: "Многокамерная запись живого выступления артистов с 5 произведениями для Яндекс Музыки",
    formats: null,
  },
  {
    slug: "plus-dacha",
    title: "Плюс Дача",
    scale: null,
    task: null,
    formats: null,
  },
] as const;

const COMPLIANCE_SECTIONS = [
  {
    title: "Предсъемочная подготовка (Pre-Production)",
    items: [
      {
        label: "Интеграция со службами площадки",
        text: "Согласование схем размещения операторов, прокладки трасс коммутации и нагрузок на сети с инженерной службой и организаторами.",
      },
      {
        label: "Настройка под свет и звук",
        text: "Предсъемочная калибровка камер под частоту работы светодиодных экранов и подготовка многоканального забора звука с микшерного пульта.",
      },
      {
        label: "План и тайминг съемки",
        text: "Составление детальной раскадровки по трек-листу артиста для фиксации всех ключевых моментов шоу.",
      },
    ],
  },
  {
    title: "Контроль надежности на площадке (Production)",
    items: [
      {
        label: "Резервная запись (ISO + Master)",
        text: "Параллельная фиксация видеосигнала внутри камер и на центральный видеосервер. Защищает проект от утери материала при сбое отдельных карт памяти.",
      },
      {
        label: "Синхронизация по временному коду (Timecode)",
        text: "Единый таймкод для всех камер и аудиорекордеров, исключающий рассинхрон картинки и звука при многокамерном монтаже.",
      },
      {
        label: "Сохранность исходных данных (DIT-протокол)",
        text: "Резервное копирование отснятого материала прямо на площадке с побитовой проверкой целостности файлов.",
      },
    ],
  },
  {
    title: "Пост-продакшн и Звук (Post-Production)",
    items: [
      {
        label: "Сведение чистового звука",
        text: "Объединение сухих дорожек с пульта и микрофонов зала для передачи атмосферы концерта в соответствии с нормативными стандартами громкости.",
      },
      {
        label: "Поэтапное утверждение",
        text: "Четкая приемка работы через специализированные сервисы с покадровыми комментариями по таймкоду.",
      },
    ],
  },
  {
    title: "Юридическая очистка и ЭДО (Legal Compliance)",
    items: [
      {
        label: "Передача прав",
        text: "Оформление соглашений с концертной площадкой (Venue Release), артистами, музыкантами и съемочной группой.",
      },
      {
        label: "B2B-документооборот",
        text: "Передача исключительных прав на коммерческое использование видеоматериалов, работа по ЭДО (НДС / УСН), полный комплект актов.",
      },
    ],
  },
] as const;

export default function KontsertyPage() {
  return (
    <div className={styles.page}>
      <JsonLd
        nodes={serviceJsonLd({
          path: SERVICE_PATH,
          name: SERVICE_NAME,
          description: SERVICE_DESCRIPTION,
          breadcrumbLabel: "Концерты",
        })}
      />
      <ServiceHero
        meta="[ SERVICES / КОНЦЕРТЫ ]"
        title={SERVICE_NAME}
        titleId="shows-hero-heading"
        description={SERVICE_DESCRIPTION}
        ctaLabel="Заказать съемку шоу"
        service="shows"
        guarantees={B2B_GUARANTEES}
      />

      {/* Блок 2: Кейсы */}
      <section
        className={styles.section}
        aria-labelledby="shows-portfolio-heading"
      >
        <Container>
          <MetaText text="[ PORTFOLIO / LIVE ]" className={styles.meta} />
          <Headline id="shows-portfolio-heading" className={styles.h2}>
            Концертные съемки и живые шоу
          </Headline>

          <ul className={styles.portfolioGrid}>
            {PORTFOLIO_CASES.map((item) => {
              const project = getProjectBySlug(item.slug);
              if (!project) return null;

              return (
                <li key={item.slug} className={styles.caseCard}>
                  <ProjectCover project={project} />
                  <div className={styles.caseMeta}>
                    <h3 className={styles.caseBrand}>
                      {item.title}
                      {item.scale ? (
                        <span className={styles.caseAgency}>
                          {" "}
                          / {item.scale}
                        </span>
                      ) : null}
                    </h3>
                    {item.task ? (
                      <p className={styles.caseTask}>{item.task}</p>
                    ) : null}
                    {item.formats ? (
                      <p className={styles.caseFormats}>{item.formats}</p>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Блок 3: Матрица рисков */}
      <section
        className={styles.section}
        aria-labelledby="shows-risks-heading"
      >
        <Container>
          <MetaText text="[ B2B / COMPLIANCE ]" className={styles.meta} />
          <Headline id="shows-risks-heading" className={styles.h2}>
            Контроль рисков организаторов и менеджмента артиста
          </Headline>

          <Matrix
            columns={["Риск заказчика / лейбла", "Решение продакшна"]}
            rows={RISK_MATRIX.map((row) => ({
              id: row.pain,
              cells: [row.pain, row.solution],
            }))}
          />
        </Container>
      </section>

      {/* Блок 4: Форматы */}
      <section
        className={styles.section}
        aria-labelledby="shows-formats-heading"
      >
        <Container>
          <MetaText text="[ FORMATS / DELIVERABLES ]" className={styles.meta} />
          <Headline id="shows-formats-heading" className={styles.h2}>
            Комплектация итоговых материалов
          </Headline>

          <Matrix
            columns={[
              "Передаваемый материал",
              "Что получает заказчик",
              "Назначение для бизнеса",
            ]}
            rows={FORMAT_MATRIX.map((row) => ({
              id: row.format,
              cells: [
                <MatrixKey>{row.format}</MatrixKey>,
                row.specs,
                row.purpose,
              ],
            }))}
          />
        </Container>
      </section>

      {/* Блок 5: SEO & Legal Compliance */}
      <section
        className={`${styles.section} ${styles.complianceSection}`}
        aria-labelledby="shows-compliance-heading"
      >
        <Container>
          <MetaText text="[ PROCESS / LEGAL ]" className={styles.meta} />
          <Headline id="shows-compliance-heading" className={styles.h2}>
            Регламент концертной съемки и юридический комплаенс
          </Headline>

          <Accordion
            items={COMPLIANCE_SECTIONS.map((block) => ({
              title: block.title,
              content: <AccordionLabeledList items={block.items} />,
            }))}
          />
        </Container>
      </section>
    </div>
  );
}
