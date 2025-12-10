import Flor from "../assets/flor.png";
import iconfisio from "/favicon.png";
import icondrenagem from "../assets/icon-drenagem.png";
import iconradio from "../assets/icon-radio3.png";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { trackPageView, trackTreatmentClick } from "../utils/facebookPixel";

const Tratamentos = () => {
  useEffect(() => {
    trackPageView("Página de Tratamentos");
  }, []);
  return (
    <main className="main-content">
      <Helmet>
        <title>Tratamentos - Fisioella</title>
        <meta
          name="description"
          content="Conheça os tratamentos oferecidos pela Fisioella."
        />
        <link rel="canonical" href="https://www.fisioella.com/tratamentos" />
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

      <section id="serviços" className="serviços-section">
        <div className="serviços-container">
          <div className="serviços-header">
            <h1>TRATAMENTOS</h1>
            <p>
              Lembrando que é sempre realizada uma avaliação para traçar qual
              melhor tratamento para cada paciente, assim sendo possível a
              individualidade do tratamento.
            </p>
          </div>

          <div className="serviços-grid">
            {/* Tratamento 1 */}
            <a
              href="/Fisiopelvica"
              className="serviço-card serviço-link-wrapper"
              onClick={() => trackTreatmentClick("Fisioterapia Pélvica")}
            >
              <div className="card-header">
                <div className="serviço-image">
                  <img
                    className="image"
                    src={iconfisio}
                    alt="Fisioterapia Pélvica"
                  />
                </div>
                <h2>Fisioterapia Pélvica</h2>
              </div>

              <p>Tratamento para fortalecer e reequilibrar a região pélvica.</p>
              <a className="serviço-link">
                Saiba mais
                <svg
                  className="arrow-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </a>

            {/* Tratamento 2 */}
            <a
              href="/Radiofrequencia"
              className="serviço-card serviço-link-wrapper"
              onClick={() => trackTreatmentClick("Radiofrequência Íntima")}
            >
              <div className="card-header">
                <div className="serviço-image">
                  <img
                    className="image"
                    src={iconradio}
                    alt="Radiofrequência íntima"
                  />
                </div>
                <h2>Radiofrequência íntima</h2>
              </div>

              <p>Rejuvenescimento e Melhora da Saúde Íntima</p>

              <a className="serviço-link">
                Saiba mais
                <svg
                  className="arrow-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </a>

            {/* Tratamento 3 */}
            <a
              href="/Drenagem"
              className="serviço-card serviço-link-wrapper centered"
              onClick={() => trackTreatmentClick("Drenagem Linfática")}
            >
              <div className="card-header">
                <div className="serviço-image">
                  <img
                    className="icondrenagem"
                    src={icondrenagem}
                    alt="Drenagem Linfática"
                  />
                </div>
                <h2>Drenagem Linfática</h2>
              </div>

              <p>Redução de inchaço e toxinas com massagem terapêutica.</p>
              <a className="serviço-link">
                Saiba mais
                <svg
                  className="arrow-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tratamentos;
