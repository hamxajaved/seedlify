// @flow
import * as React from "react";
import { BsEnvelope, BsPhone } from "react-icons/bs";
function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pt-4  fixed-bottom">
      <div className="container text-centered text-md-left">
        <div className="row text-centered text-md-left">
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-4">
            <h3 className="mb-4 font-weight-bold text-warning">Seedlify</h3>
            <p>
              Here we have to write some thing about our company's main
              statement .... Mery samjh chy kuj ni area jo marzi likh dea j...!!{" "}
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-2">
            <h5 className="mb-4 font-weight-bold text-warning">
              Let US help You
            </h5>
            <a className="text-white" href="#">
              Account details
            </a>
            <br></br>
            <a className="text-white" href="#">
              Order History
            </a>
            <br></br>
            <a className="text-white" href="#">
              Find Product
            </a>
            <br></br>
            <a className="text-white" href="#">
              Track Order
            </a>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold text-warning">Contact US</h5>
            <h6>
              <BsEnvelope /> info@seedlify.com
            </h6>
            <h6>
              <BsPhone /> 0300-1234567{" "}
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
