import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import workout_data from "../../assets/static/workouts_data";
import Table from "../../components/Table/Table";
import SearchBox from "../../components/SearchBox/SearchBox";
import Pagination from "../../components/Pagination/Pagination";

const Workout = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [workoutData, ] = useState({
    workout: workout_data,
    loading: false,
    err: false,
  });
  const headers = [
    "bodyPart",
    "equipment",
    "gifUrl",
    "id",
    "name",
    "target",
    "secondaryMuscles__001",
    "secondaryMuscles__002",
    "secondaryMuscles__003",
    "instructions__001",
    "instructions__002",
    "instructions__003",
    "instructions__004",
    "instructions__005",
    "instructions__006",
    "instructions__007",
  ];
  const itemsPerPage = 10; // Number of items to display per page
  const totalWorkout = workoutData.workout.length;
  const totalPages = Math.ceil(totalWorkout / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const workoutForCurrentPage = workoutData.workout.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleSearchNavigation = (id) => {
    let found = workout_data.find((element) => element.id+"" === id);

    if (found) {
      navigate("/workouts/" + id);
    } else {
      alert("Record doesn't exist.");
    }
  };
  return (
    <div>
      {workoutData.loading ? (
        <div>Loading...</div>
      ) : workoutData.err ? (
        <div>Error: {workoutData.err}</div>
      ) : (
        <div>
          <SearchBox onSearch={(id) => handleSearchNavigation(id)} />
          <br />
          <Table
            head={headers}
            data={workoutForCurrentPage}
            func={(v) => navigate("/workouts/" + v)}
          />
          <br />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default Workout;
