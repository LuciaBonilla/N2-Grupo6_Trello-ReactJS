// Contextos.
import { useTasksContext } from "../../context-providers/TasksProvider";
import { useModalVisibilityContext } from "../../context-providers/ModalVisibilityProvider";

// Íconos.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faUserPlus, faCalendarDays, faStar } from "@fortawesome/free-solid-svg-icons";

// TERMINADO.
function TaskCard({ id, title, description, assignedTo, startDate, endDate, priority }) {
    const { setTaskToEditID } = useTasksContext();
    const { setIsEditTaskModalShowing } = useModalVisibilityContext();

    return (
        <article className="task-card"
            id={id}
            key={id}
            onClick={() => {
                setTaskToEditID(id);
                setIsEditTaskModalShowing(true);
            }}
        >
            <h4 className="task-card__title">{title}</h4>
            <p className="task-card__description">
                <FontAwesomeIcon icon={faPenToSquare} />
                <span className="next-to-icon">{description}</span>
            </p>
            <p className="task-card__assigned-to">
                <FontAwesomeIcon icon={faUserPlus} />
                <span className="next-to-icon">{assignedTo}</span>
            </p>
            <p className="task-card__start-date">
                <FontAwesomeIcon icon={faCalendarDays} />
                <span className="next-to-icon">{startDate}</span>
            </p>
            <p className="task-card__end-date">
                <FontAwesomeIcon icon={faCalendarDays} />
                <span className="next-to-icon">{endDate}</span>
            </p>
            <p className="task-card__priority">
                <FontAwesomeIcon icon={faStar} />
                <span className="next-to-icon">{priority}</span>
            </p>
        </article>
    );
}

export default TaskCard;