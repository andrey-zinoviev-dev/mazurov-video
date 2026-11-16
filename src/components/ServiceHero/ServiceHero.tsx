import { Container } from "@/components/Container/Container";
import { ContactCtaLink } from "@/components/Metrica/ContactCtaLink";
import { MetaText } from "@/components/MetaText/MetaText";
import { PageTitle } from "@/components/Typography/PageTitle";
import { Paragraph } from "@/components/Typography/Paragraph";
import type { ServiceGoalParam } from "@/lib/metrica/goals";
import styles from "./ServiceHero.module.css";

export type ServiceHeroGuarantee = {
  title: string;
  description: string;
};

type ServiceHeroProps = {
  meta: string;
  title: string;
  titleId: string;
  description: string;
  ctaLabel: string;
  service: ServiceGoalParam;
  guarantees: readonly ServiceHeroGuarantee[];
};

export function ServiceHero({
  meta,
  title,
  titleId,
  description,
  ctaLabel,
  service,
  guarantees,
}: ServiceHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby={titleId}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <MetaText text={meta} className={styles.meta} />
          <PageTitle id={titleId} className={styles.title}>
            {title}
          </PageTitle>
          <Paragraph className={styles.lead}>{description}</Paragraph>
          <ContactCtaLink
            from="service_cta"
            service={service}
            className={styles.cta}
          >
            {ctaLabel}
          </ContactCtaLink>
        </div>

        <ul className={styles.guarantees} aria-label="Ключевые условия">
          {guarantees.map((item) => (
            <li key={item.title} className={styles.guarantee}>
              <span className={styles.guaranteeTitle}>{item.title}</span>
              <span className={styles.guaranteeDesc}>{item.description}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
