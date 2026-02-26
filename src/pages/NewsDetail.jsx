import { useParams, Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import { useFadeIn } from '../hooks/useFadeIn';
import { ROUTES } from '../utils/constants';

export default function NewsDetail() {
  useFadeIn();
  const { id } = useParams();

  // Mock data - En una aplicación real, esto vendría de una API
  const newsData = {
    1: {
      title: 'Lanzamiento de Nuevo Proyecto',
      date: '2024-02-15',
      category: 'Proyecto',
      image: 'https://via.placeholder.com/800x400?text=Noticia+1',
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,
    },
    2: {
      title: 'Primer Reporte de Resultados',
      date: '2024-02-10',
      category: 'Resultados',
      image: 'https://via.placeholder.com/800x400?text=Noticia+2',
      content: `
        Los primeros resultados de nuestros proyectos muestran avances significativos.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      `,
    },
    3: {
      title: 'Nuevo Video Disponible',
      date: '2024-02-05',
      category: 'Video',
      image: 'https://via.placeholder.com/800x400?text=Noticia+3',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      content: `
        Mira nuestro último video donde explicamos los resultados de nuestros proyectos.
        
        El video incluye:
        - Explicación de objetivos
        - Presentación de resultados
        - Testimonios de participantes
        - Recomendaciones futuras
      `,
    },
  };

  const news = newsData[id] || newsData[1];

  return (
    <div>
      <Section
        title={news.title}
        subtitle={`Publicado ${new Date(news.date).toLocaleDateString('es-ES', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={news.image} 
              alt={news.title}
              className="w-full rounded-lg shadow-lg h-96 object-cover"
            />
          </div>

          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-primary-light text-primary-white rounded-full text-sm font-manrope mb-6">
              {news.category}
            </span>
          </div>

          {news.videoUrl && (
            <div className="mb-12">
              <h3 className="font-averta font-bold text-2xl text-primary-dark mb-6">
                Video
              </h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src={news.videoUrl}
                  title={news.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          <div className="prose max-w-none">
            {news.content.split('\n\n').map((paragraph, index) => (
              <p 
                key={index}
                className="font-manrope text-primary-dark text-lg leading-relaxed mb-6"
              >
                {paragraph.trim()}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-gray">
            <Link to={ROUTES.NEWS}>
              <Button variant="outline" size="md">
                ← Volver a Noticias
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Noticias relacionadas */}
      <Section
        title="Noticias Relacionadas"
        bgColor="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].filter(newsId => newsId !== parseInt(id)).map((relatedId) => {
            const relatedNews = newsData[relatedId];
            return (
              <Link key={relatedId} to={`${ROUTES.NEWS}/${relatedId}`}>
                <div className="bg-primary-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <img 
                    src={relatedNews.image} 
                    alt={relatedNews.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-averta font-bold text-lg text-primary-dark mb-2">
                      {relatedNews.title}
                    </h3>
                    <p className="text-sm text-neutral-gray font-manrope">
                      {new Date(relatedNews.date).toLocaleDateString('es-ES')}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
