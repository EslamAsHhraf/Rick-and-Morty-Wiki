import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./components/Pages/Episodes";
import Location from "./components/Pages/Location";
import CardDetails from "./components/Cards/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:id" element={<CardDetails></CardDetails>}></Route>
        <Route path="/episodes" element={<Episodes></Episodes>}></Route>
        <Route
          path="/episodes/:id"
          element={<CardDetails></CardDetails>}
        ></Route>
        <Route path="/location" element={<Location></Location>}></Route>

        <Route
          path="/location/:id"
          element={<CardDetails></CardDetails>}
        ></Route>
      </Routes>
    </Router>
  );
}
const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch}></Search>
      <div className="container">
        <div className="row">
          <Filters
            setSpecies={setSpecies}
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
          ></Filters>
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results}></Cards>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      ></Pagination>
    </div>
  );
};

export default App;
