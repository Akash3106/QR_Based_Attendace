import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper/index";
import Base from "../core/Base";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;

  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data && data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch((error) => console.log("Error a agya"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const signinForm = () => {
    return (
      <div class="row">
        <div class="col-md-4 mx-auto">
          <div class="myform form ">
            <form action="" method="post" name="login">
              <div class="form-group">
                <input
                  type="email"
                  name="email"
                  class="form-control my-input"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleChange("email")}
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  min="0"
                  name="password"
                  id="password"
                  class="form-control my-input"
                  placeholder="Password"
                  onChange={handleChange("password")}
                  value={password}
                />
              </div>
              <div class="text-center ">
                <button
                  type="submit"
                  class=" btn btn-block send-button tx-tfm"
                  onClick={onSubmit}
                >
                  Sign In
                </button>
              </div>

              <p class="small mt-3">
                By signing up, you are indicating that you have read and agree
                to the{" "}
                <a href="#" class="ps-hero__content__link">
                  Terms of Use
                </a>{" "}
                and <a href="#">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const loadingMessage = () => {
    return (
      loading && ( // if loading is true than other will show , because 2nd part is just the component
        <div className="alert aleart-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div
        className=" alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  return (
    <Base title="Signup Page" description="">
      {loadingMessage()}
      {errorMessage()}
      {signinForm()}
      {performRedirect()}
      <p className="text-dark text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signin;
