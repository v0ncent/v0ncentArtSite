// MUI Imports
import { Box, Grid } from "@mui/material";

// Importing needed components
import TopNav from "../TopNav/TopNav.jsx";
import ContentPage from "../contentPage/ContentPage.jsx";
import AnnouncementsPage from "../announcementsPage/announcementsPage.jsx";

import Create from "../creatE/creatE";

export default function LandingPage() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <TopNav />
        <Box sx={{ p: 1, border: 1, mt: 2 }}>
          <AnnouncementsPage />
          <Create />
        </Box>
        <br />
        <Box sx={{ p: 1, border: 1 }}>
          <ContentPage />
        </Box>
      </Grid>
    </Grid>
  );
}
