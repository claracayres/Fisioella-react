// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Inicio from './pages/Inicio';
import SobreMim from './pages/Sobre-mim';
import Tratamentos from './pages/Tratamentos';
import FisioPelvica from './pages/Fisiopelvica';
import Radiofrequencia from './pages/Radiofrequencia';
import Drenagem from './pages/Drenagem';
import Contato from './pages/Contato';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="sobre-mim" element={<SobreMim />} />
          <Route path="tratamentos" element={<Tratamentos />} />
          <Route path="Fisiopelvica" element={<FisioPelvica />} />
          <Route path="Radiofrequencia" element={<Radiofrequencia />} />
          <Route path="Drenagem" element={<Drenagem />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
