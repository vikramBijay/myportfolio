export default function SectionLabel({ text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'DM Mono',monospace", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#7fff6e", marginBottom: "18px" }}>
      <span style={{ width: "24px", height: "1px", background: "#7fff6e", flexShrink: 0 }} />
      {text}
    </div>
  );
}
