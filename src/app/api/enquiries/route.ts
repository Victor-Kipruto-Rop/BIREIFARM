import { NextResponse } from "next/server";
import { z } from "zod";
const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(30).optional().default(""),
  subject: z.enum(["Products and availability","Farm visit","Partnership","General enquiry","Other"]),
  message: z.string().trim().min(10).max(3000),
  website: z.string().max(0).optional().default(""),
});
export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({error:"Please submit a valid form."},{status:400}); }
  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({error:"Check your details and try again."},{status:400});
  // Honeypot submissions are quietly accepted to avoid informing bots that they were detected.
  if (parsed.data.website) return NextResponse.json({ok:true});
  // Do not claim delivery until a real email provider or durable enquiry store is configured.
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
    return NextResponse.json({error:"The enquiry service is not configured yet. Please contact the farm directly once its official contact details are published."},{status:503});
  }
  // Provider integration is intentionally not simulated; configure and implement it before production.
  return NextResponse.json({error:"The enquiry delivery provider has not been connected yet."},{status:503});
}
