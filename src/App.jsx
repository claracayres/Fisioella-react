// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Inicio from './pages/Inicio';
import SobreMim from '/pages/Sobre-mim';
import Tratamentos from './pages/Tratamentos';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="Sobre-mim" element={<SobreMim />} />
          <Route path="Tratamentos" element={<Tratamentos />} />
          <Route path="Contato" element={<Contato />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
