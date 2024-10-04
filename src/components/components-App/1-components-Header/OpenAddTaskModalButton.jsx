// Contextos.
import { useModalVisibilityContext } from "../context-providers/ModalVisibilityProvider";

// Íconos.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// TERMINADO.
function OpenAddTaskModalButton() {
    const { setIsAddTaskModalShowing } = useModalVisibilityContext();

    return (
        <button className="header__open-add-task-modal-button" onClick={() => setIsAddTaskModalShowing(true)}>
            <FontAwesomeIcon icon={faPlus} />
            <p className="header__open-add-task-modal-button--text next-to-icon">
                AGREGAR TAREA
            </p>
        </button>
    );
}

export default OpenAddTaskModalButton;