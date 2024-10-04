import { useState } from "react";

// Contextos.
import { useTasksContext } from "../context-providers/TasksProvider.jsx";
import { useModalVisibilityContext } from "../context-providers/ModalVisibilityProvider.jsx";

// Clases auxiliares.
import BackendCaller from "../../../auxiliar-classes/BackendCaller.js";

// Componentes.
import NormalInput from "../input-components/NormalInput.jsx";
import SelectionInput from "../input-components/SelectionInput.jsx";
import CancelAddTaskButton from "./3.1-components-AddTaskForm/CancelAddTaskButton.jsx";
import CreateTaskButton from "./3.1-components-AddTaskForm/CreateTaskButton.jsx";

// TERMINADO.
function AddTaskForm() {
    const { setTasks } = useTasksContext();

    const { setIsAddTaskModalShowing } = useModalVisibilityContext();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assignedTo, setAssignedTo] = useState("");
    const [priority, setPriority] = useState("Low");
    const [status, setStatus] = useState("Backlog");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    async function handleAcceptAddTask(e) {
        e.preventDefault();
        setIsAddTaskModalShowing(false);
        await BackendCaller.postNewTask({
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
    }

    function handleCancelAddTask(e) {
        e.preventDefault();
        setIsAddTaskModalShowing(false);
        cleanInputs();
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

    return (
        <form className="task-form task-form--add-task">
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

            <CancelAddTaskButton onClick={(e) => handleCancelAddTask(e)} />
            <CreateTaskButton onClick={(e) => handleAcceptAddTask(e)} />
        </form>
    );
}

export default AddTaskForm;