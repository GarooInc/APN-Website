import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Materials() {
  const materials = [
    {
      id: 1,
      title: 'Guía de Buenas Prácticas',
      description: 'Documento que describe las mejores prácticas en el sector',
      type: 'PDF',
      size: '2.5 MB',
    },
    {
      id: 2,
      title: 'Manual Técnico',
      description: 'Manual técnico para implementación de soluciones',
      type: 'PDF',
      size: '1.8 MB',
    },
    {
      id: 3,
      title: 'Herramientas de Diagnóstico',
      description: 'Conjunto de herramientas para evaluación y diagnóstico',
      type: 'Excel',
      size: '950 KB',
    },
    {
      id: 4,
      title: 'Marco Conceptual',
      description: 'Documento que define conceptos clave',
      type: 'PDF',
      size: '3.2 MB',
    },
    {
      id: 5,
      title: 'Plantillas de Implementación',
      description: 'Plantillas para facilitar la implementación',
      type: 'Word',
      size: '1.2 MB',
    },
    {
      id: 6,
      title: 'Base de Datos de Indicadores',
      description: 'Indicadores clave para monitoreo',
      type: 'Database',
      size: '5.6 MB',
    },
  ];

  return (
    <div>
      <Section
        title="Materiales Técnicos"
        subtitle="Recursos y documentación disponibles para descargar"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material) => (
            <Card
              key={material.id}
              title={material.title}
              description={material.description}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col">
                  <span className="text-sm font-manrope text-neutral-gray">
                    Tipo: {material.type}
                  </span>
                  <span className="text-sm font-manrope text-neutral-gray">
                    Tamaño: {material.size}
                  </span>
                </div>
              </div>
              <Button 
                variant="primary" 
                size="sm" 
                className="w-full flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Filtros y búsqueda */}
      <Section
        title="Buscar Materiales"
        bgColor="bg-gray-50"
      >
        <div className="max-w-2xl mx-auto">
          <input
            type="search"
            placeholder="Busca por palabra clave..."
            className="w-full px-4 py-3 rounded-lg border border-neutral-gray focus:outline-none focus:border-primary-light font-manrope"
          />
          <div className="mt-6 flex flex-wrap gap-3">
            {['PDF', 'Excel', 'Word', 'Database'].map((type) => (
              <Button
                key={type}
                variant="outline"
                size="sm"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
