import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("ES");

  return (
    <header className="w-full h-[70px] flex justify-between items-center bg-white shadow-md font-montserrat absolute z-50">

      {/* Left: Hamburger */}
      <div className="flex items-center pl-5">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-none border-none cursor-pointer p-2 flex flex-col gap-[5px]"
          aria-label="Menú"
        >
          <span className="block w-6 h-[2.5px] bg-[#00379E] rounded-[2px]" />
          <span className="block w-6 h-[2.5px] bg-[#00379E] rounded-[2px]" />
          <span className="block w-6 h-[2.5px] bg-[#00379E] rounded-[2px]" />
        </button>
      </div>

      {/* Center: Logo block — blue top + white bottom */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[100px] md:w-[200px] transition-all duration-300 z-20">
        <div className="flex flex-col items-center w-full">
          {/* Blue box */}
          <div className="w-full aspect-square bg-[#00379E] flex items-center justify-center p-4 md:p-[41px] box-border">
            <img
              src="/logo-apn.png"
              alt="APN logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* White box */}
          <div className="w-full bg-white py-2 md:py-[21px] border-t border-[#e8e8e8] flex items-center justify-center box-border">
            <p className="text-[#00379E] font-averta font-bold text-[10px] md:text-[25px] leading-tight md:leading-[26px] tracking-tight text-center m-0">
              Alianza por<br />la Nutrición
            </p>
          </div>
        </div>
      </div>

      {/* Right: Language selector */}
      <div className="flex items-center justify-end pr-5">
        <button
          onClick={() => setLang(lang === "ES" ? "EN" : "ES")}
          className="bg-none border-none cursor-pointer text-sm font-Manrope text-[#00379E] flex items-center gap-[6px] font-Manrope"
        >
          {lang}
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path d="M2 4l4 4 4-4" stroke="#00379E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-[100]">
          {["Inicio", "Quiénes somos", "Programas", "Noticias", "Contacto"].map(item => (
            <div
              key={item}
              className="p-3 px-6 text-sm font-medium text-[#333] cursor-pointer border-b border-[#f5f5f5] hover:text-[#00379E] transition-colors"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
