import React from "react";

const SearchInput = ({ setSearchQuery }) => {
  return (
    <input
      onChange={(e) => {
        setSearchQuery(e.target.value);
      }}
      type="text"
    ></input>
  );
};

export default SearchInput;
