/**
 * MaskText — wraps text in an overflow-hidden mask so it can slide
 * up into view (the line-reveal effect used across the section
 * headings). Parent must toggle an "is-visible" class on an
 * ancestor with the "reveal-mask-group" hook for the animation to fire —
 * in practice that's the .section-head wrapper each section already
 * marks visible via useReveal.
 */
export default function MaskText({ text }) {
  return (
    <span className="reveal-mask">
      <span className="reveal-mask-inner">{text}</span>
    </span>
  );
}
