export function cn(...values: Array<string | false | null | undefined>) { return values.filter(Boolean).join(" "); }
export function absoluteUrl(path: string, baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bireifarm.co.ke") { return new URL(path, baseUrl).toString(); }
