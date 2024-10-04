import { useEffect, useState } from "react";

// Contextos.
import { useThemeContext } from "../context-providers/ThemeProvider";

// Íconos.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

// TERMINADO.
function ToggleThemeButton() {
    const [icon, setIcon] = useState(faSun);
    const { theme, toggleTheme } = useThemeContext();

    // Alterna los íconos según el tema.
    useEffect(() => {
        setIcon(theme === "light" ? faMoon : faSun);
    }, [theme]);

    return (
        <button className="header__toggle-theme-button" onClick={toggleTheme} >
            <FontAwesomeIcon icon={icon} />
        </button >
    );
}

export default ToggleThemeButton;