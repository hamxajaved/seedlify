// @flow
import * as React from "react";
function Register() {
  return (
    <div className="container-fluid row ">
      <div className="col-sm-4 col-md-4 col-lg-4 bg-dark">
        <p>Image</p>
      </div>
      <div className="col-sm-8 col-md-8 col-lg-8 bg-light">
        <div className="auth-div"></div>
        <form>
          <h3>Sign up</h3>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="name"
              placeholder="First Name"
              className="form-control"
            ></input>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="form-control"
            ></input>
          </div>

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
            <label>Confirm Email</label>
            <input
              type="email"
              name="confirm_email"
              placeholder="Confirm email"
              className="form-control"
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
            ></input>
          </div>
          <div className="form-group">
            <label>Confirm password</label>
            <input
              type="password"
              name="password_confirmation"
              placeholder="confirm password"
              className="form-control"
            ></input>
          </div>

          <button className="btn btn-primary ">Register</button>
        </form>
      </div>
    </div>
  );
}
export default Register;
