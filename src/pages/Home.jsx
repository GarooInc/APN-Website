import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: 500 }}>

        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/image1.png")' }}
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Contenido del hero — pegado abajo */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-10 md:px-12 md:pb-14">

          {/* Subtítulo pequeño en mayúsculas */}
          <p
            className="text-white/80 mb-3 tracking-[0.15em] uppercase"
            style={{
              fontFamily: "'Manrope', 'Montserrat', sans-serif",
              fontSize: "clamp(9px, 2vw, 13px)",
              letterSpacing: "0.15em",
            }}
          >
            Yo soy parte de la<br />
            Alianza por la Nutrición
          </p>

          {/* Título grande en itálica */}
          <h1
            className="text-white m-0"
            style={{
              fontFamily: "'Averta', 'Averta-Bold', 'Georgia', serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(26px, 6vw, 52px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: 600,
            }}
          >
            y el desarrollo integral<br />
            de la primera infancia
          </h1>
        </div>
      </div>

      {/* Aliados Section */}
      <Section
        id="allies"
        title="Aliados"
        subtitle="Nuestros socios estratégicos"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card
              key={item}
              title={`Aliado ${item}`}
              description="Descripción del aliado y su contribución a APN"
            >
              <Button variant="outline" size="sm">
                Ver perfil
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Generación de Evidencia Section */}
      <Section
        id="evidence"
        title="Generación de Evidencia"
        subtitle="Investigación basada en datos"
        bgColor="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-averta font-bold text-2xl text-primary-dark mb-4">
              Proyectos en Ejecución
            </h3>
            <ul className="space-y-3 font-manrope">
              <li className="flex items-start gap-3">
                <span className="text-primary-light font-bold">•</span>
                <span>Proyecto 1: Descripción breve</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-light font-bold">•</span>
                <span>Proyecto 2: Descripción breve</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-light font-bold">•</span>
                <span>Proyecto 3: Descripción breve</span>
              </li>
            </ul>
          </div>
          <div className="bg-primary-white rounded-lg p-8 shadow-md">
            <h3 className="font-averta font-bold text-2xl text-primary-dark mb-4">
              Últimos Resultados
            </h3>
            <p className="font-manrope text-primary-dark mb-4">
              Resumen de los resultados más recientes de nuestros proyectos.
            </p>
            <Button variant="primary" size="md">
              Descargar reporte
            </Button>
          </div>
        </div>
      </Section>

      {/* Materiales Técnicos Section */}
      <Section
        id="materials"
        title="Materiales Técnicos"
        subtitle="Recursos y documentación"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card
              key={item}
              title={`Material ${item}`}
              description="Descripción del material técnico"
            >
              <Button variant="primary" size="sm">
                Descargar PDF
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Noticias Section */}
      <Section
        id="news"
        title="Noticias"
        subtitle="Última información y actualizaciones"
        bgColor="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card
              key={item}
              title={`Noticia ${item}`}
              description="Descripción breve de la noticia"
              image={`https://via.placeholder.com/400x200?text=Noticia+${item}`}
            >
              <Button variant="outline" size="sm">
                Leer más
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contacto Section */}
      <Section
        id="contact"
        title="Contáctanos"
        subtitle="¿Tienes preguntas? Nos gustaría escucharte"
      >
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-manrope font-semibold text-primary-dark mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-neutral-gray rounded-lg focus:outline-none focus:border-primary-light"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block font-manrope font-semibold text-primary-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-neutral-gray rounded-lg focus:outline-none focus:border-primary-light"
                  placeholder="Tu email"
                />
              </div>
            </div>
            <div>
              <label className="block font-manrope font-semibold text-primary-dark mb-2">
                Mensaje
              </label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 border border-neutral-gray rounded-lg focus:outline-none focus:border-primary-light resize-none"
                placeholder="Tu mensaje"
              ></textarea>
            </div>
            <Button variant="primary" size="lg" className="w-full">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </Section>
    </div>
  );
}
