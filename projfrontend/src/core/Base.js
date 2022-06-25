import React from "react";
import Navbar from "./Navbar";

const Base = ({
  title = "Title",
  description = "description",
  className = " text-light p-3",
  children,
}) => (
  <div>
    <Navbar />
    <div className="container-fluid">
      <div
        className="jumbotron text-center "
        style={{ background: "transparent" }}
      >
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>

      <div className={className}>{children}</div>
    </div>
    <footer className=" footer mt-auto py-4">
      <div className="container-fluid text-white text-center px-3">
        <h2>Reach us at any time</h2>
        <button className="btn btn-danger">Contact US</button>
      </div>
      <div className="container">
        <p className="text-muted">
          This is your <span className="text-light">WORLD</span>
        </p>
      </div>
    </footer>
  </div>
);

export default Base;
