import { createContext } from "react";

export const TasksContext = createContext({
    tasks: [],
    setTasks: () => { },
    hasGot: false,
    error: "",
});
