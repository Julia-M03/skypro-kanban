import { createContext } from "react";

export const TasksContext = createContext({
    tasks: [],
    loging: false,
    error: "",
}); // Создали контекст слов