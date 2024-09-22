import React from "react";

import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder || "search text"}
      onChange={onChangeHandler}
    ></input>
  );
};

export default SearchBox;
