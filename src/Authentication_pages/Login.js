// @flow
import * as React from "react";
export function Login() {
  return (
    <div className="container-fluid row ">
      <div className="col-sm-4 col-md-4 col-lg-4 bg-dark">
        <p>Image</p>
      </div>
      <div className="col-sm-8 col-md-8 col-lg-8 bg-light">
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

            <button className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
