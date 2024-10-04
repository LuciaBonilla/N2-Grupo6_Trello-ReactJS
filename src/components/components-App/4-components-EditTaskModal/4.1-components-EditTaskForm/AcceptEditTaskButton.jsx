// Íconos.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

// TERMINADO.
function AcceptEditTaskButton({ onClick }) {
    return (
        <button className="task-form__button task-form__button--accept task-form__button--accept-edit-task" onClick={onClick}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span className="next-to-icon">ACEPTAR</span>
        </button>
    );
}

export default AcceptEditTaskButton;