import React from "react";
import Header from "./components/header/Header.jsx"
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import styles from "./styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    // Estructura base del sitio
    <div className={styles.layout}>
      <Header />
      <Navbar />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}
