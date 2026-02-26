import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { ROUTES } from '../utils/constants';

export default function News() {
  const news = [
    {
      id: 1,
      title: 'Lanzamiento de Nuevo Proyecto',
      excerpt: 'Se ha lanzado oficialmente el nuevo proyecto de investigación...',
      date: '2024-02-15',
      image: 'https://via.placeholder.com/400x200?text=Noticia+1',
      category: 'Proyecto',
    },
    {
      id: 2,
      title: 'Primer Reporte de Resultados',
      excerpt: 'Los primeros resultados de nuestros proyectos están disponibles...',
      date: '2024-02-10',
      image: 'https://via.placeholder.com/400x200?text=Noticia+2',
      category: 'Resultados',
    },
    {
      id: 3,
      title: 'Nuevo Video Disponible',
      excerpt: 'Mira nuestro último video donde explica los resultados...',
      date: '2024-02-05',
      image: 'https://via.placeholder.com/400x200?text=Noticia+3',
      category: 'Video',
      hasVideo: true,
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div>
      <Section
        title="Noticias"
        subtitle="Mantente actualizado con las últimas noticias y eventos"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((newsItem) => (
            <Card
              key={newsItem.id}
              title={newsItem.title}
              description={newsItem.excerpt}
              image={newsItem.image}
            >
              <div className="flex flex-col justify-between h-full">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-manrope text-neutral-gray uppercase">
                      {formatDate(newsItem.date)}
                    </span>
                    <span className="px-2 py-1 bg-primary-light text-primary-white rounded text-xs font-manrope">
                      {newsItem.category}
                    </span>
                  </div>
                  {newsItem.hasVideo && (
                    <div className="flex items-center gap-1 text-primary-light text-sm font-manrope mb-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Incluye video
                    </div>
                  )}
                </div>
                <Link to={`${ROUTES.NEWS}/${newsItem.id}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    Leer más
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section
        title="Suscríbete a Noticias"
        bgColor="bg-primary-dark text-primary-white"
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-center font-manrope text-lg mb-8">
            Recibe las últimas noticias y actualizaciones directamente en tu correo electrónico.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg text-primary-dark focus:outline-none"
            />
            <Button variant="secondary" size="md">
              Suscribirse
            </Button>
          </form>
        </div>
      </Section>
    </div>
  );
}
