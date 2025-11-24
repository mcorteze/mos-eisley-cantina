import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    // Barra de navegación principal, fija en la parte superior
    <nav className={`navbar navbar-expand-lg sticky-top ${styles.navbar}`}>
      <div className="container">
        {/* Marca o Logo del sitio */}
        <NavLink className={`navbar-brand ${styles.brand}`} to="/">
          Mos Eisley Cantina
        </NavLink>

        {/* Botón para colapsar el menú en dispositivos móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido del menú colapsable */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${styles.link} ${isActive ? styles.active : ""}`}
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${styles.link} ${isActive ? styles.active : ""}`}
                to="/eventos"
              >
                Eventos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${styles.link} ${isActive ? styles.active : ""}`}
                to="/quienessomos"
              >
                Quiénes Somos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
