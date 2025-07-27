import { useContext, useState, useEffect } from "react";
import { fetchTasks } from "../services/api";
import { AuthContext } from "./AuthContext";
import { TasksContext } from "./TasksContext";


const TasksProvider = ({ children }) => {
   const [tasks, setTasks] = useState([]);
   const [hasGot, setHasGot] = useState(false);
   const [error, setError] = useState("");
   const { user } = useContext(AuthContext);


   useEffect(() => {
      const loadTasks = async () => {
         setHasGot(false);
         try {
            const data = await fetchTasks(user.token);
            if (data) setTasks(data);
         } catch (err) {
            setError(err.message);
            console.err("Ошибка загрузки задач", err.message);
         } finally {
            setHasGot(true);
         }
      };
      loadTasks();
   }, [user.token]);


  


   return (
      <TasksContext.Provider value={{ tasks, setTasks, hasGot, error }}>
         {children}
      </TasksContext.Provider>
   );
};

export default TasksProvider;
