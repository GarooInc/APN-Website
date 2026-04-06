import { useState, useEffect, useRef } from 'react';

const LOGOS = [
  { src: "/Allies1.png",   alt: "Aliado 1" },
  { src: "/Allies2.png",   alt: "Aliado 2" },
  { src: "/Allies3.png",   alt: "Aliado 3" },
  { src: "/Allies4.png",   alt: "Aliado 4" },
  { src: "/Allies5.jpg",   alt: "Aliado 5" },
  { src: "/Allies6.webp",  alt: "Aliado 6" },
  { src: "/Allies7.png",   alt: "Aliado 7" },
  { src: "/Allies8.webp",  alt: "Aliado 8" },
  { src: "/Allies9.jpg",   alt: "Aliado 9" },
  { src: "/Allies10.jpg",  alt: "Aliado 10" },
  { src: "/Allies11.jpeg", alt: "Aliado 11" },
  { src: "/Allies12.jpg",  alt: "Aliado 12" },
  { src: "/Allies13.png",  alt: "Aliado 13" },
  { src: "/Allies14.png",  alt: "Aliado 14" },
  { src: "/Allies15.webp", alt: "Aliado 15" },
  { src: "/Allies16.png",  alt: "Aliado 16" },
  { src: "/Allies17.jpg",  alt: "Aliado 17" },
  { src: "/Allies18.png",  alt: "Aliado 18" },
  { src: "/Allies19.jpeg", alt: "Aliado 19" },
  { src: "/Allies20.png",  alt: "Aliado 20" },
  { src: "/Allies21.webp", alt: "Aliado 21" },
];

const GAP = 24;
const EXT = [LOGOS[LOGOS.length - 1], ...LOGOS, LOGOS[0]];

export default function OrgsCarousel({ title, bgColor = "#00379E", textColor = "#fff", cardBorder = "none", showLogo = false, minCardSize = 160 }) {
  const total = LOGOS.length;
  const [pos, setPos] = useState(1);
  const [animated, setAnimated] = useState(true);
  const [card, setCard] = useState(minCardSize);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateCard = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setCard(Math.floor((w - 2 * GAP) / 3));
      }
    };
    updateCard();
    window.addEventListener('resize', updateCard);
    return () => window.removeEventListener('resize', updateCard);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setPos(p => p + 1), 2500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (pos === EXT.length - 1) {
      setTimeout(() => { setAnimated(false); setPos(1); }, 620);
    } else if (pos === 0) {
      setTimeout(() => { setAnimated(false); setPos(total); }, 620);
    }
  }, [pos, total]);

  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimated(true))
      );
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  const timerRef = useRef(null);
  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setPos(p => p + 1), 2500);
  };
  const goNext = () => { setAnimated(true); setPos(p => p + 1); resetTimer(); };
  const goPrev = () => { setAnimated(true); setPos(p => p - 1); resetTimer(); };

  const trackX = -(pos - 1) * (card + GAP);

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "transparent",
    border: `2px solid ${textColor}`,
    borderRadius: "50%",
    width: "clamp(28px, 4vw, 36px)",
    height: "clamp(28px, 4vw, 36px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: textColor,
    fontSize: "clamp(16px, 2.5vw, 22px)",
    opacity: 0.8,
    transition: "opacity 0.2s",
    zIndex: 2,
    lineHeight: 1,
  };

  return (
    <section
      className="fade-in"
      style={{ backgroundColor: bgColor, padding: "clamp(40px, 6vw, 80px) clamp(40px, 8vw, 120px) clamp(60px, 8vw, 100px)" }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Averta-Bold'",
            fontWeight: 400,
            fontSize: "clamp(18px, 3.5vw, 40px)",
            lineHeight: 1.25,
            letterSpacing: "0.0908em",
            color: textColor,
            textTransform: "uppercase",
            marginBottom: "clamp(32px, 5vw, 60px)",
            marginTop: 0,
          }}
        >
          {title}
        </h2>

        <div style={{ position: "relative", width: "100%", maxWidth: 3 * minCardSize + 2 * GAP, margin: "0 auto" }}>
          <button
            onClick={goPrev}
            style={{ ...arrowStyle, left: -48 }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0.8}
          >‹</button>
          <button
            onClick={goNext}
            style={{ ...arrowStyle, right: -48 }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0.8}
          >›</button>
        <div ref={containerRef} style={{ width: "100%", perspective: 900 }}>
          <div
            style={{
              display: "flex",
              gap: GAP,
              transform: `translateX(${trackX}px)`,
              transition: animated ? "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
            }}
          >
            {EXT.map((logo, i) => {
              const dist = i - pos;
              const isCenter = dist === 0;
              const isSide = Math.abs(dist) === 1;
              return (
                <div
                  key={i}
                  style={{
                    width: card,
                    height: card,
                    flexShrink: 0,
                    backgroundColor: "#fff",
                    borderRadius: 8,
                    overflow: "hidden",
                    border: cardBorder,
                    boxShadow: isCenter ? "0 12px 40px rgba(0,0,0,0.5)" : "0 4px 16px rgba(0,0,0,0.2)",
                    padding: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.6s ease, opacity 0.6s ease, box-shadow 0.6s ease",
                    transform: isCenter
                      ? "rotateY(0deg) scale(1.08) translateZ(30px)"
                      : dist === -1
                        ? "rotateY(18deg) scale(0.88)"
                        : dist === 1
                          ? "rotateY(-18deg) scale(0.88)"
                          : "scale(0.75)",
                    opacity: isCenter ? 1 : isSide ? 0.65 : 0,
                    pointerEvents: isCenter ? "auto" : "none",
                  }}
                >
                  <img src={logo.src} alt={logo.alt} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                </div>
              );
            })}
          </div>
        </div>
        </div>

        {showLogo && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "clamp(56px, 8vw, 90px)" }}>
            <img src="/logo3.png" alt="Alianza por la Nutrición" style={{ maxWidth: "clamp(120px, 20vw, 220px)", objectFit: "contain" }} />
          </div>
        )}
      </div>
    </section>
  );
}
