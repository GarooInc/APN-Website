import { useFadeIn } from '../hooks/useFadeIn';
import OrgsCarousel from '../components/OrgsCarousel';

export default function Allies() {
  useFadeIn();

  return (
    <div>

      {/* Hero Image */}
      <section style={{ margin: 0, padding: 0, lineHeight: 0 }}>
        <img
          src="/image15.png"
          alt="Aliados"
          style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "clamp(400px, 70vw, 850px)" }}
        />
      </section>

      {/* Carrusel de Aliados */}
      <OrgsCarousel
        title={<>Aliados <span style={{ fontFamily: "'Averta-RegularItalic'", fontStyle: "normal" }}>›</span></>}
        bgColor="#fff"
        textColor="#00379E"
        showLogo={false}
        minCardSize={250}
      />

      {/* Por qué ser parte */}
      <section className="fade-in" style={{ backgroundColor: "#00379E", padding: "clamp(60px, 8vw, 100px) clamp(60px, 10vw, 160px)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>

          <h2 style={{
            fontFamily: "'Averta-Bold'",
            fontWeight: 400,
            fontSize: "clamp(16px, 2.5vw, 32px)",
            lineHeight: 1.2,
            letterSpacing: "0.05em",
            color: "#0098DC",
            textTransform: "uppercase",
            marginTop: 0,
            marginBottom: "clamp(40px, 6vw, 80px)",
          }}>
            Por qué ser parte<br />de la Alianza<br />por la Nutrición <span style={{ fontFamily: "'Averta-RegularItalic'", fontStyle: "normal" }}>›</span>
          </h2>

          {[
            { n: "1/", icon: "/icono1.png", title: <>Incidencia y<br />Liderazgo</>, desc: "Espacio para trabajar juntos en el desarrollo de estrategias de impacto contra la DCI*" },
            { n: "2/", icon: "/icono2.png", title: <>Comunicación<br />y Visibilidad</>, desc: "Visibilidad como líderes en el combate de la DCI*" },
            { n: "3/", icon: "/icono3.png", title: <>Aprendizaje y<br />Networking</>, desc: "Talleres con aliados, líderes, especialistas para fortalecer capacidades en temas de nutrición y desarrollo social" },
            { n: "4/", icon: "/icono4.png", title: <>Generación<br />de Evidencia</>, desc: "Acompañamiento en implementación, desarrollo y generación de evidencia, monitoreo y sistematización" },
            { n: "5/", icon: "/icono5.png", title: <>Alianzas<br />Estratégicas</>, desc: "Nuevas oportunidades de colaboración. Estar en el centro de la transformación" },
          ].map(({ n, icon, title, desc }, i, arr) => (
            <div key={i}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "clamp(12px, 2vw, 24px)", marginBottom: "clamp(24px, 4vw, 48px)" }}>
                <span style={{
                  fontFamily: "'Averta-Bold'",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 6vw, 90px)",
                  color: "#fff",
                  lineHeight: 1,
                  flexShrink: 0,
                  minWidth: "clamp(70px, 10vw, 150px)",
                }}>
                  {n}
                </span>
                <div style={{ flex: 1, paddingTop: "clamp(4px, 1vw, 12px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(10px, 1.5vw, 20px)", marginBottom: "clamp(8px, 1.2vw, 16px)" }}>
                    <img src={icon} alt="" style={{ width: "clamp(28px, 3.5vw, 52px)", height: "clamp(28px, 3.5vw, 52px)", objectFit: "contain", flexShrink: 0 }} />
                    <h3 style={{
                      fontFamily: "'Averta-Bold'",
                      fontWeight: 400,
                      fontSize: "clamp(12px, 1.5vw, 24px)",
                      color: "#0098DC",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      margin: 0,
                    }}>
                      {title}
                    </h3>
                  </div>
                  <p style={{
                    fontFamily: "'Averta-RegularItalic', Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(11px, 1.4vw, 20px)",
                    color: "#fff",
                    margin: 0,
                    lineHeight: 1.5,
                  }}>
                    {desc}
                  </p>
                </div>
              </div>
              {i < arr.length - 1 && (
                <hr style={{ border: "none", borderTop: "2px solid #0098DC", margin: "0 0 clamp(24px, 4vw, 48px)" }} />
              )}
            </div>
          ))}

          <p style={{
            fontFamily: "'Averta', Georgia, serif",
            fontSize: "clamp(10px, 1.2vw, 14px)",
            color: "#fff",
            marginTop: "clamp(40px, 6vw, 80px)",
            textAlign: "center",
          }}>
            *DCI: Desnutrición Crónica Infantil.
          </p>

        </div>
      </section>

    </div>
  );
}
