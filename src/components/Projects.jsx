import { useState, useEffect } from "react";

const C = { accent: "#7fff6e", text: "#e8e8f0", muted: "#6b6b80", surface: "#0d0d12", surface2: "#13131a", border: "rgba(255,255,255,0.07)", bg: "#060608", highlight: "rgba(127,255,110,0.08)" };

export function ProjectCard({ project, index }) {
  const [hov, setHov] = useState(false);
  const [mp, setMp] = useState({ x: "50%", y: "50%" });

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMp({ x: ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%", y: ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%" });
  };

  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onMouseMove={handleMove}
      onClick={() => project.link && window.open(project.link, "_blank")}
      style={{ border: `1px solid ${hov ? "rgba(127,255,110,0.22)" : C.border}`, background: C.surface, borderRadius: "4px", padding: "clamp(20px,4vw,32px)", position: "relative", overflow: "hidden", transform: hov ? "translateY(-4px)" : "none", transition: "all 0.3s ease", cursor: project.link ? "pointer" : "default", display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box" }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at ${mp.x} ${mp.y}, rgba(127,255,110,0.06) 0%, transparent 60%)`, opacity: hov ? 1 : 0, transition: "opacity 0.4s", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.65rem", color: C.muted, letterSpacing: "0.1em" }}>{String(index + 1).padStart(2, "0")}</span>
          <div style={{ width: "26px", height: "26px", border: `1px solid ${hov ? C.accent : C.border}`, background: hov ? C.accent : "transparent", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", color: hov ? C.bg : C.muted, transition: "all 0.2s", flexShrink: 0 }}>↗</div>
        </div>
        <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "clamp(1rem,2vw,1.25rem)", letterSpacing: "-0.02em", color: C.text, marginBottom: "10px", lineHeight: 1.2 }}>{project.name}</h3>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(0.8rem,1.5vw,0.88rem)", lineHeight: 1.7, color: C.muted, marginBottom: "24px", flex: 1 }}>{project.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
          {project.tags.map(t => <span key={t} style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.65rem", letterSpacing: "0.04em", padding: "4px 10px", background: C.highlight, color: C.accent, borderRadius: "2px" }}>{t}</span>)}
        </div>
      </div>
    </div>
  );
}

export function ProjectSlider({ projects, label }) {
  const [slide, setSlide] = useState(0);
  const [per, setPer] = useState(3);

  useEffect(() => {
    const upd = () => {
      if      (window.innerWidth <= 480)  setPer(1);
      else if (window.innerWidth <= 768)  setPer(1);
      else if (window.innerWidth <= 1024) setPer(2);
      else                                setPer(3);
    };
    upd();
    window.addEventListener("resize", upd);
    return () => window.removeEventListener("resize", upd);
  }, []);

  useEffect(() => { setSlide(0); }, [per]);

  const groups = [];
  for (let i = 0; i < projects.length; i += per) groups.push(projects.slice(i, i + per));
  const canL = slide > 0, canR = slide < groups.length - 1;

  const btn = (active) => ({ width: "34px", height: "34px", borderRadius: "50%", border: `1px solid ${active ? C.accent : C.border}`, background: active ? C.accent : "transparent", color: active ? C.bg : "rgba(255,255,255,0.2)", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", cursor: active ? "pointer" : "not-allowed", transition: "all 0.2s", padding: 0, flexShrink: 0 });

  return (
    <div style={{ marginBottom: "56px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", gap: "12px", flexWrap: "wrap" }}>
        <h3 style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.15em", color: C.accent, margin: 0 }}>{label}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            {groups.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} style={{ height: "6px", width: i === slide ? "18px" : "6px", borderRadius: "99px", background: i === slide ? C.accent : "rgba(255,255,255,0.18)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s" }} />
            ))}
          </div>
          <button style={btn(canL)} onClick={() => canL && setSlide(s => s - 1)}>‹</button>
          <button style={btn(canR)} onClick={() => canR && setSlide(s => s + 1)}>›</button>
        </div>
      </div>
      <div style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1)", transform: `translateX(-${slide * 100}%)` }}>
          {groups.map((group, gi) => (
            <div key={gi} style={{ minWidth: "100%", display: "grid", gridTemplateColumns: `repeat(${per}, 1fr)`, gap: "clamp(12px,2vw,20px)", boxSizing: "border-box", alignItems: "stretch" }}>
              {group.map((p, i) => <ProjectCard key={p.name} project={p} index={gi * per + i} />)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
