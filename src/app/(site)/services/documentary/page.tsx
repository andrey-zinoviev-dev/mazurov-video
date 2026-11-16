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

const SERVICE_NAME =
  "Производство документальных фильмов для компаний и брендов";
const SERVICE_DESCRIPTION =
  "Самостоятельное документальное высказывание от лица бренда — история, интересная зрителю и за пределами корпоративной повестки.";
const SERVICE_PATH = "/services/documentary/";

export const metadata: Metadata = {
  title:
    "Производство документальных фильмов для компаний | B2B Продакшн Москва",
  description: SERVICE_DESCRIPTION,
  alternates: {
    canonical: SERVICE_PATH,
  },
  openGraph: {
    title:
      "Производство документальных фильмов для компаний | B2B Продакшн Москва",
    description: SERVICE_DESCRIPTION,
    url: SERVICE_PATH,
    type: "website",
  },
};

const B2B_GUARANTEES = [
  {
    title: "Структура до монтажа",
    description: "Согласуем текстовый план фильма до чистового монтажа.",
  },
  {
    title: "Съёмка вне интервью",
    description: "Снимаем действия героев, их окружение и детали истории.",
  },
  {
    title: "Документы к фильму",
    description: "Передаём реестр прав на архивные кадры и музыку.",
  },
] as const;

const RISK_MATRIX = [
  {
    pain: "Герои отвечают формально, говорят корпоративными штампами или не раскрывают историю — значительная часть интервью оказывается непригодной для фильма.",
    solution:
      "До съемки проводим предварительные интервью. Редактор определяет темы и противоречия, а режиссер строит беседу так, чтобы получать самостоятельные и понятные ответы, пригодные для монтажа.",
  },
  {
    pain: "Фильм состоит из одних «говорящих голов»: продакшн записал интервью, но не снял действия, рабочие процессы, среду и детали, раскрывающие слова героев.",
    solution:
      "Для каждого смыслового блока заранее составляем список необходимых сцен и деталей. Помимо интервью снимаем наблюдательный материал с согласованным доступом — без скрытой съемки.",
  },
  {
    pain: "Из десятков часов материала не складывается цельная история: фильм получается затянутым, фрагментарным и требует бесконечных перестановок на монтаже.",
    solution:
      "Интервью расшифровываем, материал систематизируем по темам и героям. До полноценного монтажа собираем текстовую структуру фильма — paper edit — с последовательностью сцен и цитат.",
  },
  {
    pain: "Фильм создает репутационные риски для бренда: монтаж неоправданно акцентирует внутренние проблемы, конфликтные высказывания или неблагоприятные детали компании.",
    solution:
      "До съемки фиксируем тему, допустимые смысловые границы и чувствительные вопросы. Потенциально рискованные эпизоды отмечает продюсер, а черновой монтаж проходит содержательное согласование с ответственным представителем заказчика.",
  },
  {
    pain: "В фильме остаются неверные даты, должности, цифры, названия, технологические процессы или исторические сведения.",
    solution:
      "Все проверяемые утверждения заносим в реестр с источниками. Титры, цифры и профильные сведения перед финальной сборкой подтверждает ответственный эксперт со стороны заказчика; продакшн организует и контролирует проверку.",
  },
  {
    pain: "В монтаж попадают архивные фотографии, хроника, публикации или музыка без подтвержденных прав либо в качестве, непригодном для финального фильма.",
    solution:
      "До монтажа проверяем происхождение, техническое качество и условия использования каждого материала. Ведем реестр лицензий и разрешений; неподходящие материалы восстанавливаем, лицензируем или заменяем собственной съемкой и графикой.",
  },
] as const;

const PORTFOLIO_CASES = [
  {
    slug: "te-kto-pishut-hity",
    title: "«Те, кто пишут хиты»",
    task: "Документальный фильм для Яндекс Музыки про российских саунд-продюсеров",
  },
  {
    slug: "kulturny-marafon-2025",
    title: "Культурный Марафон 2025",
    task: "Съемки в рамках проекта «Культурный Марафон» по инициативе Министерства культуры РФ и Яндекс Книг",
  },
  {
    slug: "nasledie-korolya-i-shuta",
    title: "Наследие Короля и Шута",
    task: null,
  },
  {
    slug: "8-bit",
    title: "8 БИТ",
    task: "Серия документальных фильмов для ЯОбразования про современные технологии",
  },
] as const;

const FORMAT_MATRIX = [
  {
    format: "Финальный документальный фильм",
    specs:
      "Готовый мастер в согласованном разрешении с цветокоррекцией, графикой и сведённым звуком.",
    purpose:
      "Публикация на видеоплатформах, корпоративных ресурсах и проведение специальных показов.",
  },
  {
    format: "Трейлеры и короткие версии (16:9 / 9:16)",
    specs:
      "Короткие ролики, собранные из утверждённых эпизодов фильма.",
    purpose:
      "Анонс премьеры, PR-кампания, публикации в соцсетях и СМИ.",
  },
  {
    format: "Пакет для локализации",
    specs:
      "Версия без встроенных субтитров, расшифровка речи и файлы субтитров.",
    purpose:
      "Перевод фильма и подготовка дополнительных языковых версий.",
  },
] as const;

const COMPLIANCE_SECTIONS = [
  {
    title: "Подготовка (Pre-Production)",
    items: [
      {
        label: "Предварительные интервью",
        text: "До съемки определяем основные темы разговора и готовим вопросы, позволяющие получить конкретные ответы вместо общих формулировок.",
      },
      {
        label: "План визуального материала",
        text: "Для каждой темы предусматриваем действия, процессы, локации и детали, которыми в монтаже будут подкрепляться слова героев.",
      },
      {
        label: "План использования архивов",
        text: "До начала монтажа определяем, какие фрагменты требуют архивных кадров, фотографий или документов.",
      },
    ],
  },
  {
    title: "Съемка (Production)",
    items: [
      {
        label: "Документальное наблюдение",
        text: "Помимо интервью снимаем героев в реальной среде и процессе, чтобы фильм не состоял только из «говорящих голов».",
      },
      {
        label: "Раздельная запись речи",
        text: "Интервью записываются на отдельные микрофоны с резервной звуковой дорожкой.",
      },
      {
        label: "DIT-протокол",
        text: "После каждого съемочного дня создаются резервные копии с проверкой целостности файлов.",
      },
    ],
  },
  {
    title: "Монтаж (Post-Production)",
    items: [
      {
        label: "Расшифровка с таймкодами",
        text: "Интервью переводятся в текст, чтобы при большом объёме исходников не потерять важные высказывания.",
      },
      {
        label: "Бумажный монтаж",
        text: "Сюжетная структура сначала собирается из расшифровок и только после этого переносится в видеомонтаж.",
      },
      {
        label: "Отдельное утверждение структуры",
        text: "Последовательность тем и эпизодов фиксируется до цветокоррекции, графики и сведения звука.",
      },
    ],
  },
  {
    title: "Юридическая очистка",
    items: [
      {
        label: "Архивы и музыка",
        text: "Добавленные продакшеном архивные кадры, фотографии, музыка и стоковые материалы используются только в пределах оформленных лицензий.",
      },
      {
        label: "Права производственной команды",
        text: "Договоры с авторами и съемочной группой предусматривают передачу необходимых прав на созданный материал.",
      },
      {
        label: "Права на итоговый фильм",
        text: "Объём передаваемых прав и ограничения сторонних лицензий фиксируются в договоре.",
      },
    ],
  },
] as const;

export default function DocumentaryPage() {
  return (
    <div className={styles.page}>
      <JsonLd
        nodes={serviceJsonLd({
          path: SERVICE_PATH,
          name: SERVICE_NAME,
          description: SERVICE_DESCRIPTION,
          breadcrumbLabel: "Документальные фильмы",
        })}
      />

      <ServiceHero
        meta="[ SERVICES / ДОКУМЕНТАЛЬНЫЕ ФИЛЬМЫ ]"
        title={SERVICE_NAME}
        titleId="documentary-hero-heading"
        description={SERVICE_DESCRIPTION}
        ctaLabel="Обсудить проект"
        service="documentary"
        guarantees={B2B_GUARANTEES}
      />

      <section
        className={styles.section}
        aria-labelledby="documentary-portfolio-heading"
      >
        <Container>
          <MetaText text="[ PORTFOLIO / DOCUMENTARY ]" className={styles.meta} />
          <Headline id="documentary-portfolio-heading" className={styles.h2}>
            Документальные фильмы
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
        aria-labelledby="documentary-risks-heading"
      >
        <Container>
          <MetaText text="[ B2B / COMPLIANCE ]" className={styles.meta} />
          <Headline id="documentary-risks-heading" className={styles.h2}>
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
        aria-labelledby="documentary-formats-heading"
      >
        <Container>
          <MetaText text="[ FORMATS / DELIVERABLES ]" className={styles.meta} />
          <Headline id="documentary-formats-heading" className={styles.h2}>
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
        aria-labelledby="documentary-compliance-heading"
      >
        <Container>
          <MetaText text="[ PROCESS / LEGAL ]" className={styles.meta} />
          <Headline id="documentary-compliance-heading" className={styles.h2}>
            Регламент производства документальных фильмов и юридический
            комплаенс
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
