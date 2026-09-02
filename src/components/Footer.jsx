import { LiaLinkedinIn } from "react-icons/lia";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

// Destinos por posicion, en el mismo orden que t.footer.left / t.footer.right.
// { id } = seccion del Home;  { path } = ruta propia.
const LEFT_TARGETS = [
  { id: "proposito" },   // PROPOSITO
  { id: "mision" },      // MISION
  { path: "/evidence" }, // GENERACION DE EVIDENCIA
  { path: "/allies" },   // ALIADOS
];

const RIGHT_TARGETS = [
  { path: "/board" },     // UNETE
  { path: "/materials" }, // MATERIALES TECNICOS
  { path: "/news" },      // NOTICIAS
  { id: "contacto" },     // CONTACTANOS
];

export default function Footer({ variant = "dark" }) {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLang();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  const navLinkStyle = (index) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(10px)",
    transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
  });

  const hrefFor = (target) => target.path || `/#${target.id}`;

  const goTo = (e, target) => {
    e.preventDefault();
    if (target.path) {
      navigate(target.path);
      window.scrollTo({ top: 0 });
      return;
    }
    const doScroll = () => {
      const el = document.getElementById(target.id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    if (location.pathname === "/") {
      doScroll();
    } else {
      navigate("/");
      setTimeout(doScroll, 100);
    }
  };

  return (
    <footer>

      {/* Menú de navegación */}
      <div className="px-6 py-10 sm:px-8" style={{ backgroundColor: variant === "light" ? "#C0C8CE" : "#1a3a8f" }}>
        <div className="max-w-3xl mx-auto w-full grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-x-8 sm:gap-y-6">

          {/* Columna izquierda */}
          <div className="flex flex-col gap-6 sm:gap-10">
            {t.footer.left.map((item, i) => (
              <a
                key={item}
                href={hrefFor(LEFT_TARGETS[i])}
                onClick={(e) => goTo(e, LEFT_TARGETS[i])}
                className="cursor-pointer transition-all duration-200 hover:text-[#0098DC] hover:tracking-widest"
                style={{
                  fontFamily: "'Averta', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(11px, 2.5vw, 14px)",
                  letterSpacing: "0.12em",
                  color: variant === "light" ? "#00379E" : "white",
                  textDecoration: "none",
                  whiteSpace: "pre-line",
                  ...navLinkStyle(0),
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col gap-6 sm:gap-10">
            {t.footer.right.map((item, i) => (
              <a
                key={item}
                href={hrefFor(RIGHT_TARGETS[i])}
                onClick={(e) => goTo(e, RIGHT_TARGETS[i])}
                className="cursor-pointer transition-all duration-200 hover:text-[#0098DC] hover:tracking-widest"
                style={{
                  fontFamily: "'Averta', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(11px, 2.5vw, 14px)",
                  letterSpacing: "0.12em",
                  color: variant === "light" ? "#00379E" : "white",
                  textDecoration: "none",
                  ...navLinkStyle(4),
                }}
              >
                {item}
              </a>
            ))}

            {/* Iconos sociales */}
            <div className="flex items-center gap-3 mt-2">
              {[
                { icon: <LiaLinkedinIn size={18} />, href: "#", rounded: "8px" },
                { icon: <FaFacebookF size={18} />, href: "#", rounded: "50%" },
                { icon: <AiOutlineInstagram size={18} />, href: "#", rounded: "50%" },
                { icon: <FaYoutube size={18} />, href: "#", rounded: "50%" },
              ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="flex items-center justify-center hover:opacity-80 hover:scale-110 transition-all duration-300"
              style={{
                color: "white",
                backgroundColor: "#0098DC",
                border: "none",
                borderRadius: social.rounded,
                width: "36px",
                height: "36px",
              }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Barra inferior */}
      <div className="grid grid-cols-2">

        {/* Logo */}
        <div className="flex items-center justify-center py-6 px-6" style={{ backgroundColor: variant === "light" ? "#00379E" : "white" }}>
          <img
            src={variant === "light" ? "/logo-apn.png" : "/logo2.png"}
            alt="APN Logo" transition-transform duration-500 hover:scale-110
            className="h-12 object-contain"
          />
        </div>

        {/* Copyright - fondo azul claro */}
        <div className="bg-[#0098DC] flex items-center justify-center py-6 px-6">
          <p
            style={{
              fontFamily: "'Averta', sans-serif",
              fontSize: "clamp(10px, 2vw, 13px)",
              color: "white",
              lineHeight: "1.5",
            }}
          >
            {t.footer.copyright.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
