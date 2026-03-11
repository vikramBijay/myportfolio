const items = ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "HTML5 & CSS3", "REST APIs", "Git & GitHub", "Responsive Design"];
const doubled = [...items, ...items];

export default function Marquee() {
  return (
    <div style={{ padding: "24px 0", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", overflow: "hidden", background: "#13131a", position: "relative", zIndex: 1, maxWidth: "100%" }}>
      <div style={{ display: "flex", animation: "marquee 20s linear infinite", whiteSpace: "nowrap", width: "max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "24px", padding: "0 40px", fontFamily: "'DM Mono',monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6b80" }}>
            {item}
            <span style={{ width: "4px", height: "4px", background: "#7fff6e", borderRadius: "50%", flexShrink: 0 }} />
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </div>
  );
}