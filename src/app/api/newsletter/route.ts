import { NextResponse } from "next/server";
import { z } from "zod";
import { exceedsBodyLimit, isJsonRequest, isSameOriginRequest } from "@/lib/security";
const schema = z.object({ email: z.string().trim().email().max(254), website: z.string().max(0).optional().default("") });
export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) return NextResponse.json({error:"Cross-origin requests are not accepted."},{status:403});
  if (!isJsonRequest(request)) return NextResponse.json({error:"Submit a valid request."},{status:415});
  if (exceedsBodyLimit(request, 4000)) return NextResponse.json({error:"Request is too large."},{status:413});
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({error:"Submit a valid request."},{status:400}); }
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({error:"Enter a valid email address."},{status:400});
  if (parsed.data.website) return NextResponse.json({ok:true});
  return NextResponse.json({error:"Newsletter subscriptions are not enabled yet."},{status:503});
}
