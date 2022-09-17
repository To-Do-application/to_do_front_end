import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

const Router = () => {
  return (
    <Routes>
      <Route exact path={"/"} element={<LandingPage />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/register"} element={<RegisterPage />} />
      <Route path={"/dashboard"} element={<DashboardPage />} />
    </Routes>
  );
};
export default Router;
