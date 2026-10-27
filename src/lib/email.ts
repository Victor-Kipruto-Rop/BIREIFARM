type SendEnquiryEmailInput = { name: string; email: string; phone?: string; subject: string; message: string };
export async function sendEnquiryEmail(input: SendEnquiryEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) throw new Error("Enquiry email service is not configured.");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: "Bearer " + apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({
      from, to: [to], reply_to: input.email, subject: "Birei Farm website enquiry: " + input.subject,
      text: ["Name: " + input.name, "Email: " + input.email, "Phone: " + (input.phone || "Not provided"), "Topic: " + input.subject, "", "Message:", input.message].join("\n"),
    }),
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Enquiry email provider failed with status " + response.status);
}
