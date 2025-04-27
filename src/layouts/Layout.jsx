import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Renderiza o conteúdo das rotas filhas */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
