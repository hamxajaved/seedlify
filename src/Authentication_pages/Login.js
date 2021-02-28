// @flow
import * as React from "react";
import auth from "../img/auth.jpg";
export function Login() {
  return (
    <div className="row h-100">
      <div className="col-sm-5 col-md-5 col-lg-5 bg-dark auth-image "></div>
      <div className="col-sm-7 col-md-7 col-lg-7 my-auto">
        <div className="auth-div">
          <form>
            <h3 className="text-center">Login</h3>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
