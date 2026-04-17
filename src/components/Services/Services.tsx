import { Container } from "@/components/Container/Container";
import styles from "./Services.module.css";
import { MetaText } from "../MetaText/MetaText";
import { Headline } from "../Typography/Headline";

type ServiceRow = {
  title: string;
  items: string[];
};

const SERVICES: ServiceRow[] = [
  {
    title: "Съемка",
    items: ["Интервью", "Рекламные ролики", "Контент-съемка"],
  },
  {
    title: "Звукорежиссура",
    items: ["Запись", "Редактирование", "Мастеринг"],
  },
  {
    title: "Монтаж",
    items: ["Черновая сборка", "Финальный монтаж", "Адаптации"],
  },
  {
    title: "Графика",
    items: ["Титры", "2D/3D элементы", "Анимация"],
  },
  {
    title: "Пред-продакшн",
    items: ["Бриф", "Сценарий", "План съемок"],
  },
  {
    title: "Пост-продакшн",
    items: ["Колор", "Звук", "Мастеринг"],
  },
];

export function Services() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <Container className={styles.inner}>
        <MetaText text="[ WHAT WE CAN DO ]" className={styles.metaText} />

        <div className={styles.split}>
          
          <header className={styles.headlineCol}>

            <Headline id="services-heading" className={styles.heading}>
              Услуги
            </Headline>
          </header>
          <div>
            {/* <MetaText text="WHAT WE CAN DO" /> */}
            {/* <p className={styles.eyebrow}>What we can do</p> */}
            <ul className={styles.stagesList}>
              {SERVICES.map((service) => (
                <li key={service.title} className={styles.stageRow}>
                  <h3 className={styles.stageTitle}>{service.title}</h3>
                  <ul className={styles.stageTags} aria-label={`${service.title} детали`}>
                    {service.items.map((item) => (
                      <li key={item} className={styles.stageTag}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
