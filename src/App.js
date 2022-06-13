import React from "react";
import Navbar from "./inc/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import DynamicArray from "./pages/DynamicArray/DynamicArray";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import "./App.css";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/dynamic_array" element={<DynamicArray />} />

        </Routes>
      </Router >
    </div>
  );
}

export default App;
