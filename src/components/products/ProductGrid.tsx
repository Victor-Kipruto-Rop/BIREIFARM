import { ProductCard } from "@/components/products/ProductCard";
import type { FarmProduct } from "@/content/products";
export function ProductGrid({items}:{items:FarmProduct[]}){return <div className="product-grid">{items.map((product)=><ProductCard key={product.slug} product={product}/>)}</div>}
