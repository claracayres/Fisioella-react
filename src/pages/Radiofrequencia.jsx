import Flor from "../assets/flor.png";

const Radiofrequencia = () => {
  return (
    <section>
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
          <div>
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
          <div>
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
      </div>
    </section>
  );
};
export default Radiofrequencia;
