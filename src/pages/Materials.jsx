import { Download } from 'lucide-react';
import Button from '../components/Button';
import { useFadeIn } from '../hooks/useFadeIn';

// Cada material tiene su propio PDF. Los archivos se resuelven al compilar:
// basta con dejar el PDF en src/assets/materiales/<slug>.pdf para que aparezca
// su boton de descarga. Si el archivo aun no esta, el material se muestra sin
// boton en lugar de ofrecer una descarga rota.
const PDFS = import.meta.glob('../assets/materiales/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
});

const pdfFor = (slug) => PDFS[`../assets/materiales/${slug}.pdf`];

const materials = [
  {
    num: '1.',
    title: 'Programa de Educación Inicial',
    subtitle: 'Acompáñame a Crecer',
    slug: '1-acompaname-a-crecer',
  },
  {
    num: '2.',
    title: 'Hoja Informativa CECODII',
    subtitle: '',
    slug: '2-cecodii',
  },
  {
    num: '3.',
    title: 'Política Pública de Primera Infancia',
    subtitle: '',
    slug: '3-politica-primera-infancia',
  },
  {
    num: '4.',
    title: 'Quinto Censo Nacional de Talla',
    subtitle: '',
    slug: '4-censo-nacional-talla',
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
              style={{ fontSize: 'clamp(20px, 3.5vw, 32px)' }}
            >
              MATERIALES TÉCNICOS
            </span>
            <span className="text-primary-dark text-sm self-end mb-1">{'>'}</span>
          </div>

          {/* Subtítulo */}
          <p
            className="font-averta italic text-primary-dark mb-1"
            style={{ fontSize: 'clamp(18px, 3vw, 26px)', lineHeight: 1.6 }}
          >
            Materiales para fortalecer el conocimiento sobre la <strong>DCI</strong>*
          </p>
          <p className="text-primary-dark/60 text-xs font-averta italic mb-8">
            *DCI: Desnutrición Crónica Infantil.
          </p>

          {/* Lista — cada material con su propia descarga */}
          <ol className="mb-8 flex flex-col gap-6">
            {materials.map((mat) => {
              const pdf = pdfFor(mat.slug);
              return (
                <li key={mat.num} className="flex flex-wrap items-start gap-x-4 gap-y-3">
                  <span
                    className="font-averta font-bold text-primary-dark flex-shrink-0"
                    style={{ fontSize: 'clamp(18px, 2.5vw, 24px)' }}
                  >
                    {mat.num}
                  </span>
                  <div className="flex-1" style={{ minWidth: '200px' }}>
                    <p
                      className="font-averta font-bold text-primary-dark"
                      style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', lineHeight: 1.4 }}
                    >
                      {mat.title}
                    </p>
                    {mat.subtitle && (
                      <p
                        className="font-averta italic text-primary-dark/70"
                        style={{ fontSize: 'clamp(15px, 2vw, 20px)' }}
                      >
                        {mat.subtitle}
                      </p>
                    )}
                  </div>

                  {pdf && (
                    <a
                      href={pdf}
                      download
                      className="flex-shrink-0"
                      style={{ textDecoration: 'none' }}
                    >
                      <Button
                        variant="filled-light"
                        size="sm"
                        className="font-bold tracking-[0.15em] flex items-center gap-2 whitespace-nowrap"
                      >
                        DESCARGAR PDF
                        <Download size={16} />
                      </Button>
                    </a>
                  )}
                </li>
              );
            })}
          </ol>

        </div>
      </section>

    </div>
  );
}
