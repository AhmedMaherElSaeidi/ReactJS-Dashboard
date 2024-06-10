import "./UserDetail.css";
import React from "react";
import users from "../../assets/static/users";
import { GiReturnArrow } from "react-icons/gi";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const get_user = () => {
    return users.filter((item) => item._id+"" === id)[0];
  };

  return (
    <div className="user-detail text-light">
      <h2 className="text-darkblue">User Details</h2>
      <p>
        <span className="text-darkblue-bold">id:</span> {get_user()._id}
      </p>
      <p>
        <span className="text-darkblue-bold">Name:</span> {get_user().name}
      </p>
      <p>
        <span className="text-darkblue-bold">Email:</span> {get_user().email}
      </p>
      <p>
        <span className="text-darkblue-bold">Age:</span> {get_user().age}
      </p>
      <p>
        <span className="text-darkblue-bold">Gender:</span> {get_user().gender}
      </p>
      <p>
        <span className="text-darkblue-bold">Height:</span> {get_user().height}
      </p>
      <p>
        <span className="text-darkblue-bold">Weight:</span> {get_user().weight}
      </p>
      <p>
        <span className="text-darkblue-bold">Activity:</span> {get_user().activity}
      </p>
      <p>
        <span className="text-darkblue-bold">bmi:</span> {get_user().bmi}
      </p>
      <p>
        <span className="text-darkblue-bold">BFP:</span> {get_user().bfp}
      </p>
      <p>
        <span className="text-darkblue-bold">cal:</span> {get_user().cal}
      </p>
      <p>
        <span className="text-darkblue-bold">protein:</span> {get_user().protein}
      </p>
      <p>
        <span className="text-darkblue-bold">carbpercal:</span>
        {get_user().carbpercal}
      </p>
      <p>
        <span className="text-darkblue-bold">carbpergram:</span>
        {get_user().carbpergram}
      </p>
      <p>
        <span className="text-darkblue-bold">bmr:</span> {get_user().bmr}
      </p>
      <p>
        <span className="text-darkblue-bold">sugar:</span> {get_user().sugar}
      </p>
      <span
        className="return-btn btn btn-info mt-3"
        onClick={() => navigate("/users")}
      >
        <GiReturnArrow />
      </span>
    </div>
  );
};

export default UserDetail;
