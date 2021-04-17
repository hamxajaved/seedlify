import React, { useState } from "react";
import auth from "../img/auth.jpg";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Create() {
  let history = useHistory();
  const [state, setState] = useState({
    name: "",
    price: "",
    stock: "",
    avatar: "",
    plant_type_id: "",
    plant_categories_id: "",
  });
  const [categaries, setCategories] = React.useState([]);
  const [types, setTypes] = React.useState([]);

  React.useEffect(() => {
    // fetching plantCtaegories form api
    async function getcategaries() {
      const response = await fetch("http://localhost:8000/api/categaries");
      const body = await response.json();
      console.log("response from api : ", body);
      setCategories(
        body.plantCategories.map(({ category, id }) => ({
          label: category,
          value: id,
        }))
      );
    }
    // fetching plant types from api
    async function gettypes() {
      const response = await fetch("http://localhost:8000/api/types");
      const body = await response.json();
      console.log("response from api : ", body);
      setTypes(
        body.plantTypes.map(({ type, id }) => ({
          label: type,
          value: id,
        }))
      );
    }
    getcategaries();
    gettypes();
  }, []);

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
    console.log("event.target.name : ", value);
  }
  const url = "http://localhost:8000/api/addPlant";

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

  return (
    <div className="d-flex flex-column flex-column-fluid no-gutters">
      <div className="subheader py-2 py-lg-6 subheader-solid" id="kt_subheader">
        <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
          <div className="d-flex align-items-center flex-wrap mr-1">
            <div className="d-flex align-items-baseline flex-wrap mr-5">
              <h3 className="text-dark font-weight-bold my-1 mr-5">Products</h3>
              <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                <li className="breadcrumb-item">
                  <a href="" className="text-muted">
                    Products
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="" className="text-muted">
                    Create
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn btn-sm btn-primary margin-r-10"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button className="btn btn-sm btn-secondary ml-1" role="btnutton">
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column-fluid" id="kt_content">
        <div className="container mb-3">
          <div className="row">
            <div className="col-lg-8">
              <div className="card card-custom col-lg-12">
                <div className="card-header">
                  <h5 className="card-title font-weight-bolder">
                    Basic Information
                  </h5>
                </div>
                <form className="form form--label-right">
                  <div className="card-body">
                    <div className="section section--first">
                      <div className="form-group row">
                        <div className="col-lg-6">
                          <label className="font-weight-bolder">Name*:</label>
                          <input
                            type="text"
                            data-vv-as="Name"
                            name="name"
                            placeholder="Enter product name"
                            onChange={handleChange}
                          ></input>
                          <span className="invalid-feedback"></span>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-lg-6">
                          <label className="font-weight-bolder">Price*:</label>
                          <input
                            type="text"
                            data-vv-as="Name"
                            name="price"
                            placeholder="Enter product name"
                            onChange={handleChange}
                          ></input>
                          <span className="invalid-feedback"></span>
                        </div>
                        <div className="col-lg-6">
                          <label className="font-weight-bolder">Stock*:</label>
                          <input
                            type="text"
                            name="stock"
                            placeholder="Enter product stock "
                            onChange={handleChange}
                          ></input>
                          <span className="invalid-feedback"></span>
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-lg-6">
                          <label className="font-weight-bolder">
                            Category*:
                          </label>
                          <select
                            name="plant_categories_id"
                            onChange={handleChange}
                          >
                            {categaries.map((catgory) => (
                              <option key={catgory.label} value={catgory.value}>
                                {catgory.label}
                              </option>
                            ))}
                          </select>
                          <span className="invalid-feedback"></span>
                          <a>or Add a New Category</a>
                        </div>
                        <div className="col-lg-6">
                          <label className="font-weight-bolder">Type*:</label>
                          <select name="plant_type_id" onChange={handleChange}>
                            {types.map((type) => (
                              <option key={type.label} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                          <span className="invalid-feedback"></span>
                          <a>or Add a New Type</a>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="font-weight-bolder">
                          Description:
                        </label>
                        <textarea
                          className="form-control"
                          rows="4"
                          name="description"
                          onChange={handleChange}
                        ></textarea>
                        <span className="invalid-feedback"></span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* begin: Right Sidebar */}
            <div className="col-lg-4">
              <div className="card card-custom mt-8">
                <div className="card-header">
                  <h3 className="card-title font-weight-bolder">
                    Product Images
                  </h3>
                </div>
                <form className="form form--label-right">
                  <div className="card-body">
                    <div className="section section--first">
                      <div className="form-group">
                        <label className="font-weight-bolder">Images:</label>
                        <div id="my-strictly-unique-vue-upload-multiple-image">
                          <input
                            type="file"
                            name="avatar"
                            onChange={handleChange}
                          ></input>
                          <span className="invalid-feedback"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* end: Right Sidebar */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Create;
