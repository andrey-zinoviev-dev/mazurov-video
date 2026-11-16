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

const SERVICE_NAME = "Съемка обучающих видео, мастер-классов и лекций";
const SERVICE_DESCRIPTION =
  "Видео помогает освоить навык и повторить действие самостоятельно — компания получает инструмент обучения, а не архив выступлений.";
const SERVICE_PATH = "/services/master-classes/";

export const metadata: Metadata = {
  title: "Съемка обучающих видео, мастер-классов и лекций | B2B Продакшн Москва",
  description: SERVICE_DESCRIPTION,
  alternates: {
    canonical: SERVICE_PATH,
  },
  openGraph: {
    title:
      "Съемка обучающих видео, мастер-классов и лекций | B2B Продакшн Москва",
    description: SERVICE_DESCRIPTION,
    url: SERVICE_PATH,
    type: "website",
  },
};

const B2B_GUARANTEES = [
  {
    title: "Учебный план до съёмки",
    description: "Фиксируем результат урока, шаги и нужные демонстрации.",
  },
  {
    title: "Действия крупным планом",
    description: "Отдельно снимаем руки, инструменты и результат операции.",
  },
  {
    title: "Проверка перед публикацией",
    description: "Удаляем из записи пароли, уведомления и внутренние данные.",
  },
] as const;

const RISK_MATRIX = [
  {
    pain: "Эксперт хорошо знает тему, но материал не выстроен как обучение: после просмотра сотрудник понимает идеи, но не может выполнить задачу.",
    solution:
      "Методическая редактура до съемки. Формулируем результат обучения, последовательность действий, контрольные точки, типичные ошибки и практический пример для каждого блока.",
  },
  {
    pain: "Ключевое действие показано с неподходящего ракурса или перекрыто спикером, а повторить демонстрацию уже нельзя.",
    solution:
      "Карта демонстрации и репетиция процедуры. Для каждого шага назначаются общий и крупный планы, отдельная камера на рабочую зону и обязательные вставки; оператор отмечает получение критичных кадров.",
  },
  {
    pain: "Курс быстро устаревает после изменения продукта, регламента или интерфейса, и ради одной правки приходится переснимать длинный выпуск.",
    solution:
      "Модульная запись. Независимые смысловые блоки, чистые входы и выходы, отдельные демонстрации экрана и версионирование позволяют заменить конкретный фрагмент без пересъемки всей лекции.",
  },
  {
    pain: "В кадр или демонстрацию экрана попадают персональные данные, внутренняя система или информация клиента, которую нельзя публиковать.",
    solution:
      "Контент-аудит демонстраций. Используем тестовые аккаунты и обезличенные данные, заранее проверяем экраны и документы, а чувствительные зоны отмечаем для замены или маскирования на пост-продакшне.",
  },
] as const;

const PORTFOLIO_CASES = [
  {
    slug: "lekciya-mobilnaya-razrabotka",
    title: "Лекция по мобильной разработке",
    task: "Типовая трансляция лекции из конференц-зала с несколькими камерами и захватом презентации спикера",
  },
  {
    slug: "mk-prepodavateli-informatiki",
    title: "МК для преподавателей информатики",
    task: "Типовая трансляция лекции из переговорной с одной камерой, светом и подготовкой оборудования для презентации или лайв-кодинга",
  },
  {
    slug: "lekcii-dlya-shkolnikov",
    title: "Лекции для школьников",
    task: "Запись лекции для школьников",
  },
] as const;

const FORMAT_MATRIX = [
  {
    format: "Полная версия программы",
    specs:
      "Готовую запись с обработанным звуком, демонстрациями, презентациями и поясняющей графикой.",
    purpose:
      "Публикация на образовательной платформе, внутреннее обучение или продажа программы.",
  },
  {
    format: "Отдельные уроки",
    specs: "Материал, разделённый на самостоятельные тематические модули.",
    purpose:
      "Последовательное прохождение курса и обновление отдельных разделов.",
  },
  {
    format: "Субтитры и расшифровка",
    specs:
      "Текстовую расшифровку и синхронизированные файлы субтитров.",
    purpose:
      "Доступность, поиск по материалу и подготовка языковых версий.",
  },
] as const;

const COMPLIANCE_SECTIONS = [
  {
    title: "Подготовка (Pre-Production)",
    items: [
      {
        label: "Разделение на съемочные блоки",
        text: "Материал заранее делится на самостоятельные разделы, чтобы отдельный фрагмент можно было переснять или обновить без повторной записи всей программы.",
      },
      {
        label: "Карта демонстраций",
        text: "Для каждого практического действия определяем необходимую крупность, положение камеры и момент переключения на детальный план.",
      },
      {
        label: "Отдельный захват экрана",
        text: "Интерфейсы и программы записываются напрямую в исходном разрешении, а не снимаются камерой с монитора.",
      },
      {
        label: "Техническая репетиция",
        text: "Проверяем, что руки, инструменты, материалы, экран и результат действия одновременно остаются видимыми и читаемыми.",
      },
    ],
  },
  {
    title: "Съемка (Production)",
    items: [
      {
        label: "Многоплановая запись",
        text: "Общий план преподавателя, крупные планы действий и захват экрана записываются синхронно.",
      },
      {
        label: "Резервная запись речи",
        text: "Звук с основного микрофона дублируется отдельным рекордером.",
      },
      {
        label: "Контроль полноты демонстрации",
        text: "После каждого съемочного блока проверяем, что записаны все этапы действия и его итоговый результат.",
      },
      {
        label: "Маркировка повторных дублей",
        text: "Удачные и технически испорченные дубли отмечаются на съемке, чтобы не перепутать их при сборке большого курса.",
      },
    ],
  },
  {
    title: "Пост-продакшн",
    items: [
      {
        label: "Синхронизация ракурсов",
        text: "Общий план, крупные детали и запись экрана сводятся в единую последовательность без пропуска этапов демонстрации.",
      },
      {
        label: "Увеличение критических деталей",
        text: "Мелкие элементы интерфейса, маркировки и действия дополнительно выделяются кадрированием или графическими указателями.",
      },
      {
        label: "Контроль экранной информации",
        text: "Случайно попавшие в запись уведомления, личные данные и служебная информация удаляются или маскируются.",
      },
      {
        label: "Проверка субтитров",
        text: "Субтитры сверяются со звуком и утверждённым написанием профессиональных терминов.",
      },
    ],
  },
  {
    title: "Юридическая очистка",
    items: [
      {
        label: "Производственные материалы",
        text: "Добавленные продакшеном музыка, графика, иллюстрации и стоковые элементы используются по лицензии.",
      },
      {
        label: "Права производственной команды",
        text: "Работа операторов, монтажёров, дизайнеров и других привлечённых специалистов оформляется договорами.",
      },
      {
        label: "Передача прав",
        text: "Права на созданное видео и графическое оформление передаются в установленном договором объёме.",
      },
    ],
  },
] as const;

export default function MasterClassesPage() {
  return (
    <div className={styles.page}>
      <JsonLd
        nodes={serviceJsonLd({
          path: SERVICE_PATH,
          name: SERVICE_NAME,
          description: SERVICE_DESCRIPTION,
          breadcrumbLabel: "Мастер-классы / лекции",
        })}
      />

      <ServiceHero
        meta="[ SERVICES / МАСТЕР-КЛАССЫ ]"
        title={SERVICE_NAME}
        titleId="master-classes-hero-heading"
        description={SERVICE_DESCRIPTION}
        ctaLabel="Обсудить проект"
        service="master-classes"
        guarantees={B2B_GUARANTEES}
      />

      <section
        className={styles.section}
        aria-labelledby="master-classes-portfolio-heading"
      >
        <Container>
          <MetaText text="[ PORTFOLIO / EDUCATION ]" className={styles.meta} />
          <Headline id="master-classes-portfolio-heading" className={styles.h2}>
            Снятые мастер-классы и лекции
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
        aria-labelledby="master-classes-risks-heading"
      >
        <Container>
          <MetaText text="[ B2B / COMPLIANCE ]" className={styles.meta} />
          <Headline id="master-classes-risks-heading" className={styles.h2}>
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
        aria-labelledby="master-classes-formats-heading"
      >
        <Container>
          <MetaText text="[ FORMATS / DELIVERABLES ]" className={styles.meta} />
          <Headline id="master-classes-formats-heading" className={styles.h2}>
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
        aria-labelledby="master-classes-compliance-heading"
      >
        <Container>
          <MetaText text="[ PROCESS / LEGAL ]" className={styles.meta} />
          <Headline
            id="master-classes-compliance-heading"
            className={styles.h2}
          >
            Регламент производства мастер-классов и лекций и юридический
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
