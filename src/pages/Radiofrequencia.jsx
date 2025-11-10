import Flor from "../assets/flor.png";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import {
  trackTreatmentView,
  trackScheduleIntent,
} from "../utils/facebookPixel";

const Radiofrequencia = () => {
  useEffect(() => {
    trackTreatmentView("Radiofrequência Íntima");
  }, []);
  return (
<<<<<<< HEAD
    <section id="subcontainer-section">
=======
    <section>
      <Helmet>
        <title>Radiofrequência Íntima - Fisioella</title>
        <meta
          name="description"
          content="Saiba mais sobre o tratamento de radiofrequência íntima oferecido pela Fisioella."
        />
        <link
          rel="canonical"
          href="https://www.fisioella.com/radiofrequencia"
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
          <h1>Radiofrequência Íntima</h1>
        </div>

        <div className="topico">
          <p>
            Tratamento não invasivo que estimula a produção de colágeno, melhora
            a lubrificação, firmeza e sensibilidade da região íntima. Indicado
            para casos de ressecamento, flacidez e incontinência leve,
            promovendo conforto e bem-estar.
          </p>
        </div>

        <div className="serviço-detalhes">
          <div className="serviço-topic">
            <h3>Como é utilizada:</h3>
            <p>
              Procedimento não invasivo e indolor <br />
              Realizado em consultório por profissional especializado
              <br />
              Utiliza um aparelho que emite ondas de calor controladas
              <br />
              Aquece suavemente a região, promovendo regeneração dos tecidos
              <br />
              Sessões rápidas, com tempo de recuperação mínimo ou inexistente
              <br />
            </p>
          </div>
          <div className="serviço-topic">
            <h3>Para que serve a radiofrequência íntima:</h3>
            <p>
              Estimula a produção de colágeno na região íntima
              <br />
              Melhora a flacidez dos tecidos
              <br />
              Aumenta a lubrificação vaginal
              <br />
              Melhora a sensibilidade durante o contato íntimo
              <br />
              Auxilia em casos leves de incontinência urinária
              <br />
              Contribui para o rejuvenescimento íntimo
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
export default Radiofrequencia;
