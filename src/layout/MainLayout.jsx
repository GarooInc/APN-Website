import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ROUTES } from '../utils/constants';

export default function MainLayout({ children }) {
  const { pathname } = useLocation();
  const footerVariant = (pathname === ROUTES.ALLIES || pathname === ROUTES.NEWS || pathname === '/news/2') ? "light" : "dark";

  return (
    <div className="relative min-h-screen flex flex-col bg-primary-white overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer variant={footerVariant} />
    </div>
  );
}
