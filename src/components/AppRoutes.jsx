import { Routes, Route, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "../pages/MainPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import NotFoundPage from "../pages/NotFound";
import ExitUserPage from "../pages/ExitUserPage";
import AddNewCardPage from "../pages/AddNewCardPage";
import EdCardPage from "../pages/EdCardPage";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
   const [isAuth, setIsAuth] = useState(false);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 3000);
   }, []);

   return (
      <Routes>
         {/* Главная страница */}
         <Route element={<PrivateRoute isAuth={isAuth} />}>
            <Route path="/" element={<MainPage loading={loading} />}>
               <Route path="cards" element={<Outlet />}>
                  <Route path=":id" element={<EdCardPage />} />
                  <Route path="create" element={<AddNewCardPage />} />
               </Route>
               <Route path="exit" element={<ExitUserPage setIsAuth={setIsAuth} />} />
            </Route>
         </Route>

         {/* Страница входа */}
         <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
         {/* Страница регистрации */}
         <Route path="/sign-up" element={<SignUpPage />} />
         {/* Страница 404 */}
         <Route path="/*" element={<NotFoundPage />} />
      </Routes>
   );
}

export default AppRoutes;
