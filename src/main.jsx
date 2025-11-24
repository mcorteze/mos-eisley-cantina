import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { EventosProvider } from "./context/EventosContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/layout.css";
import "./styles/global.css";
import "./styles/generales.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EventosProvider>
      <App />
    </EventosProvider>
  </React.StrictMode>
);
