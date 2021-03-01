import "./App.css";
import { Login } from "./Authentication_pages/Login";
import Register from "./Authentication_pages/Register";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar></Navbar>
      </div>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
