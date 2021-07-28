import "./App.css";
import { Login } from "./Authentication_pages/Login";
import Register from "./Authentication_pages/Register";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Create from "./Product/Create";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProductsList } from "./Product/ProductsList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={() => <Home />}></Route>
          <Route path="/login" component={() => <Login></Login>}></Route>
          <Route
            path="/register"
            component={() => <Register></Register>}
          ></Route>
          <Route
            path="/create-product"
            component={() => <Create></Create>}
          ></Route>
          <Route
            path="/product-listing"
            component={() => <ProductsList></ProductsList>}
          ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
