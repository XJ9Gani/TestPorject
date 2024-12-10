import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
import "../style/SingUp.scss";

export default function SingUp() {
  // Состояние для хранения значений формы
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate(); // Инициализация хука для перенаправления

  // Обработчик изменения полей
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    // Сохраняем данные в localStorage
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Data saved to localStorage!");

    // Перенаправляем на главную страницу
    navigate("/"); // Здесь "/" - это путь главной страницы
  };

  return (
    <section className="sing">
      <form className="sing__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="sing__form--input"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="surname"
          className="sing__form--input"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="sing__form--input"
          placeholder="Mail"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          className="sing__form--input"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="sing__form--input"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          className="sing__form--input"
          placeholder="Confirm"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit" className="sing__form--btn">
          Sign Up
        </button>
      </form>
      <div className="sing__img"></div>
    </section>
  );
}
