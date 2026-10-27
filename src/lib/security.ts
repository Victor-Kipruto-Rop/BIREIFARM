export function isSameOriginRequest(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true; // Non-browser clients may omit Origin; validation still applies.
  try { return new URL(origin).host === new URL(request.url).host; }
  catch { return false; }
}
export function isJsonRequest(request: Request) {
  return (request.headers.get("content-type") ?? "").toLowerCase().includes("application/json");
}
export function exceedsBodyLimit(request: Request, maxBytes = 12_000) {
  const length = Number(request.headers.get("content-length") ?? "0");
  return Number.isFinite(length) && length > maxBytes;
}
