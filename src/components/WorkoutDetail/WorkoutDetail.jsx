import "./WorkoutDetail.css";
import React from "react";
import { GiReturnArrow } from "react-icons/gi";
import { useParams, useNavigate } from "react-router-dom";
import workout_data from "../../assets/static/workouts_data";

const WorkoutDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const get_workout = () => {
    return workout_data.filter((item) => item.id+"" === id)[0];
  };

  return (
    <div className="workout-detail text-light">
      <div className="exercise-detail">
        <h2 className="text-darkblue">{get_workout().name}</h2>
        <div className="exercise-detail-inf mb-2">
          <p>
            <span className="text-darkblue fw-bold">Body Part:</span>{" "}
            {get_workout().bodyPart}
          </p>
          <p>
            <span className="text-darkblue fw-bold">Equipment:</span>{" "}
            {get_workout().equipment}
          </p>
          <p>
            <span className="text-darkblue fw-bold">Target:</span>{" "}
            {get_workout().target}
          </p>
          <div className="exercise-detail-div">
            <span className="text-darkblue fw-bold">Secondary Muscles</span>
            <ul>
              {get_workout().secondaryMuscles__001 && (
                <li>{get_workout().secondaryMuscles__001}</li>
              )}
              {get_workout().secondaryMuscles__002 && (
                <li>{get_workout().secondaryMuscles__002}</li>
              )}
              {get_workout().secondaryMuscles__003 && (
                <li>{get_workout().secondaryMuscles__003}</li>
              )}
            </ul>
          </div>
        </div>
        <div className="exercise-instructions mb-2">
          <h3 className="text-darkblue">Instructions:</h3>
          <ol>
            {get_workout().instructions__001 && (
              <li>{get_workout().instructions__001}</li>
            )}
            {get_workout().instructions__002 && (
              <li>{get_workout().instructions__002}</li>
            )}
            {get_workout().instructions__003 && (
              <li>{get_workout().instructions__003}</li>
            )}
            {get_workout().instructions__004 && (
              <li>{get_workout().instructions__004}</li>
            )}
            {get_workout().instructions__005 && (
              <li>{get_workout().instructions__005}</li>
            )}
            {get_workout().instructions__006 && (
              <li>{get_workout().instructions__006}</li>
            )}
            {get_workout().instructions__007 && (
              <li>{get_workout().instructions__007}</li>
            )}
          </ol>
        </div>
        <div className="text-center">
          <img src={get_workout().gifUrl} alt="" />
        </div>
      </div>
      <span
        className="return-btn btn btn-info"
        onClick={() => navigate("/workouts")}
      >
        <GiReturnArrow />
      </span>
    </div>
  );
};

export default WorkoutDetail;
