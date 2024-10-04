import { useEffect, useState } from "react";

// Contextos.
import { useModalVisibilityContext } from "./context-providers/ModalVisibilityProvider";

// Componentes.
import AddTaskForm from "./3-components-AddTaskModal/AddTaskForm.jsx";

// Íconos.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// TERMINADO.
function AddTaskModal() {
    const { isAddTaskModalShowing } = useModalVisibilityContext();

    const [visibilityClass, setVisibilityClass] = useState("down");

    function getClassVisibility() {
        return (isAddTaskModalShowing === true ? "over" : "down")
    }

    useEffect(() => {
        setVisibilityClass(getClassVisibility());
    }, [isAddTaskModalShowing])

    return (
        <aside className={`task-modal task-modal--add-task ${visibilityClass}`}>
            {/* Títulos. */}
            <h3 className="task-modal__title">
                <FontAwesomeIcon icon={faPlus}/>
                <span className="next-to-icon">AGREGAR TAREA</span>
            </h3>

            {/* Formulario. */}
            <AddTaskForm />
        </aside>
    );
}

export default AddTaskModal;