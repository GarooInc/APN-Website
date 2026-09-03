import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

export default function Header() {
  const [menuOpen, setMenuOpen]     = useState(false);   // hamburguesa (móvil)
  const [openGroup, setOpenGroup]   = useState(null);    // dropdown abierto (escritorio)
  const [openAccord, setOpenAccord] = useState(null);    // acordeón abierto (móvil)
  const { lang, toggleLang, t } = useLang();
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);

  // Cierra el dropdown al hacer clic fuera del header
  useEffect(() => {
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenGroup(null);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Navega a una página y, si el item trae id, hace scroll a esa sección
  const goTo = ({ path, id }) => {
    setMenuOpen(false);
    setOpenGroup(null);
    setOpenAccord(null);

    const doScroll = () => {
      if (!id) return;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    if (location.pathname === path) {
      doScroll();
    } else {
      navigate(path);
      // Espera al render de la nueva página (ScrollToTop corre primero)
      setTimeout(doScroll, 100);
    }
  };

  // Estructura del menú: 2 grupos con submenú + 1 link suelto + CTA
  const navGroups = [
    {
      label: t.menu.quienesSomos,
      items: [
        { label: t.menu.proposito,         path: "/",      id: "proposito"          },
        { label: t.menu.mision,            path: "/",      id: "mision"             },
        { label: t.menu.mensajePresidente, path: "/board", id: "mensaje-presidente" },
        { label: t.menu.juntaDirectiva,    path: "/board", id: "junta-directiva"    },
      ],
    },
    {
      label: t.menu.aliados,
      items: [
        { label: t.menu.porQueSerParte, path: "/allies", id: "por-que-ser-parte" },
        { label: t.menu.contactanos,    path: "/",       id: "contacto"          },
      ],
    },
  ];

  const newsItem = { label: t.menu.noticias,  path: "/news" };
  const ctaItem  = { label: t.menu.uneteAqui, path: "/board", id: "unete-aqui" };

  const navLinkClass =
    "bg-none border-none cursor-pointer whitespace-nowrap font-averta font-semibold " +
    "text-[13px] xl:text-[15px] text-[#00379E] hover:text-[#0098DC] transition-colors";

  const ctaClass =
    "bg-[#0098DC] text-white font-averta font-bold whitespace-nowrap cursor-pointer border-none " +
    "text-[12px] xl:text-[14px] px-4 xl:px-5 py-[9px] rounded transition-colors hover:bg-[#00379E]";

  // Grupo con submenú desplegable (escritorio)
  const NavGroup = ({ group }) => {
    const isOpen = openGroup === group.label;
    return (
      <div
        className="relative"
        onMouseEnter={() => setOpenGroup(group.label)}
        onMouseLeave={() => setOpenGroup(null)}
      >
        <button
          onClick={() => setOpenGroup(isOpen ? null : group.label)}
          className={`${navLinkClass} flex items-center gap-[5px]`}
          aria-expanded={isOpen}
        >
          {group.label}
          <svg
            width="11" height="11" viewBox="0 0 12 12" fill="none"
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          >
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-[60]">
            <div className="bg-white shadow-lg rounded-md py-2 min-w-[210px] border border-[#eee]">
              {group.items.map((item) => (
                <button
                  key={item.label}
                  onClick={() => goTo(item)}
                  className="block w-full text-left px-4 py-[9px] font-averta font-medium
                             text-[13px] leading-snug text-[#00379E] bg-none border-none cursor-pointer
                             hover:bg-[#f2f6ff] hover:text-[#0098DC] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="w-full h-[70px] flex items-center bg-white shadow-md absolute z-50">

      {/* Izquierda: hamburguesa (solo móvil) + grupos con submenú */}
      <div ref={navRef} className="flex-1 flex items-center pl-5 pr-[60px] md:pr-[110px]">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden bg-none border-none cursor-pointer p-2 flex flex-col gap-[5px]"
          aria-label="Menú"
        >
          <span className="block w-6 h-[2.5px] bg-[#00379E] rounded-[2px]" />
          <span className="block w-6 h-[2.5px] bg-[#00379E] rounded-[2px]" />
          <span className="block w-6 h-[2.5px] bg-[#00379E] rounded-[2px]" />
        </button>

        <nav className="hidden lg:flex w-full items-center justify-evenly">
          {navGroups.map((group) => (
            <NavGroup key={group.label} group={group} />
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

      {/* Derecha: Noticias + CTA Únete Aquí + selector de idioma */}
      <div className="flex-1 flex items-center justify-end pl-[60px] md:pl-[110px] pr-5">
        <nav className="hidden lg:flex flex-1 items-center justify-evenly">
          <button onClick={() => goTo(newsItem)} className={navLinkClass}>
            {newsItem.label}
          </button>
          <button onClick={() => goTo(ctaItem)} className={ctaClass}>
            {ctaItem.label}
          </button>
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

      {/* Desplegable (solo móvil / tablet) — acordeón */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-[100] max-h-[80vh] overflow-y-auto">
          {navGroups.map((group) => {
            const isOpen = openAccord === group.label;
            return (
              <div key={group.label}>
                <button
                  onClick={() => setOpenAccord(isOpen ? null : group.label)}
                  className="w-full flex items-center justify-between p-3 px-6 text-sm font-semibold
                             text-[#00379E] bg-none border-none border-b border-[#f5f5f5] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  {group.label}
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8"
                          strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {isOpen && group.items.map((item) => (
                  <div
                    key={item.label}
                    onClick={() => goTo(item)}
                    className="py-[10px] pl-10 pr-6 text-[13px] text-[#00379E] bg-[#f7f9ff]
                               cursor-pointer border-b border-[#eef2fb] hover:text-[#0098DC] transition-colors"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            );
          })}

          <div
            onClick={() => goTo(newsItem)}
            className="p-3 px-6 text-sm font-semibold text-[#00379E] cursor-pointer
                       border-b border-[#f5f5f5] hover:text-[#0098DC] transition-colors"
          >
            {newsItem.label}
          </div>

          <div className="p-4 px-6">
            <button onClick={() => goTo(ctaItem)} className={`${ctaClass} w-full text-[13px] py-3`}>
              {ctaItem.label}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
