import type { Metadata } from "next";

import {
  Accordion,
  AccordionLabeledList,
} from "@/components/Accordion/Accordion";
import { Container } from "@/components/Container/Container";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { Matrix, MatrixKey } from "@/components/Matrix/Matrix";
import { ContactCtaLink } from "@/components/Metrica/ContactCtaLink";
import { MetaText } from "@/components/MetaText/MetaText";
import { Headline } from "@/components/Typography/Headline";
import { PageTitle } from "@/components/Typography/PageTitle";
import { Paragraph } from "@/components/Typography/Paragraph";
import { serviceJsonLd } from "@/lib/jsonld/builders";
import styles from "./page.module.css";

const SERVICE_NAME = "Съемка digital-рекламы и OLV-видео для брендов";
const SERVICE_DESCRIPTION =
  "Производство коммерческого видео с гарантией соблюдения B2B-комплаенса, фиксированной сметой и передачей исключительных прав.";
const SERVICE_PATH = "/services/commercials/";

export const metadata: Metadata = {
  title: "Производство OLV и Digital-рекламы для брендов | B2B Продакшн Москва",
  description:
    "Съёмка OLV-видео и рекламных ролик под B2B-стандарты. Постоплата 30–90 дней, ЭДО с НДС, юридическая очистка прав (Talent Release). Фиксированные сметы.",
  alternates: {
    canonical: SERVICE_PATH,
  },
  openGraph: {
    title:
      "Производство OLV и Digital-рекламы для брендов | B2B Продакшн Москва",
    description:
      "Съёмка OLV-видео и рекламных роликов под B2B-стандарты. Постоплата 30–90 дней, ЭДО с НДС, юридическая очистка прав (Talent Release). Фиксированные сметы.",
    url: SERVICE_PATH,
    type: "website",
  },
};

const B2B_GUARANTEES = [
  "Постоплата от 30 до 90 дней",
  "Работа по ЭДО (с НДС)",
  "Фиксированная смета без перерасходов",
] as const;

const RISK_MATRIX = [
  {
    pain: "Срыв медиаплана из-за долгих согласований и хаоса на площадке.",
    solution:
      "PPM-бук как регламент. Все локации, кост-листы, раскадровки и тайминги утверждаются до старта съемок.",
  },
  {
    pain: "Иски от конкурентов из-за актеров, снявшихся в ролик бренда-соперника.",
    solution:
      "Проверка категориальной эксклюзивности. Юридический аудит съемочной истории каждого актера (Stop-List).",
  },
  {
    pain: "Запрет на показ ролика из-за претензий актеров или правообладателей музыки.",
    solution:
      "Полный Talent Release и байауты. Разграничение прав по каналам (Digital/OLV), территориям и срокам в договоре.",
  },
  {
    pain: "Непредвиденное увеличение сметы в процессе пост-продакшна.",
    solution:
      "Фиксированный кост-лист. Непредвиденные расходы на площадке — риски продакшна, а не клиента.",
  },
] as const;

const FORMAT_MATRIX = [
  {
    format: "Мастер-ролик (16:9)",
    specs:
      "Финальное рекламное видео в максимальном качестве для эфира и показов.",
    purpose:
      "Размещение на ТВ, в кинотеатрах, на медиафасадах и главных цифровых площадках.",
  },
  {
    format: "Адаптации под соцсети (9:16 / 1:1)",
    specs:
      "Версии ролика, кадрированные под форматы мобильных платформ и рекламных кабинетов.",
    purpose:
      "Запуск таргетированной рекламы и публикация на официальных страницах бренда.",
  },
  {
    format: "Чистая версия без графики (Clean Feed)",
    specs: "Видеоряд без ценников, пэков, текста и логотипов.",
    purpose:
      "Быстрый перевод на другие языки, локализация под акции или использование в будущем.",
  },
] as const;

/** Скелет карточек кейсов — заменить на фильтрованную выборку из CMS/data. */
const PORTFOLIO_CASES = [
  {
    brand: "Яндекс Учебник",
    agency: null,
    task: "9 рекламных роликов про сервис для подготовки к ЕГЭ",
    duration: null,
    formats: null,
  },
  {
    brand: "Букмейт",
    agency: null,
    task: "Рекламные ролики",
    duration: null,
    formats: null,
  },
] as const;

const COMPLIANCE_SECTIONS = [
  {
    title: "Предсъемочный регламент (Pre-Production)",
    items: [
      {
        label: "PPM-протокол (Pre-Production Meeting)",
        text: "Пошаговое согласование кастинга, локаций, костюмов, раскадровки и стилистики до выезда на площадку. Исключает «сюрпризы» на съемках.",
      },
      {
        label: "Соответствие брендбуку",
        text: "Предварительная проверка концепции на соблюдение гайдлайнов и позиционирования бренда.",
      },
      {
        label: "Производственный календарь",
        text: "Зафиксированный график производства с контрольными точками утверждений.",
      },
    ],
  },
  {
    title: "Безопасность и контроль на площадке (Production)",
    items: [
      {
        label: "Контроль плейбэка",
        text: "Возможность покадрового отсмотра каждого дубля представителями бренда и агентства прямо на площадке.",
      },
      {
        label: "Управление съемочной сменой",
        text: "Жесткий контроль тайминга для предотвращения перерасхода бюджета на переработки группы.",
      },
      {
        label: "Технический контроль",
        text: "Оценка освещения и цветовой гаммы для точной передачи фирменных цветов бренда.",
      },
    ],
  },
  {
    title: "Пост-продакшн и адаптация (Post-Production)",
    items: [
      {
        label: "Поэтапная приемка",
        text: "Последовательное утверждение (черновой монтаж → цветокоррекция и графика → сведение звука) без возврата на пройденные этапы.",
      },
      {
        label: "Подготовка под площадки",
        text: "Готовность видео к техническим требованиям ТВ-каналов и рекламных сетей без риска отклонения модерацией.",
      },
    ],
  },
  {
    title: "Юридическая чистота и ЭДО (Legal Compliance)",
    items: [
      {
        label: "Очистка права на лиц и локации",
        text: "Передача полных релизов актеров (Talent Release), договоров с локациями и права на использование музыки.",
      },
      {
        label: "Соблюдение законодательства",
        text: "Проверка материалов на соответствие ФЗ «О рекламе».",
      },
      {
        label: "Документооборот",
        text: "Передача исключительных прав, работа по ЭДО (НДС / УСН), полный комплект закрывающих актов.",
      },
    ],
  },
] as const;

export default function ReklamaPage() {
  return (
    <div className={styles.page}>
      <JsonLd
        nodes={serviceJsonLd({
          path: SERVICE_PATH,
          name: SERVICE_NAME,
          description: SERVICE_DESCRIPTION,
          breadcrumbLabel: "Реклама",
        })}
      />
      {/* Блок 1: Hero */}
      <section className={styles.hero} aria-labelledby="commercials-hero-heading">
        <Container className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <MetaText text="[ SERVICES / РЕКЛАМА ]" className={styles.meta} />
            <PageTitle id="commercials-hero-heading" className={styles.h1}>
              {SERVICE_NAME}
            </PageTitle>
            <Paragraph className={styles.lead}>
              {SERVICE_DESCRIPTION}
            </Paragraph>
            <ContactCtaLink
              from="service_cta"
              service="commercials"
              className={styles.cta}
            >
              Заказать рекламу
            </ContactCtaLink>
          </div>

          <div className={styles.showreel}>
            {/* TODO: шоурил только коммерческих интеграций и OLV, 16:9 */}
            <div
              className={styles.showreelFrame}
              role="img"
              aria-label="Шоурил рекламы — плейсхолдер"
            >
              <MetaText
                text="[ SHOWREEL · OLV / COMMERCIAL ]"
                className={styles.showreelPlaceholder}
              />
            </div>

            <ul className={styles.guarantees} aria-label="B2B-гарантии">
              {B2B_GUARANTEES.map((item) => (
                <li key={item} className={styles.guarantee}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Блок 2: Портфолио */}
      <section
        className={styles.section}
        aria-labelledby="commercials-portfolio-heading"
      >
        <Container>
          <MetaText text="[ PORTFOLIO / COMMERCIAL ]" className={styles.meta} />
          <Headline id="commercials-portfolio-heading" className={styles.h2}>
            Рекламные ролики для брендов
          </Headline>
          <Paragraph className={styles.portfolioIntro}>
            Только коммерческие интеграции и OLV — без клипов и концертов.
          </Paragraph>

          <ul className={styles.portfolioGrid}>
            {PORTFOLIO_CASES.map((item, index) => (
              <li key={`${item.brand}-${index}`} className={styles.caseCard}>
                {/* TODO: видеопревью с hover-play */}
                <div
                  className={styles.casePreview}
                  role="img"
                  aria-label={`Превью кейса: ${item.brand}`}
                />
                <div className={styles.caseMeta}>
                  <h3 className={styles.caseBrand}>
                    {item.brand}
                    {item.agency ? (
                      <span className={styles.caseAgency}>
                        {" "}
                        / {item.agency}
                      </span>
                    ) : null}
                  </h3>
                  <p className={styles.caseTask}>{item.task}</p>
                  {item.duration || item.formats ? (
                    <p className={styles.caseFormats}>
                      {[item.duration, item.formats].filter(Boolean).join(" · ")}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Блок 3: Матрица рисков */}
      <section
        className={styles.section}
        aria-labelledby="commercials-risks-heading"
      >
        <Container>
          <MetaText text="[ B2B / COMPLIANCE ]" className={styles.meta} />
          <Headline id="commercials-risks-heading" className={styles.h2}>
            Риски заказчика и системные решения
          </Headline>

          <Matrix
            columns={[
              "Боль заказчика (Риск)",
              "Системное решение продакшна",
            ]}
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
        aria-labelledby="commercials-formats-heading"
      >
        <Container>
          <MetaText text="[ FORMATS / DELIVERABLES ]" className={styles.meta} />
          <Headline id="commercials-formats-heading" className={styles.h2}>
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
        aria-labelledby="commercials-compliance-heading"
      >
        <Container>
          <MetaText text="[ PROCESS / LEGAL ]" className={styles.meta} />
          <Headline id="commercials-compliance-heading" className={styles.h2}>
            Регламент производства рекламы и юридический комплаенс
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
