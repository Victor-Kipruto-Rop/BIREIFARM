import { describe, expect, it } from "vitest";
import { checkEnquiryRateLimit } from "../../src/lib/rate-limit";
describe("checkEnquiryRateLimit", () => {
  it("allows up to five requests in a window", () => {
    const key = "test-client-" + Math.random();
    for (let i = 0; i < 5; i += 1) expect(checkEnquiryRateLimit(key, 1_000).allowed).toBe(true);
    const blocked = checkEnquiryRateLimit(key, 1_000);
    expect(blocked.allowed).toBe(false);
    expect(blocked.retryAfterSeconds).toBeGreaterThan(0);
  });
  it("starts a new window after expiry", () => {
    const key = "test-expiry-" + Math.random();
    for (let i = 0; i < 5; i += 1) checkEnquiryRateLimit(key, 1_000);
    expect(checkEnquiryRateLimit(key, 1_000 + 15 * 60 * 1000 + 1).allowed).toBe(true);
  });
});
