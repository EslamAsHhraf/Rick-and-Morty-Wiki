import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import InputGroup from "../Filters/Category/InputGroup";
const Episodes = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;
  let [results, setResults] = useState([]);
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let dataCharacters = await Promise.all(
        data.characters.map((ele) => {
          return fetch(ele).then((res) => res.json());
        })
      );
      setResults(dataCharacters);
    })();
  }, [api]);
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-3">
          Episode name :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">Air Date {air_date}</h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup name="Episode" changeID={setId} total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
