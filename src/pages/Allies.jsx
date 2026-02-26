import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { useFadeIn } from '../hooks/useFadeIn';

export default function Allies() {
  useFadeIn();
  const allies = [
    {
      id: 1,
      name: 'Aliado 1',
      description: 'Descripción completa del aliado 1 y su contribución a APN',
      logo: 'https://via.placeholder.com/200x200?text=Aliado+1',
    },
    {
      id: 2,
      name: 'Aliado 2',
      description: 'Descripción completa del aliado 2 y su contribución a APN',
      logo: 'https://via.placeholder.com/200x200?text=Aliado+2',
    },
    {
      id: 3,
      name: 'Aliado 3',
      description: 'Descripción completa del aliado 3 y su contribución a APN',
      logo: 'https://via.placeholder.com/200x200?text=Aliado+3',
    },
    {
      id: 4,
      name: 'Aliado 4',
      description: 'Descripción completa del aliado 4 y su contribución a APN',
      logo: 'https://via.placeholder.com/200x200?text=Aliado+4',
    },
  ];

  return (
    <div>
      <Section
        title="Nuestros Aliados"
        subtitle="Organizaciones e instituciones que trabajan con nosotros"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allies.map((ally) => (
            <Card
              key={ally.id}
              title={ally.name}
              description={ally.description}
              image={ally.logo}
            >
              <Button variant="outline" size="sm" className="w-full">
                Ver más
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contacto para colaboraciones */}
      <Section
        title="¿Quieres ser aliado?"
        bgColor="bg-primary-dark text-primary-white"
      >
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-manrope text-lg mb-8">
            Estamos buscando nuevas organizaciones que se unan a nuestra misión de generar evidencia y promover buenas prácticas.
          </p>
          <Button variant="secondary" size="lg">
            Contacta con nosotros
          </Button>
        </div>
      </Section>
    </div>
  );
}
