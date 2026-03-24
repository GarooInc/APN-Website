import { useParams, Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';
import { ROUTES } from '../utils/constants';

const articles = {
  1: {
    title: 'ACOMPÁÑAME A CRECER: UN ESFUERZO PÚBLICO-PRIVADO PARA EL DESARROLLO INFANTIL TEMPRANO',
    subtitle: 'Generando evidencia para transformar vidas',
    image: '/image3.jpg',
    imagePosition: 'center 40%',
    sections: [
      {
        question: '¿Cuál es el propósito?',
        answer:
          'Medir los avances del programa, cuyo objetivo es contribuir al desarrollo integral de la primera infancia en Guatemala, brindando acompañamiento a familias en situación de vulnerabilidad mediante visitas domiciliarias de promotoras comunitarias.',
      },
      {
        question: '¿Cómo lo hacemos?',
        answer:
          'El modelo implementado es el de Jamaica, adaptado al contexto guatemalteco. Se basa en visitas domiciliarias semanales donde promotoras comunitarias trabajan con padres y cuidadores para estimular el desarrollo cognitivo, físico y socioemocional de los niños.',
        bullets: [
          'Generación de ingresos',
          'Estimulación temprana',
          'Seguridad alimentaria',
          'Salud y bienestar',
        ],
      },
    ],
  },
  2: {
    title: 'CON NUESTROS SOCIOS IMPLEMENTADORES LAS HISTORIAS SE ESCRIBEN CON DATOS, ABRAZOS Y SONRISAS',
    subtitle: 'APN y sus socios implementadores de Acompáñame a Crecer han recolectado datos cuantitativos y cualitativos para entender y evaluar el trabajo realizado.',
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
    subtitle: 'La desnutrición crónica infantil también llamada DCI por sus siglas, está asociada a una baja talla para la edad.',
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

export default function NewsDetail() {
  useFadeIn();
  const { id } = useParams();
  const article = articles[id] || articles[1];

  return (
    <div>
      {/* Hero imagen */}
      <div className="w-full h-[420px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
          style={{ objectPosition: article.imagePosition }}
        />
      </div>

      {/* Encabezado del artículo */}
      <section className="bg-primary-dark px-8 py-12 fade-in">
        <div className="max-w-3xl mx-auto">
          <h1
            className="font-averta font-bold text-white mb-4"
            style={{ fontSize: 'clamp(16px, 3.5vw, 24px)', lineHeight: 1.4, letterSpacing: '0.05em' }}
          >
            {article.title}
          </h1>
          <p
            className="font-averta italic text-white/80"
            style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', lineHeight: 1.65 }}
          >
            {article.subtitle}
          </p>
        </div>
      </section>

      {/* Cuerpo del artículo */}
      {article.sections.map((sec, i) => (
        <section
          key={i}
          className={`px-8 py-12 fade-in ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-bg'}`}
        >
          <div className="max-w-3xl mx-auto">
            <h3
              className="font-averta font-bold text-primary-dark mb-5"
              style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', letterSpacing: '0.06em' }}
            >
              {sec.question}
            </h3>
            <p
              className="font-averta italic text-primary-dark"
              style={{ fontSize: 'clamp(14px, 2.5vw, 17px)', lineHeight: 1.75 }}
            >
              {sec.answer}
            </p>
            {sec.bullets && (
              <ul className="mt-6 space-y-2">
                {sec.bullets.map((b) => (
                  <li
                    key={b}
                    className="font-averta text-primary-dark flex items-center gap-3"
                    style={{ fontSize: 'clamp(13px, 2vw, 16px)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-light flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {/* Botón volver */}
      <section className="bg-white px-8 py-10 fade-in">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link to={ROUTES.NEWS}>
            <button
              className="border-2 border-primary-dark text-primary-dark font-averta font-bold tracking-[0.2em] px-6 py-3 hover:bg-primary-dark hover:text-white transition-all duration-300"
              style={{ fontSize: 'clamp(10px, 1.5vw, 12px)', letterSpacing: '0.2em' }}
            >
              V O L V E R
            </button>
          </Link>
        </div>
      </section>

      {/* Imagen de cierre */}
      <div className="w-full h-[300px] overflow-hidden">
        <img
          src="/image9.jpg"
          alt="Cierre"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 28%' }}
        />
      </div>
    </div>
  );
}
