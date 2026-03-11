import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Skills from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');

      *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
      html { scroll-behavior: smooth; overflow-x: hidden; max-width: 100%; }
      body {
        background: #060608;
        color: #e8e8f0;
        font-family: 'DM Sans', sans-serif;
        font-weight: 300;
        overflow-x: hidden;
        max-width: 100%;
        cursor: none;
      }

      /* Noise overlay */
      body::before {
        content: '';
        position: fixed; inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
        pointer-events: none; z-index: 1000; opacity: 0.35;
      }
      /* Grid overlay */
      body::after {
        content: '';
        position: fixed; inset: 0;
        background-image:
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
        background-size: 60px 60px;
        pointer-events: none; z-index: 0;
      }

      .cursor-dot {
        width: 12px; height: 12px;
        background: #7fff6e;
        border-radius: 50%;
        position: fixed; top: 0; left: 0;
        pointer-events: none; z-index: 9999;
        mix-blend-mode: difference;
        transform: translate(-50%,-50%);
        transition: transform 0.15s ease;
      }
      .cursor-ring {
        width: 36px; height: 36px;
        border: 1px solid rgba(127,255,110,0.4);
        border-radius: 50%;
        position: fixed; top: 0; left: 0;
        pointer-events: none; z-index: 9998;
        transform: translate(-50%,-50%);
        transition: all 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
      }

      /* ── Shared section utilities ── */
      .sec-pad   { padding: clamp(60px,10vw,100px) clamp(20px,5vw,60px); box-sizing: border-box; width: 100%; }
      .sec-label { font-family:'DM Mono',monospace; font-size:0.72rem; letter-spacing:0.15em; text-transform:uppercase; color:#7fff6e; margin-bottom:14px; display:flex; align-items:center; gap:12px; }
      .sec-line  { width:24px; height:1px; background:#7fff6e; flex-shrink:0; display:inline-block; }
      .sec-h2    { font-family:'Syne',sans-serif; font-weight:700; font-size:clamp(1.8rem,4vw,3rem); letter-spacing:-0.03em; line-height:1.1; margin-bottom:clamp(32px,5vw,56px); color:#e8e8f0; }
      .sec-h3    { font-family:'Syne',sans-serif; font-weight:700; font-size:clamp(1.3rem,3vw,2rem); letter-spacing:-0.02em; color:#e8e8f0; margin-bottom:clamp(24px,4vw,40px); }

      /* ── Animations ── */
      @keyframes fadeSlideUp { from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);} }
      @keyframes pulse       { 0%,100%{opacity:1;}50%{opacity:0.4;} }
      @keyframes float       { 0%,100%{transform:translateY(0);}50%{transform:translateY(-30px);} }

      /* ── Cursor ── */
      @media (max-width: 768px) {
        body { cursor: auto !important; }
        .cursor-dot, .cursor-ring { display: none !important; }
      }
    `}</style>
  );
}

function CursorEffect() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      dot.style.left = e.clientX + "px";
      dot.style.top  = e.clientY + "px";
    };

    const animate = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.12;
      p.ry += (p.my - p.ry) * 0.12;
      ring.style.left = p.rx + "px";
      ring.style.top  = p.ry + "px";
      requestAnimationFrame(animate);
    };

    const onEnter = () => {
      dot.style.transform  = "translate(-50%,-50%) scale(2)";
      ring.style.transform = "translate(-50%,-50%) scale(1.5)";
      ring.style.borderColor = "rgba(127,255,110,0.6)";
    };
    const onLeave = () => {
      dot.style.transform  = "translate(-50%,-50%) scale(1)";
      ring.style.transform = "translate(-50%,-50%) scale(1)";
      ring.style.borderColor = "rgba(127,255,110,0.4)";
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    animate();
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

export default function App() {
  return (
    <>
      <GlobalStyles />
      <CursorEffect />
      <Navbar />
      <main style={{ overflowX: "hidden", maxWidth: "100vw" }}>
        <Hero />
        <Marquee />
        <Skills />
        <ProjectsSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}