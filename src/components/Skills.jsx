import { useState, useEffect, useRef } from "react";
import { Reveal } from "./useReveal.jsx";

const C = { accent: "#7fff6e", text: "#e8e8f0", muted: "#6b6b80", surface: "#0d0d12", surface2: "#13131a", border: "rgba(255,255,255,0.07)", highlight: "rgba(127,255,110,0.08)" };

const skills = [
  { icon: "⟨/⟩", cat: "Languages",              tags: ["HTML5", "CSS3", "JavaScript ES6+"] },
  { icon: "⚛",    cat: "Frameworks & Libraries", tags: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "SCSS"] },
  { icon: "⚙",    cat: "Tools & Platforms",      tags: ["Git", "GitHub", "VS Code", "npm", "DevTools"] },
  { icon: "◎",    cat: "Concepts",               tags: ["Responsive Design", "REST API", "DOM Manipulation", "Component Architecture", "Web Accessibility"] },
];

const proficiency = [
  { label: "HTML & CSS",   pct: 90 },
  { label: "JavaScript",   pct: 78 },
  { label: "React.js",     pct: 75 },
  { label: "Tailwind CSS", pct: 85 },
  { label: "Bootstrap",    pct: 75 },
  { label: "Git & GitHub", pct: 65 },
];

function SkillCard({ s }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: hov ? C.surface : C.surface2, padding: "clamp(20px,4vw,36px) clamp(16px,3vw,32px)", position: "relative", overflow: "hidden", transition: "background 0.2s", minWidth: 0 }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg,${C.accent},transparent)`, transform: hov ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s ease" }} />
      <span style={{ fontSize: "1.4rem", display: "block", marginBottom: "14px" }}>{s.icon}</span>
      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "clamp(0.82rem,1.5vw,0.9rem)", color: C.text, marginBottom: "12px" }}>{s.cat}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {s.tags.map(t => (
          <span key={t} style={{ fontFamily: "'DM Mono',monospace", fontSize: "clamp(0.62rem,1vw,0.7rem)", color: C.muted, background: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`, padding: "4px 8px", borderRadius: "2px", transition: "all 0.2s", cursor: "default" }}
            onMouseEnter={e => { e.currentTarget.style.color=C.accent; e.currentTarget.style.borderColor="rgba(127,255,110,0.3)"; e.currentTarget.style.background=C.highlight; }}
            onMouseLeave={e => { e.currentTarget.style.color=C.muted; e.currentTarget.style.borderColor=C.border; e.currentTarget.style.background="rgba(255,255,255,0.04)"; }}
          >{t}</span>
        ))}
      </div>
    </div>
  );
}

function ProficiencyBar({ item }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => setWidth(item.pct), 200); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [item.pct]);
  return (
    <div ref={ref}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.92rem", color: C.text }}>{item.label}</span>
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.78rem", color: C.accent }}>{item.pct}%</span>
      </div>
      <div style={{ width: "100%", height: "4px", background: "rgba(255,255,255,0.07)", borderRadius: "99px", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${width}%`, background: `linear-gradient(90deg,${C.accent},rgba(127,255,110,0.5))`, borderRadius: "99px", transition: "width 1s cubic-bezier(0.4,0,0.2,1)", boxShadow: "0 0 8px rgba(127,255,110,0.35)" }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ position: "relative", zIndex: 1, background: C.surface }}>
      <div className="sec-pad">
        <div className="sec-label">
          <span className="sec-line" />Expertise
        </div>
        <Reveal from="bottom">
          <h2 className="sec-h2">Technologies & Tools</h2>
        </Reveal>
        <Reveal from="bottom" delay={80}>
          <div className="skills-grid" style={{ display: "grid", gap: "1px", border: `1px solid ${C.border}`, background: C.border }}>
            {skills.map(s => <SkillCard key={s.cat} s={s} />)}
          </div>
        </Reveal>

        <Reveal from="bottom" delay={140}>
          <div style={{ marginTop: "clamp(48px,8vw,80px)" }}>
            <div className="sec-label"><span className="sec-line" />Proficiency</div>
            <h3 className="sec-h3">Skill Levels</h3>
            <div className="prof-grid" style={{ display: "grid", gap: "24px 72px" }}>
              {proficiency.map(item => <ProficiencyBar key={item.label} item={item} />)}
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        /* shared label / heading */
        .sec-label { font-family:'DM Mono',monospace; font-size:0.72rem; letter-spacing:0.15em; text-transform:uppercase; color:#7fff6e; margin-bottom:14px; display:flex; align-items:center; gap:12px; }
        .sec-line  { width:24px; height:1px; background:#7fff6e; flex-shrink:0; }
        .sec-h2    { font-family:'Syne',sans-serif; font-weight:700; font-size:clamp(1.8rem,4vw,3rem); letter-spacing:-0.03em; line-height:1.1; margin-bottom:clamp(32px,5vw,56px); color:#e8e8f0; }
        .sec-h3    { font-family:'Syne',sans-serif; font-weight:700; font-size:clamp(1.3rem,3vw,2rem); letter-spacing:-0.02em; color:#e8e8f0; margin-bottom:clamp(24px,4vw,40px); }

        /* section padding */
        .sec-pad   { padding: clamp(60px,10vw,100px) clamp(20px,5vw,60px); box-sizing:border-box; width:100%; }

        /* grids default */
        .skills-grid { grid-template-columns: repeat(4, 1fr); }
        .prof-grid   { grid-template-columns: repeat(2, 1fr); }

        /* LG ≤ 1024 */
        @media (max-width:1024px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        /* MD ≤ 768 */
        @media (max-width:768px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .prof-grid   { grid-template-columns: 1fr !important; }
        }
        /* SM ≤ 480 */
        @media (max-width:480px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
