# Mos Eisley Cantina

Aplicación web desarrollada con React para gestionar y visualizar eventos en la famosa Cantina de Mos Eisley. Este proyecto simula un centro de eventos galáctico con una estética industrial y oscura inspirada en el universo de Star Wars.

## Características

- **Catálogo de Eventos:** Visualización de eventos disponibles mediante una API REST simulada.
- **Detalle de Eventos:** Vista detallada de cada evento (organizador, asistentes, descripción) usando una API GraphQL simulada.
- **Diseño Temático:** Interfaz inmersiva con estilo "Industrial Sci-Fi", luces de neón y texturas metálicas.
- **Navegación:** Enrutamiento dinámico con React Router.

## Tecnologías Utilizadas

- React 18
- React Router DOM
- CSS Modules (Diseño personalizado)
- Vite

## Instalación y Ejecución

1. Clonar el repositorio.
2. Instalar dependencias:
   npm install
   
3. Iniciar el servidor de desarrollo:
   npm run dev

4. Abrir en el navegador (por defecto `http://localhost:5173`).

## Estructura del Proyecto

- `src/pages`: Vistas principales (Inicio, Eventos, Detalle, Quiénes Somos).
- `src/services`: Simulación de APIs (REST y GraphQL).
- `src/context`: Manejo del estado global de eventos.
- `src/styles`: Estilos globales y variables de tema.
