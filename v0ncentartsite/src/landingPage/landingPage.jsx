// MUI Imports
import { Box, Grid, Paper, Typography } from "@mui/material";

//Import react
import { useNavigate } from "react-router-dom";

// Importing needed components
import ContentPage from "../contentPage/contentPage.jsx";
import MenuComponent from "../MenuComponent/MenuComponent.jsx";
import AnnouncementsPage from "../announcementsPage/announcementsPage.jsx";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <Box bgcolor="#000000" sx={{ p: 8 }}>
      <Paper sx={{ p: 5 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              textAlign={"left"}
              variant="h1"
              onClick={() => navigate("/")}
            >
              V0ncent Art Site
            </Typography>
            <br />
            <MenuComponent />
            <br />
            <Box sx={{ p: 1, border: 1 }}>
              <AnnouncementsPage />
            </Box>
            <br />
            <Box sx={{ p: 1, border: 1 }}>
              <ContentPage />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default LandingPage;
