import { createContext, useContext, useState } from "react";

const translations = {
  ES: {
    menu: {
      inicio:      "Inicio",
      quienesSomos: "Quiénes somos",
      programas:   "Programas",
      noticias:    "Noticias",
      contacto:    "Contacto",
    },
    hero: {
      subtitle: ["Yo soy parte de la", "Alianza por la Nutrición"],
      title:    ["y el desarrollo integral", "de la primera infancia"],
    },
    proposito: {
      label: "PROPÓSITO",
      text: "Inspirar y movilizar a Guatemala para crear soluciones sostenibles que permitan que cada niño y niña crezca con la oportunidad de una vida plena.",
      highlight: "Guatemala",
    },
    mision: {
      label: "MISIÓN",
      text: "Unir a Guatemala en una gran alianza nacional para erradicar la DCI*, impulsando acciones integrales, sostenibles y basadas en evidencia, que permitan a cada niño y niña desarrollar su pleno potencial.",
      footnote: "*DCI: Desnutrición Crónica Infantil.",
    },
    quienesSomos: {
      label: "QUIÉNES SOMOS",
      p1: ["Una ", "coalición", " de organizaciones privadas y de la sociedad civil."],
      p2: ["Nuestro objetivo es prevenir la ", "DCI*", ", bajo un enfoque multidimensional y multicausal."],
      p3: ["Utilizamos la ", "ventana de los 1,000 días", " y la atención integral a la primera infancia, para buscar el desarrollo pleno de la niñez y nutrir el futuro de nuestro país."],
      footnote: "*DCI: Desnutrición Crónica Infantil.",
      btn: "ÚNETE AQUÍ",
    },
    aliados: {
      label: "ALIADOS",
      text: "Descubre quienes ya son parte de esta gran alianza",
      btn: "LLÉVAME AHÍ",
    },
    evidencia: {
      label: ["GENERACIÓN", "DE EVIDENCIA"],
      text: "Nuestro progreso hacia el logro de objetivos",
      btn: "LLÉVAME AHÍ",
    },
    materiales: {
      label: ["MATERIALES", "TÉCNICOS"],
      text: "Descarga material de apoyo y ayúdanos a ampliar nuestro impacto",
      btn: "LLÉVAME AHÍ",
    },
    noticias: {
      label: "NOTICIAS",
      text: "Que nos llenan de esperanza",
      btn: "LLÉVAME AHÍ",
    },
    contacto: {
      label: "CONTÁCTANOS",
      roles: {
        directoraEjecutiva: "Directora Ejecutiva",
        adminFinanzas:      "Administración y Finanzas",
        monitoreo:          "Monitoreo, Evaluación y Aprendizaje",
      },
    },
    footer: {
      left:      ["PROPÓSITO", "MISIÓN", "GENERACIÓN\nDE EVIDENCIA", "ALIADOS"],
      right:     ["ÚNETE", "MATERIALES TÉCNICOS", "NOTICIAS", "CONTÁCTANOS"],
      copyright: "© 2026 Alianza por la Nutrición.\nAll Rights Reserved.",
    },
  },
  EN: {
    menu: {
      inicio:       "Home",
      quienesSomos: "Who we are",
      programas:    "Programs",
      noticias:     "News",
      contacto:     "Contact",
    },
    hero: {
      subtitle: ["I am part of the", "Alliance for Nutrition"],
      title:    ["and the integral development", "of early childhood"],
    },
    proposito: {
      label: "PURPOSE",
      text: "Inspire and mobilize Guatemala to create sustainable solutions that allow every boy and girl to grow with the opportunity for a full life.",
      highlight: "Guatemala",
    },
    mision: {
      label: "MISSION",
      text: "Unite Guatemala in a great national alliance to eradicate CCS*, driving comprehensive, sustainable, evidence-based actions that allow every child to reach their full potential.",
      footnote: "*CCS: Chronic Childhood Stunting.",
    },
    quienesSomos: {
      label: "WHO WE ARE",
      p1: ["A ", "coalition", " of private organizations and civil society."],
      p2: ["Our goal is to prevent ", "CCS*", ", through a multidimensional and multicausal approach."],
      p3: ["We use the ", "1,000-day window", " and comprehensive early childhood care to seek the full development of children and nourish the future of our country."],
      footnote: "*CCS: Chronic Childhood Stunting.",
      btn: "JOIN HERE",
    },
    aliados: {
      label: "ALLIES",
      text: "Discover who is already part of this great alliance",
      btn: "TAKE ME THERE",
    },
    evidencia: {
      label: ["EVIDENCE", "GENERATION"],
      text: "Our progress toward achieving objectives",
      btn: "TAKE ME THERE",
    },
    materiales: {
      label: ["TECHNICAL", "MATERIALS"],
      text: "Download support materials and help us expand our impact",
      btn: "TAKE ME THERE",
    },
    noticias: {
      label: "NEWS",
      text: "That fill us with hope",
      btn: "TAKE ME THERE",
    },
    contacto: {
      label: "CONTACT US",
      roles: {
        directoraEjecutiva: "Executive Director",
        adminFinanzas:      "Administration & Finance",
        monitoreo:          "Monitoring, Evaluation and Learning",
      },
    },
    footer: {
      left:      ["PURPOSE", "MISSION", "EVIDENCE\nGENERATION", "ALLIES"],
      right:     ["JOIN", "TECHNICAL MATERIALS", "NEWS", "CONTACT US"],
      copyright: "© 2026 Alliance for Nutrition.\nAll Rights Reserved.",
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ES");
  const t = translations[lang];
  const toggleLang = () => setLang(l => l === "ES" ? "EN" : "ES");

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
