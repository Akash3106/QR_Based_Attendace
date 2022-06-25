import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { createCategory } from "./helper/adminapicall";

const UpdateCategory = () => {
  const [name, setName] = useState();
  const [error, setError] = useState(false);
  const [Success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const goBack = () => (
    <div className="mt-5">
      <Link className="btn btn-sm btn-dark mb-3" to="/admin/dashboard">
        Admin Home
      </Link>
    </div>
  );

  const handelChange = (event) => {
    setError("");
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    createCategory(user._id, token, { name }).then((data) => {
      if (data?.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setName("");
      }
    });
  };

  const myCategoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead"> Enter the Category</p>
        <input
          type="text"
          className="form-control my-3"
          autoFocus
          required
          value={name}
          placeholder="Enter ..."
          onChange={handelChange}
        ></input>
        <button onClick={onSubmit} className="btn btn-outline-info">
          Submit
        </button>
      </div>
    </form>
  );

  return (
    <Base
      title="Create a Category"
      description="Add a new Category Here"
      className="container"
    >
      <div className="bg-dark p-4">
        <div className=" col-md-8 offset-md-2 bg-white p-4 ">
          {myCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Base>
  );
};

export default UpdateCategory;
