import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import TextForm from "./Components/TextForm.js";
import About from "./Components/About";
// import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import {Link} from "react-router-dom";

function App() {
  return (
    /*<Navbar title="TextUtils" AboutTextUtils="About" />*/
    <>
       <Navbar title="TextUtils" AboutTextUtils="About" /> 

      <div className="container my-3">
        {/* <TextForm email="ny@srmist.edu.in"  heading= "Enter the text to analyse"/> */}
       
        <Router>
          
          <Routes>
            
          <Route path="/" element={<TextForm email="ny@srmist.edu.in"  heading= "Enter the text to analyse" />} /> 
          <Route path="/about" element={<About />} /> 
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
