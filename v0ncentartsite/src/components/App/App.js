// CSS import
import "./App.css";

// Import MUI stuff
import { Box, Paper } from "@mui/material";

// React Imports
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import all pages to route to
import AboutPage from "../aboutPage/AboutPage.jsx";
import ForumPage from "../forumPage/ForumPage.jsx";
import ComicsPage from "../comicsPage/ComicsPage.jsx";
import LandingPage from "../landingPage/LandingPage.jsx";
import GalleryPage from "../galleryPage/GalleryPage.jsx";

// Import theme creation tools & font
import "@fontsource/kalam";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Kalam, Ariel",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box bgcolor="#000000" sx={{ p: 8 }}>
          <Paper sx={{ p: 5 }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route path="/forum" element={<ForumPage />} />

                <Route path="/about" element={<AboutPage />} />

                <Route path="/comics" element={<ComicsPage />} />

                <Route path="/gallery" element={<GalleryPage />} />
              </Routes>
            </BrowserRouter>
          </Paper>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
