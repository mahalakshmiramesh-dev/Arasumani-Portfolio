import "./Marquee.css";

export default function Marquee({ items, speed = 28 }) {
  // Duplicate the list so the CSS animation can loop seamlessly.
  const loop = [...items, ...items];

  return (
    <div className="marquee" style={{ "--marquee-speed": `${speed}s` }}>
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <span className="marquee-dot" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
