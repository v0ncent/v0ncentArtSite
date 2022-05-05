// MUI Imports
import { Box, Grid, Paper } from "@mui/material";

// Importing needed components
import ContentPage from "../ContentPage/ContentPage.jsx";
import MenuComponent from "../MenuComponent/MenuComponent.jsx";
import AnnouncementsPage from "../announcementsPage/announcementsPage.jsx";
import HeaderComponent from "../HeaderComponent/HeaderComponent.jsx";

function LandingPage() {
  return (
    <Box bgcolor="#000000" sx={{ p: 8 }}>
      <Paper sx={{ p: 5 }}>
        <Grid container>
          <Grid item xs={12}>
            <Box>
              <HeaderComponent />
            </Box>
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
