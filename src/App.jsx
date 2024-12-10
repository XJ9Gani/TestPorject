import { BrowserRouter, useLocation } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import "./style/Global.scss";

export default function App() {
  const [user, setUser] = useState();
  const location = useLocation();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsedData = JSON.parse(userData);
      setUser(parsedData.name);
    }
  }, []);

  return (
    <>
      <Header />
      {location.pathname !== "/policy" &&
      location.pathname !== "/logIn" &&
      location.pathname !== "/singUp" &&
      location.pathname !== "/about" ? (
        <div className="globalName">{user}</div>
      ) : (
        ""
      )}
      <AppRouter />
      <Footer />
    </>
  );
}
