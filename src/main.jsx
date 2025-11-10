import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react"; // Importação do Analytics
import "./styles/global.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <Analytics /> {/* Adicione o Analytics aqui */}
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);