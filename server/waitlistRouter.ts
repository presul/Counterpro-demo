import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import { getDb } from "./db";
import { waitlistSubmissions } from "../drizzle/schema";
import axios from "axios";
import { ENV } from "./_core/env";

const waitlistSubmissionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  companyName: z.string().optional(),
  website: z.string().url().optional().or(z.literal("")),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  smsConsent: z.boolean().default(false),
});

export const waitlistRouter = router({
  submit: publicProcedure
    .input(waitlistSubmissionSchema)
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      try {
        // Save to database
        const [result] = await db.insert(waitlistSubmissions).values({
          name: input.name,
          companyName: input.companyName || null,
          website: input.website || null,
          email: input.email,
          phone: input.phone,
          smsConsent: input.smsConsent,
        });

        // Send email notification using Manus built-in email service
        const emailBody = `
New Waitlist Submission - CounterPro.ai

Name: ${input.name}
Company Name: ${input.companyName || "Not provided"}
Website: ${input.website || "Not provided"}
Email: ${input.email}
Phone: ${input.phone}
SMS Consent: ${input.smsConsent ? "Yes" : "No"}

Submitted: ${new Date().toLocaleString()}
        `.trim();

        try {
          // Use Manus built-in email API
          await axios.post(
            `${ENV.forgeApiUrl}/email/send`,
            {
              to: "jm@digitalvisor.com",
              subject: `CounterPro.ai Waitlist Submission - ${input.name}`,
              text: emailBody,
              html: emailBody.replace(/\n/g, "<br>"),
            },
            {
              headers: {
                Authorization: `Bearer ${ENV.forgeApiKey}`,
                "Content-Type": "application/json",
              },
              timeout: 10000,
            }
          );
        } catch (emailError) {
          console.error("[Waitlist] Email sending failed:", emailError);
          // Don't fail the submission if email fails
        }

        return {
          success: true,
          message: "Thank you for joining the waitlist!",
        };
      } catch (error) {
        console.error("[Waitlist] Submission error:", error);
        throw new Error("Failed to submit waitlist form");
      }
    }),
});
