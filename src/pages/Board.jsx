import { useState, useEffect, useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const boardMembers = [
  { name: 'Juan Alfonso\nSolares',  role: 'Presidente',    img: '/presidente.png' },
  { name: 'Álvaro\nCastillo',       role: 'Vicepresidente', img: '/junta1.png' },
  { name: 'Lucas\nDougherty',       role: 'Tesorero',       img: '/junta2.jpg' },
  { name: 'Yolanda\nMayora',        role: 'Secretaria',     img: '/junta3.jpg' },
  { name: 'Alfonso\nBosch',         role: 'Vocal I',        img: '/junta4.png' },
  { name: 'Edna\nLima',             role: 'Vocal II',       img: '/junta5.png' },
  { name: 'Carlos\nMérida',         role: 'Vocal III',      img: '/junta6.png' },
];

const staffMembers = [
  { name: 'Ana Luisa\nEsquivel',  role: 'Directora Ejecutiva',                  img: '/image12.png' },
  { name: 'Olga\nLópez',          role: 'Administración y Finanzas',             img: '/image13.jpg' },
  { name: 'Mónica\nRodríguez',    role: 'Monitoreo, Evaluación y Aprendizaje',   img: '/image14.png' },
];

const boldStyle = { fontFamily: "'Averta', Georgia, serif", fontWeight: 700 };

export default function Board() {
  useFadeIn();
  const [form, setForm] = useState({ nombre: '', correo: '', telefono: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      {/* Hero */}
      <div className="w-full h-[380px] overflow-hidden">
        <img
          src="/image11.jpg"
          alt="Junta directiva"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
      </div>

      {/* Mensaje del Presidente */}
      <section className="bg-neutral-bg px-8 py-16 fade-in">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-averta font-bold text-primary-dark uppercase mb-8"
            style={{ fontSize: 'clamp(18px, 3.5vw, 36px)', lineHeight: 1.25, letterSpacing: '0.09em' }}
          >
            Mensaje de<br />
            <span className="font-averta italic font-normal">nuestro presidente</span>
          </h2>

          {/* Foto + nombre */}
          <div className="flex items-start gap-5 mb-8">
            <img
              src="/presidente.png"
              alt="Juan Alfonso Solares"
              className="rounded-full object-cover flex-shrink-0"
              style={{ width: 'clamp(64px, 10vw, 110px)', height: 'clamp(64px, 10vw, 110px)' }}
            />
            <div className="flex flex-col justify-center pt-2">
              <span
                className="font-averta font-bold text-primary-dark uppercase"
                style={{ fontSize: 'clamp(12px, 2.5vw, 20px)', letterSpacing: '0.09em', lineHeight: 1.3 }}
              >
                Juan Alfonso<br />Solares
              </span>
              <span
                className="font-averta italic text-primary-dark uppercase mt-1"
                style={{ fontSize: 'clamp(10px, 1.8vw, 16px)' }}
              >
                Presidente
              </span>
            </div>
          </div>

          {/* Discurso */}
          <div
            className="font-averta italic text-primary-dark"
            style={{ fontSize: 'clamp(16px, 3vw, 22px)', lineHeight: 'clamp(26px, 4vw, 42px)' }}
          >
            <p className="mb-5">
              En <strong style={boldStyle}>Guatemala</strong>, ningún niño ni niña debería comenzar su vida con desventajas irreversibles. Sin embargo, la{' '}
              <strong style={boldStyle}>desnutrición crónica infantil</strong> sigue siendo una realidad que limita sueños, oportunidades y el futuro de nuestro país.
            </p>
            <p className="mb-5">
              En la <strong style={boldStyle}>Alianza por la Nutrición</strong> creemos que cambiar esta historia es posible. Somos una coalición que une al sector privado y a la sociedad civil con un propósito en común:{' '}
              <strong style={boldStyle}>combatir y prevenir la desnutrición crónica infantil bajo un enfoque integral y multicausal, actuando en la ventana crítica de los primeros 1,000 días de vida.</strong>
            </p>
            <p className="mb-5">
              Cada acción que emprendemos busca garantizar que la niñez crezca sana, fuerte y con las oportunidades que merece. Porque cuando cuidamos a nuestros niños, nutrimos el presente y{' '}
              <strong style={boldStyle}>transformamos el futuro de Guatemala.</strong>
            </p>
            <p>
              Este es un llamado a todos: empresas, organizaciones, comunidades, familias, ciudadanos, madres y padres:{' '}
              <strong style={boldStyle}>Juntos Podemos construir una Guatemala donde ningún niño se quede atrás. El cambio comienza hoy, y comienza contigo.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Junta Directiva */}
      <section className="bg-primary-dark px-8 py-14 fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-10">
            <span
              className="font-averta font-bold text-white tracking-[0.14em]"
              style={{ fontSize: 'clamp(16px, 3vw, 24px)' }}
            >
              Junta Directiva
            </span>
            <span className="text-white text-sm">›</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {boardMembers.map((m) => (
              <div key={m.name} className="flex flex-col items-center text-center">
                <img
                  src={m.img}
                  alt={m.name.replace('\n', ' ')}
                  className="rounded-full object-cover mb-3"
                  style={{ width: 'clamp(60px, 8vw, 90px)', height: 'clamp(60px, 8vw, 90px)' }}
                />
                <p
                  className="font-averta font-bold text-white whitespace-pre-line mb-1"
                  style={{ fontSize: 'clamp(11px, 1.8vw, 14px)', letterSpacing: '0.06em', lineHeight: 1.35 }}
                >
                  {m.name}
                </p>
                <p
                  className="font-averta italic text-primary-light"
                  style={{ fontSize: 'clamp(10px, 1.5vw, 12px)', letterSpacing: '0.08em' }}
                >
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo APN */}
      <section className="bg-neutral-bg px-8 py-14 fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-10">
            <span
              className="font-averta font-bold text-primary-dark tracking-[0.12em]"
              style={{ fontSize: 'clamp(14px, 3vw, 20px)' }}
            >
              ALIANZA POR LA NUTRICIÓN
            </span>
          </div>

          <div className="flex flex-col divide-y divide-primary-dark/10">
            {staffMembers.map((s) => (
              <div key={s.name} className="py-7 flex items-center gap-6">
                <img
                  src={s.img}
                  alt={s.name.replace('\n', ' ')}
                  className="rounded-full object-cover flex-shrink-0"
                  style={{ width: 'clamp(50px, 7vw, 80px)', height: 'clamp(50px, 7vw, 80px)' }}
                />
                <div>
                  <p
                    className="font-averta font-bold text-primary-dark whitespace-pre-line"
                    style={{ fontSize: 'clamp(13px, 2.5vw, 17px)', letterSpacing: '0.08em', lineHeight: 1.3 }}
                  >
                    {s.name}
                  </p>
                  <p
                    className="font-averta italic text-primary-light mt-1"
                    style={{ fontSize: 'clamp(11px, 2vw, 14px)', letterSpacing: '0.06em' }}
                  >
                    {s.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizaciones aliadas — carrusel animado */}
      <BoardOrgsCarousel />

      {/* Formulario ÚNETE AQUÍ */}
      <section className="bg-neutral-bg px-8 py-16 fade-in">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <span
              className="font-averta font-bold text-primary-dark tracking-[0.14em]"
              style={{ fontSize: 'clamp(16px, 3.5vw, 22px)' }}
            >
              ÚNETE AQUÍ
            </span>
          </div>

          {sent ? (
            <div className="bg-primary-dark text-white font-averta italic px-8 py-10 text-center">
              <p style={{ fontSize: 'clamp(15px, 3vw, 20px)' }}>
                ¡Gracias por contactarnos! Nos pondremos en contacto pronto.
              </p>
            </div>
          ) : (
            <>
              <p
                className="font-averta italic text-primary-dark mb-8"
                style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', lineHeight: 1.6 }}
              >
                ¡Contáctanos hoy!
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {[
                  { label: 'NOMBRE', key: 'nombre', type: 'text' },
                  { label: 'CORREO', key: 'correo', type: 'email' },
                  { label: 'TELÉFONO', key: 'telefono', type: 'tel' },
                ].map(({ label, key, type }) => (
                  <div key={key}>
                    <label className="block font-averta font-bold text-primary-dark text-xs tracking-[0.12em] mb-2">
                      {label}
                    </label>
                    <input
                      type={type}
                      required={key !== 'telefono'}
                      value={form[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className="w-full border-b-2 border-primary-dark bg-transparent px-0 py-3 font-averta text-primary-dark focus:outline-none focus:border-primary-light transition-colors"
                      style={{ fontSize: 'clamp(14px, 2.5vw, 16px)' }}
                    />
                  </div>
                ))}
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="border-2 border-primary-dark text-primary-dark font-averta font-bold px-10 py-4 hover:bg-primary-dark hover:text-white transition-all duration-300"
                    style={{ fontSize: 'clamp(10px, 1.5vw, 12px)', letterSpacing: '0.2em' }}
                  >
                    E N V I A R
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

/* ── Carrusel animado 3D — mismo patrón que Allies.jsx ── */
const BOARD_LOGOS = [
  { src: '/Allies1.png', alt: 'Aliado 1' },
  { src: '/Allies2.png', alt: 'Aliado 2' },
  { src: '/Allies3.png', alt: 'Aliado 3' },
];
const BGAP = 24;
const BEXT = [BOARD_LOGOS[BOARD_LOGOS.length - 1], ...BOARD_LOGOS, BOARD_LOGOS[0]];

function BoardOrgsCarousel() {
  const total = BOARD_LOGOS.length;
  const [pos, setPos] = useState(1);
  const [animated, setAnimated] = useState(true);
  const [card, setCard] = useState(160);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateCard = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setCard(Math.floor((w - 2 * BGAP) / 3));
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
    if (pos === BEXT.length - 1) {
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

  const trackX = -(pos - 1) * (card + BGAP);

  return (
    <section
      className="fade-in"
      style={{ backgroundColor: '#003da7', padding: 'clamp(48px, 7vw, 96px) clamp(32px, 6vw, 80px)' }}
    >
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 'clamp(32px, 5vw, 56px)' }}>
          <span
            style={{
              fontFamily: "'Averta', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(14px, 3vw, 20px)',
              letterSpacing: '0.12em',
              color: '#fff',
              textTransform: 'uppercase',
            }}
          >
            ORGANIZACIONES QUE NOS APOYAN
          </span>
          <span style={{ color: '#fff', fontSize: 14 }}>›</span>
        </div>

        <div
          ref={containerRef}
          style={{ width: '100%', maxWidth: 3 * 160 + 2 * BGAP, margin: '0 auto', perspective: 900 }}
        >
          <div
            style={{
              display: 'flex',
              gap: BGAP,
              transform: `translateX(${trackX}px)`,
              transition: animated ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
            }}
          >
            {BEXT.map((logo, i) => {
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

        <p
          style={{
            fontFamily: "'Averta', sans-serif",
            fontSize: 'clamp(10px, 1.4vw, 13px)',
            color: 'rgba(255,255,255,0.6)',
            marginTop: 'clamp(28px, 4vw, 48px)',
            textAlign: 'center',
          }}
        >
          *DCI: Desnutrición Crónica Infantil.
        </p>
      </div>
    </section>
  );
}
