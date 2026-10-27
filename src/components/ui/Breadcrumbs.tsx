import Link from "next/link";
export function Breadcrumbs({ current }: { current: string }) { return <nav aria-label="Breadcrumb" style={{ fontSize: 11, color: "var(--muted)", marginBottom: 22 }}><Link href="/">Home</Link><span aria-hidden="true"> / </span><span aria-current="page" style={{ color: "var(--forest)" }}>{current}</span></nav>; }
