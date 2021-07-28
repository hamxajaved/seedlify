// @flow
import * as React from "react";

export const Cart = () => {
  return (
    <div>
      <section className="mt-5">
        <div className="container">
          <div className="table-responsive">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="text-black">
                    Product
                  </th>
                  <th scope="col" className="text-black">
                    Price
                  </th>
                  <th scope="col" className="text-black">
                    Quantity
                  </th>
                  <th scope="col" className="text-black">
                    Reviews
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div className="main">
                      <div className="d-flex">
                        <img src="https://picsum.photos/150"></img>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="price">
                      <h6>Rs 450</h6>
                    </div>
                  </td>

                  <td>
                    <div className="counter">
                      <i className="fa fa-angle-down"></i>
                      <input
                        type="text"
                        name="input-number"
                        value="1"
                        min="0"
                        max="100"
                      ></input>
                      <i className="fa fa-angle-up"></i>
                    </div>
                  </td>

                  <td>
                    <div className="reviews">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-half-o"></i>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="main">
                      <img src="https://picsum.photos/150"></img>
                    </div>
                  </td>

                  <td>
                    <div>
                      <h6>Rs 450</h6>
                    </div>
                  </td>

                  <td>
                    <div className="counter">
                      <i className="fa fa-angle-down"></i>
                      <input
                        type="text"
                        name="input-number"
                        value="1"
                        min="0"
                        max="100"
                      ></input>
                      <i className="fa fa-angle-up"></i>
                    </div>
                  </td>

                  <td>
                    <div className="reviews">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-half-o"></i>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="main">
                      <img src="https://picsum.photos/150"></img>
                    </div>
                  </td>

                  <td>
                    <div className="price">
                      <h6>Rs 450</h6>
                    </div>
                  </td>

                  <td>
                    <div className="quantity">
                      <i className="fa fa-angle-down"></i>
                      <input
                        type="text"
                        name="input-number"
                        value="1"
                        min="0"
                        max="100"
                      ></input>
                      <i className="fa fa-angle-up"></i>
                    </div>
                  </td>

                  <td>
                    <div className="reviews">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-half-o"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
