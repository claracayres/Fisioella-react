// src/components/Footer.jsx
import React from 'react';
import { useEffect } from 'react';
import Neila from '../assets/momis.png';
import Instagram from '../assets/instagram.png';
import Whatsapp from '../assets/whatsapp.png';
import Telefone from '../assets/telefone.png';
import Email from '../assets/email.png';
import Localizacao from '../assets/localização.png';
import backToTop from '../assets/back-to-top.png';

const Footer = () => {
    useEffect(() => {
        const mybutton = document.getElementById("myBtn");
        const backToTop = document.querySelector('.back-to-top');

        const scrollFunction = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        };

        window.onscroll = scrollFunction;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
                backToTop.style.opacity = 1;
            } else {
                backToTop.classList.remove('show');
                backToTop.style.opacity = 0;  
            }
        });

        return () => {
            window.onscroll = null; // Cleanup on component unmount
        };
    }, []);

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    return (
    <>
    <div>
        <button onClick={topFunction} id="myBtn" title="Voltar ao topo" className="back-to-top-button">
            <img className="back-to-top show" src={backToTop} alt="Voltar ao Topo" />
        </button>
    </div>
    <footer className="footer-container">
            <div className="footer-logo">
                <div className="footer-image">
                    <img src={Neila} alt="" />
                </div>
                <div>
                    <h2 className="fisioella">FISIOELLA</h2>
                    <p className="crefito">Crefito - 3 224592-F</p>
                    <div className="redes-sociais">
                        <a href="https://www.instagram.com/fisioella_pelve/" target="_blank" rel="noopener noreferrer">
                            <img className="footer-icon" src={Instagram} alt="Instagram" />
                        </a>
                        <a href="https://wa.me/5512996461927" target="_blank" rel="noopener noreferrer">
                            <img className="footer-icon" src={Whatsapp} alt="Whatsapp" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="contato">
                <h2>Contato</h2>
                <p>
                    <img className="footer-icon" src={Telefone} alt="Telefone" />
                    <a href="tel:(12) 99646-1927"> (12) 99646-1927</a>
                </p>
                <p>
                    <img className="footer-icon" src={Email} alt="Email" /> 
                    <a href="mailto:nc_almeida@yahoo.com.br"> nc_almeida@yahoo.com.br</a>
                </p>

            </div>
            <div className="endereços">
                <h2>Endereço</h2>
                <p>
                    <img className="footer-icon" src={Localizacao} alt="Localização" /> 
                    <a href="https://maps.app.goo.gl/TNcDfSB2Bf15Zzew7"> Consultório Fisioella - Rua Paulo Setubal, 179 sala 8 - Jd. São Dimas
                    </a>
                </p>
            </div>
        </footer>
        <div className="footer-copyright">
            <p>
                &copy;2025 Clara Cayres. All rights reserved.{" "}
                <a href="https://github.com/cayres0802" target="_blank" rel="noopener noreferrer">
                    github.com/cayres0802
                </a>
            </p>
        </div>
    </>
    );
};

export default Footer;
