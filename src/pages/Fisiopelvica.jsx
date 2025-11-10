import Flor from "../assets/flor.png";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import {
  trackTreatmentView,
  trackScheduleIntent,
} from "../utils/facebookPixel";

const FisioPelvica = () => {
  useEffect(() => {
    trackTreatmentView("Fisioterapia Pélvica");
  }, []);
  return (
    <section>
      <Helmet>
        <title>Fisioterapia Pélvica - Fisioella</title>
        <meta
          name="description"
          content="Saiba mais sobre a fisioterapia pélvica oferecida pela Fisioella."
        />
        <link
          rel="canonical"
          href="https://www.fisioella.com/fisioterapia-pelvica"
        />
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
      <div className="sub-container">
        <div className="title">
          <a href="/tratamentos" className="serviço-link-l">
            <svg
              className="arrow-icon-l"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Voltar
          </a>
          <h1>Fisioterapia Pélvica</h1>
        </div>
        <div className="topico">
          <p>
            A fisioterapia pélvica é uma especialidade que se concentra no
            tratamento de disfunções relacionadas à região pélvica, incluindo
            problemas urológicos, ginecológicos e proctológicos. Os
            fisioterapeutas especializados nessa área utilizam técnicas
            específicas para ajudar na reabilitação e no fortalecimento dos
            músculos do assoalho pélvico.
          </p>
          <p>
            Se você está enfrentando problemas como incontinência urinária, dor
            pélvica crônica ou disfunções sexuais, a fisioterapia pélvica pode
            ser uma opção eficaz para melhorar sua qualidade de vida.
          </p>
        </div>

        <div className="serviço-detalhes">
          <div>
            <h3>Técnicas utilizadas:</h3>
            <p>
              Eletroterapia
              <br />
              Laserterapia <br />
              Exercícios específicos para musculatura do assoalho pélvico <br />
              Terapia comportamental <br />
              Entre outros
            </p>
          </div>
          <div>
            <h3>Para gestantes pré e pós parto:</h3>
            <p>
              Exercícios respiratórios
              <br />
              Exercícios direcionados para funcionalidade da musculatura do
              abdômen, músculos pélvico e paravertebrais.
              <br />
              Exercícios de mobilidade para facilitar a passagem do bebê <br />
              Taping de sustentação na barriga <br />
              Taping para aliviar dores na lombar.
              <br />
            </p>
          </div>
        </div>

        <div
          className="cta-section"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          <button
            className="cta-button"
            onClick={() => {
              trackScheduleIntent();
              window.location.href = "/contato";
            }}
            style={{
              backgroundColor: "#8B4513",
              color: "white",
              padding: "15px 30px",
              border: "none",
              borderRadius: "25px",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Agende sua Consulta
          </button>
        </div>
      </div>
    </section>
  );
};
export default FisioPelvica;