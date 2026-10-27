type Entry = { count: number; resetAt: number };
const entries = new Map<string, Entry>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
/**
 * Best-effort process-local limiter for development/single-instance hosting.
 * Use Cloudflare/WAF or a shared Redis-backed limiter for production/serverless.
 */
export function checkEnquiryRateLimit(key: string, now = Date.now()) {
  for (const [entryKey, entry] of entries) if (entry.resetAt <= now) entries.delete(entryKey);
  const entry = entries.get(key);
  if (!entry || entry.resetAt <= now) {
    entries.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS - 1, retryAfterSeconds: 0 };
  }
  if (entry.count >= MAX_REQUESTS) return { allowed: false, remaining: 0, retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000) };
  entry.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS - entry.count, retryAfterSeconds: 0 };
}
