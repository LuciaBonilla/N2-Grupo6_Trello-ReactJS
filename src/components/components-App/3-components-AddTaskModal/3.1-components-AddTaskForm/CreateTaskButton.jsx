// Íconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// TERMINADO.
function CreateTaskButton({ onClick }) {
    return (
        <button className="task-form__button task-form__button--accept task-form__button--accept-add-task" onClick={onClick}>
            <FontAwesomeIcon icon={faPlus} />
            <span className="next-to-icon">ACEPTAR</span>
        </button>
    );
}

export default CreateTaskButton;