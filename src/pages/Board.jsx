import OrgsCarousel from '../components/OrgsCarousel';
import { useFadeIn } from '../hooks/useFadeIn';
import './Allies.css';

export default function Allies() {
  useFadeIn();

  const boldStyle = {
    fontFamily: "'Averta-Bold', Georgia, serif",
    fontWeight: 700,
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
            padding: "clamp(200px, 30vw, 400px) clamp(40px, 6vw, 80px) 60px",
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
              className="presidente-foto"
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
              fontFamily: "'Averta-RegularItalic', Georgia, serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(16px, 3vw, 26px)",
              lineHeight: "clamp(24px, 4vw, 49px)",
              letterSpacing: "0.05%",
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

      {/* Hero Image Junta */}
      <section style={{ margin: 0, padding: 0, lineHeight: 0 }}>
        <img
          src="/image11.jpg"
          alt="Junta Directiva"
          style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "clamp(200px, 30vw, 420px)" }}
        />
      </section>

      {/* Junta Directiva */}
      <section
        className="fade-in"
        style={{ backgroundColor: "#fff", padding: "clamp(40px, 6vw, 80px) clamp(60px, 12vw, 180px)" }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Averta-Bold'",
            fontWeight: 400,
            fontSize: "clamp(18px, 3.5vw, 40px)",
            lineHeight: 1.25,
            letterSpacing: "0.0908em",
            color: "#00379E",
            textTransform: "uppercase",
            marginBottom: "clamp(32px, 5vw, 60px)",
            marginTop: 0,
            paddingLeft: "calc(8% + clamp(8px, 2vw, 20px))",
          }}
        >
          Junta<br />Directiva <span style={{ fontFamily: "'Averta-RegularItalic'", fontStyle: "normal" }}>›</span>
        </h2>

        <div className="junta-grid">
          {[
            { img: "/presidente.png", ext: "png", name: "Juan Alfonso\nSolares", role: "Presidente" },
            { img: "/junta1.png",     name: "Álvaro\nCastillo",      role: "Vicepresidente" },
            { img: "/junta2.jpg",     name: "Lucas\nDougherty",      role: "Tesorero" },
            { img: "/junta3.jpg",     name: "Yolanda\nMayora",       role: "Secretaria" },
            { img: "/junta4.png",     name: "Alfonso\nBosch",        role: "Vocal I" },
            { img: "/junta5.png",     name: "Edna\nLima",            role: "Vocal II" },
            { img: "/junta6.png",     name: "Carlos\nMérida",        role: "Vocal III" },
          ].map(({ img, name, role }) => (
            <div key={role} style={{ display: "flex", alignItems: "flex-start", gap: "clamp(12px, 2vw, 20px)" }}>
              <img
                src={img}
                alt={name.replace("\n", " ")}
                className="presidente-foto"
                style={{
                  width: "clamp(64px, 10vw, 130px)",
                  height: "clamp(64px, 10vw, 130px)",
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 24 }}>
                <span
                  style={{
                    fontFamily: "'Averta-Bold', Georgia, serif",
                    fontWeight: 400,
                    fontSize: "clamp(11px, 2vw, 20px)",
                    lineHeight: 1.3,
                    letterSpacing: "0.0908em",
                    color: "#00379E",
                    textTransform: "uppercase",
                    whiteSpace: "pre-line",
                  }}
                >
                  {name}
                </span>
                <span
                  style={{
                    fontFamily: "'Averta-RegularItalic', Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(9px, 1.5vw, 16px)",
                    lineHeight: 1.4,
                    color: "#00379E",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  {role}
                </span>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Alianza por la Nutrición - Equipo */}
      <section
        className="fade-in"
        style={{ backgroundColor: "#C0C8CE", margin: 0, padding: "clamp(40px, 6vw, 80px) clamp(40px, 8vw, 120px)" }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Averta-Bold'",
              fontWeight: 400,
              fontSize: "clamp(18px, 3.5vw, 40px)",
              lineHeight: 1.25,
              letterSpacing: "0.0908em",
              color: "#00379E",
              textTransform: "uppercase",
              marginBottom: "clamp(32px, 5vw, 60px)",
              marginTop: 0,
            }}
          >
            Alianza por<br />la Nutrición
          </h2>

          <div className="junta-grid">
            {[
              { img: "/image12.png", name: "Ana Luisa\nEsquivel",  role: "Directora Ejecutiva" },
              { img: "/image13.jpg", name: "Olga\nLópez",          role: "Administración\ny Finanzas" },
              { img: "/image14.png", name: "Mónica\nRodríguez",    role: "Monitoreo, Evaluación\ny Aprendizaje" },
            ].map(({ img, name, role }) => (
              <div key={name} style={{ display: "flex", alignItems: "flex-start", gap: "clamp(12px, 2vw, 20px)" }}>
                <img
                  src={img}
                  alt={name.replace("\n", " ")}
                  className="presidente-foto"
                  style={{
                    width: "clamp(64px, 10vw, 130px)",
                    height: "clamp(64px, 10vw, 130px)",
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 24 }}>
                  <span
                    style={{
                      fontFamily: "'Averta-Bold', Georgia, serif",
                      fontWeight: 400,
                      fontSize: "clamp(11px, 2vw, 20px)",
                      lineHeight: 1.3,
                      letterSpacing: "0.0908em",
                      color: "#00379E",
                      textTransform: "uppercase",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {name}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Averta-RegularItalic', Georgia, serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: "clamp(9px, 1.5vw, 16px)",
                      lineHeight: 1.4,
                      color: "#00379E",
                      textTransform: "uppercase",
                      marginTop: 4,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizaciones Aliadas - Carrusel */}
      <OrgsCarousel
        title={<>Organizaciones que son<br />parte de la Alianza por<br />la Nutrición <span style={{ fontFamily: "'Averta-RegularItalic'", fontStyle: "normal" }}>›</span></>}
        bgColor="#00379E"
        textColor="#fff"
        showLogo={true}
        minCardSize={220}
      />

      {/* Únete Aquí */}
      <section
        className="fade-in"
        style={{ backgroundColor: "#fff", padding: "clamp(40px, 6vw, 80px) clamp(40px, 8vw, 120px)" }}
      >
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Averta-Bold'",
              fontWeight: 400,
              fontSize: "clamp(18px, 3.5vw, 40px)",
              lineHeight: 1.25,
              letterSpacing: "0.0908em",
              color: "#00379E",
              textTransform: "uppercase",
              marginBottom: "clamp(20px, 3vw, 32px)",
              marginTop: 0,
            }}
          >
            Únete Aquí <span style={{ fontFamily: "'Averta-RegularItalic'", fontStyle: "normal" }}>›</span>
          </h2>

          <p
            style={{
              fontFamily: "'Averta-RegularItalic', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(13px, 2vw, 20px)",
              lineHeight: 1.7,
              color: "#00379E",
              marginBottom: 8,
            }}
          >
            La <strong style={{ fontFamily: "'Averta-Bold'", fontWeight: 700, fontStyle: "normal" }}>Alianza por la Nutrición</strong> necesita de todos y todas para erradicar la <strong style={{ fontFamily: "'Averta-Bold'", fontWeight: 700, fontStyle: "normal" }}>DCI*</strong> en Guatemala. Sé parte del cambio: ingresa tus datos y únete a nuestros espacios de diálogo, concientización y acción para generar impacto. Juntos podemos garantizar que ningún niño ni niña quede atrás.
          </p>

          <p
            style={{
              fontFamily: "'Averta', Georgia, serif",
              fontSize: "clamp(10px, 1.4vw, 14px)",
              color: "#00379E",
              marginBottom: "clamp(24px, 4vw, 40px)",
            }}
          >
            *DCI: Desnutrición Crónica Infantil.
          </p>

          <p
            style={{
              fontFamily: "'Averta-Bold'",
              fontWeight: 700,
              fontSize: "clamp(14px, 2vw, 22px)",
              color: "#00379E",
              marginBottom: "clamp(16px, 3vw, 28px)",
            }}
          >
            ¡Contáctanos hoy!
          </p>

          <form style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
            {["Nombre", "Correo", "Teléfono"].map((placeholder) => (
              <input
                key={placeholder}
                type={placeholder === "Correo" ? "email" : placeholder === "Teléfono" ? "tel" : "text"}
                placeholder={placeholder}
                style={{
                  backgroundColor: "#E8E8E8",
                  border: "none",
                  borderRadius: 4,
                  padding: "clamp(10px, 1.5vw, 16px) clamp(12px, 2vw, 20px)",
                  fontFamily: "'Averta', Georgia, serif",
                  fontSize: "clamp(13px, 1.5vw, 16px)",
                  color: "#555",
                  outline: "none",
                  width: "70%",
                  boxSizing: "border-box",
                }}
              />
            ))}

            <button
              type="submit"
              style={{
                marginTop: 12,
                backgroundColor: "#00379E",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                padding: "clamp(12px, 2vw, 18px)",
                fontFamily: "'Averta-Bold'",
                fontWeight: 400,
                fontSize: "clamp(13px, 1.8vw, 18px)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                width: "45%",
              }}
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}

