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

const RAIL_LABELS = [
  { top: "AXIS_Y", mid: "GRID_DATA", bot: "PRN_STRUCT_01" },
  { top: "GRID_DATA", mid: "AXIS_Y", bot: "PRN_STRUCT_01" },
  { top: "PRN_STRUCT_01", mid: "GRID_DATA", bot: "AXIS_Y" },
] as const;

export function Principles() {
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
