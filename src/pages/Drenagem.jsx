import Flor from "../assets/flor.png";

const Drenagem = () => {
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
          <h1>Drenagem Linfática</h1>
        </div>
        <div className="topico">
          <p>
            Técnica suave que estimula o sistema linfático, ajudando a eliminar
            toxinas, reduzir inchaços e melhorar a circulação.
          </p>
        </div>
        <div className="serviço-detalhes">
          <div>
            <h3>Taping</h3>
            <p>
              Estimula a circulação e a drenagem linfática, ajudando a reduzir
              inchaços e retenção de líquidos.
            </p>
          </div>

          <div>
            <h3>Movimentos Manuais</h3>
            <p>
              Manobras suaves para eliminar toxinas e aliviar a sensação de
              peso.
            </p>
          </div>

          <div>
            <h3>Pós-operatório e Cuidados Especiais</h3>
            <p>
              Auxilia na recuperação pós-cirúrgica e em condições como lipedema
              e linfedema.
            </p>
          </div>
          <div>
            <h3>Laserterapia</h3>
            <p>
              Aplicação em linfonodos que promovem a drenagem a longo prazo.
              Aliviando dores e sensação de peso por ser analgésico e
              anti-inflamatório.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Drenagem;
