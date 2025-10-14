import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SubjectSelect from "./pages/SubjectSelect";
import Quiz from "./pages/Quiz";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/subjects" element={<SubjectSelect />} />
        <Route path="/quiz/:subject" element={<Quiz />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
