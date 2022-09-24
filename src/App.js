import React, { useState } from "react"
import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Navbar from "./navBar"
import Home from "./Home"
import Chips from "./Chips"
import Cookies from "./Cookies"
import Drinks from "./Drinks"

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>
          <Route exact path='/chips' element={<Chips />}>
          </Route>
          <Route exact path='/drinks' element={<Drinks />}>
          </Route>
          <Route exact path='/cookies' element={<Cookies/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;

