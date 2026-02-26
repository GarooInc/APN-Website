import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { useFadeIn } from '../hooks/useFadeIn';

export default function Board() {
  useFadeIn();
  const members = [
    {
      id: 1,
      name: 'Miembro 1',
      role: 'Presidente',
      bio: 'Descripción breve del miembro de la junta',
      image: 'https://via.placeholder.com/300x300?text=Member+1',
    },
    {
      id: 2,
      name: 'Miembro 2',
      role: 'Vicepresidente',
      bio: 'Descripción breve del miembro de la junta',
      image: 'https://via.placeholder.com/300x300?text=Member+2',
    },
    {
      id: 3,
      name: 'Miembro 3',
      role: 'Secretario',
      bio: 'Descripción breve del miembro de la junta',
      image: 'https://via.placeholder.com/300x300?text=Member+3',
    },
    {
      id: 4,
      name: 'Miembro 4',
      role: 'Tesorero',
      bio: 'Descripción breve del miembro de la junta',
      image: 'https://via.placeholder.com/300x300?text=Member+4',
    },
  ];

  return (
    <div>
      <Section
        title="Junta Directiva"
        subtitle="Conoce a nuestro equipo de liderazgo"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <Card
              key={member.id}
              title={member.name}
              image={member.image}
            >
              <div>
                <p className="font-averta font-semibold text-primary-light mb-2">
                  {member.role}
                </p>
                <p className="font-manrope text-sm text-primary-dark mb-4">
                  {member.bio}
                </p>
                <div className="flex gap-3">
                  <button className="text-primary-dark hover:text-primary-light transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </button>
                  <button className="text-primary-dark hover:text-primary-light transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Únete a la Junta */}
      <Section
        id="join"
        title="Únete a la Junta Directiva"
        subtitle="Buscamos personas apasionadas por generar impacto"
        bgColor="bg-primary-dark text-primary-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div>
            <h3 className="font-averta font-bold text-2xl mb-6">
              ¿Qué buscamos?
            </h3>
            <ul className="space-y-4 font-manrope">
              <li className="flex items-start gap-3">
                <span className="text-primary-light font-bold flex-shrink-0">✓</span>
                <span>Experiencia en el sector</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-light font-bold flex-shrink-0">✓</span>
                <span>Pasión por la generación de evidencia</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-light font-bold flex-shrink-0">✓</span>
                <span>Compromiso con la misión de APN</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-light font-bold flex-shrink-0">✓</span>
                <span>Disposición para colaborar activamente</span>
              </li>
            </ul>
          </div>
          <div>
            <form className="space-y-6 bg-primary-white text-primary-dark p-8 rounded-lg">
              <div>
                <label className="block font-manrope font-semibold mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-neutral-gray rounded-lg focus:outline-none focus:border-primary-light"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block font-manrope font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-neutral-gray rounded-lg focus:outline-none focus:border-primary-light"
                  placeholder="Tu email"
                />
              </div>
              <div>
                <label className="block font-manrope font-semibold mb-2">
                  Organización
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-neutral-gray rounded-lg focus:outline-none focus:border-primary-light"
                  placeholder="Tu organización"
                />
              </div>
              <div>
                <label className="block font-manrope font-semibold mb-2">
                  Mensaje
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-neutral-gray rounded-lg focus:outline-none focus:border-primary-light resize-none"
                  placeholder="Cuéntanos por qué te interesa unirte"
                ></textarea>
              </div>
              <Button variant="primary" size="md" className="w-full">
                Enviar Solicitud
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
