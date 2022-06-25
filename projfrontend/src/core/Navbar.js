import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    // history.location.pathname will give the path of current location
    return { color: "green", borderBottom: "5px solid red" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Navbar = ({ history }) => {
  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <Link style={currentTab(history, "/")} className="nav-link" to="/">
            Home
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link
            style={currentTab(history, "/app")}
            className="nav-link"
            to="/app"
          >
            Cart
          </Link>
        </li> */}
        <li className="nav-item">
          <Link
            style={currentTab(history, "/profile")}
            className="nav-link"
            to="/user/dashboard"
          >
            Profile
          </Link>
        </li>
        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/user/dashboard")}
              className="nav-link"
              to="/user/dashboard"
            >
              UserDashBoard
            </Link>
          </li>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/admin/dashboard")}
              className="nav-link"
              to="/admin/dashboard"
            >
              A.DashBoard
            </Link>
          </li>
        )}
        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/signup")}
                className="nav-link"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/signin")}
                className="nav-link"
                to="/signin"
              >
                Sign In
              </Link>
            </li>
          </Fragment>
        )}
        {isAuthenticated() && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/logout")}
              className="nav-link"
              to="/"
              onClick={signout}
            >
              Logout
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default withRouter(Navbar);
