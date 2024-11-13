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
        <nav className="auth_nav">
          <NavLink to={"/logIn"} className="auth_nav-login">
            LOGIN
          </NavLink>
          <NavLink to={"/singUp"} className="auth_nav-reg">
            REGISTRATION
          </NavLink>
        </nav>
      </header>
    </>
  );
}
