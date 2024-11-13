import "../style/SingUp.scss";
export default function SingUp() {
  return (
    <>
      <section className="sing">
        <form className="sing__form">
          <input
            type=" text"
            className="sing__form--input"
            id=""
            placeholder="Name"
          />
          <input
            type=" text"
            className="sing__form--input"
            id=""
            placeholder="Surname"
          />
          <input
            type=" text"
            className="sing__form--input"
            id=""
            placeholder="Mail"
          />
          <input
            type=" text"
            className="sing__form--input"
            id=""
            placeholder="Phone number"
          />
          <input
            type="password"
            className="sing__form--input"
            id=""
            placeholder="Password"
          />
          <input
            type=" password"
            className="sing__form--input"
            id=""
            placeholder="Confirm"
          />
          <button className="sing__form--btn">Sing Up</button>
        </form>
        <div className="sing__img"></div>
      </section>
    </>
  );
}
