import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage'
import Err404page from './pages/Err404page'
import Contact from './pages/ContactPage';
import './index.css'
import TeamPage from './pages/teamPage';
function App() {
  return (
    <>
        <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<TeamPage />} />
          {/* <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio_section />} /> */}
          <Route path="/*" element={<Err404page />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
