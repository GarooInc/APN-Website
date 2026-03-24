import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';
import { ROUTES } from '../utils/constants';

const articles = [
  {
    id: 1,
    image: '/image3.jpg',
    imagePosition: 'center 40%',
    title: 'ACOMPÁÑAME A CRECER: UN ESFUERZO PÚBLICO-PRIVADO PARA EL DESARROLLO INFANTIL TEMPRANO',
    excerpt: 'Generando evidencia para transformar vidas',
    bg: 'bg-primary-dark',
    titleColor: 'text-white',
    excerptColor: 'text-white/80',
    btnVariant: 'outline-light',
  },
  {
    id: 2,
    image: '/image4.jpg',
    imagePosition: 'center 45%',
    title: 'CON NUESTROS SOCIOS IMPLEMENTADORES LAS HISTORIAS SE ESCRIBEN CON DATOS, ABRAZOS Y SONRISAS',
    excerpt:
      'APN y sus socios implementadores de Acompáñame a Crecer han recolectado datos cuantitativos y cualitativos para entender y evaluar el trabajo realizado',
    bg: 'bg-primary-dark',
    titleColor: 'text-white',
    excerptColor: 'text-white/80',
    btnVariant: 'outline-light',
  },
  {
    id: 3,
    image: '/image2.jpg',
    imagePosition: 'center 25%',
    title: '¿QUÉ ES LA DESNUTRICIÓN CRÓNICA INFANTIL?',
    excerpt:
      'La desnutrición crónica infantil también llamada DCI por sus siglas, está asociada a una baja talla para la edad, debido a...',
    bg: 'bg-primary-dark',
    titleColor: 'text-white',
    excerptColor: 'text-white/80',
    btnVariant: 'outline-light',
  },
];

export default function News() {
  useFadeIn();

  return (
    <div>
      {/* Encabezado */}
      <section className="bg-primary-light px-8 pt-28 pb-10 fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <span
              className="font-averta font-bold text-white tracking-[0.12em]"
              style={{ fontSize: 'clamp(16px, 3.5vw, 24px)' }}
            >
              NOTICIAS
            </span>
            <span className="text-white text-sm">{'>'}</span>
          </div>
        </div>
      </section>

      {/* Artículos */}
      <div className="flex flex-col">
        {articles.map((article) => (
          <article key={article.id} className={`${article.bg} fade-in`}>
            {/* Imagen */}
            <div className="w-full h-[300px] md:h-[380px] overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
                style={{ objectPosition: article.imagePosition }}
              />
            </div>

            {/* Contenido */}
            <div className="px-8 py-10 max-w-3xl mx-auto w-full">
              <h2
                className={`font-averta font-bold ${article.titleColor} mb-4`}
                style={{ fontSize: 'clamp(14px, 3vw, 20px)', lineHeight: 1.45, letterSpacing: '0.05em' }}
              >
                {article.title}
              </h2>
              <p
                className={`font-averta ${article.excerptColor} mb-8`}
                style={{ fontSize: 'clamp(13px, 2.5vw, 16px)', lineHeight: 1.65 }}
              >
                {article.excerpt}
              </p>
              <Link to={`${ROUTES.NEWS}/${article.id}`}>
                <button
                  className="border-2 border-white text-white font-averta font-bold tracking-[0.2em] px-6 py-3 hover:bg-white hover:text-primary-dark transition-all duration-300"
                  style={{ fontSize: 'clamp(10px, 1.5vw, 12px)', letterSpacing: '0.2em' }}
                >
                  L E E R &nbsp; A H O R A
                </button>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Imagen cierre */}
      <div className="w-full h-[280px] overflow-hidden">
        <img
          src="/image9.jpg"
          alt="Niña mirando"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 28%' }}
        />
      </div>
    </div>
  );
}
