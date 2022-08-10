// Importing needed components
import { Grid } from "@mui/material";
import TopNav from "../TopNav/TopNav.jsx";
import ContentPage from "../contentPage/ContentPage.jsx";
import AnnouncementsPage from "../announcementsPage/announcementsPage.jsx";

function LandingPage() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={{ mb: 2 }}>
          <TopNav />
        </Grid>
        <Grid item xs={12} sx={{ mb: 2 }}>
          <AnnouncementsPage />
        </Grid>
        <Grid item xs={12}>
          <ContentPage />
        </Grid>
      </Grid>
    </>
  );
}

export default LandingPage;
