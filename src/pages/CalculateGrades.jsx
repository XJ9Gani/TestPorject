import React, { useState, useEffect } from "react";
import coursesData from "../courses.json";
import "../style/Calculator.scss";

const CalculateGrades = () => {
  const [course, setCourse] = useState("");
  const [receivedPoints, setReceivedPoints] = useState("");
  const [taskType, setTaskType] = useState("");
  const [grades, setGrades] = useState([]);
  const [result, setResult] = useState(null);
  const [maxPoints, setMaxPoints] = useState(null);
  const [courseName, setCourseName] = useState("");

  useEffect(() => {
    const savedCourse = localStorage.getItem("selectedCourse");
    const savedGrades = localStorage.getItem("grades");

    setCourseName(localStorage.getItem("currentCourse"));
    if (savedCourse && savedGrades) {
      setCourse(savedCourse);
      setGrades(JSON.parse(savedGrades));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("selectedCourse", course);
    localStorage.setItem("grades", JSON.stringify(grades));

    if (course) {
      const courseInfo = coursesData.find((c) => c.name === course);
      if (!courseInfo) {
        alert("Курс не найден!");
        return;
      }

      setMaxPoints(courseInfo.max_points);
    }

    const totalPoints = grades.reduce((acc, grade) => acc + grade.points, 0);

    if (maxPoints && totalPoints > maxPoints * grades.length) {
      alert("Invalid");
      return;
    }

    // Подсчет необходимого количества баллов
    const neededForRetake = maxPoints * 0.5 - totalPoints;
    const neededForScholarship = 70 - totalPoints;
    const neededForFullScore = maxPoints - totalPoints;
    const remainingPoints = 100 - totalPoints;

    // Результат для отображения
    setResult({
      neededForRetake: neededForRetake > 0 ? neededForRetake : 0, // Если баллов хватает, то 0
      neededForScholarship: neededForScholarship > 0 ? neededForScholarship : 0,
      neededForFullScore,
      remainingPoints, // Добавить оставшиеся баллы до 100
    });
  };

  const handleAddGrade = () => {
    const points = parseFloat(receivedPoints);
    if (isNaN(points) || points < 0 || points > 20) {
      alert("Invalid Variant");
      return;
    }

    if (!taskType) {
      alert("Enter task");
      return;
    }

    setGrades([...grades, { taskName: taskType, points: points }]);
    setReceivedPoints("");
    setTaskType("");
  };

  return (
    <div className="calc">
      <h1 style={{ fontSize: "5rem" }}>{courseName}</h1>
      <form onSubmit={handleSubmit}>
        <div className="calculate">
          <label>Add Points:</label>
          <input
            type="number"
            value={receivedPoints}
            onChange={(e) => setReceivedPoints(e.target.value)}
            max={20}
            min={0}
          />
          <input
            type="text"
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
            placeholder="Task name"
          />
          <button type="button" onClick={handleAddGrade}>
            Add
          </button>
        </div>

        <button type="submit">Calculate</button>
      </form>

      <div className="result">
        <h3>Added grades:</h3>
        <ul>
          {grades.map((grade, index) => (
            <li key={index}>
              {grade.taskName}: {grade.points}
            </li>
          ))}
        </ul>
        <p>
          <strong>Grades Sum:</strong>
          {grades.reduce((acc, grade) => acc + grade.points, 0)}
        </p>
      </div>

      {result && (
        <div>
          {course && maxPoints ? (
            <h2>Course result "{course}"</h2>
          ) : (
            <h2>Result</h2>
          )}
          <p>
            <strong>To avoid retake you need:</strong>{" "}
            {result.neededForRetake < 50
              ? `${result.neededForRetake} points`
              : "Course passed"}
          </p>
          <p>
            <strong>To get Scholarship:</strong>{" "}
            {result.neededForScholarship > 0
              ? `${result.neededForScholarship} points`
              : "You got it!"}
          </p>

          <p>
            <strong>To get A+ grade:</strong> {result.remainingPoints} points
          </p>
        </div>
      )}
    </div>
  );
};

export default CalculateGrades;
