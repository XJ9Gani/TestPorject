import "../style/Login.scss";
export default function LogIn() {
  return (
    <>
      <section className="login">
        <div className="login__img"></div>
        <form className="login__form">
          <h1 className="login__form--title">Login into your account</h1>

          <div className="container">
            <input
              type="text"
              className="login__form--input"
              placeholder="Email"
            />
            <span className="login__form--icon"></span>
          </div>
          <div className="container">
            <input
              type="password"
              className="login__form--input"
              placeholder="Password"
            />
            <span className="login__form--icon"></span>
          </div>

          <button className="login__form--btn">Log In</button>
          <button className="login__form--btn">Sing Up</button>
        </form>
      </section>
    </>
  );
}
