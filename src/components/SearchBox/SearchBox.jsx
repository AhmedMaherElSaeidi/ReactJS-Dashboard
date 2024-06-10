import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <div className="input-group-append">
        <button
          className="btn btn-info"
          onClick={handleSearch}
          type="button"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
