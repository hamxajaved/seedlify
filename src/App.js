import "./App.css";
import { Login } from "./Authentication_pages/Login";
import Register from "./Authentication_pages/Register";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home />}></Route>
          <Route path="/login" component={() => <Login></Login>}></Route>
          <Route
            path="/register"
            component={() => <Register></Register>}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
