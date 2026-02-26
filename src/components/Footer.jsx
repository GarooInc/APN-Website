import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Primera columna */}
          <div>
            <h3 className="font-averta font-bold text-xl mb-6">Navigation</h3>
            <ul className="space-y-4 font-manrope">
              <li>
                <a href="#about" className="hover:text-primary-light transition">
                  Propósito
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-light transition">
                  Misión
                </a>
              </li>
              <li>
                <Link to={ROUTES.EVIDENCE} className="hover:text-primary-light transition">
                  Generación de Evidencia
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ALLIES} className="hover:text-primary-light transition">
                  Aliados
                </Link>
              </li>
            </ul>
          </div>

          {/* Segunda columna */}
          <div>
            <h3 className="font-averta font-bold text-xl mb-6">Recursos</h3>
            <ul className="space-y-4 font-manrope">
              <li>
                <Link to={ROUTES.BOARD} className="hover:text-primary-light transition">
                  Únete
                </Link>
              </li>
              <li>
                <Link to={ROUTES.MATERIALS} className="hover:text-primary-light transition">
                  Materiales Técnicos
                </Link>
              </li>
              <li>
                <Link to={ROUTES.NEWS} className="hover:text-primary-light transition">
                  Noticias
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-light transition">
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-gray mt-12 pt-8">
          <p className="text-center text-neutral-gray font-manrope text-sm">
            &copy; 2024 APN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
