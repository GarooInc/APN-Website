import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Allies from './pages/Allies';
import Evidence from './pages/Evidence';
import Materials from './pages/Materials';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Board from './pages/Board';
import { ROUTES } from './utils/constants';
import { LanguageProvider } from './context/LanguageContext';
// main.jsx o App.jsx
import '@fontsource/plus-jakarta-sans/400.css';

export default function App() {
  return (
    <LanguageProvider>
    <Router>
      <MainLayout>
        <ScrollToTop />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ALLIES} element={<Allies />} />
          <Route path={ROUTES.EVIDENCE} element={<Evidence />} />
          <Route path={ROUTES.MATERIALS} element={<Materials />} />
          <Route path={ROUTES.NEWS} element={<News />} />
          <Route path={ROUTES.NEWS_DETAIL} element={<NewsDetail />} />
          <Route path={ROUTES.BOARD} element={<Board />} />
        </Routes>
      </MainLayout>
    </Router>
    </LanguageProvider>
  );
}
