import Navbar from "./Navbar"
import Profile from "./pages/Profile"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import React from 'react';

function App() {
  return (
      <>
        <Navbar />
        <div className="container">
          <Routes>
              <Route path="/" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </>
  )
}

export default App
