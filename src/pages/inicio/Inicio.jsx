import React from "react";
import { Link } from "react-router-dom";
import WBoton from "../../components/WBoton/WBoton.jsx";
import styles from "./styles/Inicio.module.css";
import noticia1 from "../../assets/img/noticias/n1.png";
import noticia2 from "../../assets/img/noticias/n2.png";
import noticia3 from "../../assets/img/noticias/n3.png";

export default function Inicio() {
  return (
    <main id="inicio" className={styles.main}>
      <div className="container">
        {/* Sección de presentación */}
        <section className={styles.sectionIntro}>
          <div className={styles.sectionIntroText}>
            <h2 className="section-title">Bienvenido a la Cantina</h2>
            <p className="text-description">
              <strong>Mos Eisley Cantina</strong>. Un refugio en medio del calor de los soles gemelos.
              Aquí encontrarás pilotos buscando trabajo, contrabandistas cerrando tratos y la mejor música de la galaxia.
            </p>
            <p>
              Revisa nuestra agenda de eventos y asegúrate de llegar antes de que Wuher cierre la barra.
            </p>
            <Link to="/eventos">
              <WBoton variant="primary">📅 Ver Eventos</WBoton>
            </Link>
          </div>

          <div className={styles.mediaContainer}>
            <img
              src="https://pulse.gallery/cdn/shop/products/SWOTLTD21_480x_30cfd5ed-050b-4489-9b15-a6ddcd4ed955_grande.jpg?v=1623834854"
              alt="Mos Eisley Cantina"
              className={styles.mediaImage}
            />
          </div>



        </section>

        {/* Cómo funciona */}
        <section>
          <h3 className="section-title">Reglas de la Casa</h3>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h5>1) No se admiten droides</h5>
              <p>
                Sus detectores molestan a los clientes. Déjalos afuera o serán convertidos en chatarra.
              </p>
            </div>

            <div className={styles.card}>
              <h5>2) Paga por adelantado</h5>
              <p>
                Wuher no fía. Si quieres beber, muestra los créditos. Aceptamos monedas de la República y del Imperio (a regañadientes).
              </p>
            </div>

            <div className={styles.card}>
              <h5>3) Dispara primero</h5>
              <p>
                Si tienes problemas con Greedo, resuélvelo rápido y limpia el desastre.
              </p>
            </div>
          </div>
        </section>

        {/* Noticias destacadas */}
        <section>
          <h3 className="section-title">Novedades del Puerto Espacial</h3>
          <div className={styles.cards}>
            <article className={styles.card}>
              <img src={noticia1} alt="Banda en vivo" />
              <h5>Música en Vivo</h5>
              <p>
                Figrin D'an and the Modal Nodes tocarán todas las noches esta semana. ¡No te pierdas su éxito "Mad About Me"!
              </p>
            </article>
            <article className={styles.card}>
              <img src={noticia2} alt="Nuevas bebidas" />
              <h5>Nueva importación de Spotchka</h5>
              <p>
                Directo desde Sorgan. Una bebida brillante para iluminar tus noches oscuras.
              </p>
            </article>
            <article className={styles.card}>
              <img src={noticia3} alt="Buscado" />
              <h5>Recompensa por el Wookiee</h5>
              <p>
                El Imperio ofrece una recompensa sustancial. Si ves algo, no digas nada... a menos que te paguen.
              </p>
            </article>
          </div>
        </section>

        {/* Enlace final */}
        <section className="text-center">
          <Link to="/eventos">
            <WBoton variant="primary">🎟️ Comprar Entradas</WBoton>
          </Link>
        </section>
      </div>
    </main>
  );
}
