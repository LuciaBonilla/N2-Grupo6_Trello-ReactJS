// Íconos.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// TERMINADO.
function DeleteTaskButton({ onClick }) {
    return (
        <button className="task-form__button task-form__button--delete task-form__button--delete-task" onClick={onClick}>
            <FontAwesomeIcon icon={faTrash} />
            <span className="next-to-icon">ELIMINAR</span>
        </button>
    );
}

export default DeleteTaskButton;