import { useState, createContext, useContext } from "react";
import BackendCaller from "../../../auxiliar-classes/BackendCaller";

const TasksContext = createContext();

export function TasksProvider({ children }) {
    const [tasks, setTasks] = useState(loadTasksFromBackend());
    const [taskToEditID, setTaskToEditID] = useState(null);

    // Recarga las tareas desde el backend.
    async function loadTasksFromBackend() {
        return await BackendCaller.getAllTasks();
    }

    return (
        <TasksContext.Provider value={{ tasks, taskToEditID, setTasks, setTaskToEditID }}>
            {children}
        </TasksContext.Provider>
    );
}

export function useTasksContext() {
    return useContext(TasksContext);
}