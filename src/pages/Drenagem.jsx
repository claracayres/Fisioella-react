import Flor from "../assets/flor.png";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import {
  trackTreatmentView,
  trackScheduleIntent,
} from "../utils/facebookPixel";

const Drenagem = () => {
  useEffect(() => {
    trackTreatmentView("Drenagem Linfática");
  }, []);
  return (
<<<<<<< HEAD
    <section id="subcontainer-section">
=======
    <section>
      <Helmet>
        <title>Drenagem Linfática - Fisioella</title>
        <meta
          name="description"
          content="Saiba mais sobre a drenagem linfática oferecida pela Fisioella."
        />
        <link
          rel="canonical"
          href="https://www.fisioella.com/drenagem-linfatica"
        />
      </Helmet>
>>>>>>> c47954c5777b580e2969cdee0a6f7d2ba4af4822
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
          <h1>Drenagem Linfática</h1>
        </div>
        <div className="topico">
          <p>
            Técnica suave que estimula o sistema linfático, ajudando a eliminar
            toxinas, reduzir inchaços e melhorar a circulação.
          </p>
        </div>
        <div className="serviço-detalhes">
          <div className="serviço-topic">
            <h3>Taping</h3>
            <p>
              Estimula a circulação e a drenagem linfática, ajudando a reduzir
              inchaços e retenção de líquidos.
            </p>
          </div>

          <div className="serviço-topic">
            <h3>Movimentos Manuais</h3>
            <p>
              Manobras suaves para eliminar toxinas e aliviar a sensação de
              peso.
            </p>
          </div>

          <div className="serviço-topic">
            <h3>Pós-operatório e Cuidados Especiais</h3>
            <p>
              Auxilia na recuperação pós-cirúrgica e em condições como lipedema
              e linfedema.
            </p>
          </div>
          <div className="serviço-topic">
            <h3>Laserterapia</h3>
            <p>
              Aplicação em linfonodos que promovem a drenagem a longo prazo.
              Aliviando dores e sensação de peso por ser analgésico e
              anti-inflamatório.
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

export default Drenagem;
