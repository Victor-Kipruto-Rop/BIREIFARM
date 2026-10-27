import { z } from "zod";
export const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(30).optional().default(""),
  subject: z.enum(["Products and availability","Farm visit","Partnership","General enquiry","Other"]),
  message: z.string().trim().min(10).max(3000),
  website: z.string().max(0).optional().default(""),
});
export type EnquiryInput = z.infer<typeof enquirySchema>;
