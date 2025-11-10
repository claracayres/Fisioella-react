// src/components/Loading.jsx
import React from "react";
import "../styles/loading.css"; // Vamos criar o CSS já já

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Carregando página...</p>
    </div>
  );
};

export default Loading;
