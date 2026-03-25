import { useState } from "react";
import { Reveal } from "./useReveal.jsx";

const C = { accent: "#7fff6e", accent2: "#5be8c8", text: "#e8e8f0", muted: "#6b6b80", surface: "#0d0d12", bg: "#060608", border: "rgba(255,255,255,0.07)" };

const links = [
  { icon: "✉",  name: "Email",    val: "vikrambijay005@email.com",    href: "mailto:vikrambijay005@email.com" },
  { icon: "⊙",  name: "GitHub",   val: "github.com/vikramBijay",      href: "https://github.com/vikramBijay" },
  { icon: "in", name: "LinkedIn", val: "linkedin.com/in/bijay-vikram-a069363b5/", href: "https://linkedin.com/in/bijay-vikram-a069363b5/" },
];

function ContactLink({ c, first }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 0", paddingLeft: hov ? "10px" : "0", borderBottom: `1px solid ${C.border}`, borderTop: first ? `1px solid ${C.border}` : "none", textDecoration: "none", transition: "padding-left 0.2s" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
        <div style={{ width: "34px", height: "34px", border: `1px solid ${hov ? C.accent : C.border}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", background: hov ? C.accent : "transparent", transition: "all 0.2s", flexShrink: 0 }}>
          <span style={{ color: hov ? C.bg : C.muted }}>{c.icon}</span>
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.95rem", color: C.text }}>{c.name}</div>
          <div className="contact-link-val" style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.72rem", color: C.muted, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.val}</div>
        </div>
      </div>
      <span style={{ color: hov ? C.accent : C.muted, fontSize: "1.1rem", transform: hov ? "translate(3px,-3px)" : "none", transition: "transform 0.2s, color 0.2s", flexShrink: 0, marginLeft: "8px" }}>↗</span>
    </a>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const inputStyle = { width: "100%", background: C.surface, border: `1px solid ${C.border}`, color: C.text, fontFamily: "'DM Sans',sans-serif", fontSize: "0.92rem", padding: "13px 16px", borderRadius: "3px", outline: "none", transition: "border-color 0.2s", boxSizing: "border-box" };

  return (
    <section id="contact" style={{ position: "relative", zIndex: 1, background: C.bg }}>
      <div className="sec-pad">
        <div className="sec-label"><span className="sec-line" />Contact</div>

        <div className="contact-2col" style={{ display: "grid", gap: "clamp(40px,6vw,80px)", alignItems: "start" }}>
          {/* Left */}
          <div>
            <Reveal from="left">
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,6vw,4.5rem)", letterSpacing: "-0.04em", lineHeight: 0.95, color: C.text, marginBottom: "24px" }}>
                Let's Build<br />Something <span style={{ color: C.accent }}>Great.</span>
              </h2>
            </Reveal>
            <Reveal from="left" delay={100}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(0.88rem,2vw,1rem)", lineHeight: 1.7, color: C.muted, marginBottom: "36px" }}>
                I'm currently open to freelance opportunities and full-time roles. If you have a project in mind or just want to connect — my inbox is always open.
              </p>
            </Reveal>
            <Reveal from="left" delay={200}>
              <div>{links.map((c, i) => <ContactLink key={c.name} c={c} first={i === 0} />)}</div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal from="right" delay={150}>
            <div>
              {[{ label: "Your Name", type: "text", ph: "Your Name" }, { label: "Email Address", type: "email", ph: "Email Address" }].map(f => (
                <div key={f.label} style={{ marginBottom: "18px" }}>
                  <label style={{ display: "block", fontFamily: "'DM Mono',monospace", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted, marginBottom: "8px" }}>{f.label}</label>
                  <input type={f.type} placeholder={f.ph} style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "rgba(127,255,110,0.4)"}
                    onBlur={e  => e.target.style.borderColor = C.border} />
                </div>
              ))}
              <div style={{ marginBottom: "18px" }}>
                <label style={{ display: "block", fontFamily: "'DM Mono',monospace", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted, marginBottom: "8px" }}>Message</label>
                <textarea placeholder="Tell me about your project..." rows={5} style={{ ...inputStyle, resize: "none", height: "120px" }}
                  onFocus={e => e.target.style.borderColor = "rgba(127,255,110,0.4)"}
                  onBlur={e  => e.target.style.borderColor = C.border} />
              </div>
              <button onClick={() => { setSent(true); setTimeout(() => setSent(false), 3000); }}
                style={{ width: "100%", background: sent ? C.accent2 : C.accent, color: C.bg, border: "none", fontFamily: "'DM Mono',monospace", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "15px", cursor: "pointer", borderRadius: "3px", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.opacity="0.85"; e.currentTarget.style.transform="translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity="1";    e.currentTarget.style.transform="translateY(0)"; }}>
                {sent ? "Sent! ✓" : "Send Message →"}
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .contact-2col { grid-template-columns: 1fr 1fr; }
        @media (max-width:768px) {
          .contact-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
