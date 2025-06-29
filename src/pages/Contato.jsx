import React from "react";
import Flor from "../assets/flor.png";

const Contato = () => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Enviar para o Formspree
    const formspreeUrl = "https://formspree.io/f/mblolqvz";
    const formData = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    try {
      await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Mensagem enviada para o Formspree!");
    } catch (error) {
      console.error("Erro ao enviar para o Formspree:", error);
    }

    // Redirecionar para o WhatsApp
    const whatsappNumber = "5512996461927";
    const whatsappMessage = `Olá, meu nome é ${name}. ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="contato">
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
            opacity: 0.5,
          }}
        />
      </div>

      <section id="Contato-page">
        <div className="Contato-text">
          <h1>Contato</h1>
          <div className="contato-container">
            <p>
              Para mais informações, entre em contato através do formulário
              abaixo.
            </p>
            <div id="whatsapp-form">
              <form id="contactForm" onSubmit={handleFormSubmit}>
                <label htmlFor="name">Nome:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  required
                />

                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Seu e-mail"
                  required
                />

                <label htmlFor="phone">Telefone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Seu telefone"
                  required
                />

                <label htmlFor="message">Mensagem:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem"
                  required
                ></textarea>

                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contato;
