// Importing needed components
import { Box, Grid } from "@mui/material";
import TopNav from "../TopNav/TopNav.jsx";
import ContentPage from "../contentPage/ContentPage.jsx";
import AnnouncementsPage from "../announcementsPage/announcementsPage.jsx";

function LandingPage() {
  return (
    <Box sx={{ minHeight: "1180px" }}>
      <Grid container>
        {/* spacer */}
        <Grid item xs={12} sx={{ mb: 2 }}>
          <TopNav />
        </Grid>
        <Grid item xs={12} sx={{ mb: 2 }}>
          <AnnouncementsPage />
        </Grid>
        {/* spacer */}
        <Grid item xs={12}>
          <ContentPage />
        </Grid>
        {/* spacer */}
      </Grid>
    </Box>
  );
}

export default LandingPage;
