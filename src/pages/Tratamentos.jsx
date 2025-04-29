import React, { useEffect } from 'react';
import Flor from '../assets/flor.png';

const Tratamentos = () => {
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (!isMobile) return; // só aplica a lógica no mobile

    const buttons = document.querySelectorAll('.accordion');

    const handleClick = (e) => {
      const button = e.currentTarget;
      const boxContainer = button.closest('.box-container');

      document.querySelectorAll('.box-container').forEach((container) => {
        if (container !== boxContainer) {
          container.classList.remove('expanded');
        }
      });

      boxContainer.classList.toggle('expanded');
    };

    buttons.forEach((button) => {
      button.addEventListener('click', handleClick);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <main className="main-content">
      <div
        className="background-image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <img
          src={Flor}
          alt="flor"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.5,
          }}
        />
      </div>

      <section id="Tratamentos-container">
        <div className="Tratamentos-text">
          <h1>TRATAMENTOS</h1>
          <p>
          Lembrando que é sempre realizada uma avaliação para traçar qual melhor tratamento para cada paciente, assim sendo possível  a individualidade do tratamento.
          </p>
          <div className="containers">
            <div className="box-container">
              <div className="box">
                <h2>Fisioterapia Pélvica</h2>
                <p>Tratamento para fortalecer e reequilibrar a região pélvica.</p>
                <button className="accordion">Saiba mais</button>
              </div>
              <div className="box-slider">
                <div className="text">
                    <h3>Fisioterapia Pélvica</h3>
                    <p>
                        Eletroterapia<br /> 
                        Laserterapia <br /> 
                        Exercícios específicos para musculatura  do assoalho pélvico <br />
                        Terapia <br/>comportamental <br />
                        Entre outros 
                    </p>
                </div>
                <div className="text">
                    <h3>Para gestantes pré e pós parto</h3>
                    <p>
                    Exercícios respiratórios<br />
                    Exercícios direcionados para funcionalidade da musculatura do abdômen, músculos pélvico e paravertebrais.<br />
                    Exercícios de mobilidade para facilitar a passagem do bebê <br />
                    Taping de sustentação na barriga <br />
                    Taping para aliviar dores na lombar.<br />
                    </p>
                </div>
              </div>
            </div>

            <div className="box-container">
              <div className="box">
                <h2>Radiofrequência íntima</h2>
                <p>Rejuvenescimento e Melhora da Saúde Íntima</p>
                <button className="accordion">Saiba mais</button>
              </div>
              <div className="box-slider">
                <div className="text">
                    <h3>Para que serve a radiofrequência íntima:</h3>
                     <p>
                    Estimula a produção de colágeno na região íntima<br />
                    Melhora a flacidez dos tecidos<br />
                    Aumenta a lubrificação vaginal<br />
                    Melhora a sensibilidade durante o contato íntimo<br />
                    Auxilia em casos leves de incontinência urinária<br />
                    Contribui para o rejuvenescimento íntimo
                  </p>
                </div>
                <div className="text">
                    <h3>Como é utilizada:</h3>
                    <p>
                    Procedimento não invasivo e indolor <br />
                    Realizado em consultório por profissional especializado<br />
                    Utiliza um aparelho que emite ondas de calor controladas<br />
                    Aquece suavemente a região, promovendo regeneração dos tecidos<br />
                    Sessões rápidas, com tempo de recuperação mínimo ou inexistente<br />
                  </p>
                </div>
              </div>
            </div>

            <div className="box-container">
              <div className="box">
                <h2>Drenagem Linfática</h2>
                <p>Redução de inchaço e toxinas com massagem terapêutica.</p>
                <button className="accordion">Saiba mais</button>
              </div>
              <div className="box-slider">
                <div className="text">
                  <h3>Taping</h3>
                  <p>Estimula a circulação e a drenagem linfática, ajudando a reduzir inchaços e retenção de líquidos.</p>
                  <h3>Movimentos Manuais</h3>
                  <p>Manobras suaves para eliminar toxinas e aliviar a sensação de peso.</p>
                </div>
                <div className="text">
                  <h3>Pós-operatório e Cuidados Especiais</h3>
                  <p>Auxilia na recuperação pós-cirúrgica e em condições como lipedema e linfedema.</p>
                  <p>Essas técnicas proporcionam alívio, leveza e bem-estar.</p>
                </div>
                <div className='text'>
                    <h3>Lasertarapia</h3>
                    <p>Aplicação em linfonodos que promovem a drenagem a longo prazo. Aliviando dores e sensação de peso por ser analgésico e anti-inflamatório.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tratamentos;
