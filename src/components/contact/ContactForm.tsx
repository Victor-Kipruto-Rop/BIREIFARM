"use client";
import { useState, type FormEvent } from "react";
export function ContactForm() {
  const [status, setStatus] = useState<{kind:"idle"|"loading"|"success"|"error";message:string}>({kind:"idle",message:""});
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus({kind:"loading",message:"Sending your enquiry…"});
    const form = event.currentTarget; const data = new FormData(form);
    try {
      const response = await fetch("/api/enquiries", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(data.entries()))});
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We couldn't send your enquiry. Please try again later.");
      form.reset(); setStatus({kind:"success",message:"Your enquiry has been received."});
    } catch (error) { setStatus({kind:"error",message:error instanceof Error?error.message:"Something went wrong. Please try again."}); }
  }
  return <form onSubmit={handleSubmit} style={{display:"grid",gap:17}}><div className="form-field"><label htmlFor="name">Full name *</label><input id="name" name="name" autoComplete="name" required maxLength={100}/></div><div className="form-field"><label htmlFor="email">Email address *</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254}/></div><div className="form-field"><label htmlFor="phone">Telephone (optional)</label><input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30}/></div><div className="form-field"><label htmlFor="subject">What is your enquiry about? *</label><select id="subject" name="subject" required defaultValue=""><option value="" disabled>Select a topic</option><option value="Products and availability">Products and availability</option><option value="Farm visit">Farm visit</option><option value="Partnership">Partnership</option><option value="General enquiry">General enquiry</option><option value="Other">Other</option></select></div><div className="form-field"><label htmlFor="message">Message *</label><textarea id="message" name="message" required minLength={10} maxLength={3000} placeholder="Tell us how we can help…"/></div><div aria-hidden="true" style={{position:"absolute",left:"-10000px",width:1,height:1,overflow:"hidden"}}><label htmlFor="website">Leave this field blank</label><input id="website" name="website" tabIndex={-1} autoComplete="off"/></div><button className="button" type="submit" disabled={status.kind==="loading"}>{status.kind==="loading"?"Sending…":"Send enquiry"}</button>{status.message?<p role="status" aria-live="polite" style={{fontSize:12,color:status.kind==="error"?"#9d3e32":status.kind==="success"?"var(--leaf)":"var(--muted)",lineHeight:1.7}}>{status.message}</p>:null}<p style={{fontSize:10,color:"var(--muted)",lineHeight:1.7,margin:0}}>By submitting this form, you agree that Birei Farm may use your details to respond to your enquiry. Do not submit sensitive personal information.</p></form>;
}
