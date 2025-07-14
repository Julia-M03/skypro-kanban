import { useContext, useState, useEffect } from "react";
import { fetchTasks, postTask, editTask } from "../services/api";
import { AuthContext } from "./AuthContext";
import { TasksContext } from "./TasksContext";


export const TasksProvider = ({ children }) => {
   const [tasks, setTasks] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");
   const { user } = useContext(AuthContext);


   useEffect(() => {
      const loadTasks = async () => {
        setLoading(true);
         try {
            const data = await fetchTasks({ token: user.token });
            if (data) setTasks(data);
         } catch (err) {
            setError(err.message);
            console.err("Ошибка загрузки слов", err.message);
         } finally {
            setLoading(false);
         }
      };
      loadTasks();
   }, [user.token]);


   const addNewTask = async ({ task }) => {
      try {
         const newTasks = await postTask({ token: user?.token, task });
         setTasks(newTasks);
      } catch (error) {
         console.error("Ошибка добавления слова", error);
      }
   };


   const updateTask = async ({ task, id }) => {
      try {
         const newTasks = await editTask({ token: user?.token, id, task });
         setTasks(newTasks);
      } catch (error) {
         console.error("Ошибка редактирования слова", error);
   }
   };


   return (
      <TasksContext.Provider value={{ tasks, setTasks, loading, error }}>
         {children}
      </TasksContext.Provider>
   );
};