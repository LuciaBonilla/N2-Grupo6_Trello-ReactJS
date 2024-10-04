import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";

// Estilos.
import "normalize.css";
import "./styles/global-style.css";
import "./styles/mobile-style.css";
import "./styles/tablet-style.css";
import "./styles/desktop-style.css";
import "./styles/dark-mode.css";
import "./styles/special-rules.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);