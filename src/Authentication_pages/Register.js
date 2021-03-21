// @flow
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Register() {
  let history = useHistory();

  const [state, setState] = useState({
    name: "",
    email: "",
    address: "Lahore",
    password: "",
    password_confirmaton: "",
  });
  const url = "http://localhost:8000/api/register";

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(url, state).then((response) => {
      console.log("Response from register api : ", response.data);
      history.push("/login");
    });
  };

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  }

  return (
    <div className="row h-100">
      <div className="col-sm-5 col-md-5 col-lg-5 auth-image bg-dark"></div>
      <div className="col-sm-7 col-md-7 col-lg-7 my-auto ">
        <div className="auth-div rg">
          <form onSubmit={handleSubmit}>
            <div className="text-center">
              <h3>Sign up</h3>
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="First Name"
                className="form-control"
                onChange={handleChange}
              ></input>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                onChange={handleChange}
              ></input>
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="form-control"
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label>Confirm password</label>
              <input
                type="password"
                name="password_confirmation"
                placeholder="confirm password"
                className="form-control"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              {" "}
              <button className="btn btn-primary btn-block">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
