import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="w-100 d-flex justify-content-center mb-3">
      <button
        className="btn btn-light m-2"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>
      <span className="text-light d-flex align-items-center m-2">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        className="btn btn-light m-2"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
