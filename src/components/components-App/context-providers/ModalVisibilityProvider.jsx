import { useState, createContext, useContext } from "react";

const ModalVisibilityContext = createContext();

export function ModalVisibilityProvider({ children }) {
    const [isAddTaskModalShowing, setIsAddTaskModalShowing] = useState(false);
    const [isEditTaskModalShowing, setIsEditTaskModalShowing] = useState(false);

    return (
        <ModalVisibilityContext.Provider value={{ isAddTaskModalShowing, isEditTaskModalShowing, setIsAddTaskModalShowing, setIsEditTaskModalShowing }}>
            {children}
        </ModalVisibilityContext.Provider>
    );
}

export function useModalVisibilityContext() {
    return useContext(ModalVisibilityContext);
}