import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
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
      <div className="relative w-full overflow-hidden mt-[70px] md:mt-0 min-h-[72vh] md:min-h-[165vh]">

        {/* Imagen de fondo */}
        <div
          className="hero-bg absolute inset-0"
          style={{ backgroundImage: 'url("/image1.png")' }}
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Contenido del hero — pegado abajo */}
        <div className="absolute bottom-[5%] md:bottom-[10%] left-0 right-0 z-10 px-6 pb-4 md:px-12 md:pb-6 text-center">
          <p
            className="text-white/80 mb-3 tracking-[0.15em] uppercase"
            style={{
              fontFamily: "'Manrope', 'Montserrat', sans-serif",
              fontSize: "clamp(11px, 2vw, 24px)",
              letterSpacing: "0.20em",
            }}
          >
            {t.hero.subtitle[0]}<br />
            {t.hero.subtitle[1]}
          </p>

          <h1
            className="text-white m-0 text-center mx-auto"
            style={{
              fontFamily: "'Averta', sans-serif",
              fontWeight: 800,
              fontStyle: "italic",
              fontSize: "clamp(20px, 6vw, 52px)",
              lineHeight: 1.15,
              letterSpacing: "0.06em",
              maxWidth: 850,
            }}
          >
            {t.hero.title[0]}<br />
            {t.hero.title[1]}
          </h1>
        </div>
      </div>

      <section id="proposito" className="bg-[#1a3a8f] px-16 sm:px-32 py-12 sm:py-20 flex flex-col justify-center fade-in">
        <div className="w-full sm:max-w-2xl sm:mx-auto flex gap-4 sm:gap-16">
          {/* Línea vertical */}
          <div className="w-0.5 flex-shrink-0" style={{ backgroundColor: "#0098DC", alignSelf: "flex-start", marginTop: "-1px", height: "clamp(180px, 40vw, 340px)" }} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-6">
              <span
                style={{
                  fontFamily: "'Averta', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(14px, 3vw, 30px)",
                  letterSpacing: "0.09em",
                  color: "white",
                }}
              >
                {t.proposito.label}
              </span>
              <span className="text-white text-sm sm:text-2xl" style={{ letterSpacing: "0.5em" }}>{">"}</span>
            </div>

            <p
              style={{
                fontFamily: "'Averta', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(18px, 4vw, 34px)",
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

      <div className="w-full h-[150px] sm:h-[300px] overflow-hidden">
        <img
          src="/image2.jpg"
          alt="Niña"
          className="w-full h-full object-cover object-top"
          style={{ objectPosition: "center 18%" }}
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
            className="italic text-center"
            style={{
              fontFamily: "'Averta', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(18px, 4vw, 34px)",
              lineHeight: "1.6",
              color: "#1a3a8f",
            }}
          >
            {(() => {
              const text = t.mision.text;
              const keywords = ['Guatemala', 'alianza nacional', 'DCI*'];
              let result = [];
              let lastIndex = 0;
              
              // Create array of all matches with their positions
              const matches = [];
              keywords.forEach(keyword => {
                let index = text.indexOf(keyword);
                while (index !== -1) {
                  matches.push({ keyword, index, endIndex: index + keyword.length });
                  index = text.indexOf(keyword, index + 1);
                }
              });
              
              // Sort by position
              matches.sort((a, b) => a.index - b.index);
              
              // Build result
              matches.forEach((match, i) => {
                // Add text before this match
                if (match.index > lastIndex) {
                  result.push(text.substring(lastIndex, match.index));
                }
                // Add the bold keyword
                result.push(
                  <strong key={`bold-${i}`} style={{ fontWeight: 700 }}>
                    {match.keyword}
                  </strong>
                );
                lastIndex = match.endIndex;
              });
              
              // Add remaining text
              if (lastIndex < text.length) {
                result.push(text.substring(lastIndex));
              }
              
              return result;
            })()}
          </p>

          <p className="mt-8 text-xs italic font-averta text-[#1a3a8f]">
            {t.mision.footnote}
          </p>
        </div>
      </section>

      {/* Quiénes Somos */}
      <div className="w-full h-[280px] sm:h-[490px] overflow-hidden">
        <img
          src="/image3.jpg"
          alt="Niños en actividad"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 73%" }}
        />
      </div>

      <section id="quienes-somos" className="bg-white px-14 sm:px-15 md:px-16 pt-10 mb-10 flex flex-col justify-center fade-in">
        <div className="max-w-xs sm:max-w-xl md:max-w-2xl mx-auto w-full">

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
            <span className="text-[#00379E] text-sm">{">"}</span>
          </div>

          <div
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

          <p className="text-xs italic font-averta text-[#00379E]">
            {t.quienesSomos.footnote}
          </p>

          <div className="flex justify-center mt-6">
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
      <div className="w-full h-[140px] md:h-[220px] lg:h-[300px] overflow-hidden">
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
              onClick={() => navigate('/evidence')}
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

        <div className="w-full h-[300px] sm:h-[550px] overflow-hidden">
          <img
            src="/image8.jpg"
            alt="Niños en clase"
            className="w-full h-full object-cover scale-110 sm:scale-100"
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

        <div className="w-full h-[300px] sm:h-[550px] overflow-hidden">
          <img
            src="/image9.png"
            alt="Niña mirando"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 15%" }}
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
                <img src="/phone.svg" alt="Teléfono" className="w-3.5 h-3.5" style={{ filter: 'invert(19%) sepia(85%) saturate(1472%) hue-rotate(204deg) brightness(68%) contrast(97%)' }} /> (502) 5318-3523
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="flex items-center gap-1">
                <img src="/message.svg" alt="Correo" className="w-3.5 h-3.5" style={{ filter: 'invert(19%) sepia(85%) saturate(1472%) hue-rotate(204deg) brightness(68%) contrast(97%)' }} /> analuisa.esquivel@apn.org.gt
              </p>
            </div>

            <div>
              <p style={{ fontFamily: "'Averta', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 2.5vw, 16px)", color: "#1a3a8f" }}>Olga López
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontStyle: "italic", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="mb-1">
                {t.contacto.roles.adminFinanzas}
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="flex items-center gap-1">
                <img src="/phone.svg" alt="Teléfono" className="w-3.5 h-3.5" style={{ filter: 'invert(19%) sepia(85%) saturate(1472%) hue-rotate(204deg) brightness(68%) contrast(97%)' }} /> (502) 3481-1617
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="flex items-center gap-1">
                <img src="/message.svg" alt="Correo" className="w-3.5 h-3.5" style={{ filter: 'invert(19%) sepia(85%) saturate(1472%) hue-rotate(204deg) brightness(68%) contrast(97%)' }} /> olga.lopez@apn.org.gt
              </p>
            </div>

            <div>
              <p style={{ fontFamily: "'Averta', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 2.5vw, 16px)", color: "#1a3a8f" }}>Mónica Rodríguez
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontStyle: "italic", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="mb-1">
                {t.contacto.roles.monitoreo}
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="flex items-center gap-1">
                <img src="/phone.svg" alt="Teléfono" className="w-3.5 h-3.5" style={{ filter: 'invert(19%) sepia(85%) saturate(1472%) hue-rotate(204deg) brightness(68%) contrast(97%)' }} /> (502) 3483-2517
              </p>
              <p style={{ fontFamily: "'Averta', sans-serif", fontSize: "clamp(11px, 2vw, 14px)", color: "#1a3a8f" }} className="flex items-center gap-1">
                <img src="/message.svg" alt="Correo" className="w-3.5 h-3.5" style={{ filter: 'invert(19%) sepia(85%) saturate(1472%) hue-rotate(204deg) brightness(68%) contrast(97%)' }} /> monica.rodriguez@apn.org.gt
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
