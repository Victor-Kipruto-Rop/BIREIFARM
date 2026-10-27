import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
export function PageHero({ title, description, current }: { title: string; description: string; current: string }) {
  return <section className="page-hero"><div className="container"><Breadcrumbs current={current} /><span className="eyebrow">Birei Farm</span><h1 className="display">{title}</h1><p>{description}</p></div></section>;
}
