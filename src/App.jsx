import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Allies from './pages/Allies';
import Evidence from './pages/Evidence';
import Materials from './pages/Materials';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Board from './pages/Board';
import { ROUTES } from './utils/constants';

export default function App() {
  return (
    <Router>
      <MainLayout>
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
  );
}
