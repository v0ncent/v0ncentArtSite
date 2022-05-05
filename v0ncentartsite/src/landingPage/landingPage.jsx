import { Box, Grid, Paper, Typography } from "@mui/material";

import ContentPage from "../contentPage/contentPage.jsx";
import MenuComponent from "../menuComponent/menuComponent.jsx";
import AnnouncementsPage from "../announcementsPage/announcementsPage.jsx";

function landingPage() {
  return (
    <Box bgcolor="#000000" sx={{ p: 8 }}>
      <Paper sx={{ p: 5 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography textAlign={"left"} variant="h1">
              V0ncent Art Site
            </Typography>
            <br />
            <Box sx={{ p: 1, border: 1 }}>
              <MenuComponent />
            </Box>
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

export default landingPage;
