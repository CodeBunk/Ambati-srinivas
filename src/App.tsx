/** @format */

import { useState } from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BaseLayout from "./components/Layouts/BaseLayout";
import React from "react";
import Food from "./Pages/Food";
import Travel from "./Pages/Travel";
import Hobbies from "./Pages/Hobbies";
import OtherLayout from "./components/Layouts/OtherLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Food />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
