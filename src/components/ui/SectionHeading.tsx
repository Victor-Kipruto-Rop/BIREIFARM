type Props = { eyebrow?: string; title: string; description?: string; light?: boolean };
export function SectionHeading({ eyebrow, title, description, light = false }: Props) {
  return <div style={{ maxWidth: 680 }}>{eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}<h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 58px)", margin: "18px 0", color: light ? "#fff" : "var(--ink)" }}>{title}</h2>{description ? <p style={{ color: light ? "#d5dfd6" : "var(--muted)", fontSize: 14, lineHeight: 1.85, margin: 0 }}>{description}</p> : null}</div>;
}
