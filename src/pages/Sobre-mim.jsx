
import Flor from "../assets/flor.png";
<<<<<<< HEAD
import Neila from "../assets/momis-3.png";
=======
import Neila from "../assets/Neila2.jpg";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { trackPageView } from "../utils/facebookPixel";
>>>>>>> c47954c5777b580e2969cdee0a6f7d2ba4af4822

const SobreMim = () => {
  useEffect(() => {
    trackPageView("Sobre Mim");
  }, []);
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
            height: "100vh",
            objectFit: "cover",
            opacity: 0.3,
          }}
        />
      </div>

      <section id="sobre-mim">
        <div className="sobre-mim-container">
          <div>
            <img src={Neila} alt="Fisioella" className="img-momis" />
          </div>
          <div className="sobre-mim-texto">
            <h1>Dra. Neila Cayres</h1>
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
