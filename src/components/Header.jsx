import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    if (location.pathname === "/") {
      doScroll();
    } else {
      navigate("/");
      setTimeout(doScroll, 100);
    }
  };

  const goTo = (item) => {
    if (item.path) {
      setMenuOpen(false);
      navigate(item.path);
      window.scrollTo({ top: 0 });
    } else {
      scrollToSection(item.id);
    }
  };

  const menuItems = [
    { label: t.menu.quienesSomos, id: "quienes-somos" },
    { label: t.menu.proposito,    id: "proposito"     },
    { label: t.menu.mision,       id: "mision"        },
    { label: t.menu.aliados,      id: "aliados"       },
    { label: t.menu.unete,        path: "/board"      },
    { label: t.menu.noticias,     id: "noticias"      },
  ];

  // Repartidos alrededor del logo central: 3 a la izquierda, 3 a la derecha
  const leftItems  = menuItems.slice(0, 3);
  const rightItems = menuItems.slice(3);

  const navLinkClass =
    "bg-none border-none cursor-pointer whitespace-nowrap font-averta font-semibold " +
    "text-[13px] xl:text-[15px] text-[#333] hover:text-[#00379E] transition-colors";

  return (
    <header className="w-full h-[70px] flex items-center bg-white shadow-md absolute z-50">

      {/* Izquierda: hamburguesa (solo móvil) + links */}
      <div className="flex-1 flex items-center pl-5 pr-[60px] md:pr-[110px]">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden bg-none border-none cursor-pointer p-2 flex flex-col gap-[5px]"
          aria-label="Menú"
        >
          <span className="block w-6 h-[2.5px] bg-[#00379E] rounded-[2px]" />
          <span className="block w-6 h-[2.5px] bg-[#00379E] rounded-[2px]" />
          <span className="block w-6 h-[2.5px] bg-[#00379E] rounded-[2px]" />
        </button>

        <nav className="hidden lg:flex w-full items-center justify-center gap-8 xl:gap-12">
          {leftItems.map(item => (
            <button
              key={item.label}
              onClick={() => goTo(item)}
              className={navLinkClass}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Centro: bloque del logo — caja azul + caja blanca */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[100px] md:w-[200px] transition-all duration-300 z-20">
        <div className="flex flex-col items-center w-full">
          {/* Caja azul */}
          <div className="w-full aspect-square bg-[#00379E] flex items-center justify-center p-4 md:p-[41px] box-border">
            <img
              src="/logo-apn.png"
              alt="APN logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Caja blanca */}
          <div className="w-full bg-white py-2 md:py-[21px] border-t border-[#e8e8e8] flex items-center justify-center box-border">
            <p className="text-[#00379E] font-averta font-bold text-[10px] md:text-[25px] leading-tight md:leading-[26px] tracking-tight text-center m-0">
              Alianza por<br />la Nutrición
            </p>
          </div>
        </div>
      </div>

      {/* Derecha: links + selector de idioma */}
      <div className="flex-1 flex items-center justify-end pl-[60px] md:pl-[110px] pr-5">
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-8 xl:gap-12">
          {rightItems.map(item => (
            <button
              key={item.label}
              onClick={() => goTo(item)}
              className={navLinkClass}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={toggleLang}
          className="bg-none border-none cursor-pointer text-sm text-[#00379E] flex items-center gap-[6px] lg:ml-8"
        >
          {lang}
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path d="M2 4l4 4 4-4" stroke="#00379E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Desplegable (solo móvil / tablet) */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-[100]">
          {menuItems.map(item => (
            <div
              key={item.label}
              onClick={() => goTo(item)}
              className="p-3 px-6 text-sm font-medium text-[#333] cursor-pointer border-b border-[#f5f5f5] hover:text-[#00379E] transition-colors"
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
