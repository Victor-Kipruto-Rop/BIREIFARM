import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
type Props = { href: string; children: ReactNode; variant?: "solid" | "outline"; showArrow?: boolean; className?: string };
export function Button({ href, children, variant = "solid", showArrow = true, className = "" }: Props) {
  return <Link href={href} className={"button " + (variant === "outline" ? "button-outline " : "") + className}>{children}{showArrow ? <ArrowUpRight size={15} strokeWidth={1.8} /> : null}</Link>;
}
