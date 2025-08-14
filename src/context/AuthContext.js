import { createContext } from "react";

export const AuthContext = createContext({
    token: "",
    name: "",
    setTasks: () => { },
    hasGot: false,
    error: "",
    isAuth: false,
});
