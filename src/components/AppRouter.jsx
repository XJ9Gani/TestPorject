import { Details, Home, LogIn, SingUp, StudentDashboard } from "../pages";
import { useRoutes } from "react-router-dom";
export default function AppRouter() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/singUp", element: <SingUp /> },
    { path: "/logIn", element: <LogIn /> },
    { path: "/dashboard", element: <StudentDashboard /> },
    { path: "/courseDetial", element: <Details /> },
  ]);

  return routes;
}
