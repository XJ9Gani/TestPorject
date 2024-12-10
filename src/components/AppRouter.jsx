import {
  Details,
  Home,
  LogIn,
  SingUp,
  StudentDashboard,
  CalculateGrades,
} from "../pages";
import { useRoutes } from "react-router-dom";
import Policy from "../pages/Policy";
import About from "../pages/About";
import Analisys from "../pages/Analisys";
export default function AppRouter() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/singUp", element: <SingUp /> },
    { path: "/logIn", element: <LogIn /> },
    { path: "/dashboard", element: <StudentDashboard /> },
    { path: "/courseDetial", element: <Details /> },
    { path: "/calculateGrade", element: <CalculateGrades /> },
    { path: "/policy", element: <Policy /> },
    { path: "/about", element: <About /> },
    { path: "/analisys", element: <Analisys /> },
  ]);

  return routes;
}
