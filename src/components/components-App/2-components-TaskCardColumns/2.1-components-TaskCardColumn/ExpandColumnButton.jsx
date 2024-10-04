// Íconos.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";

// TERMINADO.
function ExpandColumnButton({ onClick }) {
    return (
        <button className="task-card-column__expand-column-button" onClick={onClick}>
            <FontAwesomeIcon icon={faArrowsUpDown} />
        </button>
    );
}

export default ExpandColumnButton;