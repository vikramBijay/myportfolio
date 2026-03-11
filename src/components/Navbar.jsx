import { useState, useEffect, useRef } from "react";

const C = { bg: "#060608", accent: "#7fff6e", text: "#e8e8f0", muted: "#6b6b80", surface: "#0d0d12" };
const LINKS = ["Skills", "Projects", "About", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef(null);

  // Close on resize to desktop
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Shrink navbar on scroll
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close drawer on Escape key
  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        height: scrolled ? "56px" : "64px",
        background: "rgba(6,6,8,0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "0 60px",
        boxSizing: "border-box",
        transition: "height 0.3s ease",
      }}>
        {/* Logo */}
        <a href="#" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.text, textDecoration: "none", letterSpacing: "-0.02em", flexShrink: 0 }}>
          B<span style={{ color: C.accent }}>.</span>Vikram
        </a>

        {/* Desktop links (md+) */}
        <ul className="nav-links" style={{ display: "flex", gap: "36px", listStyle: "none", margin: 0, padding: 0 }}>
          {LINKS.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.78rem", color: C.muted, textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = C.accent}
                onMouseLeave={e => e.target.style.color = C.muted}>{l}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="mailto:vikrambijay005@email.com" className="nav-cta"
          style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: C.bg, background: C.accent, padding: "10px 22px", borderRadius: "2px", textDecoration: "none", flexShrink: 0, transition: "opacity 0.2s, transform 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}>
          Hire Me →
        </a>

        {/* Hamburger (sm/md) */}
        <button
          className="nav-ham"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{ display: "none", background: "none", border: "1px solid rgba(255,255,255,0.1)", color: C.text, cursor: "pointer", padding: "7px 11px", borderRadius: "3px", lineHeight: 1, transition: "border-color 0.2s, color 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(127,255,110,0.4)"; e.currentTarget.style.color = C.accent; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = C.text; }}>
          {/* Animated hamburger icon */}
          <div style={{ width: "18px", display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ display: "block", height: "1.5px", background: "currentColor", transition: "transform 0.25s, opacity 0.25s", transformOrigin: "center", transform: open ? "translateY(5.5px) rotate(45deg)" : "none" }} />
            <span style={{ display: "block", height: "1.5px", background: "currentColor", transition: "opacity 0.25s", opacity: open ? 0 : 1 }} />
            <span style={{ display: "block", height: "1.5px", background: "currentColor", transition: "transform 0.25s, opacity 0.25s", transformOrigin: "center", transform: open ? "translateY(-5.5px) rotate(-45deg)" : "none" }} />
          </div>
        </button>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)",
          zIndex: 101, backdropFilter: "blur(2px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Mobile / Tablet Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed", top: 0, right: 0,
          height: "100%", width: "min(280px, 80vw)",
          background: C.surface,
          zIndex: 102,
          borderLeft: "1px solid rgba(255,255,255,0.07)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.32s cubic-bezier(0.4,0,0.2,1)",
          display: "flex", flexDirection: "column",
          boxShadow: open ? "-20px 0 60px rgba(0,0,0,0.5)" : "none",
        }}>

        {/* Drawer header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: "64px", borderBottom: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
          <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: C.text, fontSize: "1rem" }}>
            B<span style={{ color: C.accent }}>.</span>Vikram
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{ background: "none", border: "1px solid rgba(255,255,255,0.08)", color: C.muted, fontSize: "0.9rem", cursor: "pointer", padding: "5px 9px", borderRadius: "3px", transition: "all 0.2s", lineHeight: 1 }}
            onMouseEnter={e => { e.currentTarget.style.color = C.accent; e.currentTarget.style.borderColor = "rgba(127,255,110,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}>
            ✕
          </button>
        </div>

        {/* Drawer links */}
        <nav style={{ padding: "16px 12px", flex: 1, overflowY: "auto" }}>
          {LINKS.map((l, i) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                fontFamily: "'DM Mono',monospace", fontSize: "0.82rem",
                textTransform: "uppercase", letterSpacing: "0.1em",
                color: C.muted, textDecoration: "none",
                padding: "15px 16px", borderRadius: "3px",
                borderBottom: i < LINKS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = C.accent; e.currentTarget.style.background = "rgba(127,255,110,0.05)"; e.currentTarget.style.paddingLeft = "22px"; }}
              onMouseLeave={e => { e.currentTarget.style.color = C.muted; e.currentTarget.style.background = "transparent"; e.currentTarget.style.paddingLeft = "16px"; }}>
              {l}
              <span style={{ fontSize: "0.65rem", opacity: 0.4 }}>→</span>
            </a>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div style={{ padding: "20px", borderTop: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
          <a href="mailto:vikrambijay005@email.com"
            style={{ display: "block", textAlign: "center", fontFamily: "'DM Mono',monospace", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", background: C.accent, color: C.bg, padding: "15px", borderRadius: "2px", textDecoration: "none", transition: "opacity 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            Hire Me →
          </a>
          <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.6rem", color: C.muted, textAlign: "center", marginTop: "12px", letterSpacing: "0.06em", opacity: 0.6 }}>
            vikrambijay005@email.com
          </p>
        </div>
      </div>

      <style>{`
        /* ── lg: full nav ── */
        @media (min-width: 1025px) {
          .nav-links { gap: 40px !important; }
        }

        /* ── md: tighter spacing, still full nav ── */
        @media (min-width: 769px) and (max-width: 1024px) {
          nav { padding: 0 36px !important; }
          .nav-links { gap: 24px !important; }
          .nav-links a { font-size: 0.72rem !important; }
        }

        /* ── sm: hamburger only ── */
        @media (max-width: 768px) {
          nav         { padding: 0 24px !important; }
          .nav-links  { display: none !important; }
          .nav-cta    { display: none !important; }
          .nav-ham    { display: flex !important; align-items: center; }
        }

        @media (max-width: 480px) {
          nav { padding: 0 16px !important; }
        }
      `}</style>
    </>
  );
}