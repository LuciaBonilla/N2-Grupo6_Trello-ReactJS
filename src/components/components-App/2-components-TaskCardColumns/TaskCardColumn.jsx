import { useState } from "react";

// Componentes.
import ExpandColumnButton from "./2.1-components-TaskCardColumn/ExpandColumnButton.jsx";
import TaskCard from "./2.1-components-TaskCardColumn/TaskCard.jsx";

// Íconos.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TERMINADO.
function TaskCardColumn({ taskCardColumnName, icon, taskCardColumnClass, taskCardColumnContainerClass, tasksToRender }) {
    const [classToOccupyAllHeight, setClassToOccupyAllHeight] = useState(null);

    function handleToggleExpansionColumn() {
        setClassToOccupyAllHeight(classToOccupyAllHeight === "occupyAllHeight" ? null : "occupyAllHeight")
    }

    const renderTasks = Array.isArray(tasksToRender) ? tasksToRender : [];

    return (
        <section className={`task-card-column ${taskCardColumnClass}`}>
            <h3 className="task-card-column__title">
                <span className="next-to-icon">{taskCardColumnName}</span>
                <FontAwesomeIcon icon={icon} />
            </h3>

            <div className={`task-card-column__container ${taskCardColumnContainerClass} ${classToOccupyAllHeight}`}>
                {renderTasks.length > 0 ? (
                    renderTasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            assignedTo={task.assignedTo}
                            startDate={task.startDate}
                            endDate={task.endDate}
                            priority={task.priority}
                        />
                    ))
                ) : (
                    <p className="no-tasks-message">No tasks available</p>
                )}
            </div>

            <ExpandColumnButton
                onClick={handleToggleExpansionColumn}
            />
        </section>
    );
}

export default TaskCardColumn;