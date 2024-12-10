import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.scss";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = localStorage.getItem("userData");

    if (userData) {
      const parsedData = JSON.parse(userData);

      if (email === parsedData.email && password === parsedData.password) {
        navigate("/");
      } else {
        setErrorMessage("Incorrect email or password.");
      }
    } else {
      setErrorMessage("No user data found. Please sign up first.");
    }
  };

  return (
    <section className="login">
      <div className="login__img"></div>
      <form className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__form--title">Login into your account</h1>
        <div className="container">
          <input
            type="text"
            className="login__form--input"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <span className="login__form--icon"></span>
        </div>
        <div className="container">
          <input
            type="password"
            className="login__form--input"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="login__form--icon"></span>
        </div>
        {errorMessage && <p className="login__form--error">{errorMessage}</p>}{" "}
        <button type="submit" className="login__form--btn">
          Log In
        </button>
        <button
          type="button"
          className="login__form--btn"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </form>
    </section>
  );
}
