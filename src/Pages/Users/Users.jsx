import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../../assets/static/users";
import Table from "../../components/Table/Table";
import Pagination from "../../components/Pagination/Pagination";
import SearchBox from "../../components/SearchBox/SearchBox";

const Users = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [usersData, ] = useState({
    users: users,
    err: null,
    loading: false,
  });
  const headers = [
    "_id",
    "name",
    "email",
    "age",
    "height",
    "neck",
    "waist",
    "weight",
    "gender",
    "activity",
    "bmi",
    "bfp",
    "cal",
    "protein",
    "carbpercal",
    "carbpergram",
    "bmr",
    "sugar",
  ]; // 'password', 'id', 'activity', '__v'
  const itemsPerPage = 10; // Number of items to display per page
  const totalUsers = usersData.users.length;
  const totalPages = Math.ceil(totalUsers / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersForCurrentPage = usersData.users.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleSearchNavigation = (id) => {
    let found = users.find((element) => element._id+"" === id);

    if (found) {
      navigate("/users/" + id);
    } else {
      alert("User doesn't exist.");
    }
  };

  return (
    <div>
      {usersData.loading ? (
        <div>Loading...</div>
      ) : usersData.err ? (
        <div>Error: {usersData.err}</div>
      ) : (
        <div>
          <SearchBox onSearch={(id) => handleSearchNavigation(id)} />
          <br />
          <Table
            head={headers}
            data={usersForCurrentPage}
            func={(v) => navigate("/users/" + v)}
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

export default Users;
