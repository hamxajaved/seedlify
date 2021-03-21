// @flow
import React, { useState } from "react";
import auth from "../img/auth.jpg";
import axios from "axios";
import { useHistory } from "react-router-dom";

export function Login() {
  let history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const url = "http://localhost:8000/api/login";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("State : ", state);
    axios.post(url, state).then((response) => {
      response.data
        ? console.log("Condition is false in response ", response.data)
        : console.log("Response from register api : ", response.data);
      history.push("/");
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
      <div className="col-sm-5 col-md-5 col-lg-5 bg-dark auth-image "></div>
      <div className="col-sm-7 col-md-7 col-lg-7 my-auto">
        <div className="auth-div">
          <form onSubmit={handleSubmit}>
            <h3 className="text-center">Login</h3>
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
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="form-control"
                onChange={handleChange}
              ></input>
            </div>
            <br></br>
            <div>
              <button className="btn btn-primary btn-block">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
