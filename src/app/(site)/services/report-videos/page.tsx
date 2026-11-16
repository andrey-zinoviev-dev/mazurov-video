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

const SERVICE_NAME = "Съемка отчетных роликов деловых и корпоративных мероприятий";
const SERVICE_DESCRIPTION =
  "Итоговое видео передаёт смысл события и его значение для компании — не набор ярких кадров, а содержательный итог мероприятия.";
const SERVICE_PATH = "/services/report-videos/";

export const metadata: Metadata = {
  title: "Съемка отчетных роликов мероприятий | B2B Продакшн Москва",
  description: SERVICE_DESCRIPTION,
  alternates: {
    canonical: SERVICE_PATH,
  },
  openGraph: {
    title: "Съемка отчетных роликов мероприятий | B2B Продакшн Москва",
    description: SERVICE_DESCRIPTION,
    url: SERVICE_PATH,
    type: "website",
  },
};

const B2B_GUARANTEES = [
  {
    title: "План работы камер",
    description: "Позиции и маршруты заранее согласуем с организатором.",
  },
  {
    title: "Съёмка по программе",
    description:
      "Ключевые блоки мероприятия закрываем по утверждённому плану.",
  },
  {
    title: "Проверка обязательных кадров",
    description:
      "Логотипы, титры и порядок гостей сверяем с согласованным списком.",
  },
] as const;

const RISK_MATRIX = [
  {
    pain: "В итоговом ролике нет обязательных логотипов, активаций или представителей партнеров, хотя их присутствие закреплено в спонсорских пакетах.",
    solution:
      "Матрица обязательного покрытия. Для каждого партнера фиксируем нужные планы, длительность, контекст и упоминания; режиссер и продюсер отмечают их получение прямо по ходу мероприятия.",
  },
  {
    pain: "Видео передает атмосферу, но не показывает, зачем мероприятие проводилось и какой результат получил бизнес.",
    solution:
      "Съемочный план привязывается к задачам события: ключевым тезисам, продуктовым анонсам, деловым результатам, отзывам и подтверждающим цифрам. Эти элементы становятся каркасом монтажа.",
  },
  {
    pain: "Неверный порядок VIP-гостей, спикеров или партнеров в монтаже создает протокольный конфликт внутри компании.",
    solution:
      "Протокольная карта до монтажа. Заказчик фиксирует приоритеты, написание должностей, обязательные и запрещенные сочетания кадров; редакционная версия сверяется с ответственным за протокол.",
  },
  {
    pain: "Съемочная группа мешает гостям, перекрывает обзор или попадает в закрытые зоны, создавая претензии к организатору.",
    solution:
      "План работы на площадке: разрешенные точки камер, маршруты операторов, пропуска, режим тихой съемки и связь с безопасностью и stage-менеджером. Критичные перемещения репетируются до открытия дверей.",
  },
] as const;

const PORTFOLIO_CASES = [
  {
    slug: "otchet-mitap-vremya",
    title: "Отчетный ролик митапа «Время»",
    task: null,
  },
  {
    slug: "otchet-shad-2026",
    title: "Отчетный ролик встречи преподавателей ШАД 2026",
    task: null,
  },
  {
    slug: "otchet-delo-v-reklame",
    title: "Отчетный ролик с конференции «Дело в рекламе»",
    task: null,
  },
  {
    slug: "otchet-yandex-museum",
    title: "Отчетный ролик с фестиваля Яндекс музея",
    task: null,
  },
  {
    slug: "otchet-yam-premiya",
    title: "Отчетный ролик с музыкальной премии ЯМузыки",
    task: null,
  },
] as const;

const FORMAT_MATRIX = [
  {
    format: "Основной отчётный ролик",
    specs:
      "Смонтированное видео с ключевыми эпизодами, выступлениями и атмосферой мероприятия.",
    purpose:
      "Публикация на корпоративных площадках и презентация прошедшего события.",
  },
  {
    format: "Короткие версии (16:9 / 9:16)",
    specs:
      "Короткие горизонтальные и вертикальные ролики из материала мероприятия.",
    purpose: "Социальные сети, PR и продвижение следующих мероприятий.",
  },
  {
    format: "Отдельные интервью и выступления",
    specs:
      "Смонтированные комментарии участников и фрагменты программы в согласованном составе.",
    purpose:
      "Публикации в СМИ, внутренние коммуникации и корпоративный архив.",
  },
] as const;

const COMPLIANCE_SECTIONS = [
  {
    title: "Подготовка (Pre-Production)",
    items: [
      {
        label: "Съемочный план по программе",
        text: "Для каждого ключевого эпизода заранее определяем операторскую позицию, крупность и способ записи звука.",
      },
      {
        label: "Распределение зон",
        text: "Операторы закрепляются за сценой, залом, участниками и дополнительными пространствами, чтобы важные события не остались без покрытия.",
      },
      {
        label: "Съемка под разные форматы",
        text: "В план включаются отдельные кадры для горизонтальных и вертикальных версий.",
      },
      {
        label: "Чек-лист обязательных элементов",
        text: "Выступления, церемонии, интервью, декорации и предусмотренные интеграции вносятся в рабочий список съемочной группы.",
      },
    ],
  },
  {
    title: "Съемка мероприятия (Production)",
    items: [
      {
        label: "Дублирование неповторимых моментов",
        text: "Ключевые выступления, награждения и открытия при необходимости снимаются одновременно с нескольких камер.",
      },
      {
        label: "Контроль чек-листа",
        text: "Выполнение обязательных кадров отмечается непосредственно во время мероприятия.",
      },
      {
        label: "Прямая запись звука",
        text: "Речь со сцены записывается с микшерного пульта и дублируется отдельным источником.",
      },
      {
        label: "Резервирование материала",
        text: "В течение мероприятия создаются резервные копии отснятых файлов.",
      },
    ],
  },
  {
    title: "Пост-продакшн",
    items: [
      {
        label: "Сохранение содержания события",
        text: "В основной версии используются разборчивые фрагменты выступлений и интервью, а не только музыкальная нарезка общих планов.",
      },
      {
        label: "Проверка покрытия",
        text: "Перед чистовой сборкой сверяем монтаж со съемочным чек-листом и предусмотренными интеграциями.",
      },
      {
        label: "Отдельный монтаж вертикальных версий",
        text: "Короткие ролики собираются из специально снятого материала с подходящей композицией кадра.",
      },
    ],
  },
  {
    title: "Юридическая очистка",
    items: [
      {
        label: "Материалы постпродакшна",
        text: "Музыка, графика и стоковые элементы, добавленные продакшеном, используются на основании лицензий.",
      },
      {
        label: "Права производственной команды",
        text: "Договоры с операторами, режиссёрами, монтажёрами и другими специалистами предусматривают передачу прав на результат.",
      },
      {
        label: "Права на итоговые ролики",
        text: "Условия использования созданных продакшеном материалов фиксируются в договоре.",
      },
    ],
  },
] as const;

export default function ReportVideosPage() {
  return (
    <div className={styles.page}>
      <JsonLd
        nodes={serviceJsonLd({
          path: SERVICE_PATH,
          name: SERVICE_NAME,
          description: SERVICE_DESCRIPTION,
          breadcrumbLabel: "Отчетные ролики",
        })}
      />

      <ServiceHero
        meta="[ SERVICES / ОТЧЕТНЫЕ РОЛИКИ ]"
        title={SERVICE_NAME}
        titleId="report-videos-hero-heading"
        description={SERVICE_DESCRIPTION}
        ctaLabel="Обсудить проект"
        service="report-videos"
        guarantees={B2B_GUARANTEES}
      />

      <section
        className={styles.section}
        aria-labelledby="report-videos-portfolio-heading"
      >
        <Container>
          <MetaText text="[ PORTFOLIO / REPORT ]" className={styles.meta} />
          <Headline id="report-videos-portfolio-heading" className={styles.h2}>
            Отчетные ролики с мероприятий
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
        aria-labelledby="report-videos-risks-heading"
      >
        <Container>
          <MetaText text="[ B2B / COMPLIANCE ]" className={styles.meta} />
          <Headline id="report-videos-risks-heading" className={styles.h2}>
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
        aria-labelledby="report-videos-formats-heading"
      >
        <Container>
          <MetaText text="[ FORMATS / DELIVERABLES ]" className={styles.meta} />
          <Headline id="report-videos-formats-heading" className={styles.h2}>
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
        aria-labelledby="report-videos-compliance-heading"
      >
        <Container>
          <MetaText text="[ PROCESS / LEGAL ]" className={styles.meta} />
          <Headline id="report-videos-compliance-heading" className={styles.h2}>
            Регламент производства отчётных роликов и юридический комплаенс
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
