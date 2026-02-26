import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
// main.jsx o App.jsx
import '@fontsource/plus-jakarta-sans/400.css';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden" style={{ height: "160svh", minHeight: 500 }}>

        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-contain bg-cover bg-top"
          style={{ backgroundImage: 'url("/image1.png")' }}
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Contenido del hero — pegado abajo */}
        <div className="absolute bottom-1/3 md:bottom-24 left-0 right-0 z-10 px-6 pb-10 md:px-12 md:pb-14 text-center">
          {/* Subtítulo pequeño en mayúsculas */}
        <p
          className="text-white/80 mb-3 tracking-[0.15em] uppercase"
          style={{
            fontFamily: "'Manrope', 'Montserrat', sans-serif",
            fontSize: "clamp(16px, 2vw, 13px)",
            letterSpacing: "0.15em",
          }}
        >
          Yo soy parte de la<br />
          Alianza por la Nutrición
        </p>

          {/* Título grande en itálica */}
          <h1
            className="text-white m-0 text-center mx-auto"
            style={{
              fontFamily: "'Averta', 'Averta-Bold', 'Georgia', 'serif', 'Averta-BoldItalic'",
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

      {/* Proposito */}
      <section className="bg-[#1a3a8f] px-10 py-12 flex flex-col justify-center min-h-[400px]">
        <div className="max-w-3xl mx-auto w-full flex gap-3">
          {/* Línea vertical */}
          <div className="w-0.5 flex-shrink-0" style={{ backgroundColor: "#0098DC", alignSelf: "flex-start", marginTop: "-18px", height: "180px", position: 'relative', left: '-20px' }} />
          <div>
            {/* Título */}
            <div className="flex items-center gap-2 mb-6">
              <span
                style={{
                  fontFamily: "'Averta', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(14px, 3vw, 22px)",
                  letterSpacing: "0.15em",
                  color: "white",
                }}
              >
                PROPÓSITO
              </span>
              <span className="text-white text-sm">{">"}</span>
            </div>
          
            {/* Texto */}
            <p
            style={{
              fontFamily: "'Averta', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 4vw, 28px)",
              lineHeight: "1.6",
              color: "rgba(255,255,255,0.85)",
              fontStyle: "italic",
            }}
            >
              Inspirar y movilizar a{" "}
              <strong style={{ fontWeight: 700, fontStyle: "italic" }}>Guatemala</strong>{" "}
              para crear soluciones sostenibles que permitan que cada niño y niña crezca
              con la oportunidad de una vida plena.
            </p>
          </div>
        </div>
      </section>

      {/* Imagen niña */}
      <div className="w-full h-[350px] overflow-hidden">
        <img
          src="/image2.jpg"
          alt="Niña "
          className="w-full h-full object-cover object-top"
          style={{ objectPosition: "center 25%" }}
        />
      </div>

      {/* Misión */}
      <section className="bg-[#d6d8db] px-8 py-10 flex flex-col justify-center min-h-[320px]">
        <div className="max-w-2xl mx-auto w-full">
          {/* Título */}
          <div className="flex items-center gap-2 mb-8">
            <span
              className="text-xs sm:text-sm tracking-widest font-bold"
              style={{
                fontFamily: "'Averta', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(14px, 3vw, 22px)",
                letterSpacing: "0.15em",
                color: "#1a3a8f",
                position: 'relative', 
                left: '-20px' 
              }}
            >
              MISIÓN
            </span>
            <span className="text-[#1a3a8f] text-sm">{">"}</span>
          </div>

          {/* Texto centrado */}
          <p
            className="text-lg sm:text-xl md:text-2xl italic text-center"
            style={{
              fontFamily: "'Averta', sans-serif",
              fontWeight: 400,
              lineHeight: "1.6",
              color: "#1a3a8f",
            }}
          >
            Unir a{" "}
            <strong style={{ fontWeight: 700, fontStyle: "italic" }}>Guatemala</strong>{" "}
            en una gran{" "}
            <strong style={{ fontWeight: 700, fontStyle: "italic" }}>alianza nacional</strong>{" "}
            para erradicar la DCI*, impulsando acciones integrales, sostenibles y basadas en
            evidencia, que permitan a cada niño y niña desarrollar su pleno potencial.
          </p>

          {/* Nota al pie */}
          <p
            className="mt-8 text-xs italic"
            style={{
              fontFamily: "'Averta', sans-serif",
              color: "#1a3a8f",
            }}
          >
            *DCI: Desnutrición Crónica Infantil.
          </p>
        </div>
      </section>

      {/* Quiénes Somos */}
      <div className="w-full h-[250px] overflow-hidden">
        <img
          src="/images/quienes-somos.jpg" // 👈 cambia por tu ruta
          alt="Niños en actividad"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
      </div>

      <section className="bg-white px-8 py-10 flex flex-col justify-center">
        <div className="max-w-3xl mx-auto w-full">

          {/* Título */}
          <div className="flex items-center gap-2 mb-6">
            <span
              style={{
                fontFamily: "'Averta', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(14px, 3vw, 22px)",
                letterSpacing: "0.1em",
                color: "#1a3a8f",
              }}
            >
              QUIÉNES SOMOS
            </span>
            <span className="text-[#1a3a8f] text-sm">{">"}</span>
          </div>

          {/* Párrafos */}
          <div
            style={{
              fontFamily: "'Averta', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 3.5vw, 18px)",
              lineHeight: "1.6",
              color: "#1a3a8f",
              fontStyle: "italic",
            }}
          >
            <p className="mb-4">
              Una <strong style={{ fontWeight: 700 }}>coalición</strong> de organizaciones privadas y de la sociedad civil.
            </p>
            <p className="mb-4">
              Nuestro objetivo es prevenir la <strong style={{ fontWeight: 700 }}>DCI*</strong>, bajo un enfoque multidimensional y multicausal.
            </p>
            <p className="mb-4">
              Utilizamos la <strong style={{ fontWeight: 700 }}>ventana de los 1,000 días</strong> y la atención integral a la primera infancia, para buscar el desarrollo pleno de la niñez y nutrir el futuro de nuestro país.
            </p>
          </div>

          {/* Nota al pie */}
          <p
            className="text-xs italic mb-10"
            style={{
              fontFamily: "'Averta', sans-serif",
              color: "#1a3a8f",
            }}
          >
            *DCI: Desnutrición Crónica Infantil.
          </p>

          {/* Botón */}
          <div className="flex justify-center">
            <button
              style={{
                fontFamily: "'Averta', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(12px, 2.5vw, 16px)",
                letterSpacing: "0.15em",
                color: "#0098DC",
                border: "2px solid #0098DC",
                padding: "12px 40px",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              ÚNETE AQUÍ
            </button>
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
