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

const SERVICE_NAME = "Вебинары";
const SERVICE_DESCRIPTION =
  "Контент страницы в разработке. Съемка и техническая организация вебинаров для компаний и образовательных проектов.";
const SERVICE_PATH = "/services/webinars/";

export const metadata: Metadata = {
  title: "Съемка вебинаров | B2B Продакшн Москва",
  description: SERVICE_DESCRIPTION,
  alternates: {
    canonical: SERVICE_PATH,
  },
  openGraph: {
    title: "Съемка вебинаров | B2B Продакшн Москва",
    description: SERVICE_DESCRIPTION,
    url: SERVICE_PATH,
    type: "website",
  },
};

const RISK_MATRIX = [
  {
    pain: "Удаленные спикеры записаны в разных условиях: один выглядит профессионально, другой — как случайный видеозвонок, что снижает уровень всего материала.",
    solution:
      "Единый стандарт удаленной записи. Технический продюсер проверяет помещение, свет, кадр и звук, при необходимости отправляет комплект оборудования и контролирует локальную запись каждого спикера.",
  },
  {
    pain: "В прямом эфире разговор воспринимается нормально, но запись наполнена паузами, служебными фразами и поиском нужного окна — как самостоятельное видео она не работает.",
    solution:
      "Отдельный сценарий для версии on demand. В Rundown отмечаются монтажные границы, смысловые блоки и места для чистых повторов; после эфира собирается самостоятельная редакционная версия.",
  },
  {
    pain: "В импровизированном ответе спикер называет непроверенную цифру, раскрывает внутреннюю информацию или дает формулировку, которую компания не готова публиковать.",
    solution:
      "Редакторский контроль записи. Продюсер отмечает рискованные фрагменты и таймкоды во время эфира, после чего финальная версия проходит содержательную проверку у коммуникационной или юридической команды клиента.",
  },
  {
    pain: "Готовый вебинар нельзя нормально перевести и выпустить для других рынков: текст встроен в графику, дорожки смешаны, терминология нигде не зафиксирована.",
    solution:
      "Пакет для локализации: версия без встроенного текста, раздельные речевые и фоновые дорожки, редактируемые титры, словарь терминов и таймкодированная расшифровка.",
  },
] as const;

const PORTFOLIO_CASES = [
  {
    title: "Вебинары для Авито Недвижимости",
    task: "Типовой онлайн-вебинар: подключение удаленных спикеров, сбор программы с графикой на нашей стороне и выпуск в эфир",
  },
  {
    title: "Вебинар «Гарантия дохода за 45 дней»",
    task: "Типовой онлайн-вебинар: подключение удаленных спикеров, сбор программы с графикой на нашей стороне и выпуск в эфир",
  },
] as const;

const FORMAT_MATRIX = [
  {
    format: "Чистовая запись вебинара",
    specs:
      "Смонтированную версию без технических сбоев и служебных фрагментов, с обработанным звуком и графикой.",
    purpose:
      "Публикация записи, рассылка участникам и размещение в базе знаний.",
  },
  {
    format: "Полная мастер-запись",
    specs:
      "Запись проведённого эфира с презентациями, титрами и вопросами участников.",
    purpose: "Корпоративный архив и повторное использование материала.",
  },
  {
    format: "Короткие тематические ролики",
    specs:
      "Отдельные ответы, тезисы и демонстрации в горизонтальном или вертикальном формате.",
    purpose:
      "Социальные сети, рассылки и продвижение следующих вебинаров.",
  },
] as const;

const COMPLIANCE_SECTIONS = [
  {
    title: "Подготовка эфира (Pre-Production)",
    items: [
      {
        label: "Эфирный сценарий",
        text: "Выступления, демонстрации, вопросы и переключения собираются в последовательность с точками входа каждого спикера.",
      },
      {
        label: "Проверка подключений",
        text: "До эфира тестируем фактические камеры, микрофоны, интернет-соединения и демонстрацию экрана каждого удалённого участника.",
      },
      {
        label: "Локальное хранение презентаций",
        text: "Презентации и видеоролики заранее загружаются на эфирную систему, чтобы их воспроизведение не зависело от качества демонстрации удалённого экрана.",
      },
      {
        label: "Резервные варианты показа",
        text: "Для критически важных демонстраций подготавливаются локальные видеозаписи или статичные материалы.",
      },
    ],
  },
  {
    title: "Проведение вебинара (Production)",
    items: [
      {
        label: "Контроль каждого аудиоканала",
        text: "Звук удалённых участников прослушивается и регулируется отдельно до попадания в мастер эфира.",
      },
      {
        label: "Управление подключениями",
        text: "Технический режиссёр выводит спикеров в эфир, переключает раскладки и убирает отключившиеся или нестабильные источники.",
      },
      {
        label: "Независимая мастер-запись",
        text: "Программа записывается локально и не зависит только от облачной записи вебинарной платформы.",
      },
      {
        label: "Раздельные источники",
        text: "Если используемая система это поддерживает, спикеры, экран и звук записываются отдельными файлами для последующего монтажа.",
      },
    ],
  },
  {
    title: "Обработка записи (Post-Production)",
    items: [
      {
        label: "Исправление эфирных сбоев",
        text: "При наличии раздельных источников обрывы, неудачные переключения и зависшие раскладки заменяются исправными фрагментами.",
      },
      {
        label: "Пересборка демонстраций",
        text: "В чистовой записи экран, презентация и спикер компонуются с учётом читаемости, а не сохраняются только в эфирной раскладке.",
      },
      {
        label: "Обработка разнородного звука",
        text: "Громкость и тембр удалённых участников выравниваются в пределах технических возможностей исходных записей.",
      },
      {
        label: "Монтаж версии по запросу",
        text: "Из мастер-записи удаляются ожидание начала, служебные переговоры и технические паузы.",
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
        text: "Работа режиссёров, дизайнеров, монтажёров и технических специалистов оформляется договорами.",
      },
      {
        label: "Передача прав",
        text: "Права на созданные продакшеном запись, монтаж и графическое оформление передаются в установленном договором объёме.",
      },
    ],
  },
] as const;

export default function WebinarsPage() {
  return (
    <div className={styles.page}>
      <JsonLd
        nodes={serviceJsonLd({
          path: SERVICE_PATH,
          name: SERVICE_NAME,
          description: SERVICE_DESCRIPTION,
          breadcrumbLabel: "Вебинары",
        })}
      />

      <section className={styles.hero} aria-labelledby="webinars-hero-heading">
        <Container className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <MetaText text="[ SERVICES / ВЕБИНАРЫ ]" className={styles.meta} />
            <PageTitle id="webinars-hero-heading" className={styles.h1}>
              {SERVICE_NAME}
            </PageTitle>
            <Paragraph className={styles.lead}>{SERVICE_DESCRIPTION}</Paragraph>
            <ContactCtaLink
              from="service_cta"
              service="webinars"
              className={styles.cta}
            >
              Обсудить проект
            </ContactCtaLink>
          </div>

          <div className={styles.showreel}>
            <div
              className={styles.showreelFrame}
              role="img"
              aria-label="Шоурил вебинаров — плейсхолдер"
            >
              <MetaText
                text="[ SHOWREEL · WEBINAR ]"
                className={styles.showreelPlaceholder}
              />
            </div>
          </div>
        </Container>
      </section>

      <section
        className={styles.section}
        aria-labelledby="webinars-portfolio-heading"
      >
        <Container>
          <MetaText text="[ PORTFOLIO / WEBINAR ]" className={styles.meta} />
          <Headline id="webinars-portfolio-heading" className={styles.h2}>
            Проведенные вебинары
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
        aria-labelledby="webinars-risks-heading"
      >
        <Container>
          <MetaText text="[ B2B / COMPLIANCE ]" className={styles.meta} />
          <Headline id="webinars-risks-heading" className={styles.h2}>
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
        aria-labelledby="webinars-formats-heading"
      >
        <Container>
          <MetaText text="[ FORMATS / DELIVERABLES ]" className={styles.meta} />
          <Headline id="webinars-formats-heading" className={styles.h2}>
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
        aria-labelledby="webinars-compliance-heading"
      >
        <Container>
          <MetaText text="[ PROCESS / LEGAL ]" className={styles.meta} />
          <Headline id="webinars-compliance-heading" className={styles.h2}>
            Регламент производства вебинаров и юридический комплаенс
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
