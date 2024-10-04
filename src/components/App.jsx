// Componentes.
import Header from "./components-App/Header.jsx";
import TaskCardColumns from "./components-App/TaskCardColumns.jsx";
import AddTaskModal from "./components-App/AddTaskModal.jsx";
import EditTaskModal from "./components-App/EditTaskModal.jsx";

// Contextos.
import { ModalVisibilityProvider } from "./components-App/context-providers/ModalVisibilityProvider.jsx";
import { ThemeProvider } from "./components-App/context-providers/ThemeProvider.jsx";
import { TasksProvider } from "./components-App/context-providers/TasksProvider.jsx";

function App() {
  return (
    <>
      <TasksProvider>
        <ModalVisibilityProvider>
          <ThemeProvider>
            {/* Encabezado. */}
            <Header />

            {/* Componente con las 5 columnas. */}
            <TaskCardColumns />

            {/* Modal para Agregar tarea. */}
            <AddTaskModal />

            {/* Modal para Editar tarea. */}
            <EditTaskModal />
          </ThemeProvider>
        </ModalVisibilityProvider>
      </TasksProvider>
    </>
  )
}

export default App;