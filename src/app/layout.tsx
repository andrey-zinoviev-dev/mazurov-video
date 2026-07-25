import type { Metadata } from "next";
import { Golos_Text, IBM_Plex_Mono, Roboto_Condensed } from "next/font/google";
import { YandexMetricaProvider } from "next-yandex-metrica";
import { AppHeader } from "@/components/AppHeader/AppHeader";
import { Footer } from "@/components/Footer/Footer";
import "./globals.css";

const YANDEX_METRICA_ID = 111015189;

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
  title: "Video production",
  description: "Видеопродакшн полного цикла",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <>
      <AppHeader />
      <main id="site-top">{children}</main>
      <Footer />
    </>
  );

  return (
    <html
      lang="ru"
      className={`${golosText.variable} ${robotoCondensed.variable} ${ibmPlexMono.variable}`}
    >
      <body className={golosText.className}>
        {process.env.NODE_ENV === "production" ? (
          <YandexMetricaProvider
            tagID={YANDEX_METRICA_ID}
            router="app"
            initParameters={{
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
            }}
          >
            {content}
          </YandexMetricaProvider>
        ) : (
          content
        )}
      </body>
    </html>
  );
}
