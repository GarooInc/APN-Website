import { Download } from 'lucide-react';
import Button from '../components/Button';
import { useFadeIn } from '../hooks/useFadeIn';

const materials = [
  {
    num: '1.',
    title: 'Programa de Educación Inicial',
    subtitle: 'Acompáñame a Crecer',
  },
  {
    num: '2.',
    title: 'Hoja Informativa CECODII',
    subtitle: '',
  },
  {
    num: '3.',
    title: 'Política Pública de Primera Infancia',
    subtitle: '',
  },
  {
    num: '4.',
    title: 'Quinto Censo Nacional de Talla',
    subtitle: '',
  },
];

export default function Materials() {
  useFadeIn();

  return (
    <div>
      {/* Hero imagen */}
      <div className="w-full h-[680px] overflow-hidden">
        <img
          src="/image16.png"
          alt="Materiales técnicos"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 75%' }}
        />
      </div>

      {/* Contenido */}
      <section className="bg-white px-8 py-12 fade-in">
        <div className="max-w-3xl mx-auto">

          {/* Título */}
          <div className="flex items-center gap-2 mb-6">
            <span
              className="font-averta font-bold tracking-[0.12em] text-primary-dark"
              style={{ fontSize: 'clamp(16px, 3.5vw, 24px)' }}
            >
              MATERIALES TÉCNICOS
            </span>
            <span className="text-primary-dark text-sm self-end mb-1">{'>'}</span>
          </div>

          {/* Subtítulo */}
          <p
            className="font-averta italic text-primary-dark mb-1"
            style={{ fontSize: 'clamp(15px, 3vw, 20px)', lineHeight: 1.6 }}
          >
            Materiales para fortalecer el conocimiento sobre la <strong>DCI</strong>*
          </p>
          <p className="text-primary-dark/60 text-xs font-averta italic mb-8">
            *DCI: Desnutrición Crónica Infantil.
          </p>

          {/* Lista */}
          <ol className="mb-8 flex flex-col gap-3">
            {materials.map((mat) => (
              <li key={mat.num} className="flex items-start gap-4">
                <span
                  className="font-averta font-bold text-primary-dark flex-shrink-0"
                  style={{ fontSize: 'clamp(14px, 2.5vw, 18px)' }}
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
                      className="font-averta italic text-primary-dark/70"
                      style={{ fontSize: 'clamp(13px, 2vw, 16px)' }}
                    >
                      {mat.subtitle}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>

          {/* Botón único */}
          <div className="flex justify-center">
            <Button
              variant="filled-light"
              size="md"
              className="font-averta font-bold tracking-[0.15em] flex items-center gap-3 px-10 py-3"
            >
              DESCARGAR PDF
              <Download size={18} />
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}
