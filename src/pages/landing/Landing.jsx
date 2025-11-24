import React from "react";
import { Link } from "react-router-dom";
import WBoton from "../../components/WBoton/WBoton.jsx";
import styles from "./styles/Landing.module.css";

import landing_bg from "../../assets/img/shared/lading-bg.png";

export default function Landing() {
  return (
    <main id="inicio" className={styles.heroFull}>
      {/* Fondo animado */}
      <img
        className={styles.heroBg}
        src={landing_bg}
        alt="Mos Eisley Cantina Background"
      />

      {/* Efectos */}
      <img className={styles.heroOverlay} src="/assets/img/tv.gif" alt="" />
      <span className={styles.heroVignette} aria-hidden="true"></span>

      {/* Banner */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Mos Eisley Cantina
          <br />
          <span>
            Música. Tragos. Problemas.
          </span>
        </h1>

        <p className={styles.heroSub}>
          La cantina más famosa de Tatooine. Música en vivo, bebidas fuertes y cero preguntas.
        </p>

        <Link to="/inicio">
          <WBoton variant="primary">Entrar</WBoton>
        </Link>
      </div>
    </main>
  );
}
