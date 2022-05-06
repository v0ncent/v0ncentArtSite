// CSS import
import "./App.css";

// React Imports
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import all pages to route to
import AboutPage from "./aboutPage/AboutPage.jsx";
import ForumPage from "./forumPage/ForumPage.jsx";
import ComicsPage from "./comicsPage/ComicsPage.jsx";
import LandingPage from "./landingPage/LandingPage.jsx";
import GalleryPage from "./galleryPage/GalleryPage.jsx";

// Import theme creation tools & font
import "@fontsource/kalam";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: "Kalam, Ariel",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/forum" element={<ForumPage />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/comics" element={<ComicsPage />} />

            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
