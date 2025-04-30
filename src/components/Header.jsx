// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Flor from '../assets/flor-header.png';

const Header = () => {
  const handleLinkClick = () => {
    const navbar = document.querySelector('.navbar');
    const icon = document.querySelector('.hamburger i');

    // Fecha o menu
    navbar.classList.remove('active');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');

    // Rola para o topo da página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header>
      <div
        className="background-image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <img
          src={Flor}
          alt="flor"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.5,
          }}
        />
      </div>
      <div
        className="navbar-container"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          window.location.href = '/';
        }}
        onMouseOver={(e) => (e.target.style.cursor = 'pointer')}
        onMouseOut={(e) => (e.target.style.cursor = 'default')}
        style={{ cursor: 'pointer' }}
      >
        <h1 className="fisioella">FISIOELLA</h1>
        <hr className="linha-vertical" />
        <h1 className="dra-neila">Dra. Neila Cayres</h1>
      </div>
      <div>
        <button
          className="hamburger"
          onClick={() => {
            const navbar = document.querySelector('.navbar');
            const icon = document.querySelector('.hamburger i');

            navbar.classList.toggle('active');

            // Troca ícone
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
          }}
        >
          <i className="fa fa-bars"></i>
        </button>
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link className="pages" to="/" onClick={handleLinkClick}>
              Início
            </Link>
          </li>
          <li>
            <Link className="pages" to="/sobre-mim" onClick={handleLinkClick}>
              Sobre mim
            </Link>
          </li>
          <li>
            <Link className="pages" to="/tratamentos" onClick={handleLinkClick}>
              Tratamentos
            </Link>
          </li>
          <li>
            <Link className="pages" to="/contato" onClick={handleLinkClick}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
