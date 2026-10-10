import { Container } from "@/components/Container/Container";
import { MetaText } from "@/components/MetaText/MetaText";
import { SectionSplit } from "@/components/SectionSplit/SectionSplit";
import { SplitList } from "@/components/SplitList/SplitList";
import { Headline } from "@/components/Typography/Headline";
import { SERVICES } from "@/data/services";
import styles from "./Services.module.css";

export function Services() {
  const items = SERVICES.map((service) => ({
    id: service.title,
    label: <h3 className={styles.itemTitle}>{service.title}</h3>,
    detail: (
      <ul className={styles.tags} aria-label={`${service.title} детали`}>
        {service.items.map((item) => (
          <li key={item} className={styles.tag}>
            {item}
          </li>
        ))}
      </ul>
    ),
  }));

  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <Container className={styles.inner}>
        <MetaText text="[ WHAT WE CAN DO ]" className={styles.metaText} />

        <SectionSplit
          aside={
            <header>
              <Headline id="services-heading" className={styles.heading}>
                Услуги
              </Headline>
            </header>
          }
        >
          <SplitList items={items} aria-label="Услуги" />
        </SectionSplit>
      </Container>
    </section>
  );
}
