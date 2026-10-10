/** Live counter — used when env is unset on production static builds. */
const FALLBACK_METRICA_ID = 111015189;

/**
 * Yandex Metrica tag ID.
 * Prefer `NEXT_PUBLIC_YANDEX_METRICA_ID` (inlined at `next build` for `output: "export"`).
 * In development, only loads when the env var is set (avoids polluting prod stats from localhost).
 */
export function getYandexMetricaId(): number | null {
  const raw = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID;
  if (raw !== undefined && raw !== "") {
    const id = Number(raw);
    return Number.isFinite(id) && id > 0 ? id : null;
  }

  if (process.env.NODE_ENV === "production") {
    return FALLBACK_METRICA_ID;
  }

  return null;
}
