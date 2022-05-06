// MUI Imports
import { Box, Grid, Paper } from "@mui/material";

// Importing needed components
import ContentPage from "../contentPage/ContentPage.jsx";
import MenuComponent from "../menuComponent/MenuComponent.jsx";
import HeaderComponent from "../HeaderComponent/HeaderComponent.jsx";
import AnnouncementsPage from "../announcementsPage/announcementsPage.jsx";

import Create from "../creatE/creatE" 

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
              <Create />
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
