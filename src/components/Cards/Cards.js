import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Cards = ({ results, page }) => {
  let display;
  if (results) {
    display = results.map((ele) => {
      let { id, image, name, location, status } = ele;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.cards} d-flex flex-column justify-content-center`}
          >
            <img
              src={image}
              alt={name}
              className={` ${styles.img} img-fluid`}
            ></img>
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div>
                <div className="fs-6 ">Last location</div>
                <div className=" fs-5 ">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No Cahracters Found :(";
  }
  return <>{display}</>;
};

export default Cards;
