// CSS import
import "./App.css";

// React Imports
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import all pages to route to
import AboutPage from "./AboutPage/AboutPage.jsx";
import ForumPage from "./ForumPage/ForumPage.jsx";
import ComicsPage from "./ComicsPage/ComicsPage.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import GalleryPage from "./GalleryPage/GalleryPage.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/forum" element={<ForumPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/comics" element={<ComicsPage />} />

          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
