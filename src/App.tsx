/** @format */

import { useState } from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BaseLayout from "./components/Layouts/BaseLayout";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
