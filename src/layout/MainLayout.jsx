import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ROUTES } from '../utils/constants';

export default function MainLayout({ children }) {
  const { pathname } = useLocation();
  const lightFooterRoutes = [ROUTES.ALLIES, ROUTES.NEWS];
  const footerVariant = lightFooterRoutes.includes(pathname) ? "light" : "dark";

  return (
    <div className="min-h-screen flex flex-col bg-primary-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer variant={footerVariant} />
    </div>
  );
}
