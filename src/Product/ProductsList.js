// @flow
import * as React from "react";
import Footer from "../components/Footer";
import { Nav } from "../components/Nav";

export function ProductsList() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="images/i1.jpg"
              alt="First slide"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="images/i2.jpg"
              alt="Second slide"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="images/i1.jpg"
              alt="Third slide"
            ></img>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      {/* 
        <!---------view_by_category--------> */}
      <section class="category">
        <div class="container">
          <div class="title-box">
            <h2>Categories</h2>
            <a href="">See All</a>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="round">
                <img src="https://picsum.photos/200"></img>
              </div>
              <div class="popular-bottom text-center">
                <h3>Category</h3>
              </div>
            </div>

            <div class="col-md-3">
              <div class="round">
                <img src="https://picsum.photos/200"></img>
              </div>
              <div class="popular-bottom text-center">
                <h3>Category</h3>
              </div>
            </div>

            <div class="col-md-3">
              <div class="round">
                <img src="https://picsum.photos/200"></img>
              </div>
              <div class="popular-bottom text-center">
                <h3>Category</h3>
              </div>
            </div>

            <div class="col-md-3">
              <div class="round">
                <img src="https://picsum.photos/200"></img>
              </div>
              <div class="popular-bottom text-center">
                <h3>Category</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        <!---------view_by_popular--------> */}
      <section class="popular">
        <div class="container">
          <div class="title-box">
            <h2>Popular</h2> <a href="">See All</a>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="popular-top">
                <img src="https://picsum.photos/200"></img>
                <div class="overlay-right">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Quick Shop"
                  >
                    <i class="fa fa-eye"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to Wishlist"
                  >
                    <i class="fa fa-heart-o"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to cart"
                  >
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div class="popular-bottom">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-half-o"></i>
                <h3>Product</h3>
                <h5>Rs. 450</h5>
              </div>
            </div>

            <div class="col-md-3">
              <div class="popular-top">
                <img src="https://picsum.photos/200"></img>
                <div class="overlay-right">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Quick Shop"
                  >
                    <i class="fa fa-eye"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to Wishlist"
                  >
                    <i class="fa fa-heart-o"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to cart"
                  >
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div class="popular-bottom">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-half-o"></i>
                <h3>Product</h3>
                <h5>Rs. 450</h5>
              </div>
            </div>

            <div class="col-md-3">
              <div class="popular-top">
                <img src="https://picsum.photos/200"></img>
                <div class="overlay-right">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Quick Shop"
                  >
                    <i class="fa fa-eye"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to Wishlist"
                  >
                    <i class="fa fa-heart-o"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to cart"
                  >
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div class="popular-bottom">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-half-o"></i>
                <h3>Product</h3>
                <h5>Rs. 450</h5>
              </div>
            </div>

            <div class="col-md-3">
              <div class="popular-top">
                <img src="https://picsum.photos/200"></img>
                <div class="overlay-right">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Quick Shop"
                  >
                    <i class="fa fa-eye"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to Wishlist"
                  >
                    <i class="fa fa-heart-o"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to cart"
                  >
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div class="popular-bottom">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-half-o"></i>
                <h3>Product</h3>
                <h5>Rs. 450</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
<!-------New Arrivals---------> */}
      <section class="new-arrivals">
        <div class="container">
          <div class="title-box">
            <h2>New Arrivals</h2> <a href="">See All</a>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="popular-top">
                <img src="https://picsum.photos/200"></img>
                <div class="overlay-right">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Quick Shop"
                  >
                    <i class="fa fa-eye"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to Wishlist"
                  >
                    <i class="fa fa-heart-o"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to cart"
                  >
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div class="popular-bottom">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-half-o"></i>
                <h3>Product</h3>
                <h5>Rs. 450</h5>
              </div>
            </div>

            <div class="col-md-3">
              <div class="popular-top">
                <img src="https://picsum.photos/200"></img>
                <div class="overlay-right">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Quick Shop"
                  >
                    <i class="fa fa-eye"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to Wishlist"
                  >
                    <i class="fa fa-heart-o"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to cart"
                  >
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div class="popular-bottom">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-half-o"></i>
                <h3>Product</h3>
                <h5>Rs. 450</h5>
              </div>
            </div>

            <div class="col-md-3">
              <div class="popular-top">
                <img src="https://picsum.photos/200"></img>
                <div class="overlay-right">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Quick Shop"
                  >
                    <i class="fa fa-eye"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to Wishlist"
                  >
                    <i class="fa fa-heart-o"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to cart"
                  >
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div class="popular-bottom">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-half-o"></i>
                <h3>Product</h3>
                <h5>Rs. 450</h5>
              </div>
            </div>

            <div class="col-md-3">
              <div class="popular-top">
                <img src="https://picsum.photos/200"></img>
                <div class="overlay-right">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Quick Shop"
                  >
                    <i class="fa fa-eye"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to Wishlist"
                  >
                    <i class="fa fa-heart-o"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to cart"
                  >
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div class="popular-bottom">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-half-o"></i>
                <h3>Product</h3>
                <h5>Rs. 450</h5>
              </div>
            </div>

            <div class="col-md-3">
              <div class="popular-top">
                <img src="https://picsum.photos/200"></img>
                <div class="overlay-right">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Quick Shop"
                  >
                    <i class="fa fa-eye"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to Wishlist"
                  >
                    <i class="fa fa-heart-o"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to cart"
                  >
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div class="popular-bottom">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-half-o"></i>
                <h3>Product</h3>
                <h5>Rs. 450</h5>
              </div>
            </div>

            <div class="col-md-3">
              <div class="popular-top">
                <img src="https://picsum.photos/200"></img>
                <div class="overlay-right">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Quick Shop"
                  >
                    <i class="fa fa-eye"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to Wishlist"
                  >
                    <i class="fa fa-heart-o"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to cart"
                  >
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div class="popular-bottom">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-half-o"></i>
                <h3>Product</h3>
                <h5>Rs. 450</h5>
              </div>
            </div>

            <div class="col-md-3">
              <div class="popular-top">
                <img src="https://picsum.photos/200"></img>
                <div class="overlay-right">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Quick Shop"
                  >
                    <i class="fa fa-eye"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to Wishlist"
                  >
                    <i class="fa fa-heart-o"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to cart"
                  >
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div class="popular-bottom">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-half-o"></i>
                <h3>Product</h3>
                <h5>Rs. 450</h5>
              </div>
            </div>

            <div class="col-md-3">
              <div class="popular-top">
                <img src="https://picsum.photos/200"></img>
                <div class="overlay-right">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Quick Shop"
                  >
                    <i class="fa fa-eye"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to Wishlist"
                  >
                    <i class="fa fa-heart-o"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    title="Add to cart"
                  >
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div class="popular-bottom">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-half-o"></i>
                <h3>Product</h3>
                <h5>Rs. 450</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}
