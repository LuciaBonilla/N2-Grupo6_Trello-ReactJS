import { useEffect, useState } from "react";

// Contextos.
import { useTasksContext } from "../context-providers/TasksProvider.jsx";
import { useModalVisibilityContext } from "../context-providers/ModalVisibilityProvider.jsx";

// Clases auxiliares.
import BackendCaller from "../../../auxiliar-classes/BackendCaller.js";

// Componentes.
import NormalInput from "../input-components/NormalInput.jsx";
import SelectionInput from "../input-components/SelectionInput.jsx";
import CancelEditTaskButton from "./4.1-components-EditTaskForm/CancelEditTaskButton.jsx";
import AcceptEditTaskButton from "./4.1-components-EditTaskForm/AcceptEditTaskButton.jsx";
import DeleteTaskButton from "./4.1-components-EditTaskForm/DeleteTaskButton.jsx";

// TERMINADO.
function EditTaskForm() {
    const { taskToEditID, setTaskToEditID, tasks, setTasks } = useTasksContext();
    const { setIsEditTaskModalShowing } = useModalVisibilityContext();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assignedTo, setAssignedTo] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    function findTaskToEdit() {
        if (taskToEditID === null) return null;
        return tasks.find((task) => task.id === taskToEditID)
    }

    async function updateInputsWithTaskToEditData() {
        const taskToEdit = findTaskToEdit();
        if (taskToEdit !== null) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
            setAssignedTo(taskToEdit.assignedTo);
            setPriority(taskToEdit.priority);
            setStatus(taskToEdit.status);
            setStartDate(taskToEdit.startDate);
            setEndDate(taskToEdit.endDate);
        }
    }

    async function handleAcceptEditTask(e) {
        e.preventDefault();
        setIsEditTaskModalShowing(false);
        await BackendCaller.putTaskById(taskToEditID, {
            title: title,
            description: description,
            assignedTo: assignedTo,
            priority: priority,
            status: status,
            startDate: startDate,
            endDate: endDate
        });
        await setTasks(BackendCaller.getAllTasks());
        cleanInputs();
        setTaskToEditID(null);
    }

    function handleCancelEditTask(e) {
        e.preventDefault();
        setIsEditTaskModalShowing(false);
        cleanInputs();
        setTaskToEditID(null);
    }

    async function handleDeleteTask(e) {
        e.preventDefault();
        setIsEditTaskModalShowing(false);
        await BackendCaller.deleteTaskById(taskToEditID);
        await setTasks(BackendCaller.getAllTasks());
        cleanInputs();
        setTaskToEditID(null);
    }

    function cleanInputs() {
        setTitle("");
        setDescription("");
        setAssignedTo("");
        setPriority("Low");
        setStatus("Backlog");
        setStartDate("");
        setEndDate("");
    }

    useEffect(() => {
        async function fetchTasks() {
            try {
                const fetchedTasks = await BackendCaller.getAllTasks();
                setTasks(fetchedTasks);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        }

        // Asegurarse de que se resuelvan las tareas y actualizar los inputs
        if (tasks && Array.isArray(tasks)) {
            updateInputsWithTaskToEditData();
        } else {
            fetchTasks();  // Si no hay tareas, intentar cargarlas
        }
    }, [taskToEditID, tasks]);

    return (
        <form className="task-form task-form--edit-task">
            <NormalInput
                labelName="Título"
                type="text"
                placeholder="TÍTULO"
                setState={setTitle}
                value={title}
            />

            <NormalInput
                labelName="Descripción"
                type="text"
                placeholder="DESCRIPCIÓN"
                setState={setDescription}
                value={description}
            />

            <NormalInput
                labelName="Asignado"
                type="text"
                placeholder="ASIGNADO"
                setState={setAssignedTo}
                value={assignedTo}
            />

            <SelectionInput
                labelName="Prioridad"
                options={["High", "Medium", "Low"]}
                setState={setPriority}
                value={priority}
            />

            <SelectionInput
                labelName="Estado"
                options={["Backlog", "To Do", "In Progress", "Blocked", "Done"]}
                setState={setStatus}
                value={status}
            />

            <NormalInput
                labelName="Fecha de inicio"
                type="date"
                placeholder="FECHA DE INICIO"
                setState={setStartDate}
                value={startDate}
            />

            <NormalInput
                labelName="Fecha de fin"
                type="date"
                placeholder="FECHA DE FIN"
                setState={setEndDate}
                value={endDate}
            />

            <CancelEditTaskButton onClick={(e) => handleCancelEditTask(e)} />
            <AcceptEditTaskButton onClick={(e) => handleAcceptEditTask(e)} />
            <DeleteTaskButton onClick={(e) => handleDeleteTask(e)} />
        </form>
    );
}

export default EditTaskForm;