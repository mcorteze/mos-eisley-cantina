import React from "react";
import styles from "../styles/ProductoModal.module.css";
import productoStyles from "../styles/Productos.module.css";

export default function ProductoModal({ producto, onClose, onAgregar }) {
  if (!producto) return null;

  const src = producto.imagen.startsWith("http")
    ? producto.imagen
    : new URL(`../../../assets/img/productos/vehiculos/${producto.imagen}`, import.meta.url).href;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.cerrar} onClick={onClose}>
          ✖
        </button>

        <div className={styles.contenido}>
          <img
            src={src}
            alt={producto.nombre}
            className={styles.imagen}
          />

          <h3 className={styles.titulo}>{producto.nombre}</h3>

          <ul className={styles.lista}>
            <li><strong>Marca:</strong> {producto.marca}</li>
            <li><strong>Modelo:</strong> {producto.modelo}</li>
            <li><strong>Año:</strong> {producto.año}</li>
            <li><strong>Género:</strong> {producto.genero}</li>
            <li><strong>Tipo:</strong> {producto.tipo}</li>
            <li><strong>Enfoque:</strong> {producto.enfoque}</li>
            <li><strong>Descripción:</strong> {producto.descripcion}</li>
          </ul>

          <div className={styles.precioBox}>
            <span className={styles.precioNormal}>
              {producto.moneda} {producto.precioNormal.toLocaleString("es-CL")}
            </span>
            <span className={styles.precioOferta}>
              {producto.moneda} {producto.precioOferta.toLocaleString("es-CL")}
            </span>
          </div>

          <button
            className={`btn w-100 ${productoStyles.btnAgregar}`}
            onClick={() => onAgregar(producto)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
