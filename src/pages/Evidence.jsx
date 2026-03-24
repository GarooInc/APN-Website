import { useFadeIn } from '../hooks/useFadeIn';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const dciSections = [
  {
    question: '¿QUÉ ES LA DESNUTRICIÓN\nCRÓNICA INFANTIL?',
    answer:
      'La desnutrición crónica infantil, también llamada DCI por sus siglas, está asociada a una baja talla para la edad, debido a una ingesta insuficiente de nutrientes durante períodos prolongados. Afecta el desarrollo físico, cognitivo y socioemocional del niño.',
    bg: 'bg-primary-dark',
    textColor: 'text-white',
    titleColor: 'text-white',
  },
  {
    question: '¿CUÁL ES EL PERIODO DE\nMAYOR VULNERABILIDAD?',
    answer:
      'Desde que la madre está embarazada hasta que el niño o niña cumple los 2 años de vida. Esta ventana de los 1,000 días es el momento más crítico para intervenir y prevenir la DCI de manera efectiva.',
    bg: 'bg-neutral-bg',
    textColor: 'text-primary-dark',
    titleColor: 'text-primary-dark',
  },
  {
    question: '¿DÓNDE ESTAMOS?',
    answer:
      'La desnutrición crónica en Guatemala afecta al 46.5% de los niños menores de 5 años, siendo uno de los índices más altos de América Latina. En poblaciones indígenas el índice supera el 60%, lo que evidencia profundas brechas de inequidad.',
    bg: 'bg-primary-dark',
    textColor: 'text-white',
    titleColor: 'text-white',
  },
  {
    question: '¿QUÉ PASARÁ SI\nNO ACTUAMOS?',
    answer:
      'Requeriremos cada vez más mayor nivel de inversión en salud, educación y productividad. Un niño con DCI tiene en promedio un 10% menos de ingresos durante su vida adulta, perpetuando el ciclo de pobreza de generación en generación.',
    bg: 'bg-neutral-bg',
    textColor: 'text-primary-dark',
    titleColor: 'text-primary-dark',
  },
];

const videos = [
  {
    id: 1,
    title: 'Acompáñame a Crecer: Generando evidencia para transformar vidas',
    thumb: '/image6.jpg',
    url: 'https://www.youtube.com/embed/placeholder1',
  },
  {
    id: 2,
    title: 'Con nuestros socios: las historias se escriben con datos, abrazos y sonrisas',
    thumb: '/image4.jpg',
    url: 'https://www.youtube.com/embed/placeholder2',
  },
];

export default function Evidence() {
  useFadeIn();
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <div className="w-full h-[400px] overflow-hidden">
        <img
          src="/image6.jpg"
          alt="Generación de evidencia"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
      </div>

      {/* Título sección */}
      <section className="bg-primary-light px-8 py-10 fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <span
              className="font-averta font-bold text-white tracking-[0.12em]"
              style={{ fontSize: 'clamp(16px, 3.5vw, 24px)' }}
            >
              GENERACIÓN<br />DE EVIDENCIA
            </span>
            <span className="text-white text-sm self-end mb-1">{'>'}</span>
          </div>
          <p
            className="font-averta italic text-white mt-4"
            style={{ fontSize: 'clamp(14px, 3vw, 19px)', lineHeight: 1.65 }}
          >
            Nuestro progreso hacia el logro de objetivos
          </p>
        </div>
      </section>

      {/* Secciones DCI */}
      {dciSections.map((sec, i) => (
        <section
          key={i}
          className={`${sec.bg} px-8 py-14 fade-in`}
        >
          <div className="max-w-3xl mx-auto">
            <h3
              className={`font-averta font-bold ${sec.titleColor} mb-6 whitespace-pre-line`}
              style={{ fontSize: 'clamp(15px, 3vw, 20px)', letterSpacing: '0.1em' }}
            >
              {sec.question}
            </h3>
            <p
              className={`font-averta italic ${sec.textColor}/85`}
              style={{ fontSize: 'clamp(15px, 3vw, 19px)', lineHeight: 1.7 }}
            >
              {sec.answer}
            </p>
            {i === dciSections.length - 1 && (
              <p className="text-xs italic opacity-60 mt-4 font-averta" style={{ color: 'inherit' }}>
                *DCI: Desnutrición Crónica Infantil.
              </p>
            )}
          </div>
        </section>
      ))}

      {/* Imagen separadora */}
      <div className="w-full h-[320px] overflow-hidden">
        <img
          src="/image8.jpg"
          alt="Niños en clase"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 50%' }}
        />
      </div>

      {/* Videos DCI */}
      <section className="bg-white px-8 py-14 fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-10">
            <span
              className="font-averta font-bold text-primary-dark tracking-[0.14em]"
              style={{ fontSize: 'clamp(13px, 2.5vw, 17px)', letterSpacing: '0.2em' }}
            >
              V I D E O S &nbsp; D C I
            </span>
          </div>

          <div className="flex flex-col gap-12">
            {videos.map((v) => (
              <div key={v.id}>
                <div className="w-full h-[280px] overflow-hidden mb-4">
                  <img
                    src={v.thumb}
                    alt={v.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4
                  className="font-averta font-bold text-primary-dark mb-4"
                  style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', lineHeight: 1.4, letterSpacing: '0.05em' }}
                >
                  {v.title.toUpperCase()}
                </h4>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-primary-dark text-primary-dark font-averta font-bold tracking-[0.2em] px-6 py-3 text-xs hover:bg-primary-dark hover:text-white transition-all duration-300"
                  style={{ fontSize: 'clamp(10px, 1.5vw, 12px)', letterSpacing: '0.2em' }}
                >
                  L E E R &nbsp; A H O R A
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aliados logos */}
      <section className="bg-neutral-bg px-8 py-12 fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-6 justify-center">
            {['LOGO 1', 'LOGO 2', 'LOGO 3'].map((logo) => (
              <div
                key={logo}
                className="w-[160px] h-[100px] border-2 border-primary-dark flex items-center justify-center"
              >
                <span className="font-averta font-bold text-primary-dark text-sm tracking-widest">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA únete */}
      <section className="bg-primary-dark px-8 py-16 fade-in">
        <div className="max-w-3xl mx-auto">
          <h3
            className="font-averta font-bold text-white mb-10"
            style={{ fontSize: 'clamp(18px, 4vw, 28px)', lineHeight: 1.3, letterSpacing: '0.06em' }}
          >
            POR QUÉ SER PARTE<br />DE LA ALIANZA<br />POR LA NUTRICIÓN
          </h3>
          <div className="flex justify-center">
            <Button
              variant="filled-light"
              size="md"
              className="font-averta font-bold tracking-[0.15em]"
              onClick={() => navigate('/allies')}
            >
              ÚNETE AQUÍ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
