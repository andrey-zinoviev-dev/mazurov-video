import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/Container/Container";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { MetaText } from "@/components/MetaText/MetaText";
import { SectionSplit } from "@/components/SectionSplit/SectionSplit";
import { SplitList } from "@/components/SplitList/SplitList";
import { PageTitle } from "@/components/Typography/PageTitle";
import { SERVICES } from "@/data/services";
import { aboutJsonLd } from "@/lib/jsonld/builders";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "О нас — Mazurov production",
  description: "О студии Mazurov production",
  alternates: {
    canonical: "/about/",
  },
};

const STRIP = [
  {
    src: "/MPreviews/nail shary/cover.jpg",
    alt: "Кадр из клипа Neil Shary",
    label: "01 / Neil Shary",
  },
  {
    src: "/MPreviews/nastezh/cover.jpg",
    alt: "Кадр из клипа Nastezh",
    label: "02 / Nastezh",
  },
  {
    src: "/MPreviews/bookmate/cover.jpg",
    alt: "Кадр из рекламы Букмейт",
    label: "03 / Bookmate",
  },
  {
    src: "/MPreviews/avito/cover.jpg",
    alt: "Кадр из проекта Avito Путешествия",
    label: "04 / Avito",
  },
  {
    src: "/MPreviews/kish/cover.jpg",
    alt: "Кадр из проекта Наследие Короля и Шута",
    label: "05 / КиШ",
  },
  {
    src: "/MPreviews/YAM/cover.jpg",
    alt: "Кадр концертной съёмки",
    label: "06 / Концерт",
  },
] as const;

const ABOUT_SERVICE_ITEMS = SERVICES.map((service) => ({
  id: service.title,
  label: <h3 className={styles.serviceTitle}>{service.title}</h3>,
  detail: <p className={styles.servicePromo}>{service.promo}</p>,
}));

const GEO_FACTS = [
  { value: "6", label: "стран съёмок" },
  { value: "40+", label: "городов" },
  { value: "12", label: "лет в индустрии" },
  { value: "РФ · СНГ", label: "основной регион" },
] as const;

const B2B_ITEMS = [
  {
    title: "ЭДО",
    detail:
      "Документооборот через Диадок / СБИС. Акты, счета и договоры — в контуре заказчика.",
  },
  {
    title: "Безнал",
    detail:
      "Работа по договору с юрлицом. Постоплата и этапы оплаты под регламент тендера.",
  },
  {
    title: "НДС",
    detail:
      "Счета с НДС. Закрывашка и УПД под требования бухгалтерии и закупок.",
  },
  {
    title: "Тендеры",
    detail:
      "Участие в закупках крупных брендов и агентств. Фиксированная смета без скрытых доплат.",
  },
] as const;

const B2B_LIST_ITEMS = B2B_ITEMS.map((item) => ({
  id: item.title,
  label: <h3 className={styles.serviceTitle}>{item.title}</h3>,
  detail: <p className={styles.servicePromo}>{item.detail}</p>,
}));

export default function AboutPage() {
  return (
    <>
      <JsonLd nodes={aboutJsonLd()} />
      <section className={styles.hero} aria-label="О нас">
        <Container className={styles.introWrap}>
          <header className={styles.intro}>
            <MetaText text="О нас" className={styles.label} />

            <PageTitle className={styles.headline}>
              <span>Наш подход</span>
              <span>к продакшну</span>
            </PageTitle>

            <p className={styles.body}>
              Команда операторов, монтажёров и продюсеров. Концепция с нуля или
              ваш готовый скрипт — снимаем по всей России и СНГ.
            </p>
          </header>
        </Container>

        <ul className={styles.strip} aria-label="Кадры из проектов">
          {STRIP.map((item) => (
            <li key={item.src} className={styles.stripItem}>
              <figure className={styles.figure}>
                <div className={styles.frame}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 899px) 42vw, 20vw"
                    className={styles.image}
                  />
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.services} aria-labelledby="about-services-heading">
        <Container>
          <MetaText text="[ WHAT WE CAN DO ]" className={styles.servicesMeta} />

          <SectionSplit
            aside={
              <header className={styles.servicesAside}>
                <h2 id="about-services-heading" className={styles.servicesHeading}>
                  Услуги
                </h2>
                <p className={styles.servicesBridge}>
                  Полный цикл производства — от брифа и препродакшна до
                  финального мастера. Берём на себя съёмку, звук, монтаж и
                  графику, чтобы вы получали готовый материал под нужные каналы.
                </p>
              </header>
            }
          >
            <SplitList items={ABOUT_SERVICE_ITEMS} aria-label="Услуги" />
          </SectionSplit>
        </Container>
      </section>

      <section className={styles.geo} aria-labelledby="about-geo-heading">
        <Container>
          <MetaText text="[ WHERE WE SHOOT ]" className={styles.servicesMeta} />

          <SectionSplit
            aside={
              <header className={styles.servicesAside}>
                <h2 id="about-geo-heading" className={styles.servicesHeading}>
                  География
                </h2>
                <p className={styles.servicesBridge}>
                  База — Россия и СНГ. Выезжаем на локации под проект: от
                  столиц до регионов, без привязки к одной студии.
                </p>
              </header>
            }
          >
            <ul className={styles.geoFacts} aria-label="Факты о географии">
              {GEO_FACTS.map((fact) => (
                <li key={fact.label} className={styles.geoFact}>
                  <span className={styles.geoValue}>{fact.value}</span>
                  <span className={styles.geoLabel}>{fact.label}</span>
                </li>
              ))}
            </ul>
          </SectionSplit>
        </Container>
      </section>

      <section className={styles.b2b} aria-labelledby="about-b2b-heading">
        <Container>
          <MetaText text="[ B2B / PROCUREMENT ]" className={styles.servicesMeta} />

          <SectionSplit
            aside={
              <header className={styles.servicesAside}>
                <h2 id="about-b2b-heading" className={styles.servicesHeading}>
                  Тендеры и B2B
                </h2>
                <p className={styles.servicesBridge}>
                  Работаем с крупными заказчиками и закупочными контурами:
                  юридически чисто, с понятной сметой и сроками закрытия.
                </p>
              </header>
            }
          >
            <SplitList items={B2B_LIST_ITEMS} aria-label="Условия для B2B" />
          </SectionSplit>
        </Container>
      </section>
    </>
  );
}
