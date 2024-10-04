import { useEffect, useState } from "react";

// Contextos.
import { useModalVisibilityContext } from "./context-providers/ModalVisibilityProvider";

// Componentes.
import EditTaskForm from "./4-components-EditTaskModal/EditTaskForm";

// Íconos.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenClip } from "@fortawesome/free-solid-svg-icons";

// TERMINADO.
function EditTaskModal() {
    const { isEditTaskModalShowing } = useModalVisibilityContext();

    const [visibilityClass, setVisibilityClass] = useState("down");

    useEffect(() => {
        setVisibilityClass(getClassVisibility());
    }, [isEditTaskModalShowing])

    function getClassVisibility() {
        return (isEditTaskModalShowing === true ? "over" : "down")
    }

    return (
        <aside className={`task-modal task-modal--edit-task ${visibilityClass}`}>
            {/* Títulos. */}
            <h3 className="task-modal__title">
                <FontAwesomeIcon icon={faPenClip} />
                <span className="next-to-icon">EDITAR TAREA</span>
            </h3>

            {/* Formulario. */}
            <EditTaskForm />
        </aside>
    );
}

export default EditTaskModal;