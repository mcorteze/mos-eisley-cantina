import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    // Pie de página con estructura de 4 columnas
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Columna 1: Identidad de la marca y ubicación ficticia */}
        <div className={styles.brand}>
          <h4>Mos Eisley Cantina</h4>
          <p>“Música. Tragos. Problemas.”</p>
          <p className={styles.lore}>
            🪐 Puerto Espacial de Mos Eisley, Tatooine.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos de navegación interna */}
        <div>
          <h5>Navegación</h5>
          <ul>
            <li><Link to="/inicio">Inicio</Link></li>
            <li><Link to="/eventos">Eventos</Link></li>
            <li><Link to="/quienessomos">Quiénes Somos</Link></li>
          </ul>
        </div>

        {/* Columna 3: Enlaces externos a redes sociales ficticias */}
        <div>
          <h5>Comunidad Galáctica</h5>
          <p>Conecta con la escoria y villanía:</p>
          <div className={styles.socials}>
            <a href="https://holonet.com" target="_blank" rel="noopener noreferrer">HoloNet</a>
            <a href="https://imperialfeeds.net" target="_blank" rel="noopener noreferrer">Imperial Feeds</a>
            <a href="https://sandgram.space" target="_blank" rel="noopener noreferrer">Sandgram</a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Cantina Chat</a>
          </div>
        </div>

        {/* Columna 4: Información de contacto del establecimiento */}
        <div>
          <h5>Contacto</h5>
          <p>📧 wuher@cantina.tat</p>
          <p>📡 +327-TAT-1138</p>
          <p className={styles.small}>
            © {new Date().getFullYear()} Mos Eisley Cantina. No afiliado con el Imperio.
          </p>
        </div>

      </div>
    </footer>
  );
}
