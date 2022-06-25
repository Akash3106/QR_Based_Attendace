import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper/index";
import Base from "../core/Base";

const AdminDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h2 className="card-header bg-dark text-white">MENU</h2>
        <ul className="list-group bg-dark">
          <li className="list-group-list">
            <Link to="/admin/create/category" className="nav-link text-success">
              Create class
            </Link>
          </li>
          {/* <li className="list-group-list">
            <Link to="/admin/categories" className="nav-link text-success">
              Manage Categories
            </Link>
          </li> */}
          {/* <li className="list-group-list">
            <Link to="/admin/create/product" className="nav-link text-success">
              Create Product
            </Link>
          </li> */}
          {/* <li className="list-group-list">
            <Link to="/admin/Qrcode" className="nav-link text-success">
              Manage Products
            </Link>
          </li> */}
          <li className="list-group-list">
            <Link to="/admin/Qrcode" className="nav-link text-success">
              Generate QR
            </Link>
          </li>
          <li className="list-group-list">
            <Link to="/admin/attendances" className="nav-link text-success">
              Attendance
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h2 className="card-header"> Admin Information </h2>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Name:</span>
            {name}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Email:</span>
            {email}
          </li>
        </ul>
      </div>
    );
  };
  return (
    <div>
      <Base
        className="container"
        title="Welcome Admin"
        description="Here Admin's Power"
      >
        <div className="row">
          <div className="col-md-3">{adminLeftSide()}</div>
          <div className="col-md-9">{adminRightSide()}</div>
        </div>
      </Base>
    </div>
  );
};

export default AdminDashBoard;
