import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage'
function App() {
  return (
    <>
        <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio_section />} />
          <Route path="/*" element={<Err404page />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
