export default function Section({ id, bg = "#060608", children }) {
  return (
    <section id={id} style={{ background: bg, borderTop: "1px solid rgba(255,255,255,0.05)", width: "100%" }}>
      <div style={{
        maxWidth: "1160px",
        margin: "0 auto",
        padding: "clamp(64px,10vw,120px) clamp(20px,5vw,80px)",
        width: "100%",
        boxSizing: "border-box",
      }}>
        {children}
      </div>
    </section>
  );
}
