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

const SERVICE_NAME = "Съемка и производство музыкальных клипов";
const SERVICE_DESCRIPTION =
  "Клип выходит к дате премьеры и старту промо-кампании — с правами на видеоряд для публикации и продвижения на выбранных площадках.";
const SERVICE_PATH = "/services/music-video/";

export const metadata: Metadata = {
  title:
    "Съемка и производство музыкальных клипов | B2B Продакшн Москва",
  description:
    "Полный цикл создания видеоклипов для артистов и лейблов. Юридическая очистка прав, Talent / Location Release, фиксированный дедлайн под премьеру и промо-кампанию.",
  alternates: {
    canonical: SERVICE_PATH,
  },
  openGraph: {
    title:
      "Съемка и производство музыкальных клипов | B2B Продакшн Москва",
    description:
      "Полный цикл создания видеоклипов для артистов и лейблов. Юридическая очистка прав, Talent / Location Release, фиксированный дедлайн под премьеру и промо-кампанию.",
    url: SERVICE_PATH,
    type: "website",
  },
};

const B2B_GUARANTEES = [
  {
    title: "График под премьеру",
    description:
      "До съёмки фиксируем дату сдачи клипа и число раундов правок.",
  },
  {
    title: "Отсмотр на площадке",
    description: "Проверяем дубли и согласуем снятые сцены с артистом.",
  },
  {
    title: "Документы для релиза",
    description: "Оформляем согласия участников и владельцев локаций.",
  },
] as const;

const RISK_MATRIX = [
  {
    pain: "Срыв промо-кампании, рекламных бюджетов и премьеры из-за задержек на этапе пост-продакшна.",
    solution:
      "Фиксированный производственный календарь. График сдачи мастер-копии привязывается к утвержденной дате премьеры (независимо от того, выходит ли трек впервые или снимается видео на существующий релиз).",
  },
  {
    pain: "Блокировка клипа или претензии от площадок из-за прав на съемку в локации или объект в кадре.",
    solution:
      "Юридическое сопровождение. Подписание соглашений на использование объектов и локаций (Location Release).",
  },
  {
    pain: "Претензии от актеров кастинга или массовки после релиза видео.",
    solution:
      "Реестр прав. Обязательное подписание документов об отчуждении прав (Talent Release) со всеми участниками кадра до начала съемки.",
  },
  {
    pain: "Выход за пределы бюджета из-за бесконечных правок артиста на этапе пост-продакшна.",
    solution:
      "Регламент правок. Количество итераций монтажа и графики фиксируется в договоре, доработки сверх нормы регламентируются доп. соглашениями.",
  },
] as const;

const FORMAT_MATRIX = [
  {
    format: "Официальный видеоклип",
    specs:
      "Финальное видео в максимальном разрешении с чистовым студийным звуком.",
    purpose:
      "Дистрибуция на YouTube, ротация на музыкальных телеканалах и релиз на видеоплатформах.",
  },
  {
    format: "Промо-тизеры и нарезки (16:9 / 9:16)",
    specs:
      "Короткие ролики, смонтированные строго из ключевых кадров клипа.",
    purpose:
      "Анонсы даты релиза в соцсетях, реклама в TikTok/Reels/Shorts, промо для СМИ.",
  },
  {
    format: "Промо-материалы для PR (Stills)",
    specs:
      "Отобранные кадры высокого разрешения с финальной цветокоррекцией.",
    purpose:
      "Использование для обложки трека, карточек в стримингах, афиш и пресс-релизов.",
  },
] as const;

/** Скелет карточек кейсов — заменить на фильтрованную выборку из CMS/data. */
const PORTFOLIO_CASES = [
  {
    slug: "nastezh",
    artist: "Настежь",
    label: null,
    task: "Музыкальный клип",
    duration: null,
    formats: null,
  },
  {
    slug: "neil-shery",
    artist: "Нэйл Шери",
    label: null,
    task: "Музыкальный клип",
    duration: null,
    formats: null,
  },
] as const;

const COMPLIANCE_SECTIONS = [
  {
    title: "Подготовка и планирование (Pre-Production)",
    items: [
      {
        label: "График производства под премьеру",
        text: "Расчет сроков съемок и пост-продакшна с запасом по времени к запланированной дате премьеры клипа и старту PR-кампании.",
      },
      {
        label: "Концепт и раскадровка",
        text: "Утверждение визуала, локаций, актеров и стилистики до старта съемок для защиты от превышения бюджета.",
      },
      {
        label: "Смета с лимитами",
        text: "Фиксация расходов по каждому цеху (костюмы, грим, свет, локации) на этапе подготовки.",
      },
    ],
  },
  {
    title: "Организация съемок (Production)",
    items: [
      {
        label: "Контроль съемочного плана",
        text: "Ведение съемки по утвержденному календарно-постановочному плану (КПП) без риска сорвать смену.",
      },
      {
        label: "Оперативный отсмотр",
        text: "Согласование дублей с артистом и менеджментом прямо на площадке.",
      },
    ],
  },
  {
    title: "Пост-продакшн (Post-Production)",
    items: [
      {
        label: "Регламент согласований",
        text: "Раздельное утверждение видеоряда, цветокоррекции и компьютерной графики (VFX) по утвержденному календарю.",
      },
      {
        label: "Таймкод-комментарии",
        text: "Сбор правок от артиста и лейбла в единой системе для исключения путаницы в версиях.",
      },
    ],
  },
  {
    title: "Юридическая очистка прав (Legal Compliance)",
    items: [
      {
        label: "Отчуждение прав",
        text: "Полное юридическое отчуждение исключительных прав от режиссера, оператора, актеров и съемочной группы в пользу лейбла или артиста.",
      },
      {
        label: "B2B-документооборот",
        text: "Договорная работа с юридическими лицами и ИП, работа по ЭДО, полный комплект актов для бухгалтерии.",
      },
    ],
  },
] as const;

export default function VideoklipPage() {
  return (
    <div className={styles.page}>
      <JsonLd
        nodes={serviceJsonLd({
          path: SERVICE_PATH,
          name: SERVICE_NAME,
          description: SERVICE_DESCRIPTION,
          breadcrumbLabel: "Видеоклип",
        })}
      />
      <ServiceHero
        meta="[ SERVICES / ВИДЕОКЛИП ]"
        title={SERVICE_NAME}
        titleId="music-video-hero-heading"
        description={SERVICE_DESCRIPTION}
        ctaLabel="Заказать видеоклип"
        service="music-video"
        guarantees={B2B_GUARANTEES}
      />

      {/* Блок 2: Кейсы */}
      <section
        className={styles.section}
        aria-labelledby="music-video-portfolio-heading"
      >
        <Container>
          <MetaText text="[ PORTFOLIO / MUSIC VIDEOS ]" className={styles.meta} />
          <Headline id="music-video-portfolio-heading" className={styles.h2}>
            Музыкальные клипы
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
                      {item.artist}
                      {item.label ? (
                        <span className={styles.caseAgency}>
                          {" "}
                          / {item.label}
                        </span>
                      ) : null}
                    </h3>
                    <p className={styles.caseTask}>{item.task}</p>
                    {item.duration || item.formats ? (
                      <p className={styles.caseFormats}>
                        {[item.duration, item.formats]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
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
        aria-labelledby="music-video-risks-heading"
      >
        <Container>
          <MetaText text="[ B2B / COMPLIANCE ]" className={styles.meta} />
          <Headline id="music-video-risks-heading" className={styles.h2}>
            Контроль рисков лейблов и продюсерских центров
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
        aria-labelledby="music-video-formats-heading"
      >
        <Container>
          <MetaText text="[ FORMATS / DELIVERABLES ]" className={styles.meta} />
          <Headline id="music-video-formats-heading" className={styles.h2}>
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
        aria-labelledby="music-video-compliance-heading"
      >
        <Container>
          <MetaText text="[ PROCESS / LEGAL ]" className={styles.meta} />
          <Headline id="music-video-compliance-heading" className={styles.h2}>
            Регламент производства музыкальных клипов и юридические стандарты
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
