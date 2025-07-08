import { Link } from "react-router-dom";
import Flor from "../assets/flor.png";
import Logo from "../assets/logo-2.webp";

const Inicio = () => {
  return (
    <>
      <main className="main-content"></main>

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
            opacity: 0.2,
          }}
        />
      </div>

      <section id="inicio">
        <div className="main-text">
          <div className="hero-text">
            <h2>"O autocuidado começa de dentro — e você merece esse olhar"</h2>
            <p>
              Na Fisioella, ofereço tratamentos de fisioterapia personalizados
              para atender às suas necessidades.
            </p>
            <div className="hero-buttons">
              <Link to="/Contato" className="btn">
                Agende sua consulta
              </Link>
            </div>
          </div>
          <img
            src={Logo}
            alt="Fisioella"
            className="hero-image"
            fetchpriority="high"
          />
        </div>
      </section>
      <section id="inicio">
        <div className="fisio-pelvica">
          <h2>O que é fisioterapia Pélvica?</h2>

          <p>
            É uma área da fisioterapia voltada para a prevenção e o tratamento
            de disfunções no assoalho pélvico, que afetam diretamente a
            qualidade de vida da mulher — como incontinência urinária, dores
            íntimas, e questões no pré e pós-parto.
            <br />
            <br />O tratamento é realizado por meio de exercícios específicos,
            orientações e técnicas manuais, visando fortalecer e reabilitar a
            musculatura pélvica.
            <br />
            <br />
            Além disso, a fisioterapia pélvica pode ajudar na recuperação
            pós-cirúrgica e na melhoria da função sexual.
          </p>
        </div>

        <div className="publico-alvo">
          <h2>Pra quem é indicado?</h2>
          <p>
            A fisioterapia pélvica é indicada para mulheres que apresentam
            sintomas como:
          </p>
          <ul className="indicacoes">
            <li>Incontinência urinária ou fecal</li>
            <li>Dores pélvicas ou vaginais</li>
            <li>Disfunções sexuais</li>
            <li>Pré e pós-parto</li>
            <li>Cirurgias ginecológicas</li>
            <li>Alterações hormonais</li>
            <li>Endometriose</li>
            <li>Outras condições relevantes</li>
          </ul>
          <p>
            Se você se identifica com algum desses sintomas, agende uma consulta
            e venha conhecer o meu trabalho!
          </p>
          <p>Entre em contato para mais informações.</p>
        </div>
      </section>
    </>
  );
};

export default Inicio;
