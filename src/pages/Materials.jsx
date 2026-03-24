import { useFadeIn } from '../hooks/useFadeIn';

const materials = [
  {
    num: '1.',
    title: 'Programa de Educación Inicial',
    subtitle: 'Acompáñame a Crecer',
    file: '/docs/programa-educacion-inicial.pdf',
  },
  {
    num: '2.',
    title: 'Hoja Informativa CECODII',
    subtitle: '',
    file: '/docs/hoja-informativa-cecodii.pdf',
  },
  {
    num: '3.',
    title: 'Política Pública de Primera Infancia',
    subtitle: '',
    file: '/docs/politica-publica-primera-infancia.pdf',
  },
  {
    num: '4.',
    title: 'Quinto Censo Nacional de Talla',
    subtitle: '',
    file: '/docs/quinto-censo-nacional-talla.pdf',
  },
];

export default function Materials() {
  useFadeIn();

  return (
    <div>
      {/* Hero imagen */}
      <div className="w-full h-[420px] overflow-hidden">
        <img
          src="/image7.jpg"
          alt="Materiales técnicos"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 35%' }}
        />
      </div>

      {/* Encabezado */}
      <section className="bg-neutral-bg px-8 py-12 fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span
              className="font-averta font-bold tracking-[0.12em] text-primary-dark"
              style={{ fontSize: 'clamp(16px, 3.5vw, 24px)' }}
            >
              MATERIALES<br />TÉCNICOS
            </span>
            <span className="text-primary-dark text-sm self-end mb-1">{'>'}</span>
          </div>
          <p
            className="font-averta italic text-primary-dark"
            style={{ fontSize: 'clamp(15px, 3vw, 20px)', lineHeight: 1.6 }}
          >
            Materiales para fortalecer el conocimiento sobre la DCI**
          </p>
          <p className="text-primary-dark/60 text-xs font-averta italic mt-2">
            **DCI: Desnutrición Crónica Infantil.
          </p>
        </div>
      </section>

      {/* Lista de materiales */}
      <section className="bg-white px-8 py-10 fade-in">
        <div className="max-w-3xl mx-auto flex flex-col gap-0 divide-y divide-neutral-bg">
          {materials.map((mat) => (
            <div
              key={mat.num}
              className="flex items-center justify-between py-8 gap-6"
            >
              {/* Número + título */}
              <div className="flex items-start gap-5 flex-1">
                <span
                  className="font-averta font-bold text-primary-dark flex-shrink-0"
                  style={{ fontSize: 'clamp(18px, 3vw, 24px)' }}
                >
                  {mat.num}
                </span>
                <div>
                  <p
                    className="font-averta font-bold text-primary-dark"
                    style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', lineHeight: 1.4 }}
                  >
                    {mat.title}
                  </p>
                  {mat.subtitle && (
                    <p
                      className="font-averta italic text-primary-dark/70 mt-1"
                      style={{ fontSize: 'clamp(13px, 2vw, 16px)' }}
                    >
                      {mat.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Botón descargar */}
              <a
                href={mat.file}
                download
                className="flex-shrink-0 border-2 border-primary-dark text-primary-dark font-averta font-bold tracking-[0.12em] px-5 py-3 text-xs hover:bg-primary-dark hover:text-white transition-all duration-300"
                style={{ fontSize: 'clamp(10px, 1.5vw, 12px)', letterSpacing: '0.14em' }}
              >
                D E S C A R G A R&nbsp;P D F
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Imagen separadora */}
      <div className="w-full h-[280px] overflow-hidden">
        <img
          src="/image3.jpg"
          alt="Niños"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 60%' }}
        />
      </div>

      {/* CTA bottom */}
      <section className="bg-primary-dark px-8 py-14 fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="font-averta italic text-white/90 mb-8"
            style={{ fontSize: 'clamp(15px, 3vw, 20px)', lineHeight: 1.7 }}
          >
            Descarga material de apoyo y ayúdanos a ampliar nuestro impacto
          </p>
        </div>
      </section>
    </div>
  );
}
