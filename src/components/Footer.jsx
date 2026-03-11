const C = { accent: "#7fff6e", muted: "#6b6b80" };
export default function Footer() {
  return (
    <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", padding: "28px clamp(20px,5vw,60px)" }}>
      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.7rem", color: C.muted, letterSpacing: "0.04em" }}>
        © 2025 <span style={{ color: C.accent }}>Bijay Vikram</span> — Front-End Developer
      </div>
      <a href="#" style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.7rem", color: C.muted, textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.2s", display: "flex", alignItems: "center", gap: "6px" }}
        onMouseEnter={e => e.currentTarget.style.color = C.accent}
        onMouseLeave={e => e.currentTarget.style.color = C.muted}>
        Back to top ↑
      </a>
    </footer>
  );
}
