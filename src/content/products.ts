export type FarmProduct = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  availability: string;
};

// Replace these examples with the farm owner’s confirmed products before launch.
export const products: FarmProduct[] = [
  { slug: "farm-produce", name: "Farm produce", category: "Produce", description: "Ask us about the produce currently available from Birei Farm.", image: "/images/products/produce.jpg", availability: "Enquire for availability" },
  { slug: "farm-supplies", name: "Farm supplies", category: "Farm", description: "Contact the farm to discuss current offerings and quantities.", image: "/images/products/supplies.jpg", availability: "Enquire for availability" },
  { slug: "farm-experience", name: "Farm experiences", category: "Experiences", description: "Get in touch to ask whether visits or farm experiences are available.", image: "/images/products/experience.jpg", availability: "By enquiry" },
];
