import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { Phone, Mail } from "lucide-react";
import { useFadeIn } from '../hooks/useFadeIn';
import '@fontsource/plus-jakarta-sans/400.css';

export default function Home() {
  useFadeIn();
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

      <section className="bg-[#1a3a8f] px-10 py-12 flex flex-col justify-center min-h-[400px] fade-in">
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

      <div className="w-full h-[350px] overflow-hidden">
        <img
          src="/image2.jpg"
          alt="Niña "
          className="w-full h-full object-cover object-top"
          style={{ objectPosition: "center 25%" }}
        />
      </div>

      <section className="bg-[#d6d8db] px-8 py-10 flex flex-col justify-center min-h-[320px] fade-in">
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
            className="mt-8 text-xs italic font-averta text-[#1a3a8f]"
          >
            *DCI: Desnutrición Crónica Infantil.
          </p>
        </div>
      </section>

      {/* Quiénes Somos */}
      <div className="w-full h-[490px] overflow-hidden">
        <img
          src="/image3.jpg" 
          alt="Niños en actividad"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 73%" }}
        />
      </div>

      <section className="bg-white px-8 pt-10 mb-10 flex flex-col justify-center fade-in">
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
            className="p-6 rounded-lg"
            style={{
              fontFamily: "'Averta', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 3.5vw, 20px)",
              lineHeight: "1.6",
              color: "#1a3a8f",
              fontStyle: "italic",
            }}
          >
            <p className="mb-6">
              Una <strong style={{ fontWeight: 700 }}>coalición</strong> de organizaciones privadas y de la sociedad civil.
            </p>
            <p className="mb-6">
              Nuestro objetivo es prevenir la <strong style={{ fontWeight: 700 }}>DCI*</strong>, bajo un enfoque multidimensional y multicausal.
            </p>
            <p className="mb-6">
              Utilizamos la <strong style={{ fontWeight: 700 }}>ventana de los 1,000 días</strong> y la atención integral a la primera infancia, para buscar el desarrollo pleno de la niñez y nutrir el futuro de nuestro país.
            </p>
          </div>

          {/* Nota al pie */}
          <p
            className="text-xs italic mb-10 font-averta text-[#1a3a8f]"
          >
            *DCI: Desnutrición Crónica Infantil.
          </p>

          {/* Botón */}
          <div className="flex justify-center">
      <Button
        variant="filled-light"
        size="md" 
        className="font-averta font-bold text-[clamp(12px,2.5vw,16px)] tracking-[0.15em] px-[40px] py-[12px]" 
            >
              ÚNETE AQUÍ
      </Button>
          </div>

        </div>
      </section>

        {/* Imagen superior - full width */}
        <div className="w-full h-[310px] overflow-hidden">
          <img
            src="/image4.jpg" 
            alt="Niñas guatemaltecas"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 45%" }}
          />
        </div>

      {/* Sección Aliados */}
      <section className="bg-[#1a3a8f] px-8 pt-10 pb-10 flex flex-col items-center fade-in">

        {/* Imagen inferior - centrada con margen */}
        <div className="w-full h-[500px] overflow-hidden mb-14">
          <img
            src="/image5.jpg" 
            alt="Madre con bebé"
            className="w-full h-full object-cover scale-125"
            style={{ objectPosition: "center 10%" }}
          />
        </div>

        {/* Contenido */}
        <div className="w-full max-w-3xl">

          {/* Título */}
          <div className="flex items-center gap-2 mb-3">
            <span
              style={{
                fontFamily: "'Averta', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(14px, 3vw, 22px)",
                letterSpacing: "0.1em",
                color: "#0098DC",
              }}
            >
              ALIADOS
            </span>
            <span className="text-[#0098DC] text-sm">{">"}</span>
          </div>

          {/* Texto */}
          <p
            className="mb-8"
            style={{
              fontFamily: "'Averta', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 3.5vw, 18px)",
              lineHeight: "1.6",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Descubre quienes ya son parte de esta gran alianza
          </p>

          {/* Botón */}
          <div className="flex justify-center">
            <Button
              variant="filled-light"
              size="md"
              className="font-averta font-bold text-[clamp(12px,2.5vw,16px)] tracking-[0.15em] px-[40px] py-[12px]"
            >
              LLÉVAME AHÍ
            </Button>
          </div>

        </div>
      </section>

      {/* Generación de Evidencia */}
      <section className="bg-[#0098DC] px-8 py-10 flex flex-col items-center fade-in">

        {/* Imagen */}
        <div className="w-[75%] h-[500px] overflow-hidden mb-6">
          <img
            src="/image6.jpg" 
            alt="Madre con bebé"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
        </div>

        {/* Contenido */}
        <div className="w-full max-w-3xl">

          {/* Título */}
          <div className="flex items-center gap-2 mb-3">
            <span
              style={{
                fontFamily: "'Averta', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(14px, 3vw, 22px)",
                letterSpacing: "0.1em",
                color: "white",
              }}
            >
              GENERACIÓN<br />DE EVIDENCIA
            </span>
            <span className="text-white text-sm self-end mb-2">{">"}</span>
          </div>

          {/* Texto */}
          <p
            className="mb-8"
            style={{
              fontFamily: "'Averta', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 3.5vw, 18px)",
              lineHeight: "1.6",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Nuestro progreso hacia el logro de objetivos
          </p>

          {/* Botón */}
          <div className="flex justify-center">
            <Button
              variant="primary"
              size="md"
              className="font-averta font-bold text-[clamp(12px,2.5vw,16px)] tracking-[0.15em] px-[40px] py-[12px]"
            >
              LLÉVAME AHÍ
            </Button>
          </div>

        </div>
      </section>

      {/* Materiales Técnicos */}
      <section className="bg-[#d6d8db] px-8 py-10 flex flex-col items-center fade-in">

        {/* Imagen */}
        <div className="w-[75%] h-[550px] overflow-hidden mb-6">
          <img
            src="/image7.jpg" 
            alt="Niñas guatemaltecas"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 35%" }}
          />
        </div>

        {/* Contenido */}
        <div className="w-full max-w-3xl">

          {/* Título */}
          <div className="flex items-center gap-2 mb-3">
            <span
              style={{
                fontFamily: "'Averta', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(20px, 4vw, 22px)",
                letterSpacing: "0.1em",
                color: "#1a3a8f",
              }}
            >
              MATERIALES<br />TÉCNICOS
            </span>
            <span className="text-[#1a3a8f] text-sm self-end mb-1">{">"}</span>
          </div>

          {/* Texto */}
          <p
            className="mb-8"
            style={{
              fontFamily: "'Averta', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(25px, 5vw, 20px)",
              lineHeight: "1.6",
              color: "#1a3a8f",
            }}
          >
            Descarga material de apoyo y ayúdanos a ampliar nuestro impacto
          </p>

          {/* Botón */}
          <div className="flex justify-center">
            <Button
              variant="filled-light"
              size="md"
              className="font-averta font-bold text-[clamp(12px,2.5vw,16px)] tracking-[0.15em] px-[40px] py-[12px]"
            >
              LLÉVAME AHÍ
            </Button>
          </div>

        </div>
      </section>


      {/* Noticias */}
      <section className="bg-white flex flex-col fade-in">

        {/* Imagen superior - full width */}
        <div className="w-full h-[550px] overflow-hidden">
          <img
            src="/image8.jpg" 
            alt="Niños en clase"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 50%" }}
          />
        </div>

        {/* Contenido */}
        <div className="px-10 py-12 max-w-3xl mx-auto w-full">

          {/* Título */}
          <div className="flex items-center gap-2 mb-3">
            <span
              style={{
                fontFamily: "'Averta', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(14px, 3vw, 22px)",
                letterSpacing: "0.1em",
                color: "#1a3a8f",
              }}
            >
              NOTICIAS
            </span>
            <span className="text-[#1a3a8f] text-sm">{">"}</span>
          </div>

          {/* Texto */}
          <p
            className="mb-8"
            style={{
              fontFamily: "'Averta', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 3.5vw, 18px)",
              lineHeight: "1.6",
              color: "#1a3a8f",
            }}
          >
            Que nos llenan de esperanza
          </p>

          {/* Botón */}
          <div className="flex justify-center">
            <Button
              variant="primary"
              size="md"
              className="font-averta font-bold text-[clamp(12px,2.5vw,16px)] tracking-[0.15em] px-[40px] py-[12px]"
            >
              LLÉVAME AHÍ
            </Button>
          </div>

        </div>

        {/* Imagen inferior - full width */}
        <div className="w-full h-[580px] overflow-hidden">
          <img
            src="/image9.jpg"
            alt="Niña mirando"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 28%" }}
          />
        </div>

      </section>

      {/* Contáctanos */}
      <section className="bg-[#d6d8db] px-8 py-10 fade-in">
        <div className="max-w-3xl mx-auto w-full">

          {/* Título */}
          <div className="flex items-center gap-2 mb-8">
            <span
              style={{
                fontFamily: "'Averta', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(14px, 3vw, 22px)",
                letterSpacing: "0.1em",
                color: "#1a3a8f",
              }}
            >
              CONTÁCTANOS
            </span>
            <span className="text-[#1a3a8f] text-sm">{">"}</span>
          </div>

          {/* Grid de contactos */}
          <div className="grid grid-cols-2 gap-8">

            {/* Ana Luisa Esquivel */}
            <div>
              <p style={{ fontFamily: "'Averta', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 2.5vw, 16px)", color: "#1a3a8f" }}>
                Ana Luisa Esquivel
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontStyle: "italic", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="mb-1">
                Directora Ejecutiva
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="flex items-center gap-1">
                <Phone size={14} color="#1a3a8f" /> (502) 5318-3523
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="flex items-center gap-1">
                <Mail size={14} color="#1a3a8f" /> analuisa.esquivel@apn.org.gt
              </p>
            </div>

            {/* Olga López */}
            <div>
              <p style={{ fontFamily: "'Averta', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 2.5vw, 16px)", color: "#1a3a8f" }}>Olga López
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontStyle: "italic", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="mb-1">
                Administración y Finanzas
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="flex items-center gap-1">
                <Phone size={14} color="#1a3a8f" /> (502) 3481-1617
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="flex items-center gap-1">
                <Mail size={14} color="#1a3a8f" /> olga.lopez@apn.org.gt
              </p>
            </div>

            {/* Mónica Rodríguez */}
            <div>
              <p style={{ fontFamily: "'Averta', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 2.5vw, 16px)", color: "#1a3a8f" }}>Mónica Rodríguez
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontStyle: "italic", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="mb-1">
                Monitoreo, Evaluación y Aprendizaje
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="flex items-center gap-1">
                <Phone size={14} color="#1a3a8f" /> (502) 3483-2517
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="flex items-center gap-1">
                <Mail size={14} color="#1a3a8f" /> monica.rodriguez@apn.org.gt
              </p>
            </div>

            {/* Alianza por la Nutrición */}
            <div>
              <p style={{ fontFamily: "'Averta', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 2.5vw, 16px)", color: "#1a3a8f" }}>Alianza por la Nutrición
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f", lineHeight: "1.6" }}>
                Boulevard Los Proceres 24-64, Zona 10<br />
                Torre 1 Oficina 1402, 01001.<br />
                Guatemala, Ciudad.
              </p>
            </div>

          </div> 
        </div>
      </section>
    </div>
  );
}