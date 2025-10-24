import React from "react";
import Flor from "../assets/flor.png";
import Neila from "../assets/Neila2.jpg";
import { Helmet } from "react-helmet-async";

const SobreMim = () => {
  return (
    <main className="main-content">
      <Helmet>
        <title>Sobre Mim - Fisioella</title>
        <meta
          name="description"
          content="Conheça a Dra. Neila Cayres, especialista em saúde da mulher."
        />
        <link rel="canonical" href="https://www.fisioella.com/sobre-mim" />
      </Helmet>
      <div
        className="background-image"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <img
          src={Flor}
          alt="flor"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.3,
          }}
        />
      </div>

      <section id="Sobre-mim">
        <div className="Sobre-mim-container">
          <div>
            <img src={Neila} alt="Fisioella" className="Img-momis" />
          </div>
          <div className="Sobre-mim-texto">
            <h1>DRA. NEILA CAYRES</h1>
            <p>
              Sou a Dra. Neila Cayres, fisioterapeuta especializada na saúde da
              mulher e reabilitação do assoalho pélvico. Com mais de 10 anos de
              experiência, ajudo mulheres a superar disfunções sexuais, dor
              pélvica, incontinência urinária e fecal, além de oferecer
              acompanhamento no pré e pós-parto. Pós-graduada em
              Traumato-Ortopedia e Fisioterapia Pélvica, atuo com uma abordagem
              humanizada, respeitosa e atualizada, cuidando da saúde de forma
              integral e personalizada.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SobreMim;
