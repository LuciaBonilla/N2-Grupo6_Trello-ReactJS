// Componentes.
import OpenAddTaskModalButton from "./1-components-Header/OpenAddTaskModalButton.jsx";
import ToggleThemeButton from "./1-components-Header/ToggleThemeButton.jsx";

// Íconos.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

// TERMINADO.
function Header() {
    return (
        <header className="header">
            {/* Título. */}
            <h1 className="header__title">
                <FontAwesomeIcon icon={faClipboard} />
                <span className="next-to-icon">GESTOR DE TAREAS</span>
            </h1>

            {/* Número de grupo. */}
            <h2 className="header__group-name">GRUPO 6 - N2</h2>

            {/* Botón para abrir el modal de Agregar tarea. */}
            <OpenAddTaskModalButton />

            {/* Botón para alternar el tema de la aplicación (light/dark). */}
            <ToggleThemeButton />
        </header>
    );
}

export default Header;