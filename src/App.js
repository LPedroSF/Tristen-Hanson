import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import MainPage from "./Pages/MainPage";
import Footer from "./Components/Footer";
import ProjectPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";
import ComicPage from "./Pages/ComicPage";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element= {<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/comic-page" element={<ComicPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
