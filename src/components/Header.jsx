import "../style/Header.scss";
import { Icon } from "../Icon";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="header">
        <NavLink className="logo" to="/">
          {Icon.logo}
        </NavLink>
        <nav className="pages_nav">
          <NavLink to={"/dashboard"} className="auth_nav-login">
            Student Dashboard
          </NavLink>
          <NavLink to={"/policy"} className="auth_nav-login">
            Privecy Policy
          </NavLink>
          <NavLink to={"/about"} className="auth_nav-login">
            About us
          </NavLink>

          <NavLink to={"/analisys"} className="auth_nav-login">
            Analysis
          </NavLink>
        </nav>

        <nav className="auth_nav">
          <NavLink to={"/logIn"} className="auth_nav-login yellow">
            LOGIN
          </NavLink>
          <NavLink to={"/singUp"} className="auth_nav-reg yellow">
            REGISTRATION
          </NavLink>
        </nav>
      </header>
    </>
  );
}
