import "../style/Dashboard.scss";
import { Icon } from "../Icon";
import { NavLink } from "react-router-dom";

export default function StudentDashboard() {
  const students = [
    {
      id: 1,
      course: "Math",
      code: "MATH101",
      currentGrade: 4.5,
    },
    {
      id: 2,
      course: "Physics",
      code: "PHYS202",
      currentGrade: 5.0,
    },
    {
      id: 3,
      course: "It Programming",
      code: "CS301",
      currentGrade: 3.8,
    },
    {
      id: 4,
      course: "Chemistry",
      code: "CHEM150",
      currentGrade: 4.2,
    },
    {
      id: 5,
      course: "Literature",
      code: "LIT420",
      currentGrade: 3.9,
    },
    {
      id: 6,
      course: "Economy",
      code: "ECON103",
      currentGrade: 4.7,
    },
  ];

  console.log(students);

  return (
    <>
      <section className="dashboard">
        <div className="dashboard__header">
          <div className="dashboard__header--logo">My Courses</div>
          <h3 className="dashboard__header--text">
            Here you can view all the courses that you have added to the system.
            Click on the course for detailed information about assignments and
            grades.
          </h3>
        </div>
        <h1 className="dashboard__title">
          Hello, [Name]! Here is your current academic progress:
        </h1>

        <ul className="dashboard__cards">
          {students.map((el) => (
            <li key={el.id} className="dashboard__cards--item">
              <div className="upSide">
                <span>{Icon.cardIcon}</span>
                <div className="upSide__text">
                  <h2 className="upSide__text--code">{el.code}</h2>
                  <h1 className="upSide__text--course">{el.course}</h1>
                </div>
              </div>
              <div className="downSide">
                <h1>Current Grade :{el.currentGrade}</h1>
                <NavLink to="/courseDetial" className="downSide__btn">
                  See Details
                </NavLink>
              </div>
            </li>
          ))}
        </ul>

        <button className="delete__btn">Delete Course</button>
      </section>
    </>
  );
}
