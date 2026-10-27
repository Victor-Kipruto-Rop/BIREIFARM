import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validation";
import { exceedsBodyLimit, isJsonRequest, isSameOriginRequest } from "@/lib/security";
import { checkEnquiryRateLimit } from "@/lib/rate-limit";
export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const clientKey = forwardedFor || request.headers.get("x-real-ip") || "unknown-client";
  const limit = checkEnquiryRateLimit(clientKey);
  if (!limit.allowed) return NextResponse.json({error:"Too many enquiries. Please wait before trying again."},{status:429,headers:{"Retry-After":String(limit.retryAfterSeconds)}});
  if (!isSameOriginRequest(request)) return NextResponse.json({error:"Cross-origin requests are not accepted."},{status:403});
  if (!isJsonRequest(request)) return NextResponse.json({error:"Submit a valid request."},{status:415});
  if (exceedsBodyLimit(request)) return NextResponse.json({error:"Request is too large."},{status:413});
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({error:"Please submit a valid form."},{status:400}); }
  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({error:"Check your details and try again."},{status:400});
  if (parsed.data.website) return NextResponse.json({ok:true});
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return NextResponse.json({error:"The enquiry service is not configured yet. Please contact the farm directly once its official contact details are published."},{status:503});
  const {name,email,phone,subject,message} = parsed.data;
  let delivery: Response;
  try {
    delivery = await fetch("https://api.resend.com/emails", {
      method:"POST",
      headers:{"Authorization":"Bearer "+apiKey,"Content-Type":"application/json"},
      body:JSON.stringify({from,to:[to],reply_to:email,subject:"Birei Farm website enquiry: "+subject,text:["Name: "+name,"Email: "+email,"Phone: "+(phone||"Not provided"),"Topic: "+subject,"","Message:",message].join("\n")}),
      cache:"no-store",
    });
  } catch {
    return NextResponse.json({error:"The enquiry service is temporarily unavailable. Please try again later."},{status:502});
  }
  if (!delivery.ok) {
    console.error("Enquiry email provider returned status", delivery.status);
    return NextResponse.json({error:"We couldn't send your enquiry right now. Please try again later."},{status:502});
  }
  return NextResponse.json({ok:true});
}
