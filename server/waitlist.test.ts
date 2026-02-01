import { describe, expect, it, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import { getDb } from "./db";
import { waitlistSubmissions } from "../drizzle/schema";
import { eq } from "drizzle-orm";

function createTestContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("waitlist.submit", () => {
  beforeEach(async () => {
    // Clean up test data
    const db = await getDb();
    if (db) {
      await db.delete(waitlistSubmissions).where(eq(waitlistSubmissions.email, "test@example.com"));
    }
  });

  it("successfully submits waitlist form with all fields", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.waitlist.submit({
      name: "Test User",
      companyName: "Test Company",
      website: "https://test.com",
      email: "test@example.com",
      phone: "+1 555-123-4567",
      smsConsent: true,
    });

    expect(result).toEqual({
      success: true,
      message: "Thank you for joining the waitlist!",
    });

    // Verify database entry
    const db = await getDb();
    if (db) {
      const submissions = await db
        .select()
        .from(waitlistSubmissions)
        .where(eq(waitlistSubmissions.email, "test@example.com"))
        .limit(1);

      expect(submissions).toHaveLength(1);
      expect(submissions[0]?.name).toBe("Test User");
      expect(submissions[0]?.companyName).toBe("Test Company");
      expect(submissions[0]?.email).toBe("test@example.com");
      expect(submissions[0]?.smsConsent).toBe(true);
    }
  });

  it("successfully submits with only required fields", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.waitlist.submit({
      name: "Minimal User",
      email: "test@example.com",
      phone: "+1 555-999-8888",
      smsConsent: false,
    });

    expect(result).toEqual({
      success: true,
      message: "Thank you for joining the waitlist!",
    });
  });

  it("rejects submission with invalid email", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.waitlist.submit({
        name: "Test User",
        email: "invalid-email",
        phone: "+1 555-123-4567",
        smsConsent: false,
      })
    ).rejects.toThrow();
  });

  it("rejects submission with missing required fields", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.waitlist.submit({
        name: "",
        email: "test@example.com",
        phone: "+1 555-123-4567",
        smsConsent: false,
      })
    ).rejects.toThrow();
  });
});
