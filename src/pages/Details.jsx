import "../style/CourseDetail.scss";
import CalculateGrades from "./CalculateGrades";
import { useState, useEffect } from "react";
export default function Details() {
  const [user, setUser] = useState();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsedData = JSON.parse(userData);
      setUser(parsedData.name);
    }
  }, []);
  return (
    <>
      <section className="detail">
        <div className="detail__header">
          <div className="detail__header--logo">My Courses</div>
        </div>
        <h1 className="detail__title">
          Hello, {user}! Here is your current academic progress:
        </h1>
        <section className="detail__info">
          <div className="detail__info--item">
            Course Code
            <p style={{ fontSize: "1rem", color: "white" }}>Mat 180</p>
          </div>
          <div className="detail__info--item">
            Teacher Name
            <p style={{ fontSize: "1rem", color: "white" }}>
              Mugalim Teacherevich
            </p>
          </div>
        </section>

        <CalculateGrades />
      </section>
    </>
  );
}
