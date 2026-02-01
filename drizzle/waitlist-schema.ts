import { int, mysqlTable, text, timestamp, varchar, boolean } from "drizzle-orm/mysql-core";

/**
 * Waitlist submissions table
 * Stores all form submissions from the CounterPro.ai waitlist
 */
export const waitlistSubmissions = mysqlTable("waitlist_submissions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  companyName: varchar("company_name", { length: 255 }),
  website: varchar("website", { length: 512 }),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  smsConsent: boolean("sms_consent").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type WaitlistSubmission = typeof waitlistSubmissions.$inferSelect;
export type InsertWaitlistSubmission = typeof waitlistSubmissions.$inferInsert;
