type GalleryItem = {title:string;image:string;alt:string};
export function GalleryGrid({items}:{items:GalleryItem[]}){return <div className="gallery-grid">{items.map((item,i)=><figure className={"image-placeholder gallery-item gallery-item-"+i} key={item.title}><img src={item.image} alt={item.alt} loading="lazy" /><figcaption className="image-caption">{item.title}</figcaption></figure>)}</div>}
