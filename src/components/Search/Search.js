import React from "react";
import styles from "./Search.module.scss";
const Search = ({ setPageNumber, setSearch }) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        className={`${styles.input}`}
        placeholder="Search for characters"
        type="text"
      ></input>
      <button className={`btn btn-primary fs-5 ${styles.btn}`}>Search</button>
    </form>
  );
};

export default Search;
