import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useEffect } from "react";
import { initFacebookPixel } from "./utils/facebookPixel";  
import Layout from "./layouts/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";

const Inicio = lazy(() => import("./pages/Inicio"));
const SobreMim = lazy(() => import("./pages/Sobre-mim"));
const Tratamentos = lazy(() => import("./pages/Tratamentos"));
const FisioPelvica = lazy(() => import("./pages/Fisiopelvica"));
const Radiofrequencia = lazy(() => import("./pages/Radiofrequencia"));
const Drenagem = lazy(() => import("./pages/Drenagem"));
const Contato = lazy(() => import("./pages/Contato"));

function App() {
  useEffect(() => {
    initFacebookPixel();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="sobre-mim" element={<SobreMim />} />
            <Route path="tratamentos" element={<Tratamentos />} />
            <Route path="Fisiopelvica" element={<FisioPelvica />} />
            <Route path="Radiofrequencia" element={<Radiofrequencia />} />
            <Route path="Drenagem" element={<Drenagem />} />
            <Route path="contato" element={<Contato />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
