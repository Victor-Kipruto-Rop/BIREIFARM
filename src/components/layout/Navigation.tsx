import Link from "next/link";
import { mainNavigation } from "@/content/navigation";
export function Navigation({onNavigate}:{onNavigate?:()=>void}){return <nav aria-label="Main navigation" className="nav-links">{mainNavigation.map(item=><Link key={item.href} className="nav-link" href={item.href} onClick={onNavigate}>{item.label}</Link>)}<Link className="nav-link" href="/contact" onClick={onNavigate}>Contact</Link></nav>}
