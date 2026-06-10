import { useParams, Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';
import { ROUTES } from '../utils/constants';

// ─── Article data for News/1 and News/2 ───────────────────────────────────────

const articles = {
  1: {
    title: 'ACOMPÁÑAME A CRECER: UN ESFUERZO PÚBLICO-PRIVADO PARA EL DESARROLLO INFANTIL TEMPRANO',
    subtitle: 'Generando evidencia para transformar vidas.',
    image: '/image17.png',
    imagePosition: 'center 65%',
    intro: (
      <>
        La <strong>Alianza por la Nutrición (APN)</strong>, junto con sus socios implementadores —Fundación
        Carlos F. Novella, FUDI (Fundación para el Desarrollo Integral), Puente y RENACE Complejo
        Hidroeléctrico— llevaron a cabo una evaluación intermedia de alto rigor técnico para medir los
        principales efectos del programa <strong>Acompáñame a Crecer</strong> en la vida de los niños, niñas y
        sus familias en los municipios de Sanarate, San Juan Sacatepéquez, San Pedro Carchá, Zaragoza,
        Santa María Cahabón y San José Poaquil.
      </>
    ),
    sections: [
      {
        question: '¿Cuál es el propósito?',
        answer:
          'Medir los avances del programa, cuyo objetivo es garantizar el desarrollo integral de los niños desde la concepción hasta los cuatro años.',
      },
      {
        question: '¿Cómo lo hacemos?',
        answer: (
          <>
            <p style={{ margin: 0, marginBottom: '1em' }}>
              El modelo implementado es el programa <strong style={{ fontStyle: 'normal' }}>Acompáñame a Crecer</strong>, diseñado para promover el
              desarrollo en la primera infancia (0 a 4 años). Este programa fue impulsado por el{' '}
              <strong style={{ fontStyle: 'normal' }}>Ministerio de Educación</strong> mediante el{' '}
              <strong style={{ fontStyle: 'normal' }}>Acuerdo Ministerial 3512-2018</strong> y, en 2020, evolucionó
              hacia una atención integral con el <strong style={{ fontStyle: 'normal' }}>Acuerdo Gubernativo 239.</strong>
            </p>
            <p style={{ margin: 0 }}>
              Gracias a un convenio interinstitucional con el Ministerio de Educación,{' '}
              <strong style={{ fontStyle: 'normal' }}>APN</strong> implementa el programa junto a sus socios. En diciembre 2025 cumplimos 5
              años de su implementación, de un esfuerzo público&#8209;privado.
            </p>
          </>
        ),
        subheading: 'Un enfoque integral',
        subAnswer:
          'Además del desarrollo infantil temprano, los socios complementan el programa con intervenciones que incluyen:',
        bullets: [
          'Acceso a salud y nutrición',
          'Agua segura y saneamiento',
          'Actividades para mejorar la disponibilidad de alimentos',
          'Generación de ingresos',
          'Parentalidad positiva',
          'Participación comunitaria',
          'Evaluación y próximos pasos',
        ],
      },
    ],
  },
  2: {
    title: 'CON NUESTROS SOCIOS IMPLEMENTADORES LAS HISTORIAS SE ESCRIBEN CON DATOS, ABRAZOS Y SONRISAS',
    image: '/image20.png',
    imagePosition: 'center 45%',
    sections: [
      {
        question: null,
        answer: (
          <p style={{ margin: 0 }}>
            <strong>APN</strong> y sus socios implementadores de <strong>Acompáñame a Crecer</strong> han recolectado datos cuantitativos y cualitativos para entender y evaluar el trabajo realizado con familias y cuidadores.
          </p>
        ),
      },
      {
        question: null,
        answer: (
          <div>
            <p style={{ margin: 0 }}>Cada visita,</p>
            <p style={{ margin: 0 }}>Cada abrazo,</p>
            <p style={{ margin: 0 }}>Cada conversación…</p>
          </div>
        ),
      },
      {
        question: null,
        answer: (
          <p style={{ margin: 0 }}>
            <strong>Es evidencia</strong> viva de lo que significa trabajar por el desarrollo infantil con corazón y con método.
          </p>
        ),
      },
      {
        question: null,
        answer: (
          <p style={{ margin: 0 }}>
            <strong>Porque medir importa:</strong> los datos nos permiten entender qué funciona, cómo mejorar y dónde acompañar mejor.
          </p>
        ),
      },
      {
        question: null,
        answer: (
          <p style={{ margin: 0 }}>
            Y acompañar transforma: cuando una mamá se siente escuchada, cuando un niño se siente seguro, cuando una comunidad se siente parte del cambio, <em>todo empieza a crecer.</em>
          </p>
        ),
      },
    ],
  },
};

// ─── Shared styles for News/1 and News/2 ──────────────────────────────────────

const bodyText = {
  fontFamily: "'Averta', sans-serif",
  fontSize: 'clamp(16px, 2.5vw, 22px)',
  lineHeight: 1.75,
  color: 'white',
  margin: 0,
};

const questionStyle = {
  fontFamily: "'Averta', sans-serif",
  fontWeight: 700,
  fontSize: 'clamp(16px, 2.5vw, 26px)',
  lineHeight: 1.2,
  color: 'white',
  marginTop: 0,
  marginBottom: 'clamp(10px, 1.5vw, 16px)',
};

const volverBtn = {
  fontSize: 'clamp(12px, 1.5vw, 16px)',
  letterSpacing: '0.2em',
  textDecoration: 'none',
  backgroundColor: 'transparent',
  border: '2px solid white',
  color: 'white',
  padding: 'clamp(10px, 1.5vw, 14px) clamp(32px, 4vw, 56px)',
  borderRadius: '4px',
  fontFamily: "'Averta', sans-serif",
  fontWeight: 700,
  textTransform: 'uppercase',
  display: 'inline-block',
  transition: 'background-color 0.2s, color 0.2s',
};

// ─── News/3 — Desktop 8 ───────────────────────────────────────────────────────

function News3() {
  useFadeIn();

  const headingStyle = {
    fontFamily: "'Averta', sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(20px, 3vw, 42px)',
    lineHeight: 1.25,
    letterSpacing: '0.08em',
    color: '#0098dc',
    margin: 0,
    marginBottom: 'clamp(16px, 2.5vw, 28px)',
    textTransform: 'uppercase',
  };

  const bodyDark = {
    fontFamily: "'Averta', sans-serif",
    fontWeight: 400,
    fontSize: 'clamp(16px, 2vw, 26px)',
    lineHeight: 1.7,
    color: '#00379e',
    margin: 0,
  };

  const sectionGap = { marginBottom: 'clamp(40px, 6vw, 80px)' };

  return (
    <div>
      {/* Hero imagen */}
      <div className="w-full" style={{ marginTop: 70, height: 'clamp(600px, 90vh, 1000px)', overflow: 'hidden' }}>
        <img
          src="/image19.png"
          alt="Desnutrición Crónica Infantil"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', display: 'block' }}
        />
      </div>

      {/* Onda de transición imagen → blanco */}
      <div style={{ backgroundColor: 'white', lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: 'clamp(30px, 4vw, 60px)', display: 'block' }}>
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      {/* Contenido principal — fondo blanco */}
      <section
        className="fade-in"
        style={{
          backgroundColor: 'white',
          padding: 'clamp(32px, 5vw, 80px) clamp(24px, 10vw, 160px) clamp(48px, 7vw, 100px)',
        }}
      >
        <div style={{ maxWidth: 920, margin: '0 auto' }}>

          {/* Título principal */}
          <h1 style={{ ...headingStyle, marginBottom: 'clamp(24px, 4vw, 48px)' }}>
            ¿Qué es la desnutrición crónica infantil?
          </h1>

          {/* Sección 1 */}
          <div style={sectionGap}>
            <p style={bodyDark}>
              La <strong>desnutrición crónica infantil</strong> también llamada <strong>DCI</strong> por sus siglas, está asociada a una{' '}
              <strong>baja talla para la edad</strong>, debido a la falta de nutrientes a largo plazo. Esto quiere decir que el niño
              tiene un retraso en su crecimiento, pero además muestra otros signos como la disminución de capacidades mentales
              y productivas que le afectarán el resto de su vida.
            </p>
            <p style={{ ...bodyDark, marginTop: 'clamp(16px, 2vw, 28px)' }}>
              Si no se atiende oportunamente, la desnutrición crónica <strong>provoca un daño irreversible</strong> que afecta al niño
              por el <strong>resto de su vida</strong> expresándose en menor productividad, menores ingresos y mayor prevalencia de
              enfermedades.
            </p>
          </div>

          {/* Sección 2 */}
          <div style={sectionGap}>
            <h2 style={headingStyle}>¿Cuál es el periodo de mayor desarrollo de un niño?</h2>
            <p style={bodyDark}>
              Desde que la madre está embarazada hasta que el niño tiene 2 años es el periodo de un{' '}
              <em><strong>notable crecimiento y desarrollo cerebral</strong></em> y por eso tienen los mayores requerimientos
              nutricionales. A este periodo se le conoce como la <strong>ventana de los 1,000 días</strong>, y es especialmente
              importante asegurar un cuidado integral para lograr su óptimo desarrollo.
            </p>
          </div>

          {/* Sección 3 */}
          <div style={sectionGap}>
            <h2 style={headingStyle}>¿Dónde estamos parados como país?</h2>
            <p style={bodyDark}>
              La <strong>desnutrición crónica</strong> en Guatemala es un asunto preocupante. Afecta a <strong>uno de cada dos
              niños</strong> menores de cinco años. Pese a la gravedad del asunto, se trata de un tema que pasa desapercibido
              para la población en general, incluso para los familiares de los que la padecen.
            </p>
            <p style={{ ...bodyDark, marginTop: 'clamp(16px, 2vw, 28px)' }}>
              En Guatemala, la prevalencia de la <em><strong>DCI*</strong></em> en menores de 5 años es de <strong>46.5%</strong> según
              la ENSMI (encuesta nacional salud materno infantil — 2014/2015).
            </p>
            <p style={{ ...bodyDark, marginTop: 'clamp(16px, 2vw, 28px)' }}>
              <strong>Guatemala ocupa el primer lugar en la prevalencia de desnutrición crónica</strong> en la niñez menor de 5
              años en América Latina y el Caribe, y el sexto lugar a nivel mundial.
            </p>
            <p style={{ ...bodyDark, fontSize: 'clamp(13px, 1.5vw, 18px)', marginTop: 'clamp(12px, 1.5vw, 20px)', fontStyle: 'italic' }}>
              *DCI: Desnutrición Crónica Infantil.
            </p>
          </div>

          {/* Sección 4 */}
          <div style={sectionGap}>
            <h2 style={headingStyle}>¿Qué pasará si no hacemos nada?</h2>
            <p style={bodyDark}>
              Requeriremos cada vez más mayor nivel de recursos económicos para tratar a una{' '}
              <strong>población enferma</strong> con sobrepeso y obesidad, enfermedades crónicas como diabetes, problemas
              cardiovasculares, respiratorios.
            </p>
            <p style={{ ...bodyDark, marginTop: 'clamp(16px, 2vw, 28px)' }}>
              Como país <strong>perderemos competitividad</strong> porque nuestro capital humano no tiene las capacidades
              cognitivas que la vida actual demanda.
            </p>
            <p style={{ ...bodyDark, marginTop: 'clamp(16px, 2vw, 28px)' }}>
              Más efectos sociales: Migración forzada por falta de oportunidades. Incremento de actividades delictivas.
            </p>
          </div>

          {/* Botón VIDEO DCI */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 64px)' }}>
            <button
              style={{
                backgroundColor: '#0098dc',
                color: 'white',
                border: 'none',
                padding: 'clamp(14px, 2vw, 20px) clamp(40px, 6vw, 80px)',
                fontFamily: "'Averta', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(14px, 1.8vw, 20px)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              VIDEO DCI
            </button>
          </div>

          {/* VOLVER */}
          <div style={{ textAlign: 'center' }}>
            <Link
              to={ROUTES.NEWS}
              style={{
                ...volverBtn,
                color: '#00379e',
                border: '2px solid #00379e',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#00379e';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#00379e';
              }}
            >
              VOLVER
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function NewsDetail() {
  useFadeIn();
  const { id } = useParams();

  if (id === '3') return <News3 />;

  const article = articles[id] || articles[1];
  const bgColor = id === '1' ? '#0098DC' : '#003da7';

  return (
    <div>
      {/* Hero imagen */}
      <div style={{ position: 'relative' }}>
        <div className="w-full" style={{ marginTop: 70, height: 'clamp(600px, 90vh, 1000px)' }}>
          <img
            src={article.image}
            alt=""
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: article.imagePosition,
            }}
          />
        </div>
      </div>

      {/* Cuerpo */}
      <section
        className="fade-in"
        style={{
          backgroundColor: bgColor,
          padding: 'clamp(40px, 6vw, 80px) clamp(24px, 10vw, 160px) clamp(36px, 5vw, 72px)',
        }}
      >
        <div style={{ maxWidth: 920, margin: '0 auto' }}>

          {/* Título */}
          <h1
            className="font-averta font-bold"
            style={{
              fontSize: 'clamp(18px, 3vw, 42px)',
              lineHeight: 1.3,
              letterSpacing: '0.08em',
              color: id === '2' ? '#0098dc' : '#00379E',
              margin: 0,
              marginBottom: 'clamp(20px, 3vw, 36px)',
            }}
          >
            {article.title}
          </h1>

          {article.subtitle && (
            <p style={{ ...bodyText, marginBottom: 'clamp(20px, 3vw, 36px)' }}>
              {article.subtitle}
            </p>
          )}

          {article.intro && (
            <p style={{ ...bodyText, marginBottom: 'clamp(28px, 4vw, 56px)' }}>
              {article.intro}
            </p>
          )}

          {article.sections.map((sec, i) => (
            <div key={i} style={{ marginBottom: 'clamp(24px, 4vw, 48px)' }}>
              {sec.question && <h3 style={questionStyle}>{sec.question}</h3>}

              <div style={bodyText}>
                {typeof sec.answer === 'string'
                  ? <p style={{ margin: 0 }}>{sec.answer}</p>
                  : sec.answer}
              </div>

              {sec.subheading && (
                <div style={{ marginTop: 'clamp(20px, 3vw, 36px)' }}>
                  <p style={{ ...questionStyle, marginBottom: 'clamp(8px, 1.5vw, 14px)' }}>
                    {sec.subheading}
                  </p>
                  {sec.subAnswer && (
                    <p style={{ ...bodyText, marginBottom: 'clamp(8px, 1.5vw, 14px)' }}>
                      {sec.subAnswer}
                    </p>
                  )}
                  {sec.bullets && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {sec.bullets.map((b) => (
                        <li key={b} style={{ ...bodyText, lineHeight: 2.1 }}>
                          — {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {!sec.subheading && sec.bullets && (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginTop: 'clamp(8px, 1.5vw, 14px)' }}>
                  {sec.bullets.map((b) => (
                    <li key={b} style={{ ...bodyText, lineHeight: 2.1 }}>
                      — {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* VOLVER */}
          <div style={{ marginTop: 'clamp(40px, 6vw, 80px)', textAlign: 'center' }}>
            <Link
              to={ROUTES.NEWS}
              style={volverBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = bgColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
            >
              VOLVER
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
