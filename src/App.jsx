import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Quotidiano from "./pages/Quotidiano";
import Wit from "./pages/Wit";
import Molnart from "./pages/Molnart";
import Outros from "./pages/Outros";

// Components
import NavBar from "./components/NavBar";

// CSS
import "./css/App.css";




function App() {
  return (
    <div className="main-content">
      <NavBar />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/quotidiano" element={<Quotidiano />} />
        <Route path="/wit" element={<Wit />} />
        <Route path="/molnart" element={<Molnart />} />
        <Route path="/outros" element={<Outros />} />
      </Routes>
    </div>
  );
}

export default App;
