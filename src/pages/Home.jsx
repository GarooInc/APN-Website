import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail } from "lucide-react";
import { useFadeIn } from '../hooks/useFadeIn';
import { useLang } from '../context/LanguageContext';
import '@fontsource/plus-jakarta-sans/400.css';

export default function Home() {
  useFadeIn();
  const navigate = useNavigate();
  const { t } = useLang();

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(500px, 100svh, 160svh)" }}>

        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-contain bg-cover bg-top"
          style={{ backgroundImage: 'url("/image1.png")' }}
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Contenido del hero — pegado abajo */}
        <div className="absolute bottom-1/3 md:bottom-24 left-0 right-0 z-10 px-6 pb-10 md:px-12 md:pb-14 text-center">
          <p
            className="text-white/80 mb-3 tracking-[0.15em] uppercase"
            style={{
              fontFamily: "'Manrope', 'Montserrat', sans-serif",
              fontSize: "clamp(11px, 2vw, 16px)",
              letterSpacing: "0.15em",
            }}
          >
            {t.hero.subtitle[0]}<br />
            {t.hero.subtitle[1]}
          </p>

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
            {t.hero.title[0]}<br />
            {t.hero.title[1]}
          </h1>
        </div>
      </div>

      <section id="proposito" className="bg-[#1a3a8f] px-6 sm:px-10 py-8 sm:py-12 flex flex-col justify-center fade-in">
        <div className="max-w-3xl mx-auto w-full flex gap-3">
          {/* Línea vertical */}
          <div className="w-0.5 flex-shrink-0 hidden sm:block" style={{ backgroundColor: "#0098DC", alignSelf: "flex-start", marginTop: "-18px", height: "180px" }} />
          <div>
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
                {t.proposito.label}
              </span>
              <span className="text-white text-sm">{">"}</span>
            </div>

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
              {t.proposito.text.split(t.proposito.highlight).map((part, i, arr) =>
                i < arr.length - 1
                  ? <span key={i}>{part}<strong style={{ fontWeight: 700, fontStyle: "italic" }}>{t.proposito.highlight}</strong></span>
                  : <span key={i}>{part}</span>
              )}
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-[200px] sm:h-[350px] overflow-hidden">
        <img
          src="/image2.jpg"
          alt="Niña"
          className="w-full h-full object-cover object-top"
          style={{ objectPosition: "center 25%" }}
        />
      </div>

      <section className="bg-[#d6d8db] px-8 py-10 flex flex-col justify-center min-h-[320px] fade-in">
        <div className="max-w-2xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-8">
            <span
              className="text-xs sm:text-sm tracking-widest font-bold"
              style={{
                fontFamily: "'Averta', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(14px, 3vw, 22px)",
                letterSpacing: "0.15em",
                color: "#1a3a8f",
              }}
            >
              {t.mision.label}
            </span>
            <span className="text-[#1a3a8f] text-sm">{">"}</span>
          </div>

          <p
            className="text-lg sm:text-xl md:text-2xl italic text-center"
            style={{
              fontFamily: "'Averta', sans-serif",
              fontWeight: 400,
              lineHeight: "1.6",
              color: "#1a3a8f",
            }}
          >
            {t.mision.text}
          </p>

          <p className="mt-8 text-xs italic font-averta text-[#1a3a8f]">
            {t.mision.footnote}
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

      <section id="quienes-somos" className="bg-white px-8 pt-10 mb-10 flex flex-col justify-center fade-in">
        <div className="max-w-3xl mx-auto w-full">

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
              {t.quienesSomos.label}
            </span>
            <span className="text-[#1a3a8f] text-sm">{">"}</span>
          </div>

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
              {t.quienesSomos.p1[0]}<strong style={{ fontWeight: 700 }}>{t.quienesSomos.p1[1]}</strong>{t.quienesSomos.p1[2]}
            </p>
            <p className="mb-6">
              {t.quienesSomos.p2[0]}<strong style={{ fontWeight: 700 }}>{t.quienesSomos.p2[1]}</strong>{t.quienesSomos.p2[2]}
            </p>
            <p className="mb-6">
              {t.quienesSomos.p3[0]}<strong style={{ fontWeight: 700 }}>{t.quienesSomos.p3[1]}</strong>{t.quienesSomos.p3[2]}
            </p>
          </div>

          <p className="text-xs italic mb-10 font-averta text-[#1a3a8f]">
            {t.quienesSomos.footnote}
          </p>

          <div className="flex justify-center">
            <Button
              variant="filled-light"
              size="md"
              className="font-averta font-bold text-[clamp(12px,2.5vw,16px)] tracking-[0.15em] px-[40px] py-[12px]"
              onClick={() => navigate('/board')}
            >
              {t.quienesSomos.btn}
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
      <section id="aliados" className="bg-[#1a3a8f] px-8 pt-10 pb-10 flex flex-col items-center fade-in">

        <div className="w-full sm:w-[75%] h-[300px] sm:h-[500px] overflow-hidden mb-6">
          <img
            src="/image5.jpg"
            alt="Madre con bebé"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
        </div>

        <div className="w-full max-w-3xl">

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
              {t.aliados.label}
            </span>
            <span className="text-[#0098DC] text-sm">{">"}</span>
          </div>

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
            {t.aliados.text}
          </p>

          <div className="flex justify-center">
            <Button
              variant="filled-light"
              size="md"
              className="font-averta font-bold text-[clamp(12px,2.5vw,16px)] tracking-[0.15em] px-[40px] py-[12px]"
              onClick={() => navigate('/allies')}
            >
              {t.aliados.btn}
            </Button>
          </div>

        </div>
      </section>

      {/* Generación de Evidencia */}
      <section className="bg-[#0098DC] px-8 py-10 flex flex-col items-center fade-in">

        <div className="w-full sm:w-[75%] h-[300px] sm:h-[500px] overflow-hidden mb-6">
          <img
            src="/image6.jpg"
            alt="Madre con bebé"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
        </div>

        <div className="w-full max-w-3xl">

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
              {t.evidencia.label[0]}<br />{t.evidencia.label[1]}
            </span>
            <span className="text-white text-sm self-end mb-2">{">"}</span>
          </div>

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
            {t.evidencia.text}
          </p>

          <div className="flex justify-center">
            <Button
              variant="primary"
              size="md"
              className="font-averta font-bold text-[clamp(12px,2.5vw,16px)] tracking-[0.15em] px-[40px] py-[12px]"
            >
              {t.evidencia.btn}
            </Button>
          </div>

        </div>
      </section>

      {/* Materiales Técnicos */}
      <section className="bg-[#d6d8db] px-8 py-10 flex flex-col items-center fade-in">

        <div className="w-full sm:w-[75%] h-[300px] sm:h-[550px] overflow-hidden mb-6">
          <img
            src="/image7.jpg"
            alt="Niñas guatemaltecas"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 35%" }}
          />
        </div>

        <div className="w-full max-w-3xl">

          <div className="flex items-center gap-2 mb-3">
            <span
              style={{
                fontFamily: "'Averta', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(16px, 3vw, 20px)",
                letterSpacing: "0.1em",
                color: "#1a3a8f",
              }}
            >
              {t.materiales.label[0]}<br />{t.materiales.label[1]}
            </span>
            <span className="text-[#1a3a8f] text-sm self-end mb-1">{">"}</span>
          </div>

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
            {t.materiales.text}
          </p>

          <div className="flex justify-center">
            <Button
              variant="filled-light"
              size="md"
              className="font-averta font-bold text-[clamp(12px,2.5vw,16px)] tracking-[0.15em] px-[40px] py-[12px]"
              onClick={() => navigate('/materials')}
            >
              {t.materiales.btn}
            </Button>
          </div>

        </div>
      </section>

      {/* Noticias */}
      <section id="noticias" className="bg-white flex flex-col fade-in">

        <div className="w-full h-[550px] overflow-hidden">
          <img
            src="/image8.jpg"
            alt="Niños en clase"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 50%" }}
          />
        </div>

        <div className="px-10 py-12 max-w-3xl mx-auto w-full">

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
              {t.noticias.label}
            </span>
            <span className="text-[#1a3a8f] text-sm">{">"}</span>
          </div>

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
            {t.noticias.text}
          </p>

          <div className="flex justify-center">
            <Button
              variant="primary"
              size="md"
              className="font-averta font-bold text-[clamp(12px,2.5vw,16px)] tracking-[0.15em] px-[40px] py-[12px]"
              onClick={() => navigate('/news')}
            >
              {t.noticias.btn}
            </Button>
          </div>

        </div>

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
      <section id="contacto" className="bg-[#d6d8db] px-8 py-10 fade-in">
        <div className="max-w-3xl mx-auto w-full">

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
              {t.contacto.label}
            </span>
            <span className="text-[#1a3a8f] text-sm">{">"}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            <div>
              <p style={{ fontFamily: "'Averta', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 2.5vw, 16px)", color: "#1a3a8f" }}>
                Ana Luisa Esquivel
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontStyle: "italic", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="mb-1">
                {t.contacto.roles.directoraEjecutiva}
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="flex items-center gap-1">
                <Phone size={14} color="#1a3a8f" /> (502) 5318-3523
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="flex items-center gap-1">
                <Mail size={14} color="#1a3a8f" /> analuisa.esquivel@apn.org.gt
              </p>
            </div>

            <div>
              <p style={{ fontFamily: "'Averta', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 2.5vw, 16px)", color: "#1a3a8f" }}>Olga López
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontStyle: "italic", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="mb-1">
                {t.contacto.roles.adminFinanzas}
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="flex items-center gap-1">
                <Phone size={14} color="#1a3a8f" /> (502) 3481-1617
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="flex items-center gap-1">
                <Mail size={14} color="#1a3a8f" /> olga.lopez@apn.org.gt
              </p>
            </div>

            <div>
              <p style={{ fontFamily: "'Averta', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 2.5vw, 16px)", color: "#1a3a8f" }}>Mónica Rodríguez
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontStyle: "italic", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="mb-1">
                {t.contacto.roles.monitoreo}
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="flex items-center gap-1">
                <Phone size={14} color="#1a3a8f" /> (502) 3483-2517
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="flex items-center gap-1">
                <Mail size={14} color="#1a3a8f" /> monica.rodriguez@apn.org.gt
              </p>
            </div>

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
