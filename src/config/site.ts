export const siteConfig = {
  name: "Birei Farm",
  legalName: "Birei Farm", // Confirm the registered legal name with the owner before launch.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bireifarm.co.ke",
  description: "Birei Farm focuses on dairy products. Explore the farm and enquire about current dairy availability and supply.",
  locale: "en_KE",
  currency: "KES",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  address: "", // Add only after the owner confirms the public business address.
  socialLinks: [] as { label: string; href: string }[],
};
