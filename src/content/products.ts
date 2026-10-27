export type FarmProduct = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  availability: string;
};

// Dairy-focused enquiry catalogue. Confirm the farm's exact range and availability before launch.
export const products: FarmProduct[] = [
  { slug: "milk", name: "Milk", category: "Milk & dairy", description: "Ask Birei Farm about milk currently available, packaging options, quantities, and collection or delivery arrangements.", image: "/images/products/milk.jpg", availability: "Confirm current availability" },
  { slug: "cultured-dairy", name: "Yoghurt & mala", category: "Cultured dairy", description: "Contact the farm to confirm whether yoghurt, mala, or other cultured dairy products are currently offered.", image: "/images/products/cultured-dairy.jpg", availability: "Confirm product range" },
  { slug: "dairy-enquiries", name: "Other dairy products", category: "Dairy enquiries", description: "Looking for a particular dairy product or a regular supply? Ask the farm about its current range and quantities.", image: "/images/products/dairy-products.jpg", availability: "Enquiries welcome" },
];
