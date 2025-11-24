import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useEventos } from "../../context/EventosContext";
import styles from "./styles/Productos.module.css";

export default function Eventos() {
  // Obtenemos los eventos y el estado de carga desde el contexto
  const { eventos, loading, error } = useEventos();

  // Estados locales para manejar los filtros de búsqueda
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("todas");

  // Generamos la lista de categorías únicas basada en los eventos disponibles
  // Usamos useMemo para evitar recálculos innecesarios
  const categorias = useMemo(() => {
    const unicas = new Set(eventos.map((e) => e.category).filter(Boolean));
    return ["todas", ...Array.from(unicas)];
  }, [eventos]);

  // Filtramos la lista de eventos según el nombre y la categoría seleccionada
  const filtrados = eventos.filter((e) => {
    const coincideNombre = e.name.toLowerCase().includes(filtroNombre.toLowerCase());
    const coincideCategoria = filtroCategoria === "todas" || e.category === filtroCategoria;
    return coincideNombre && coincideCategoria;
  });

  // Mostramos mensajes de carga o error si es necesario
  if (loading) return <div className="text-center mt-5">Cargando eventos de la Cantina...</div>;
  if (error) return <div className="text-center mt-5 text-danger">Error: {error}</div>;

  return (
    <main className={styles.main}>
      <div className="container">
        <header className="mb-4 text-center">
          <h2 className="section-title" style={{ color: "var(--cantina-gold)" }}>Eventos en Mos Eisley</h2>
          <p className="text-description">
            Música, apuestas y los mejores tragos del Borde Exterior.
          </p>
        </header>

        {/* Sección de filtros */}
        <section className="mb-4">
          <div className="row g-3 justify-content-center">
            <div className="col-12 col-md-5">
              <input
                type="text"
                className={`form-control ${styles.input}`}
                placeholder="Buscar evento..."
                value={filtroNombre}
                onChange={(e) => setFiltroNombre(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-4">
              <select
                className={`form-select ${styles.select}`}
                value={filtroCategoria}
                onChange={(e) => setFiltroCategoria(e.target.value)}
              >
                {categorias.map((c) => (
                  <option key={c} value={c}>
                    {c === "todas" ? "Todas las categorías" : c}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Listado de tarjetas de eventos */}
        <section>
          {filtrados.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {filtrados.map((e) => (
                <div key={e.id} className="col">
                  <div className={`card h-100 shadow-sm ${styles.card}`} style={{ backgroundColor: "#2b2b2b", border: "1px solid #444" }}>
                    <img
                      src={e.image}
                      alt={e.name}
                      className={`card-img-top ${styles.cardImg}`}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column text-white">
                      <h5 className="card-title text-warning">{e.name}</h5>
                      <p className="mb-1"><strong>Fecha:</strong> {e.date}</p>
                      <p className="mb-1"><strong>Lugar:</strong> {e.location}</p>
                      <p className="mb-1"><strong>Categoría:</strong> {e.category}</p>
                      <div className="mt-auto pt-3">
                        {/* Enlace a la página de detalle del evento */}
                        <Link to={`/eventos/${e.id}`} className="btn btn-outline-warning w-100">
                          Ver Detalles
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-white">No se encontraron eventos.</p>
          )}
        </section>
      </div>
    </main>
  );
}
