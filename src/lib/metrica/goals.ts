import { ym } from "next-yandex-metrica";

import { getYandexMetricaId } from "@/lib/metrica/config";

/** JS goals created in the Metrika cabinet (exact IDs). */
export const METRICA_GOALS = {
  ctaContact: "cta_contact",
  contactTelegram: "contact_telegram",
} as const;

export type CtaContactFrom =
  | "hero"
  | "header"
  | "mobile_menu"
  | "service_cta";

export type ServiceGoalParam =
  | "shows"
  | "commercials"
  | "music-video"
  | "brand-video"
  | "motion-design"
  | "report-videos"
  | "documentary"
  | "livestream"
  | "webinars"
  | "master-classes"
  | "none";

export type CtaContactParams = {
  from: CtaContactFrom;
  service?: ServiceGoalParam;
};

export type ContactTelegramParams = {
  from: "contacts_block";
  service: ServiceGoalParam;
};

export function serviceFromPathname(pathname: string): ServiceGoalParam {
  if (pathname.includes("/services/shows")) return "shows";
  if (pathname.includes("/services/commercials")) return "commercials";
  if (pathname.includes("/services/music-video")) return "music-video";
  if (pathname.includes("/services/brand-video")) return "brand-video";
  if (pathname.includes("/services/motion-design")) return "motion-design";
  if (pathname.includes("/services/report-videos")) return "report-videos";
  if (pathname.includes("/services/documentary")) return "documentary";
  if (pathname.includes("/services/livestream")) return "livestream";
  if (pathname.includes("/services/webinars")) return "webinars";
  if (pathname.includes("/services/master-classes")) return "master-classes";
  return "none";
}

/** Safe reachGoal — no-ops if counter/script is unavailable (no consent / no ID). */
export function reachMetricaGoal(
  target: string,
  params?: Record<string, string>,
): void {
  const tagID = getYandexMetricaId();
  if (!tagID) return;
  ym(tagID, "reachGoal", target, params);
}

export function trackCtaContact({
  from,
  service = "none",
}: CtaContactParams): void {
  reachMetricaGoal(METRICA_GOALS.ctaContact, { from, service });
}

export function trackContactTelegram({
  from,
  service,
}: ContactTelegramParams): void {
  reachMetricaGoal(METRICA_GOALS.contactTelegram, { from, service });
}
