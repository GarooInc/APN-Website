import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { useFadeIn } from '../hooks/useFadeIn';

export default function Evidence() {
  useFadeIn();
  const projects = [
    {
      id: 1,
      title: 'Proyecto de Investigación 1',
      description: 'Descripción detallada del proyecto 1',
      status: 'En ejecución',
      year: 2024,
    },
    {
      id: 2,
      title: 'Proyecto de Investigación 2',
      description: 'Descripción detallada del proyecto 2',
      status: 'En ejecución',
      year: 2024,
    },
    {
      id: 3,
      title: 'Proyecto de Investigación 3',
      description: 'Descripción detallada del proyecto 3',
      status: 'Completado',
      year: 2023,
    },
  ];

  return (
    <div>
      <Section
        title="Generación de Evidencia"
        subtitle="Proyectos de investigación basados en datos"
      >
        <div className="space-y-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex gap-4">
                  <span className="inline-block px-3 py-1 bg-primary-light text-primary-white rounded-full text-sm font-manrope">
                    {project.status}
                  </span>
                  <span className="inline-block px-3 py-1 bg-neutral-gray text-primary-dark rounded-full text-sm font-manrope">
                    {project.year}
                  </span>
                </div>
                <Button variant="primary" size="sm">
                  Ver detalles
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Metodología */}
      <Section
        title="Nuestra Metodología"
        bgColor="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Planificación', desc: 'Definimos objetivos y metodología' },
            { step: '02', title: 'Ejecución', desc: 'Recopilamos datos y realizamos análisis' },
            { step: '03', title: 'Divulgación', desc: 'Compartimos resultados y recomendaciones' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="text-4xl font-averta font-bold text-primary-light mb-4">
                {item.step}
              </div>
              <h3 className="font-averta font-bold text-xl text-primary-dark mb-2">
                {item.title}
              </h3>
              <p className="font-manrope text-primary-dark">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
