import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Landing from "./pages/landing/Landing.jsx";
import Inicio from "./pages/inicio/Inicio.jsx";
import Eventos from "./pages/eventos/Eventos.jsx";
import EventoDetalle from "./pages/eventos/EventoDetalle.jsx";
import QuienesSomos from "./pages/quienessomos/QuienesSomos.jsx";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.MODE === "production" ? "/frontend2_semana3" : "/"}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/inicio" element={<Layout><Inicio /></Layout>} />
        <Route path="/eventos" element={<Layout><Eventos /></Layout>} />
        <Route path="/eventos/:id" element={<Layout><EventoDetalle /></Layout>} />
        <Route path="/quienessomos" element={<Layout><QuienesSomos /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
