import { useEffect, useRef, useState } from "react";
import useReveal from "../hooks/useReveal.js";
import "./StatCounter.css";

export default function StatCounter({ value, suffix = "", label, delay = 0 }) {
  const [ref, visible] = useReveal();
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;

    const duration = 1100;
    const start = performance.now() + delay;

    let frame;
    const tick = (now) => {
      const progress = Math.min(Math.max((now - start) / duration, 0), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, value, delay]);

  return (
    <div ref={ref} className={`stat-counter reveal ${visible ? "is-visible" : ""}`}>
      <p className="stat-counter-value">
        {display}
        {suffix}
      </p>
      <p className="stat-counter-label text-dim">{label}</p>
    </div>
  );
}
