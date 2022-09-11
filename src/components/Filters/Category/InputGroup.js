import React from "react";

const InputGroup = ({ name, changeID, total }) => {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="form-select"
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((ele) => {
          return (
            <option value={ele + 1}>
              {name} - {ele + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
