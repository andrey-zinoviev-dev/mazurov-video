import { Container } from "@/components/Container/Container";
import styles from "./Principles.module.css";

type PrincipleColumn = {
  code: string;
  title: string;
  description: string;
};

const COLUMNS: PrincipleColumn[] = [
  {
    code: "PRN_001",
    title: "Исключение случайностей",
    description:
      "70% работы на этапе препродакшена. Вы знаете, что будет в кадре еще до съемок.",
  },
  {
    code: "PRN_002",
    title: "Жесткая смета",
    description:
      "Бюджет фиксируется в договоре. Итоговая стоимость не вырастет ни на рубль.",
  },
  {
    code: "PRN_003",
    title: "Дисциплина таймлайна",
    description:
      "Черновая сборка и финальный мастер строго по графику. Понимаем дедлайны.",
  },
  {
    code: "PRN_004",
    title: "Повторный выбор",
    description:
      "90% наших клиентов работают с нами годами. Проектируем процессы надолго.",
  },
];

/* Previous layout (4-column grid + rail labels) — kept for reference; may be restored later.
const RAIL_LABELS = [
  { top: "AXIS_Y", mid: "GRID_DATA", bot: "PRN_STRUCT_01" },
  { top: "GRID_DATA", mid: "AXIS_Y", bot: "PRN_STRUCT_01" },
  { top: "PRN_STRUCT_01", mid: "GRID_DATA", bot: "AXIS_Y" },
] as const;

function PrinciplesPreviousLayout() {
  return (
    <section className={styles.section} aria-labelledby="principles-heading">
      <Container className={styles.inner}>
        <h2 id="principles-heading" className={styles.heading}>
          Принципы работы
        </h2>
        <ul className={styles.gridBody}>
          {COLUMNS.map((col, index) => (
            <li key={col.code} className={styles.cell}>
              {index < RAIL_LABELS.length ? (
                <div className={styles.rail} aria-hidden>
                  <span
                    className={`${styles.vLabel} ${styles.vLabelTop}`}
                  >
                    {RAIL_LABELS[index].top}
                  </span>
                  <span
                    className={`${styles.vLabel} ${styles.vLabelMid}`}
                  >
                    {RAIL_LABELS[index].mid}
                  </span>
                  <span
                    className={`${styles.vLabel} ${styles.vLabelBot}`}
                  >
                    {RAIL_LABELS[index].bot}
                  </span>
                </div>
              ) : null}
              <span className={styles.code}>{col.code}</span>
              <h3 className={styles.title}>{col.title}</h3>
              <p className={styles.desc}>{col.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
*/

export function Principles() {
  return (
    <section className={styles.section} aria-labelledby="principles-heading">
      <Container className={styles.inner}>
        <div className={styles.split}>
          <header className={styles.headlineCol}>
            <h2 id="principles-heading" className={styles.heading}>
              Принципы работы
            </h2>
            
          </header>
          <div>
            <p className={styles.intro}>
              Каждый проект уникален и может иметь свои нюансы, поэтому детали
              процесса мы подстраиваем под задачу.
            </p>
            <ul className={styles.stagesList}>
            {COLUMNS.map((col, index) => (
              <li key={col.code} className={styles.stageRow}>
                <span className={styles.index} aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.stageTitle}>{col.title}</h3>
                <p className={styles.stageDesc}>{col.description}</p>
              </li>
            ))}
          </ul>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
