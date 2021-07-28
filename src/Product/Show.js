// @flow
import * as React from "react";
import "../Css Files/Product/show.css";
import "../Css Files/Product/single_product.css";
import "../Css Files/Product/view_by_category.css";
import "../Css Files/Product/view_by_popular.css";

export function Show() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div
              id="product-slider"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="images/i1.jpg"></img>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="images/i2.jpg"></img>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="images/i1.jpg"></img>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#product-slider"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only"></span>
              </a>
              <a
                className="carousel-control-next"
                href="#product-slider"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only"></span>
              </a>
            </div>
          </div>

          <div className="col-md-7">
            <h2>Plant Name</h2>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-half-o"></i>
            <p className="price">Rs 450</p>
            <p>
              <b>Availability:</b> In Stock
            </p>
            <label>Quantity:</label>{" "}
            <input type="text" name="Quantity" value="1"></input>
            <button type="button" className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
