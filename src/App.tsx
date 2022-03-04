import React from "react";
import "./index.css";
import "./App.css";

import Home from "./Home";
import Quote from "./Quote";
import MainHeader from "./MainHeader";
import About from "./About";
import Career from "./Career";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/get-a-quote" element={<Quote />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/career/*" element={<Career />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
