import React from "react";
import FilterBTN from "../FilterBTN";

const Status = ({ setPageNumber, setStatus }) => {
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((items, index) => (
            <FilterBTN
              key={index}
              name="status"
              index={index}
              input={items}
              task={setStatus}
              setPageNumber={setPageNumber}
            ></FilterBTN>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
