import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({ setPageNumber, setStatus, setGender, setSpecies }) => {
  let clear = () => {
    setPageNumber("");
    setStatus("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12">
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Clear Filter
      </div>
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber}></Status>
        <Gender setGender={setGender} setPageNumber={setPageNumber}></Gender>
        <Species
          setSpecies={setSpecies}
          setPageNumber={setPageNumber}
        ></Species>
      </div>
    </div>
  );
};

export default Filters;
