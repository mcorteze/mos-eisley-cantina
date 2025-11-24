import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchEvents } from "../services/mockApi";

// Creamos el contexto para compartir el estado de los eventos en toda la app
const EventosContext = createContext();

export function EventosProvider({ children }) {
  // Estado local para almacenar la lista de eventos
  const [eventos, setEventos] = useState([]);

  // Estado para controlar si estamos cargando datos
  const [loading, setLoading] = useState(true);

  // Estado para manejar posibles errores
  const [error, setError] = useState(null);

  // Efecto que se ejecuta al montar el componente para cargar los datos iniciales
  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        // Llamamos a la API simulada para obtener los eventos
        const data = await fetchEvents();
        setEventos(data);
      } catch (err) {
        // Si falla, guardamos el mensaje de error
        setError(err.message);
      } finally {
        // Terminamos el estado de carga, haya error o no
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  // Valores que compartiremos con los componentes hijos
  const value = {
    eventos,
    loading,
    error,
  };

  return <EventosContext.Provider value={value}>{children}</EventosContext.Provider>;
}

// Hook personalizado para facilitar el uso del contexto
export function useEventos() {
  const ctx = useContext(EventosContext);
  if (!ctx) throw new Error("useEventos debe usarse dentro de EventosProvider");
  return ctx;
}
