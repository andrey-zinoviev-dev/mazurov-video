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

const SERVICE_NAME = "Съемка имиджевых роликов и видеовизиток для брендов";
const SERVICE_DESCRIPTION =
  "Бренд получает узнаваемый образ и убедительный рассказ о своей ценности, а не универсальный имиджевый ролик с логотипом.";
const SERVICE_PATH = "/services/brand-video/";

export const metadata: Metadata = {
  title: "Съемка имиджевых роликов и видеовизиток | B2B Продакшн Москва",
  description: SERVICE_DESCRIPTION,
  alternates: {
    canonical: SERVICE_PATH,
  },
  openGraph: {
    title: "Съемка имиджевых роликов и видеовизиток | B2B Продакшн Москва",
    description: SERVICE_DESCRIPTION,
    url: SERVICE_PATH,
    type: "website",
  },
};

const B2B_GUARANTEES = [
  {
    title: "Аудитория до сценария",
    description: "Фиксируем главную аудиторию и ключевой тезис ролика.",
  },
  {
    title: "Сотрудники в кадре",
    description: "Режиссёр готовит героев к съёмке и ведёт интервью.",
  },
  {
    title: "Факты в кадре",
    description:
      "До сдачи сверяем, чем подтверждено каждое заявление в ролике.",
  },
] as const;

const RISK_MATRIX = [
  {
    pain: "Ролик выглядит дорого, но неотличим от видео конкурентов: если заменить логотип, смысл почти не изменится.",
    solution:
      "Креатив строится от реального отличия бренда. До сценария фиксируем позиционирование, доказательства, собственные продукты, процессы и визуальные активы, которые невозможно механически перенести конкуренту.",
  },
  {
    pain: "В один ролик пытаются одновременно поместить сообщение для клиентов, партнеров, инвесторов и будущих сотрудников — в итоге ни одна аудитория не получает ясного ответа.",
    solution:
      "Архитектура сообщений до сценария. Определяем главную аудиторию мастер-ролика, а остальные задачи выносим в самостоятельные версии и смысловые модули.",
  },
  {
    pain: "Руководители и сотрудники в кадре выглядят зажато и читают корпоративные формулировки, что снижает доверие к компании.",
    solution:
      "Работа с героями как с непрофессиональными спикерами: предварительная беседа, разговорное интервью, короткие смысловые дубли и режиссура поведения в реальной рабочей среде.",
  },
  {
    pain: "В видео звучат сильные обещания бренда, но зритель не видит подтверждений — ролик воспринимается как набор рекламных заявлений.",
    solution:
      "Матрица «тезис — доказательство — кадр». Каждое значимое утверждение подтверждаем продуктом, процессом, цифрой, кейсом или действием героя и отдельно сверяем с владельцем факта со стороны клиента.",
  },
] as const;

const PORTFOLIO_CASES = [
  {
    slug: "vizitka-avito-nedvizhimost-cd",
    title:
      "Визитка коммерческого директора жилой и загородной недвижимости «Авито Недвижимость»",
    task: "Съемка и монтаж ролика для представления кандидата в номинации",
  },
] as const;

const FORMAT_MATRIX = [
  {
    format: "Основной бренд-фильм (16:9)",
    specs:
      "Готовое видео в согласованном разрешении с цветокоррекцией, графикой и сведённым звуком.",
    purpose:
      "Сайт компании, презентации, мероприятия, PR и корпоративные коммуникации.",
  },
  {
    format: "Короткие версии (16:9 / 9:16 / 1:1)",
    specs:
      "Самостоятельно смонтированные версии под выбранные площадки и хронометражи.",
    purpose:
      "Социальные сети, digital-кампании и внутренние коммуникации.",
  },
  {
    format: "Чистая версия",
    specs:
      "Видеоряд без встроенных титров и субтитров с отдельными текстовыми файлами.",
    purpose:
      "Локализация и последующее обновление текстовой информации.",
  },
] as const;

const COMPLIANCE_SECTIONS = [
  {
    title: "Подготовка (Pre-Production)",
    items: [
      {
        label: "Тритмент",
        text: "До съемки фиксируем основную идею, визуальный подход, структуру и тональность фильма.",
      },
      {
        label: "Раскадровка ключевых сцен",
        text: "Согласуем композицию, действие и содержание сложных постановочных эпизодов до выхода на площадку.",
      },
      {
        label: "Матрица итоговых форматов",
        text: "До съемки определяем хронометражи и соотношения сторон всех версий, чтобы сразу предусмотреть подходящее кадрирование.",
      },
      {
        label: "Проверка фирменной стилистики",
        text: "Цвет, типографика, логотипы и графические элементы закладываются в производство на основе действующих бренд-гайдлайнов.",
      },
    ],
  },
  {
    title: "Съемка (Production)",
    items: [
      {
        label: "Работа с непрофессиональными спикерами",
        text: "Перед записью проводим пробный разговор и настраиваем подачу без заучивания текста.",
      },
      {
        label: "Визуальное раскрытие компании",
        text: "Для каждого смыслового блока снимаем реальные процессы, продукт, команду и рабочую среду, а не только интервью.",
      },
      {
        label: "Контроль фирменных цветов",
        text: "Используем настроенный мониторинг изображения и цветовые мишени для последующего точного сведения цвета.",
      },
      {
        label: "Проверка покрытия",
        text: "До окончания съемочной смены сверяем отснятый материал с раскадровкой и монтажным планом.",
      },
    ],
  },
  {
    title: "Пост-продакшн",
    items: [
      {
        label: "Сначала содержание",
        text: "Структура и набор сцен утверждаются до создания чистовой графики, цветокоррекции и сведения звука.",
      },
      {
        label: "Раздельная сборка адаптаций",
        text: "Вертикальные и квадратные версии монтируются под соответствующий кадр, а не создаются автоматической обрезкой мастер-ролика.",
      },
      {
        label: "Контроль фирменного оформления",
        text: "Графика, титры и цвет финально сверяются с визуальной системой проекта.",
      },
    ],
  },
  {
    title: "Юридическая очистка",
    items: [
      {
        label: "Кастинг и локации",
        text: "Продакшен оформляет разрешения для актёров, моделей и съемочных объектов, которые привлекает самостоятельно.",
      },
      {
        label: "Сторонние материалы",
        text: "Музыка, шрифты, фотографии и стоковые кадры, добавленные продакшеном, используются по лицензии.",
      },
      {
        label: "Передача прав",
        text: "Права на созданные продакшеном материалы и ограничения сторонних лицензий фиксируются в договоре.",
      },
    ],
  },
] as const;

export default function BrandVideoPage() {
  return (
    <div className={styles.page}>
      <JsonLd
        nodes={serviceJsonLd({
          path: SERVICE_PATH,
          name: SERVICE_NAME,
          description: SERVICE_DESCRIPTION,
          breadcrumbLabel: "Бренд-видео",
        })}
      />

      <ServiceHero
        meta="[ SERVICES / БРЕНД-ВИДЕО ]"
        title={SERVICE_NAME}
        titleId="brand-video-hero-heading"
        description={SERVICE_DESCRIPTION}
        ctaLabel="Обсудить проект"
        service="brand-video"
        guarantees={B2B_GUARANTEES}
      />

      <section
        className={styles.section}
        aria-labelledby="brand-video-portfolio-heading"
      >
        <Container>
          <MetaText text="[ PORTFOLIO / BRAND ]" className={styles.meta} />
          <Headline id="brand-video-portfolio-heading" className={styles.h2}>
            Видео для брендов
          </Headline>
          <ul className={styles.portfolioGrid}>
            {PORTFOLIO_CASES.map((item) => {
              const project = getProjectBySlug(item.slug);
              if (!project) return null;

              return (
                <li key={item.slug} className={styles.caseCard}>
                  <ProjectCover project={project} />
                  <div className={styles.caseMeta}>
                    <h3 className={styles.caseBrand}>{item.title}</h3>
                    {item.task ? (
                      <p className={styles.caseTask}>{item.task}</p>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section
        className={styles.section}
        aria-labelledby="brand-video-risks-heading"
      >
        <Container>
          <MetaText text="[ B2B / COMPLIANCE ]" className={styles.meta} />
          <Headline id="brand-video-risks-heading" className={styles.h2}>
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
        aria-labelledby="brand-video-formats-heading"
      >
        <Container>
          <MetaText text="[ FORMATS / DELIVERABLES ]" className={styles.meta} />
          <Headline id="brand-video-formats-heading" className={styles.h2}>
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
        aria-labelledby="brand-video-compliance-heading"
      >
        <Container>
          <MetaText text="[ PROCESS / LEGAL ]" className={styles.meta} />
          <Headline id="brand-video-compliance-heading" className={styles.h2}>
            Регламент производства бренд-видео и юридический комплаенс
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
