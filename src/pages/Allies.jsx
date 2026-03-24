import { useState, useEffect, useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import './Allies.css';

export default function Allies() {
  useFadeIn();

  return (
    <div>

      {/* Hero */}
      <section style={{ margin: 0, padding: 0, lineHeight: 0, position: 'relative' }}>
        <img
          src="/image5.jpg"
          alt="Aliados APN"
          style={{ width: '100%', display: 'block', objectFit: 'cover', height: 'clamp(260px, 40vw, 520px)', objectPosition: 'center 30%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)' }} />
      </section>

      {/* Encabezado ALIADOS */}
      <section
        className="fade-in"
        style={{ backgroundColor: '#fff', padding: 'clamp(40px, 6vw, 80px) clamp(32px, 6vw, 80px) clamp(20px, 3vw, 40px)' }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 'clamp(16px, 3vw, 28px)' }}>
            <span
              style={{
                fontFamily: "'Averta', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(16px, 3.5vw, 26px)',
                letterSpacing: '0.12em',
                color: '#003da7',
                textTransform: 'uppercase',
              }}
            >
              Aliados
            </span>
            <span style={{ color: '#003da7', fontSize: 14 }}>›</span>
          </div>
          <p
            style={{
              fontFamily: "'Averta', sans-serif",
              fontStyle: 'italic',
              fontSize: 'clamp(15px, 2.8vw, 20px)',
              lineHeight: 1.75,
              color: '#003da7',
              maxWidth: 620,
            }}
          >
            La <strong style={{ fontWeight: 700, fontStyle: 'normal' }}>Alianza por la Nutrición</strong> reúne a organizaciones del sector privado y la sociedad civil comprometidas con erradicar la desnutrición crónica infantil en Guatemala.
          </p>
        </div>
      </section>

      {/* Carrusel de logos */}
      <OrgsCarousel />

      {/* 5 Áreas de Trabajo */}
      <section
        className="fade-in"
        style={{ backgroundColor: '#003da7', padding: 'clamp(48px, 7vw, 96px) clamp(32px, 6vw, 80px)' }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Averta', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(16px, 3.5vw, 28px)',
              letterSpacing: '0.1em',
              color: '#fff',
              textTransform: 'uppercase',
              marginBottom: 'clamp(32px, 5vw, 56px)',
              marginTop: 0,
            }}
          >
            Áreas de Trabajo <span style={{ fontFamily: "'Averta'" }}>›</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(28px, 4vw, 44px)' }}>
            {[
              {
                num: '01',
                title: 'Incidencia',
                desc: 'Influimos en políticas públicas nacionales para que la prevención de la desnutrición crónica infantil sea una prioridad de Estado, involucrando a tomadores de decisión del sector público y privado.',
              },
              {
                num: '02',
                title: 'Comunicación',
                desc: 'Difundimos información estratégica sobre la DCI y su impacto en el desarrollo del país, generando conciencia en la sociedad guatemalteca para impulsar el cambio colectivo.',
              },
              {
                num: '03',
                title: 'Aprendizaje',
                desc: 'Facilitamos el intercambio de conocimientos y mejores prácticas entre aliados, implementadores y expertos para fortalecer las intervenciones en los primeros 1,000 días de vida.',
              },
              {
                num: '04',
                title: 'Generación de Evidencia',
                desc: 'Producimos datos e investigaciones rigurosas que fundamentan decisiones informadas y demuestran el impacto de nuestras intervenciones en la reducción de la DCI en Guatemala.',
              },
              {
                num: '05',
                title: 'Alianzas',
                desc: 'Fortalecemos la red de organizaciones y líderes comprometidos con la nutrición infantil, creando sinergias que multiplican el alcance y la efectividad de nuestras acciones.',
              },
            ].map(({ num, title, desc }) => (
              <div
                key={num}
                style={{ display: 'flex', gap: 'clamp(16px, 3vw, 32px)', alignItems: 'flex-start' }}
              >
                <span
                  style={{
                    fontFamily: "'Averta', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(28px, 5vw, 52px)',
                    color: '#00a1e0',
                    lineHeight: 1,
                    flexShrink: 0,
                    minWidth: 'clamp(40px, 7vw, 72px)',
                  }}
                >
                  {num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Averta', sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(14px, 2.5vw, 20px)',
                      color: '#00a1e0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: 8,
                      marginTop: 4,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Averta', sans-serif",
                      fontStyle: 'italic',
                      fontSize: 'clamp(13px, 2vw, 17px)',
                      lineHeight: 1.75,
                      color: 'rgba(255,255,255,0.88)',
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Imagen separadora */}
      <div style={{ width: '100%', lineHeight: 0 }}>
        <img
          src="/image6.jpg"
          alt="Aliados en acción"
          style={{ width: '100%', display: 'block', objectFit: 'cover', height: 'clamp(180px, 28vw, 360px)', objectPosition: 'center 40%' }}
        />
      </div>

      {/* POR QUÉ SER PARTE */}
      <section
        className="fade-in"
        style={{ backgroundColor: '#d6d8db', padding: 'clamp(48px, 7vw, 96px) clamp(32px, 6vw, 80px)' }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Averta', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(16px, 3.5vw, 28px)',
              letterSpacing: '0.1em',
              color: '#003da7',
              textTransform: 'uppercase',
              marginBottom: 'clamp(32px, 5vw, 56px)',
              marginTop: 0,
            }}
          >
            Por qué ser parte <span style={{ fontFamily: "'Averta'" }}>›</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 3.5vw, 36px)' }}>
            {[
              {
                num: '1/',
                title: 'Coalición con impacto nacional',
                desc: 'Sé parte de una red multisectorial que une al sector privado y la sociedad civil con un propósito común: garantizar que ningún niño ni niña guatemalteca se quede atrás.',
              },
              {
                num: '2/',
                title: 'Acceso a evidencia de frontera',
                desc: 'Conecta con investigaciones, datos y aprendizajes de vanguardia sobre nutrición infantil y desarrollo en la primera infancia, directamente aplicables a tu organización.',
              },
              {
                num: '3/',
                title: 'Incidencia en políticas públicas',
                desc: 'Contribuye a un cambio sistémico real. Tu participación fortalece la voz colectiva de la Alianza ante tomadores de decisión y da forma a las políticas de nutrición del país.',
              },
              {
                num: '4/',
                title: 'Red de líderes comprometidos',
                desc: 'Conecta con empresas, fundaciones y organizaciones líderes que comparten tu visión de un Guatemala más justo y nutritivo para la próxima generación.',
              },
              {
                num: '5/',
                title: 'Valor compartido para tu organización',
                desc: 'Genera impacto medible, refuerza tu reputación institucional y contribuye al desarrollo sostenible del país desde el área más estratégica: la primera infancia.',
              },
            ].map(({ num, title, desc }) => (
              <div
                key={num}
                style={{ display: 'flex', gap: 'clamp(16px, 3vw, 28px)', alignItems: 'flex-start' }}
              >
                <span
                  style={{
                    fontFamily: "'Averta', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 3.5vw, 36px)',
                    color: '#003da7',
                    lineHeight: 1,
                    flexShrink: 0,
                    minWidth: 'clamp(32px, 5vw, 52px)',
                  }}
                >
                  {num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Averta', sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(13px, 2vw, 18px)',
                      color: '#003da7',
                      textTransform: 'uppercase',
                      letterSpacing: '0.07em',
                      marginBottom: 6,
                      marginTop: 2,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Averta', sans-serif",
                      fontStyle: 'italic',
                      fontSize: 'clamp(13px, 1.8vw, 16px)',
                      lineHeight: 1.75,
                      color: '#003da7',
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Averta', sans-serif",
              fontSize: 'clamp(10px, 1.4vw, 13px)',
              color: '#003da7',
              marginTop: 'clamp(28px, 4vw, 48px)',
            }}
          >
            *DCI: Desnutrición Crónica Infantil.
          </p>
        </div>
      </section>

      {/* CTA — Únete */}
      <section
        className="fade-in"
        style={{ backgroundColor: '#003da7', padding: 'clamp(48px, 7vw, 96px) clamp(32px, 6vw, 80px)' }}
      >
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: "'Averta', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(16px, 3.5vw, 28px)',
              letterSpacing: '0.1em',
              color: '#fff',
              textTransform: 'uppercase',
              marginBottom: 'clamp(12px, 2vw, 20px)',
              marginTop: 0,
            }}
          >
            ¡Únete hoy!
          </h2>

          <p
            style={{
              fontFamily: "'Averta', sans-serif",
              fontStyle: 'italic',
              fontSize: 'clamp(13px, 2vw, 18px)',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.88)',
              marginBottom: 'clamp(28px, 4vw, 44px)',
            }}
          >
            Ingresa tus datos y sé parte del cambio.{' '}
            <strong style={{ fontWeight: 700, fontStyle: 'normal', color: '#fff' }}>
              Juntos podemos garantizar que ningún niño ni niña quede atrás.
            </strong>
          </p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
            {['Nombre', 'Correo', 'Teléfono', 'Organización'].map((placeholder) => (
              <input
                key={placeholder}
                type={placeholder === 'Correo' ? 'email' : placeholder === 'Teléfono' ? 'tel' : 'text'}
                placeholder={placeholder}
                style={{
                  backgroundColor: '#E8E8E8',
                  border: 'none',
                  borderRadius: 4,
                  padding: 'clamp(10px, 1.5vw, 16px) clamp(12px, 2vw, 20px)',
                  fontFamily: "'Averta', sans-serif",
                  fontSize: 'clamp(13px, 1.5vw, 16px)',
                  color: '#555',
                  outline: 'none',
                  width: '72%',
                  boxSizing: 'border-box',
                }}
              />
            ))}
            <button
              type="submit"
              style={{
                marginTop: 12,
                backgroundColor: '#00a1e0',
                color: '#fff',
                border: 'none',
                borderRadius: 4,
                padding: 'clamp(12px, 2vw, 18px) clamp(28px, 4vw, 48px)',
                fontFamily: "'Averta', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(13px, 1.8vw, 18px)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}

/* ── Carousel de logos ── */
const LOGOS = [
  { src: '/Allies1.png', alt: 'Aliado 1' },
  { src: '/Allies2.png', alt: 'Aliado 2' },
  { src: '/Allies3.png', alt: 'Aliado 3' },
];
const GAP = 24;
const EXT = [LOGOS[LOGOS.length - 1], ...LOGOS, LOGOS[0]];

function OrgsCarousel() {
  const total = LOGOS.length;
  const [pos, setPos] = useState(1);
  const [animated, setAnimated] = useState(true);
  const [card, setCard] = useState(160);
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
    const timer = setInterval(() => setPos((p) => p + 1), 2500);
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
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  const trackX = -(pos - 1) * (card + GAP);

  return (
    <section
      className="fade-in"
      style={{ backgroundColor: '#003da7', padding: 'clamp(48px, 7vw, 96px) clamp(32px, 6vw, 80px)' }}
    >
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: "'Averta', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(16px, 3.5vw, 28px)',
            letterSpacing: '0.1em',
            color: '#fff',
            textTransform: 'uppercase',
            marginBottom: 'clamp(32px, 5vw, 56px)',
            marginTop: 0,
          }}
        >
          Organizaciones que son<br />parte de la Alianza por<br />la Nutrición{' '}
          <span style={{ fontFamily: "'Averta'" }}>›</span>
        </h2>

        <div
          ref={containerRef}
          style={{ width: '100%', maxWidth: 3 * 160 + 2 * GAP, margin: '0 auto', perspective: 900 }}
        >
          <div
            style={{
              display: 'flex',
              gap: GAP,
              transform: `translateX(${trackX}px)`,
              transition: animated ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
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
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    overflow: 'hidden',
                    boxShadow: isCenter ? '0 12px 40px rgba(0,0,0,0.5)' : '0 4px 16px rgba(0,0,0,0.2)',
                    padding: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.6s ease, opacity 0.6s ease, box-shadow 0.6s ease',
                    transform: isCenter
                      ? 'rotateY(0deg) scale(1.08) translateZ(30px)'
                      : dist === -1
                      ? 'rotateY(18deg) scale(0.88)'
                      : dist === 1
                      ? 'rotateY(-18deg) scale(0.88)'
                      : 'scale(0.75)',
                    opacity: isCenter ? 1 : isSide ? 0.65 : 0,
                    pointerEvents: isCenter ? 'auto' : 'none',
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(48px, 7vw, 80px)' }}>
          <img
            src="/logo3.png"
            alt="Alianza por la Nutrición"
            style={{ maxWidth: 'clamp(120px, 20vw, 200px)', objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  );
}
