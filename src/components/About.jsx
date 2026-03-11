import { useState } from "react";
import { Reveal } from "./useReveal.jsx";
// eslint-disable-next-line no-unused-vars
import React from "react";

const C = { accent: "#7fff6e", text: "#e8e8f0", muted: "#6b6b80", surface: "#0d0d12", surface2: "#13131a", border: "rgba(255,255,255,0.07)" };

function InterestCard({ item }) {
  const [hov, setHov] = useState(false);
  const ORDER = ["Coding","Gaming","Reading","Music","Travelling","Fitness"];
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: hov ? C.surface2 : C.surface, padding: "clamp(20px,4vw,36px) clamp(16px,3vw,32px)", position: "relative", overflow: "hidden", transition: "background 0.25s", cursor: "default", minWidth: 0 }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg,${C.accent},transparent)`, transform: hov ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s ease" }} />
      <div style={{ position: "absolute", top: 0, right: 0, width: "70px", height: "70px", background: "radial-gradient(circle at top right,rgba(127,255,110,0.06),transparent 70%)", opacity: hov ? 1 : 0, transition: "opacity 0.3s" }} />
      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "clamp(1rem,2.5vw,1.4rem)", color: hov ? C.accent : "rgba(255,255,255,0.18)", marginBottom: "18px", lineHeight: 1, transition: "color 0.3s" }}>{item.icon}</div>
      <div style={{ position: "absolute", top: "clamp(16px,3vw,28px)", right: "clamp(16px,3vw,28px)", fontFamily: "'DM Mono',monospace", fontSize: "0.6rem", color: hov ? C.accent : "rgba(255,255,255,0.1)", transition: "color 0.3s" }}>{String(ORDER.indexOf(item.title) + 1).padStart(2,"0")}</div>
      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "clamp(0.88rem,2vw,1rem)", color: C.text, marginBottom: "8px" }}>{item.title}</div>
      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(0.78rem,1.5vw,0.84rem)", color: C.muted, lineHeight: 1.7 }}>{item.desc}</div>
    </div>
  );
}

const details = [
  { key: "Location",  val: <span>India 🇮🇳</span> },
  { key: "Email",     val: <a href="mailto:vikrambijay005@email.com" style={{ color: "#7fff6e", textDecoration: "none" }}>vikrambijay005@email.com</a> },
  { key: "Education", val: <span>BCA, Integral University</span> },
  { key: "Focus",     val: "React.js, Next.js, Modern Web" },
  { key: "Status",    val: <span style={{ color: "#7fff6e" }}>● Open to Work</span> },
];

const education = [
  { year: "2023 – Present", degree: "Bachelor of Computer Application (BCA)", school: "Integral University, Lucknow",  note: "Coursework: Data Structures, Web Technologies, OOP, DBMS, Computer Networks" },
  { year: "2021 – 2023",    degree: "Higher Secondary (12th Grade)",           school: "Army Public School, Lucknow",  note: "Science Stream — Physics, Chemistry, Biology" },
  { year: "2018 – 2021",    degree: "Secondary School (10th Grade)",           school: "Army Public School, Lucknow",  note: "" },
];

const interests = [
  { icon: "⟨cd⟩", title: "Coding",     desc: "Building side projects and exploring new technologies every weekend." },
  { icon: "◈",     title: "Gaming",     desc: "Strategy and RPG games — they sharpen problem-solving skills." },
  { icon: "∿",     title: "Reading",    desc: "Tech blogs, web dev articles, and occasional sci-fi novels." },
  { icon: "♫",     title: "Music",      desc: "Background beats while coding — lo-fi & electronic are favorites." },
  { icon: "⊕",     title: "Travelling", desc: "Exploring new places fuels creativity and brings fresh perspective." },
  { icon: "◎",     title: "Fitness",    desc: "Regular workouts to stay sharp and energized for long coding sessions." },
];

export default function About() {
  return (
    <section id="about" style={{ position: "relative", zIndex: 1, background: C.surface }}>
      <div className="sec-pad">
        <div className="sec-label"><span className="sec-line" />About</div>
        <Reveal from="bottom">
          <h2 className="sec-h2">A bit about me</h2>
        </Reveal>

        {/* Bio + Details */}
        <Reveal from="bottom" delay={80}>
          <div className="about-2col" style={{ display: "grid", gap: "clamp(32px,6vw,80px)", alignItems: "start", marginBottom: "clamp(48px,8vw,80px)" }}>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(0.88rem,2vw,1rem)", lineHeight: 1.8, color: C.muted }}>
              <p style={{ marginBottom: "18px" }}>I'm <strong style={{ color: C.text, fontWeight: 400 }}>Bijay Vikram</strong>, a Front-End Developer based in India, currently pursuing a <strong style={{ color: C.text, fontWeight: 400 }}>Bachelor of Computer Application</strong> at Integral University, Lucknow.</p>
              <p style={{ marginBottom: "18px" }}>I build things for the web — from interactive UI components to full web applications. My focus is on writing <strong style={{ color: C.text, fontWeight: 400 }}>clean, maintainable code</strong> and creating seamless user experiences that feel intuitive on every device.</p>
              <blockquote style={{ color: C.text, fontSize: "clamp(0.95rem,2vw,1.1rem)", lineHeight: 1.6, fontStyle: "italic", borderLeft: `2px solid ${C.accent}`, paddingLeft: "20px", margin: "28px 0" }}>
                "I believe great interfaces are invisible — they get out of the way and let users do what they came to do."
              </blockquote>
              <p>Currently exploring <strong style={{ color: C.text, fontWeight: 400 }}>Next.js App Router</strong> and advanced React patterns.</p>
            </div>
            <div>
              {details.map((d, i) => (
                <div key={d.key} style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "18px 0", borderBottom: i < details.length - 1 ? `1px solid ${C.border}` : "none" }}>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted, minWidth: "90px", paddingTop: "2px", flexShrink: 0 }}>{d.key}</div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.92rem", color: C.text, lineHeight: 1.5, minWidth: 0 }}>{d.val}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Interests */}
        <div style={{ marginTop: "clamp(40px,6vw,72px)" }}>
          <div className="sec-label"><span className="sec-line" />Interests</div>
          <Reveal from="bottom"><h3 className="sec-h3">Beyond the Code</h3></Reveal>
          <Reveal from="bottom" delay={80}>
            <div className="interests-grid" style={{ display: "grid", gap: "1px", border: `1px solid ${C.border}`, background: C.border }}>
              {interests.map(item => <InterestCard key={item.title} item={item} />)}
            </div>
          </Reveal>
        </div>

        {/* Education */}
        <div style={{ marginTop: "clamp(48px,8vw,80px)" }}>
          <div className="sec-label"><span className="sec-line" />Background</div>
          <Reveal from="bottom"><h3 className="sec-h3">Education</h3></Reveal>
          <Reveal from="bottom" delay={80}>
            <div>
              {education.map((e, i) => (
                <div key={e.degree} className="edu-row" style={{ display: "grid", padding: "clamp(24px,4vw,40px) 0", borderBottom: i < education.length - 1 ? `1px solid ${C.border}` : "none", position: "relative" }}>
                  <div className="edu-line-v" />
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.72rem", color: C.muted, letterSpacing: "0.05em", paddingTop: "3px" }}>{e.year}</div>
                  <div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "clamp(0.95rem,2vw,1.1rem)", color: C.text, marginBottom: "4px" }}>{e.degree}</div>
                    <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.76rem", color: C.accent, letterSpacing: "0.05em", marginBottom: e.note ? "8px" : 0 }}>{e.school}</div>
                    {e.note && <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.86rem", color: C.muted, lineHeight: 1.6 }}>{e.note}</div>}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        /* 2-col bio */
        .about-2col { grid-template-columns: 1fr 1fr; }

        /* interests: 3 col default */
        .interests-grid { grid-template-columns: repeat(3, 1fr); }

        /* education row */
        .edu-row { grid-template-columns: 180px 1fr; gap: 40px; }
        .edu-line-v { position:absolute; left:172px; top:0; bottom:0; width:1px; background:rgba(255,255,255,0.07); }

        /* LG ≤ 1024 */
        @media (max-width:1024px) {
          .interests-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .edu-row { grid-template-columns: 140px 1fr !important; gap: 28px !important; }
          .edu-line-v { left: 132px !important; }
        }
        /* MD ≤ 768 */
        @media (max-width:768px) {
          .about-2col     { grid-template-columns: 1fr !important; }
          .interests-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .edu-row        { grid-template-columns: 1fr !important; gap: 6px !important; }
          .edu-line-v     { display: none !important; }
        }
        /* SM ≤ 480 */
        @media (max-width:480px) {
          .interests-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
