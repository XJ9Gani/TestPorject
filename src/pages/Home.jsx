import { Icon } from "../Icon";
import "../style/Home.scss";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <>
      <section className="intro">
        <div className="intro__container">
          <div className="intro__text">
            <h1 className="intro__text--title">
              Manage your academic progress
            </h1>
            <h3 className="intro__text--subtitle">
              Welcome to the academic progress tracking website
            </h3>
            <NavLink to={"/logIn"} className="intro__text--login">
              LOGIN
            </NavLink>
          </div>
          <div className="intro__img"> </div>
        </div>
      </section>
      <section className="service">
        <div className="service__header">
          <div className="service__header--logo">SERVES</div>
          <h3 className="service__header--text">
            At SDUlik, we provide a range of tools and features to help students
            succeed in their academic journey. These features include
          </h3>
        </div>

        <div className="service__cards">
          <div className="card1">
            <h1 className="card1__title">Add courese and grades</h1>
            <div className="card1__img">{Icon.card1Pick}</div>
          </div>
          <div className="card2">
            <h1 className="card2__title">Student Dashboard</h1>
            <div className="card2__img">{Icon.card2Pick}</div>
          </div>
          <div className="card3">
            <h1 className="card3__title">Perfomance Analysis</h1>
            <div className="card3__img">{Icon.card3Pick}</div>
          </div>
          <div className="card4">
            <h1 className="card4__title">Goal Forecasts</h1>
            <div className="card4__img">{Icon.card4Pick}</div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="contact__header">
          <div className="contact__header--logo">Contact Us</div>
          <h3 className="contact__header--text">
            Connect with Us: Let's Discuss Your Needs
          </h3>
        </div>

        <form action="" className="contact__form">
          <input className="contact__form--input" id="" placeholder="Name" />

          <input className="contact__form--input" id="" placeholder="Email" />

          <textarea
            className="contact__form--textarea"
            id=""
            placeholder="Write some message"
          ></textarea>
        </form>
      </section>
    </>
  );
}
