import { useCallback, useRef, useState } from "react";

export function useReveal(threshold = 0.05) {
  const observerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const ref = useCallback(
    (node) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      if (!node) return;
      observerRef.current = new IntersectionObserver(
        ([entry]) => setVisible(entry.isIntersecting),
        { threshold }
      );
      observerRef.current.observe(node);
    },
    [threshold]
  );

  return [ref, visible];
}

export function Reveal({ children, from = "bottom", delay = 0, className = "" }) {
  const [ref, visible] = useReveal();

  const transforms = {
    bottom: "translateY(30px)",
    top: "translateY(-30px)",
    left: "translateX(-50px)",
    right: "translateX(50px)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : transforms[from],
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}