import { useEffect, useState } from "react";

// Comtextos.
import { useTasksContext } from "./context-providers/TasksProvider.jsx";

// Componentes.
import TaskCardColumn from "./2-components-TaskCardColumns/TaskCardColumn.jsx";

// Íconos
import { faDatabase, faList, faSpinner, faLock, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

// Terminado.
function TaskCardColumns() {
    const { tasks } = useTasksContext();  // Asumiendo que "tasks" puede ser una promesa.

    const [backlogTasks, setBacklogTasks] = useState([]);
    const [toDoTasks, setToDoTasks] = useState([]);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [blockedTasks, setBlockedTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);

    // Función para obtener tareas según su estado.
    function getTasksByStatus(tasks, status) {
        if (!Array.isArray(tasks)) return [];  // Asegurarse de que "tasks" sea un array.
        return tasks.filter((task) => task.status === status);
    }

    // useEffect para cargar las tareas cuando "tasks" esté disponible.
    useEffect(() => {
        async function fetchTasks() {
            try {
                const resolvedTasks = await tasks;  // Espera que "tasks" se resuelva.
                setBacklogTasks(getTasksByStatus(resolvedTasks, "Backlog"));
                setToDoTasks(getTasksByStatus(resolvedTasks, "To Do"));
                setInProgressTasks(getTasksByStatus(resolvedTasks, "In Progress"));
                setBlockedTasks(getTasksByStatus(resolvedTasks, "Blocked"));
                setDoneTasks(getTasksByStatus(resolvedTasks, "Done"));
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        }

        // Solo ejecutar si "tasks" es una promesa o datos válidos.
        if (tasks && typeof tasks.then === "function") {
            fetchTasks();  // Ejecuta la función para resolver "tasks"
        } else {
            // Si "tasks" ya está resuelto, actualiza el estado directamente.
            setBacklogTasks(getTasksByStatus(tasks, "Backlog"));
            setToDoTasks(getTasksByStatus(tasks, "To Do"));
            setInProgressTasks(getTasksByStatus(tasks, "In Progress"));
            setBlockedTasks(getTasksByStatus(tasks, "Blocked"));
            setDoneTasks(getTasksByStatus(tasks, "Done"));
        }
    }, [tasks]);

    return (
        <main className="task-card-columns">
            <TaskCardColumn
                taskCardColumnName="BACKLOG"
                icon={faDatabase}
                taskCardColumnClass="task-card-column--backlog"
                taskCardColumnContainerClass="task-card-column__container--backlog"
                tasksToRender={backlogTasks}
            />

            <TaskCardColumn
                taskCardColumnName="TO DO"
                icon={faList}
                taskCardColumnClass="task-card-column--to-do"
                taskCardColumnContainerClass="task-card-column__container--to-do"
                tasksToRender={toDoTasks}
            />

            <TaskCardColumn
                taskCardColumnName="IN PROGRESS"
                icon={faSpinner}
                taskCardColumnClass="task-card-column--in-progress"
                taskCardColumnContainerClass="task-card-column__container--in-progress"
                tasksToRender={inProgressTasks}
            />

            <TaskCardColumn
                taskCardColumnName="BLOCKED"
                icon={faLock}
                taskCardColumnClass="task-card-column--blocked"
                taskCardColumnContainerClass="task-card-column__container--blocked"
                tasksToRender={blockedTasks}
            />

            <TaskCardColumn
                taskCardColumnName="DONE"
                icon={faSquareCheck}
                taskCardColumnClass="task-card-column--done"
                taskCardColumnContainerClass="task-card-column__container--done"
                tasksToRender={doneTasks}
            />
        </main>
    );
}

export default TaskCardColumns;