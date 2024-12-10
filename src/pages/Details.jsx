import "../style/CourseDetail.scss";
import CalculateGrades from "./CalculateGrades";
export default function Details() {
  return (
    <>
      <section className="detail">
        <div className="detail__header">
          <div className="detail__header--logo">My Courses</div>
        </div>
        <h1 className="detail__title">
          Hello, [Name]! Here is your current academic progress:
        </h1>
        <section className="detail__info">
          <div className="detail__info--item">Course Code</div>
          <div className="detail__info--item">Teacher Name</div>
          <div className="detail__info--item">Current grade of Course</div>
          <div className="detail__info--item">Course total grade</div>
        </section>

        <CalculateGrades />
      </section>
    </>
  );
}
