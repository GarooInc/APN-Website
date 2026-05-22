import { useParams, Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';
import { ROUTES } from '../utils/constants';

const articles = {
  1: {
    title: 'ACOMPÁÑAME A CRECER: UN ESFUERZO PÚBLICO-PRIVADO PARA EL DESARROLLO INFANTIL TEMPRANO',
    subtitle: 'Generando evidencia para transformar vidas.',
    image: '/image3.jpg',
    imagePosition: 'center 40%',
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
            <p style={{ marginTop: 0, marginBottom: '1em' }}>
              El modelo implementado es el programa <strong>Acompáñame a Crecer</strong>, diseñado para
              promover el desarrollo en la primera infancia (0 a 4 años). Este programa fue impulsado por el{' '}
              <strong>Ministerio de Educación</strong> mediante el{' '}
              <strong>Acuerdo Ministerial 3512-2018</strong> y, en 2020, evolucionó hacia una atención
              integral con el <strong>Acuerdo Gubernativo 239.</strong>
            </p>
            <p style={{ margin: 0 }}>
              Gracias a un convenio interinstitucional con el Ministerio de Educación,{' '}
              <strong>APN</strong> implementa el programa junto a sus socios. En diciembre 2025 cumplimos 5
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
    subtitle:
      'APN y sus socios implementadores de Acompáñame a Crecer han recolectado datos cuantitativos y cualitativos para entender y evaluar el trabajo realizado.',
    image: '/image4.jpg',
    imagePosition: 'center 45%',
    sections: [
      {
        question: 'Cada visita,',
        answer: 'Es evidencia de que el acompañamiento transforma vidas.',
      },
      {
        question: 'Porque medir importa:',
        answer:
          'Cada dato recolectado nos permite entender mejor el impacto de nuestras intervenciones y mejorar continuamente nuestra metodología para beneficiar a más familias guatemaltecas.',
      },
      {
        question: 'Y acompañar transforma:',
        answer:
          'Cuando una promotora visita a una familia semana tras semana, no solo comparte técnicas de estimulación — construye confianza, esperanza y capacidades que duran toda la vida.',
      },
    ],
  },
  3: {
    title: '¿QUÉ ES LA DESNUTRICIÓN CRÓNICA INFANTIL?',
    subtitle:
      'La desnutrición crónica infantil también llamada DCI por sus siglas, está asociada a una baja talla para la edad.',
    image: '/image2.jpg',
    imagePosition: 'center 25%',
    sections: [
      {
        question: '¿Cuál es la causa?',
        answer:
          'La DCI es el resultado de una ingesta insuficiente de nutrientes durante períodos prolongados, combinada con enfermedades recurrentes, prácticas de cuidado inadecuadas y falta de acceso a servicios de salud y saneamiento básico.',
      },
      {
        question: '¿Cuáles son las consecuencias?',
        answer:
          'Un niño con DCI tiene consecuencias que van más allá del físico: afecta el desarrollo cognitivo, el rendimiento escolar, la productividad laboral y los ingresos durante la vida adulta, perpetuando el ciclo de pobreza.',
      },
    ],
  },
};

const bodyText = {
  fontFamily: "'Averta', sans-serif",
  fontSize: 'clamp(15px, 2.5vw, 32px)',
  lineHeight: 1.75,
  color: 'white',
  margin: 0,
};

const questionStyle = {
  fontFamily: "'Averta-Bold', sans-serif",
  fontWeight: 700,
  fontSize: 'clamp(15px, 2.5vw, 32px)',
  lineHeight: 1.5,
  color: 'white',
  marginTop: 0,
  marginBottom: 'clamp(10px, 1.5vw, 16px)',
};

export default function NewsDetail() {
  useFadeIn();
  const { id } = useParams();
  const article = articles[id] || articles[1];

  return (
    <div>
      {/* Hero imagen con onda blanca al final */}
      <div style={{ position: 'relative' }}>
        <div className="w-full overflow-hidden" style={{ height: 'clamp(280px, 45vw, 560px)' }}>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: article.imagePosition }}
          />
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: '100%', height: 'clamp(36px, 5vw, 80px)' }}>
            <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Título */}
      <section className="bg-white fade-in" style={{ padding: 'clamp(20px, 4vw, 56px) clamp(24px, 10vw, 160px) clamp(0px, 2vw, 16px)' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <h1
            className="font-averta font-bold"
            style={{
              fontSize: 'clamp(18px, 3vw, 42px)',
              lineHeight: 1.3,
              letterSpacing: '0.08em',
              color: '#00379e',
              margin: 0,
            }}
          >
            {article.title}
          </h1>
        </div>
      </section>

      {/* Onda de transición blanco → azul */}
      <div style={{ backgroundColor: 'white', lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: '100%', height: 'clamp(36px, 5vw, 80px)' }}>
          <path d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z" fill="#003da7" />
        </svg>
      </div>

      {/* Cuerpo */}
      <section
        className="fade-in"
        style={{
          backgroundColor: '#003da7',
          padding: 'clamp(8px, 2vw, 24px) clamp(24px, 10vw, 160px) clamp(36px, 5vw, 72px)',
        }}
      >
        <div style={{ maxWidth: 920, margin: '0 auto' }}>

          <p style={{ ...bodyText, marginBottom: 'clamp(20px, 3vw, 36px)' }}>
            {article.subtitle}
          </p>

          {article.intro && (
            <p style={{ ...bodyText, marginBottom: 'clamp(28px, 4vw, 56px)' }}>
              {article.intro}
            </p>
          )}

          {article.sections.map((sec, i) => (
            <div key={i} style={{ marginBottom: 'clamp(24px, 4vw, 48px)' }}>
              <h3 style={questionStyle}>{sec.question}</h3>

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

          <div style={{ marginTop: 'clamp(40px, 6vw, 80px)', textAlign: 'center' }}>
            <Link
              to={ROUTES.NEWS}
              className="font-manrope font-bold text-white uppercase hover:opacity-70 transition-opacity duration-200"
              style={{
                fontSize: 'clamp(14px, 2vw, 27px)',
                letterSpacing: '0.2em',
                textDecoration: 'none',
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
