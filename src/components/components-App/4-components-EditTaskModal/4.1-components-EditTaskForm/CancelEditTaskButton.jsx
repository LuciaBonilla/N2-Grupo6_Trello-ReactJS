// Íconos.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// TERMINADO.
function CancelEditTaskButton({ onClick }) {
    return (
        <button className="task-form__button task-form__button--cancel task-form__button--cancel-edit-task" onClick={onClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span className="next-to-icon">CANCELAR</span>
        </button>
    );
}

export default CancelEditTaskButton;