import { useEffect, useRef } from "react";

/**
 * useMagnetic — makes an element gently follow the cursor while
 * hovered (the "magnetic button" effect common in Framer templates),
 * then springs back to center on mouse leave. No-ops on touch devices.
 */
export default function useMagnetic(strength = 0.35) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMove = (e) => {
      const rect = node.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      node.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleLeave = () => {
      node.style.transform = "translate(0, 0)";
    };

    node.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseleave", handleLeave);
    return () => {
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return ref;
}
