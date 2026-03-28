import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './hooks/ScrollToTop';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SchedulePage from './pages/SchedulePage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import CommunitiesPage from './pages/CommunitiesPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="sobre" element={<AboutPage />} />
          <Route path="horarios" element={<SchedulePage />} />
          <Route path="eventos" element={<EventsPage />} />
          <Route path="contato" element={<ContactPage />} />
          <Route path="comunidades" element={<CommunitiesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
