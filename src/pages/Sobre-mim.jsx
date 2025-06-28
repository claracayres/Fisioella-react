import React from 'react';
import Flor from '../assets/flor.png';
import Neila from '../assets/momis-4.png';


const SobreMim = () => {
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
                        opacity: 0.3,
                    }}
                />
            </div>

            <section id="Sobre-mim">
                <div className="Sobre-mim-container">
                    <div>
                        <img
                        src={Neila}
                        alt="Fisioella"
                        className="Img-momis"
                    
                     />
                    </div>
                    <div className="Sobre-mim-texto">   
                        <h1>DRA. NEILA CAYRES</h1>
                        <p>
                            Sou a Dra. Neila Cayres, fisioterapeuta especializada na saúde da mulher e
                            reabilitação do assoalho pélvico. Graduada em Fisioterapia, com mais de 10
                            anos de experiência, atuo com foco em disfunções sexuais, dor pélvica,
                            incontinência urinária e fecal, além de oferecer acompanhamento no pré e
                            pós-parto. Sou pós-graduada em Traumato-Ortopedia e Fisioterapia Pélvica,
                            com diversos cursos complementares voltados ao bem-estar e à qualidade de
                            vida das mulheres. Acredito em uma abordagem humanizada, respeitosa e
                            atualizada, promovendo saúde de forma integral e personalizada.
                        </p>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default SobreMim;