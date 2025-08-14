import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { checkLs, getEmptyUser } from "../utils/checkLs";


const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(checkLs());

   useEffect(() => {
      try {
         const storedUser = localStorage.getItem("userInfo");
         if (storedUser) {
            setUser(JSON.parse(storedUser));
         }
      } catch (error) {
         console.error("Ошибка при загрузке данных из localStorage:", error);
      }
   }, []);

   // Обновляем данные о пользователе и сохраняем в лс
   const updateUserInfo = (userData) => {
      setUser(userData);
      if (userData) {
         localStorage.setItem("userInfo", JSON.stringify(userData));
      } else {
         localStorage.removeItem("userInfo");
         setUser(getEmptyUser())
      }
   };

   const login = (loginData) => {
      updateUserInfo({...loginData, isAuth: true});
      return true;
   };

   const logout = () => {
      updateUserInfo(null);
      return true;
   };

   function setIsAuth(isAuth) {
      setUser({ ...user, isAuth })
   }

   return (
      <AuthContext.Provider value={{ user, login, logout, updateUserInfo, setIsAuth }}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;
