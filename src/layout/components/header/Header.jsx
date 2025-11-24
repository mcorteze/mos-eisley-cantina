import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    // Encabezado principal tipo Hero con imagen de fondo y título
    <header className={styles.header}>
      <div className="container">
        {/* Título principal y subtítulo temático */}
        <h1 className={styles.title}>Mos Eisley Cantina</h1>
        <p className={styles.subtitle}>"Nunca encontrarás un rincón más miserable de escoria y villanía."</p>
      </div>
    </header>
  );
}