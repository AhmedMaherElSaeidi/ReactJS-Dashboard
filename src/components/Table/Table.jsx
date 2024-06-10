import "./Table.css";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Table = ({ head, data, func }) => {
  return (
    <div className="react-table">
      <div className="table-responsive table--no-card m-b-30">
        <table className="table table-borderless table-striped table-earning">
          <thead>
            <tr>
              <th>INDEX</th>
              {head.map((columnName, index) =>
                "_id".includes(columnName) ? null : (
                  <th key={index}>{columnName}</th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index} className="table-row">
                <td onClick={() => func(entry["_id"] || entry["id"])}>
                  <FaSearch />
                </td>
                {head.map((key, index) =>
                  "_id".includes(key) ? null : <td key={index}>{entry[key]}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
