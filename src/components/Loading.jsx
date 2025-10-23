// src/components/Loading.jsx
import "../styles/loading.css";
import { Helmet } from "react-helmet-async";

const Loading = () => {
  return (
    <div className="loading-container">
      <Helmet>
        <title>Carregando...</title>
        <meta name="description" content="Aguarde enquanto a página está sendo carregada." />
      </Helmet>
      <div className="spinner"></div>
      <p className="loading-text">Carregando página...</p>
    </div>
  );
};

export default Loading;
