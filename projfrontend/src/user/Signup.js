import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import "./signup.css";
import { signup } from "../auth/helper";

const Signup = () => {
  const [values, setValues] = useState({
    //here "setValues" is a method
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values; //this is a desturucting of the state name "values".

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  const signupFrom = () => {
    return (
      <div class="row">
        <div class="col-md-4 mx-auto">
          <div class="myform form ">
            <form action="" method="post" name="login">
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control my-input"
                  id="name"
                  onChange={handleChange("name")}
                  placeholder="Name"
                  value={name}
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  name="email"
                  value={email}
                  class="form-control my-input"
                  onChange={handleChange("email")}
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  min="0"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handleChange("password")}
                  class="form-control my-input"
                  placeholder="Password"
                />
              </div>
              <div class="text-center ">
                <button
                  type="submit"
                  onClick={onSubmit}
                  class=" btn btn-block send-button tx-tfm"
                >
                  Create Your Free Account
                </button>
              </div>

              <p class="small mt-3">
                By signing up, you are indicating that you have read and agree
                to the {JSON.stringify(values)}
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

  const successMessage = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: success ? "" : "none" }}
      >
        New Account was created successfully. Please
        <Link to="/signin">Login Here </Link>
      </div>
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
      {successMessage()}
      {errorMessage()}
      {signupFrom()}
    </Base>
  );
};

export default Signup;
