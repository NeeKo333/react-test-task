import React from "react";

const SelectSort = ({ setSorting }) => {
  return (
    <select onChange={(e) => setSorting(e.target.value)} name="select">
      <option disabled value="id">
        Sort
      </option>
      <option value="id">ID</option>
      <option value="text">Text</option>
    </select>
  );
};

export default SelectSort;
