import { NextResponse } from "next/server";
import { z } from "zod";
const schema = z.object({ email: z.string().trim().email().max(254), website: z.string().max(0).optional().default("") });
export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) return NextResponse.json({error:"Submit a valid request."},{status:415});
  if (Number(request.headers.get("content-length") ?? "0") > 4000) return NextResponse.json({error:"Request is too large."},{status:413});
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({error:"Submit a valid request."},{status:400}); }
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({error:"Enter a valid email address."},{status:400});
  if (parsed.data.website) return NextResponse.json({ok:true});
  return NextResponse.json({error:"Newsletter subscriptions are not enabled yet."},{status:503});
}
