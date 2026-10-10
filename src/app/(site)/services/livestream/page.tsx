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

const SERVICE_NAME = "Трансляции";
const SERVICE_DESCRIPTION =
  "Контент страницы в разработке. Организация прямых трансляций мероприятий, презентаций и выступлений.";
const SERVICE_PATH = "/services/livestream/";

export const metadata: Metadata = {
  title: "Прямые трансляции | B2B Продакшн Москва",
  description: SERVICE_DESCRIPTION,
  alternates: {
    canonical: SERVICE_PATH,
  },
  openGraph: {
    title: "Прямые трансляции | B2B Продакшн Москва",
    description: SERVICE_DESCRIPTION,
    url: SERVICE_PATH,
    type: "website",
  },
};

const RISK_MATRIX = [
  {
    pain: "Изменения в программе во время мероприятия приводят к неправильным титрам, заставкам или спонсорским интеграциям в эфире.",
    solution:
      "Единый эфирный Rundown. Сценический режиссер, режиссер трансляции и представитель заказчика работают по одной актуальной версии; изменения поступают через show caller, а графика имеет статус согласования.",
  },
  {
    pain: "На площадке все выглядит хорошо, но онлайн-зритель не может прочитать презентацию, интерфейс продукта или мелкий текст на экране.",
    solution:
      "Прямой захват презентаций и демонстраций вместо съемки экранов камерой. Компоновки, кегль, безопасные зоны и читаемость проверяются заранее в реальном размере окна зрителя.",
  },
  {
    pain: "Спикер, награждение или активация начинаются не по сценарию, и режиссер трансляции узнает об этом слишком поздно.",
    solution:
      "Оперативная связь с площадкой. Floor manager и show caller передают режиссеру фактический ход программы, а камеры заранее распределяются по зонам и получают команды через интерком.",
  },
  {
    pain: "Эфир прошел, но из единственного сведенного файла невозможно сделать качественный отчетный ролик, версии без графики или отдельные выступления.",
    solution:
      "Параллельная запись производственных исходников: ISO всех камер, clean- и dirty-master, раздельные аудиодорожки, графические элементы и общий таймкод. Комплект сдачи формируется под последующий монтаж.",
  },
] as const;

const PORTFOLIO_CASES = [
  {
    title: "Онлайн-конференция Авито Путешествия",
    task: null,
  },
  {
    title: "Конференция Яндекс Учебника для учителей информатики 2026",
    task: "Прямая многокамерная трансляция со световой застройкой от нашей команды",
  },
  {
    title: "Городские герои: секреты автономных доставщиков",
    task: "Прямая многокамерная трансляция со световой застройкой, разработанной под креативную застройку локации",
  },
  {
    title:
      "Пленарное заседание III стратегической сессии «Информационные технологии и языки народов России»",
    task: "Прямая многокамерная трансляция со световой застройкой от нашей команды",
  },
  {
    title: "YAC/E 2025",
    task: "Трансляция в рамках онлайн-конференции для учителей YAC/E 2025",
  },
] as const;

const FORMAT_MATRIX = [
  {
    format: "Мастер-запись трансляции",
    specs:
      "Полную запись эфира с режиссурой, графикой, презентациями и сведённым звуком.",
    purpose:
      "Публикация мероприятия и хранение в корпоративном архиве.",
  },
  {
    format: "Clean Feed и раздельные записи",
    specs:
      "Версию без эфирной графики и предусмотренные технической схемой записи камер, презентаций и аудиоканалов.",
    purpose:
      "Повторный монтаж, локализация и создание дополнительных материалов.",
  },
  {
    format: "Отдельные выступления и короткие ролики",
    specs:
      "Смонтированные доклады, дискуссии и короткие фрагменты в согласованных форматах.",
    purpose:
      "Публикация выступлений и продвижение следующих мероприятий.",
  },
] as const;

const COMPLIANCE_SECTIONS = [
  {
    title: "Подготовка (Pre-Production)",
    items: [
      {
        label: "Схема прохождения сигнала",
        text: "До монтажа оборудования проектируем путь изображения и звука от источников до эфирной платформы и локальной записи.",
      },
      {
        label: "Резервирование критических узлов",
        text: "Для оборудования, отказ которого способен остановить эфир, предусматриваем резерв в рамках утверждённой конфигурации.",
      },
      {
        label: "Сквозной технический прогон",
        text: "Перед эфиром проверяем весь тракт одновременно — камеры, звук, графику, презентации, видеоролики, запись и передачу сигнала.",
      },
      {
        label: "Единый эфирный документ",
        text: "Титры, заставки, презентации и порядок включений собираются в одну актуальную версию эфирного сценария.",
      },
    ],
  },
  {
    title: "Проведение трансляции (Production)",
    items: [
      {
        label: "Отдельный микс для эфира",
        text: "Звук онлайн-трансляции сводится и контролируется независимо от озвучивания зала.",
      },
      {
        label: "Постоянный технический мониторинг",
        text: "Во время эфира контролируются изображение, звук, синхронизация, запись и состояние исходящего сигнала.",
      },
      {
        label: "Параллельная запись",
        text: "Мастер эфира записывается локально независимо от записи, которую создаёт интернет-платформа.",
      },
      {
        label: "ISO-запись",
        text: "Предусмотренные конфигурацией камеры и аудиоканалы записываются отдельно, чтобы сохранить возможность исправления эфира на монтаже.",
      },
    ],
  },
  {
    title: "Обработка записи (Post-Production)",
    items: [
      {
        label: "Контроль комплекта записей",
        text: "Сразу после эфира проверяем наличие, продолжительность и синхронизацию мастер-файла и раздельных источников.",
      },
      {
        label: "Версия для публикации",
        text: "Из записи удаляются технические сбои, служебные включения и паузы между программными блоками.",
      },
      {
        label: "Раздельные выпуски",
        text: "Отдельные доклады и дискуссии собираются из ISO-источников, а не вырезаются только из готовой эфирной картинки.",
      },
    ],
  },
  {
    title: "Юридическая очистка",
    items: [
      {
        label: "Эфирное оформление",
        text: "Продакшен оформляет права на созданные им заставки, графику, музыку и другие элементы трансляции.",
      },
      {
        label: "Права производственной команды",
        text: "Работа режиссёров, операторов, звукорежиссёров и технических специалистов оформляется договорами.",
      },
      {
        label: "Права на созданные материалы",
        text: "Условия использования записи и созданного продакшеном оформления фиксируются в договоре.",
      },
    ],
  },
] as const;

export default function LivestreamPage() {
  return (
    <div className={styles.page}>
      <JsonLd
        nodes={serviceJsonLd({
          path: SERVICE_PATH,
          name: SERVICE_NAME,
          description: SERVICE_DESCRIPTION,
          breadcrumbLabel: "Трансляции",
        })}
      />

      <section
        className={styles.hero}
        aria-labelledby="livestream-hero-heading"
      >
        <Container className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <MetaText text="[ SERVICES / ТРАНСЛЯЦИИ ]" className={styles.meta} />
            <PageTitle id="livestream-hero-heading" className={styles.h1}>
              {SERVICE_NAME}
            </PageTitle>
            <Paragraph className={styles.lead}>{SERVICE_DESCRIPTION}</Paragraph>
            <ContactCtaLink
              from="service_cta"
              service="livestream"
              className={styles.cta}
            >
              Обсудить проект
            </ContactCtaLink>
          </div>

          <div className={styles.showreel}>
            <div
              className={styles.showreelFrame}
              role="img"
              aria-label="Шоурил трансляций — плейсхолдер"
            >
              <MetaText
                text="[ SHOWREEL · LIVE STREAM ]"
                className={styles.showreelPlaceholder}
              />
            </div>
          </div>
        </Container>
      </section>

      <section
        className={styles.section}
        aria-labelledby="livestream-portfolio-heading"
      >
        <Container>
          <MetaText text="[ PORTFOLIO / LIVE STREAM ]" className={styles.meta} />
          <Headline id="livestream-portfolio-heading" className={styles.h2}>
            Проведенные трансляции
          </Headline>
          <ul className={styles.portfolioGrid}>
            {PORTFOLIO_CASES.map((item, index) => (
              <li key={`${item.title}-${index}`} className={styles.caseCard}>
                <div
                  className={styles.casePreview}
                  role="img"
                  aria-label={`Превью кейса: ${item.title}`}
                />
                <div className={styles.caseMeta}>
                  <h3 className={styles.caseBrand}>{item.title}</h3>
                  {item.task ? (
                    <p className={styles.caseTask}>{item.task}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        className={styles.section}
        aria-labelledby="livestream-risks-heading"
      >
        <Container>
          <MetaText text="[ B2B / COMPLIANCE ]" className={styles.meta} />
          <Headline id="livestream-risks-heading" className={styles.h2}>
            Контроль рисков
          </Headline>
          <Matrix
            columns={["Риск заказчика", "Решение продакшна"]}
            rows={RISK_MATRIX.map((row) => ({
              id: row.pain,
              cells: [row.pain, row.solution],
            }))}
          />
        </Container>
      </section>

      <section
        className={styles.section}
        aria-labelledby="livestream-formats-heading"
      >
        <Container>
          <MetaText text="[ FORMATS / DELIVERABLES ]" className={styles.meta} />
          <Headline id="livestream-formats-heading" className={styles.h2}>
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

      <section
        className={`${styles.section} ${styles.complianceSection}`}
        aria-labelledby="livestream-compliance-heading"
      >
        <Container>
          <MetaText text="[ PROCESS / LEGAL ]" className={styles.meta} />
          <Headline id="livestream-compliance-heading" className={styles.h2}>
            Регламент производства трансляций и юридический комплаенс
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
