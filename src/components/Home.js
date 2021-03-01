import React from "react";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="home-image d-flex align-items-center justify-content-center">
        <div className="container">
          <div>
            <p>sales upto-80% off</p>
          </div>
          <div>
            <h1>Plants Store Sale</h1>
          </div>
          <div>
            <p>
              Pre-BaselWorld 2018-Jaquet Droz<br></br>Grande Seconde
            </p>
          </div>
          <div>
            <button className="btn btn-success ">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
