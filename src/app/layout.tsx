import type { Metadata } from "next";
import { Golos_Text, IBM_Plex_Mono, Roboto_Condensed } from "next/font/google";
import { AppHeader } from "@/components/AppHeader/AppHeader";
import "./globals.css";

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
  description: "Видеопродакшен полного цикла",
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
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
