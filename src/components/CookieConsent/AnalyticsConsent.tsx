"use client";

import {
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { YandexMetricaProvider } from "next-yandex-metrica";

import { CookieBanner } from "@/components/CookieConsent/CookieBanner";

const STORAGE_KEY = "mazurov-cookie-consent";

export type CookieConsentValue = "accepted" | "declined";

type AnalyticsConsentProps = {
  children: ReactNode;
  /** Counter ID from env / config. Null disables the provider. */
  metricaId: number | null;
  /** When false, consent UI still works but Metrica never loads. */
  enableMetrica?: boolean;
};

function readStoredConsent(): CookieConsentValue | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    if (value === "accepted" || value === "declined") return value;
  } catch {
    // private mode / blocked storage
  }
  return null;
}

function writeStoredConsent(value: CookieConsentValue) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // ignore
  }
}

export function AnalyticsConsent({
  children,
  metricaId,
  enableMetrica = true,
}: AnalyticsConsentProps) {
  const [consent, setConsent] = useState<CookieConsentValue | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setConsent(readStoredConsent());
    setHydrated(true);
  }, []);

  const onAccept = useCallback(() => {
    writeStoredConsent("accepted");
    setConsent("accepted");
  }, []);

  const onDecline = useCallback(() => {
    writeStoredConsent("declined");
    setConsent("declined");
  }, []);

  const showBanner = hydrated && consent === null;
  const loadMetrica =
    enableMetrica && metricaId !== null && consent === "accepted";

  const body = (
    <>
      {children}
      {showBanner ? (
        <CookieBanner onAccept={onAccept} onDecline={onDecline} />
      ) : null}
    </>
  );

  if (!loadMetrica || metricaId === null) {
    return body;
  }

  return (
    <YandexMetricaProvider
      tagID={metricaId}
      router="app"
      initParameters={{
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      }}
    >
      {body}
    </YandexMetricaProvider>
  );
}
