import { useFadeIn } from '../hooks/useFadeIn';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const excerpt2 = (
  <><strong>APN</strong> y sus socios implementadores de <strong>Acompáñame a Crecer</strong> han recolectado datos cuantitativos y cualitativos para entender y evaluar el trabajo realizado.</>
);

const excerpt3 = (
  <>La <strong>desnutrición crónica infantil</strong> también llamada <strong>DCI</strong> por sus siglas, está asociada a una <strong>baja talla para la edad</strong>, debido a episodios repetidos de desnutrición durante los períodos críticos de crecimiento.</>
);

const articles = [
  {
    id: 1,
    image: '/image17.png',
    imagePosition: 'center 30%',
    title: 'ACOMPÁÑAME A CRECER: UN ESFUERZO PÚBLICO-PRIVADO PARA EL DESARROLLO INFANTIL TEMPRANO',
    excerpt: 'Generando evidencia para transformar vidas.',
    excerptSize: 'clamp(16px, 2.5vw, 22px)',
    bg: '#00a1e0',
    titleColor: '#003da7',
    excerptColor: '#fff',
  },
  {
    id: 2,
    image: '/image18.png',
    imagePosition: 'center 60%',
    imageTopPadding: '40px',
    title: 'CON NUESTROS SOCIOS IMPLEMENTADORES LAS HISTORIAS SE ESCRIBEN CON DATOS, ABRAZOS Y SONRISAS',
    titleSize: 'clamp(16px, 3vw, 24px)',
    titleMarginBottom: 'clamp(24px, 4vw, 40px)',
    excerpt: excerpt2,
    excerptSize: 'clamp(16px, 2.5vw, 22px)',
    bg: '#003da7',
    titleColor: '#0098DC',
    excerptColor: 'rgba(255,255,255,0.85)',
  },
  {
    id: 3,
    image: '/image19.png',
    imagePosition: 'center 60%',
    imageTopPadding: '40px',
    title: '¿QUÉ ES LA DESNUTRICIÓN CRÓNICA INFANTIL?',
    titleSize: 'clamp(16px, 3vw, 24px)',
    titleMarginBottom: 'clamp(24px, 4vw, 40px)',
    excerpt: excerpt3,
    excerptSize: 'clamp(16px, 2.5vw, 22px)',
    bg: '#fff',
    titleColor: '#003da7',
    excerptColor: '#003da7',
  },
];

export default function News() {
  useFadeIn();
  const navigate = useNavigate();

  return (
    <div>
      {articles.map((article) => (
        <article key={article.id} className="fade-in" style={{ backgroundColor: article.bg, margin: 0 }}>

          {/* Título NOTICIAS solo en el primer artículo */}
          {article.id === 1 && (
            <div style={{ padding: 'clamp(200px, 30vw, 400px) clamp(32px, 6vw, 80px) clamp(16px, 3vw, 32px)' }}>
              <div style={{ maxWidth: 760, margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{
                    fontFamily: "'Averta-Bold', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(16px, 3.5vw, 24px)',
                    letterSpacing: '0.12em',
                    color: '#003da7',
                    textTransform: 'uppercase',
                  }}>
                    NOTICIAS
                  </span>
                  <span style={{ color: '#003da7', fontSize: 'clamp(14px, 2vw, 18px)' }}>›</span>
                </div>
              </div>
            </div>
          )}

          {/* Imagen */}
          <div className="w-[90%] sm:w-[75%] mx-auto h-[300px] sm:h-[500px] overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              style={{
                objectPosition: article.imagePosition,
                transform: article.imageTopPadding ? `translateY(${article.imageTopPadding})` : 'none',
              }}
            />
          </div>

          {/* Contenido */}
          <div style={{ padding: 'clamp(28px, 5vw, 56px) clamp(32px, 6vw, 80px)', maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: "'Averta-Bold', sans-serif",
              fontWeight: 700,
              fontSize: article.titleSize || 'clamp(16px, 3vw, 24px)',
              lineHeight: 1.4,
              letterSpacing: '0.05em',
              color: article.titleColor,
              textTransform: 'uppercase',
              marginTop: 0,
              marginBottom: article.titleMarginBottom || 'clamp(12px, 2vw, 20px)',
            }}>
              {article.title}
            </h2>

            <p style={{
              fontFamily: "'Averta', sans-serif",
              fontSize: article.excerptSize || 'clamp(13px, 2vw, 16px)',
              lineHeight: 1.7,
              color: article.excerptColor,
              marginBottom: 'clamp(24px, 4vw, 40px)',
            }}>
              {article.excerpt}
            </p>

            <div className="flex justify-center">
              <Button
                variant="primary"
                size="md"
                className="font-averta font-bold text-[clamp(12px,2.5vw,16px)] tracking-[0.15em] px-[40px] py-[12px]"
                style={
                  article.id === 2 ? { backgroundColor: '#0098DC', borderColor: '#0098DC' } :
                  article.id === 3 ? { backgroundColor: '#0098DC', borderColor: '#0098DC' } : {}
                }
                onClick={() => navigate(`/news/${article.id}`)}
              >
                LEER AHORA
              </Button>
            </div>
          </div>

        </article>
      ))}
    </div>
  );
}
