import { useFadeIn } from '../hooks/useFadeIn';
import './Allies.css';

export default function Allies() {
  useFadeIn();

  const boldStyle = {
    fontFamily: "'Averta-Bold', Georgia, serif",
    fontWeight: 400,
  };

  return (
    <div>

      {/* Mensaje de Nuestro Presidente */}
      <section
        className="fade-in"
        style={{ backgroundColor: "#C0C8CE", margin: 0, padding: 0 }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "400px clamp(24px, 6vw, 80px) 60px",
          }}
        >

          {/* Título */}
          <h2
            style={{
              fontFamily: "'Averta-Bold'",
              fontWeight: 400,
              fontSize: "clamp(18px, 3.5vw, 40px)",
              lineHeight: 1.25,
              letterSpacing: "0.0908em",
              color: "#00379E",
              textTransform: "uppercase",
              marginBottom: "clamp(24px, 4vw, 36px)",
              marginTop: 0,
            }}
          >
            Mensaje de<br /><span style={{ fontFamily: "'Averta-RegularItalic', Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>nuestro presidente</span>
          </h2>

          {/* Foto + Nombre */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "clamp(12px, 3vw, 20px)", marginBottom: "clamp(20px, 4vw, 32px)" }}>
            <img
              src="/presidente.png"
              alt="Juan Alfonso Solares"
              style={{
                width: "clamp(64px, 10vw, 120px)",
                height: "clamp(64px, 10vw, 120px)",
                borderRadius: "50%",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 8 }}>
              <span
                style={{
                  fontFamily: "'Averta-Bold', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "clamp(12px, 2.5vw, 22px)",
                  lineHeight: 1.3,
                  letterSpacing: "0.0908em",
                  color: "#00379E",
                  textTransform: "uppercase",
                }}
              >
                Juan Alfonso<br />Solares
              </span>
              <span
                style={{
                  fontFamily: "'Averta-RegularItalic', 'Averta', Georgia, serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "clamp(10px, 1.8vw, 18px)",
                  lineHeight: 1.4,
                  color: "#00379E",
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                Presidente
              </span>
            </div>
          </div>

          {/* Discurso */}
          <div
            style={{
              fontFamily: "'Averta-RegularItalic', 'Averta', Georgia, serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(14px, 1.8vw, 22px)",
              lineHeight: 1.6,
              color: "#00379E",
            }}
          >
            <p style={{ marginBottom: 18 }}>
              En <strong style={boldStyle}>Guatemala</strong>, ningún niño ni niña debería comenzar su vida con desventajas irreversibles. Sin embargo, la{" "}
              <strong style={boldStyle}>desnutrición crónica infantil</strong> sigue siendo una realidad que limita sueños, oportunidades y el futuro de nuestro país.
            </p>
            <p style={{ marginBottom: 18 }}>
              En la <strong style={boldStyle}>Alianza por la Nutrición</strong> creemos que cambiar esta historia es posible. Somos una coalición que une al sector privado y a la sociedad civil con un propósito en común:{" "}
              <strong style={boldStyle}>combatir y prevenir la desnutrición crónica infantil bajo un enfoque integral y multicausal, actuando en la ventana crítica de los primeros 1,000 días de vida.</strong>
            </p>
            <p style={{ marginBottom: 18 }}>
              Cada acción que emprendemos busca garantizar que la niñez crezca sana, fuerte y con las oportunidades que merece. Porque cuando cuidamos a nuestros niños, nutrimos el presente y{" "}
              <strong style={boldStyle}>transformamos el futuro de Guatemala.</strong>
            </p>
            <p>
              Este es un llamado a todos: empresas, organizaciones, comunidades, familias, ciudadanos, madres y padres:{" "}
              <strong style={boldStyle}>Juntos Podemos construir una Guatemala donde ningún niño se quede atrás. El cambio comienza hoy, y comienza contigo.</strong>
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
