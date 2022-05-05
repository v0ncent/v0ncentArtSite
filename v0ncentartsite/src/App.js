// CSS import
import "./App.css";

// React Imports
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import all pages to route to
import AboutPage from "./aboutPage/aboutPage.jsx";
import ForumPage from "./forumPage/forumPage.jsx";
import ComicsPage from "./comicsPage/comicsPage.jsx";
import LandingPage from "./landingPage/landingPage.jsx";
import GalleryPage from "./galleryPage/galleryPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/forum" element={<ForumPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/comics" element={<ComicsPage />} />

          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
