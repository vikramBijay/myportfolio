const C = { bg: "#060608", accent: "#7fff6e", text: "#e8e8f0", muted: "#6b6b80", surface: "#0d0d12" };

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", zIndex: 1, maxWidth: "100%" }}>
      {/* Glows */}
      <div style={{ position: "absolute", width: "500px", height: "500px", background: "rgba(127,255,110,0.06)", borderRadius: "50%", filter: "blur(120px)", top: "-100px", right: "-100px", pointerEvents: "none", animation: "float 8s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: "350px", height: "350px", background: "rgba(91,232,200,0.05)", borderRadius: "50%", filter: "blur(120px)", bottom: 0, left: "30%", pointerEvents: "none", animation: "float 8s 3s ease-in-out infinite" }} />

      <div className="hero-inner">
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "'DM Mono',monospace", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: C.accent, border: "1px solid rgba(127,255,110,0.25)", padding: "6px 14px", borderRadius: "100px", marginBottom: "28px", animation: "fadeSlideUp 0.8s ease both" }}>
          <span style={{ width: "6px", height: "6px", background: C.accent, borderRadius: "50%", animation: "pulse 2s infinite", flexShrink: 0 }} />
          Available for opportunities
        </div>

        {/* H1 */}
        <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(3rem,10vw,7rem)", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "24px", animation: "fadeSlideUp 0.8s 0.15s ease both" }}>
          Bijay<br />
          <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}>
            Vikram<span style={{ color: C.accent, WebkitTextStroke: "0px" }}>.</span>
          </span>
        </h1>

        {/* Desc */}
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(0.9rem,2.5vw,1.1rem)", lineHeight: 1.7, color: C.muted, maxWidth: "500px", marginBottom: "40px", animation: "fadeSlideUp 0.8s 0.3s ease both" }}>
          <strong style={{ color: C.text, fontWeight: 400 }}>Front-End Developer</strong> crafting responsive, interactive, and user-friendly web experiences. Passionate about clean code, modern tooling, and pixel-perfect interfaces.
        </p>

        {/* Buttons */}
        <div className="hero-btns" style={{ display: "flex", gap: "14px", flexWrap: "wrap", animation: "fadeSlideUp 0.8s 0.45s ease both" }}>
          <a href="#projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: C.accent, color: C.bg, fontFamily: "'DM Mono',monospace", fontSize: "0.78rem", letterSpacing: "0.05em", textTransform: "uppercase", padding: "13px 26px", textDecoration: "none", borderRadius: "3px", transition: "all 0.2s", whiteSpace: "nowrap" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(127,255,110,0.25)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
            View Work ↓
          </a>
          <a href="mailto:vikrambijay005@email.com" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: C.muted, fontFamily: "'DM Mono',monospace", fontSize: "0.78rem", letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none", padding: "13px 26px", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "3px", transition: "all 0.2s", whiteSpace: "nowrap" }}
            onMouseEnter={e => { e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.background = C.surface; }}
            onMouseLeave={e => { e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "transparent"; }}>
            Get in Touch
          </a>
        </div>

        {/* Stats — bottom row, mobile only */}
        <div className="hero-stats-bottom">
          {[{ num: "6+", label: "Projects Built" }, { num: "3+", label: "Frameworks" }, { num: "∞", label: "Learning" }].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem,4vw,2.2rem)", color: C.text, lineHeight: 1 }}>
                {s.num.replace("+", "")}<span style={{ color: C.accent }}>{s.num.includes("+") ? "+" : ""}</span>
              </div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted, marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats — RIGHT SIDE vertical column (desktop) */}
      <div className="hero-stats-right" style={{ position: "absolute", right: "60px", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "40px", animation: "fadeSlideUp 0.8s 0.6s ease both" }}>
        {[{ num: "6+", label: "Projects Built" }, { num: "3+", label: "Frameworks" }, { num: "∞", label: "Learning" }].map(s => (
          <div key={s.label} style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: C.text, lineHeight: 1 }}>
              {s.num.replace("+", "")}<span style={{ color: C.accent }}>{s.num.includes("+") ? "+" : ""}</span>
            </div>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted, marginTop: "4px" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" style={{ position: "absolute", bottom: "36px", left: "60px", display: "flex", alignItems: "center", gap: "12px", fontFamily: "'DM Mono',monospace", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted }}>
        <div style={{ width: "1px", height: "36px", background: "linear-gradient(transparent, #6b6b80)" }} />
        Scroll
      </div>

      <style>{`
        .hero-inner {
          position: relative; z-index: 2;
          padding: 120px 60px 80px;
          width: 100%; box-sizing: border-box;
        }

        .hero-stats-bottom {
          display: none;
        }

        @media (max-width: 1024px) {
          .hero-inner         { padding: 110px 48px 70px; }
          .hero-scroll        { left: 48px !important; }
          .hero-stats-right   { right: 48px !important; }
        }

        @media (max-width: 768px) {
          .hero-inner         { padding: 100px 32px 60px; }
          .hero-scroll        { left: 32px !important; }
          .hero-stats-right   { display: none !important; right: 0 !important; }
          .hero-stats-bottom  {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
            margin-top: 48px;
            animation: fadeSlideUp 0.8s 0.6s ease both;
          }
          .hero-btns          { flex-direction: column !important; }
          .hero-btns a        { text-align: center; justify-content: center; width: 100%; box-sizing: border-box; }
        }

        @media (max-width: 480px) {
          .hero-inner         { padding: 90px 20px 60px; }
          .hero-scroll        { display: none !important; }
          .hero-stats-bottom  { gap: 24px; }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}