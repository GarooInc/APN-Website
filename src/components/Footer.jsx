import { LiaLinkedinIn } from "react-icons/lia";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  const navLinkStyle = (index) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(10px)",
    transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
  });

  return (
    <footer>

      {/* Menú de navegación - fondo azul oscuro */}
      <div className="bg-[#1a3a8f] px-8 py-10">
        <div className="max-w-3xl mx-auto w-full grid grid-cols-2 gap-x-8 gap-y-6">

          {/* Columna izquierda */}
          <div className="flex flex-col gap-6">
            {["PROPÓSITO", "MISIÓN", "GENERACIÓN\nDE EVIDENCIA", "ALIADOS"].map((item) => (
              <a
                key={item}
                href="#"
                className="transition-all duration-200 hover:text-[#0098DC] hover:tracking-widest"
                style={{
                  fontFamily: "'Averta', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(11px, 2.5vw, 14px)",
                  letterSpacing: "0.12em",
                  color: "white",
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
          <div className="flex flex-col gap-6">
            {["ÚNETE", "MATERIALES TÉCNICOS", "NOTICIAS", "CONTÁCTANOS"].map((item) => (
              <a
                key={item}
                href="#"
                className="transition-all duration-200 hover:text-[#0098DC] hover:tracking-widest"
                style={{
                  fontFamily: "'Averta', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(11px, 2.5vw, 14px)",
                  letterSpacing: "0.12em",
                  color: "white",
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
              className="flex items-center justify-center hover:opacity-80 hover:scale-110 transition-all duration-300" // Added hover:scale-110 and transition-all
              style={{
                color: "#0098DC",
                backgroundColor: "transparent",
                border: "2px solid #0098DC",
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

        {/* Logo - fondo blanco */}
        <div className="bg-white flex items-center justify-center py-6 px-6">
          <img
            src="/logo2.png" 
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
            © 2026 Alianza por la Nutrición.<br />
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
