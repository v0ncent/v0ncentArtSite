/*
MIT License

Copyright (c) 2022 Vincent Banks

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 
*/

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

// import UploadTest from "../UploadTest/UploadTest";

// Import theme creation tools & font
import "@fontsource/kalam";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      grey: "#CACACA",
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

                {/* <Route path="/test" element={<UploadTest />} /> */}

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
