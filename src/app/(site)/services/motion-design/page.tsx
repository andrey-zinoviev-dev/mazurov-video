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

const SERVICE_NAME = "Motion Design и 3D-ролики";
const SERVICE_DESCRIPTION =
  "Контент страницы в разработке. Производство motion- и 3D-роликов для брендов и digital.";
const SERVICE_PATH = "/services/motion-design/";

export const metadata: Metadata = {
  title: "Motion Design и 3D-ролики | B2B Продакшн Москва",
  description: SERVICE_DESCRIPTION,
  alternates: {
    canonical: SERVICE_PATH,
  },
  openGraph: {
    title: "Motion Design и 3D-ролики | B2B Продакшн Москва",
    description: SERVICE_DESCRIPTION,
    url: SERVICE_PATH,
    type: "website",
  },
};

const RISK_MATRIX = [
  {
    pain: "Анимация эффектно выглядит, но неверно объясняет продукт, технологию или бизнес-процесс и вводит аудиторию в заблуждение.",
    solution:
      "Проверка смысла до чистовой анимации. Раскадровку и animatic смотрит профильный эксперт клиента; для каждого сложного эпизода фиксируются логика, терминология и допустимая степень упрощения.",
  },
  {
    pain: "После сдачи ролик невозможно обновить или продолжить: проект неструктурирован, плагины и шрифты отсутствуют, связи с файлами потеряны.",
    solution:
      "Передача поддерживаемого проекта. Структурируем композиции и слои, собираем зависимости, лицензии, шрифты и ассеты, прикладываем инструкцию по сборке и тестируем открытие проекта на чистой системе.",
  },
  {
    pain: "Инфографика понятна на стоп-кадре, но зритель не успевает прочитать цифры и связи в реальном темпе.",
    solution:
      "Тест на восприятие по animatic: ограничиваем объем информации в сцене, выстраиваем визуальную иерархию, закладываем время на чтение и проверяем ролик без пояснений автора.",
  },
  {
    pain: "Графика корректна в обычном видеофайле, но дает сбой на медиасервере, нестандартном LED-экране или при выводе с прозрачностью.",
    solution:
      "Технический тест на целевом тракте. До финального рендера проверяем разрешение полотна, частоту кадров, развертку, цвет, кодек, альфа-канал и бесшовный цикл на оборудовании показа.",
  },
] as const;

const PORTFOLIO_CASES = [
  {
    title: "Открывающий моушн-ролик для конференции Авито Недвижимости",
    task: "По референсам заказчика предложены творческие решения, сценарные переходы и выполнен последующий монтаж",
  },
  {
    title: "Информационный ролик для внутреннего использования компании Яндекс",
    task: null,
  },
] as const;

const FORMAT_MATRIX = [
  {
    format: "Мастер-анимация",
    specs:
      "Финальный ролик в согласованном разрешении, частоте кадров, цветовом пространстве и кодеке.",
    purpose:
      "Рекламные кампании, презентации, мероприятия и цифровые площадки.",
  },
  {
    format: "Форматные адаптации",
    specs:
      "Отдельно собранные версии под социальные сети, экраны, медиафасады и рекламные кабинеты.",
    purpose:
      "Размещение ролика на разных носителях без искажения композиции и текста.",
  },
  {
    format: "Пакет для локализации",
    specs:
      "Версию без текста, отдельные звуковые дорожки и редактируемый проект, если его передача предусмотрена договором.",
    purpose: "Перевод, обновление данных и создание новых версий.",
  },
] as const;

const COMPLIANCE_SECTIONS = [
  {
    title: "Проектирование (Pre-Production)",
    items: [
      {
        label: "Технический паспорт",
        text: "До начала работ фиксируем размеры, пропорции, частоту кадров, длительность, кодек, цветовое пространство и необходимость альфа-канала.",
      },
      {
        label: "Style Frames",
        text: "Внешний вид ключевых сцен, типографика, цвет и степень детализации утверждаются до анимации.",
      },
      {
        label: "Аниматик",
        text: "Хронометраж, последовательность сцен и переходы проверяются на упрощённой версии до производства чистовой графики.",
      },
      {
        label: "Проверка читаемости",
        text: "Текст, диаграммы и интерфейсы тестируются в планируемом размере и при реальной скорости воспроизведения.",
      },
    ],
  },
  {
    title: "Производство анимации (Production)",
    items: [
      {
        label: "Фиксация структуры",
        text: "Чистовая анимация начинается после утверждения раскадровки и аниматика, чтобы изменения структуры не приводили к полной переделке готовых сцен.",
      },
      {
        label: "Контроль версий",
        text: "Каждая согласованная стадия сохраняется отдельно, а правки вносятся только в актуальную сборку.",
      },
      {
        label: "Промежуточные рендеры",
        text: "Сложные сцены проверяются до финального рендера на ошибки композиции, масок, прозрачности и движения.",
      },
    ],
  },
  {
    title: "Финализация (Post-Production)",
    items: [
      {
        label: "Технический контроль файлов",
        text: "Для каждой версии проверяем разрешение, частоту кадров, кодек, цвет, звук и прозрачность.",
      },
      {
        label: "Проверка бесшовного цикла",
        text: "Выполняется только для роликов, предназначенных для непрерывного повторения.",
      },
      {
        label: "Раздельный контроль адаптаций",
        text: "Каждая версия проверяется после отдельного рендера, а не считается исправной на основании мастер-файла.",
      },
      {
        label: "Комплектация исходного проекта",
        text: "При предусмотренной договором передаче проект структурируется без включения непередаваемых лицензий, программ и плагинов.",
      },
    ],
  },
  {
    title: "Юридическая очистка",
    items: [
      {
        label: "Лицензии на компоненты",
        text: "Проверяются условия использования добавленных продакшеном шрифтов, музыки, стоковой графики и 3D-моделей.",
      },
      {
        label: "Права авторов",
        text: "Договоры с аниматорами, дизайнерами, дикторами и композиторами предусматривают необходимый объём использования результата.",
      },
      {
        label: "Передача прав",
        text: "Отдельно фиксируются права на созданную графику и ограничения сторонних лицензий.",
      },
    ],
  },
] as const;

export default function MotionDesignPage() {
  return (
    <div className={styles.page}>
      <JsonLd
        nodes={serviceJsonLd({
          path: SERVICE_PATH,
          name: SERVICE_NAME,
          description: SERVICE_DESCRIPTION,
          breadcrumbLabel: "Motion Design",
        })}
      />

      <section
        className={styles.hero}
        aria-labelledby="motion-design-hero-heading"
      >
        <Container className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <MetaText
              text="[ SERVICES / MOTION DESIGN ]"
              className={styles.meta}
            />
            <PageTitle id="motion-design-hero-heading" className={styles.h1}>
              {SERVICE_NAME}
            </PageTitle>
            <Paragraph className={styles.lead}>{SERVICE_DESCRIPTION}</Paragraph>
            <ContactCtaLink
              from="service_cta"
              service="motion-design"
              className={styles.cta}
            >
              Обсудить проект
            </ContactCtaLink>
          </div>

          <div className={styles.showreel}>
            <div
              className={styles.showreelFrame}
              role="img"
              aria-label="Шоурил Motion Design — плейсхолдер"
            >
              <MetaText
                text="[ SHOWREEL · MOTION / 3D ]"
                className={styles.showreelPlaceholder}
              />
            </div>
          </div>
        </Container>
      </section>

      <section
        className={styles.section}
        aria-labelledby="motion-design-portfolio-heading"
      >
        <Container>
          <MetaText text="[ PORTFOLIO / MOTION ]" className={styles.meta} />
          <Headline id="motion-design-portfolio-heading" className={styles.h2}>
            Созданный motion design
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
        aria-labelledby="motion-design-risks-heading"
      >
        <Container>
          <MetaText text="[ B2B / COMPLIANCE ]" className={styles.meta} />
          <Headline id="motion-design-risks-heading" className={styles.h2}>
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
        aria-labelledby="motion-design-formats-heading"
      >
        <Container>
          <MetaText text="[ FORMATS / DELIVERABLES ]" className={styles.meta} />
          <Headline id="motion-design-formats-heading" className={styles.h2}>
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
        aria-labelledby="motion-design-compliance-heading"
      >
        <Container>
          <MetaText text="[ PROCESS / LEGAL ]" className={styles.meta} />
          <Headline id="motion-design-compliance-heading" className={styles.h2}>
            Регламент производства Motion Design и юридический комплаенс
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
