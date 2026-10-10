import type { Metadata } from "next";
import { Golos_Text, IBM_Plex_Mono, Roboto_Condensed } from "next/font/google";
import { AnalyticsConsent } from "@/components/CookieConsent/AnalyticsConsent";
import { AppHeader } from "@/components/AppHeader/AppHeader";
import { getYandexMetricaId } from "@/lib/metrica/config";
import "./globals.css";

const YANDEX_METRICA_ID = getYandexMetricaId();

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin", "cyrillic"],
  weight: ["700"],
  variable: "--font-headline",
});

const golosText = Golos_Text({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Mazurov production",
  description: "Видеопродакшн полного цикла",
  metadataBase: new URL("https://mazurov-prod.ru"),
  openGraph: {
    siteName: "Mazurov production",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${golosText.variable} ${robotoCondensed.variable} ${ibmPlexMono.variable}`}
    >
      <body className={golosText.className}>
        <AnalyticsConsent
          metricaId={YANDEX_METRICA_ID}
          enableMetrica={YANDEX_METRICA_ID !== null}
        >
          <AppHeader />
          {children}
        </AnalyticsConsent>
      </body>
    </html>
  );
}
