// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Usando Link para navegação interna
import Flor from '../assets/flor-header.png'; // Importando a imagem de fundo

const Header = () => {
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
                zIndex: -1
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
                    opacity: 0.5
                }}
            />
        </div>
        <div
            className="navbar-container"
            onClick={() => window.location.href = '/'}
            onMouseOver={(e) => e.target.style.cursor = 'pointer'}
            onMouseOut={(e) => e.target.style.cursor = 'default'}
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
                <li><Link className="pages" to="/">Início</Link></li>
                <li><Link className="pages" to="./pages/sobre-mim">Sobre mim</Link></li>
                <li><Link className="pages" to="./pages/tratamentos">Tratamentos</Link></li>
                <li><Link className="pages" to="./pages/contato">Contato</Link></li>
            </ul>
        </nav>
    </header>
);
};

export default Header;
