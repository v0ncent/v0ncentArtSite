// Importing needed components
import { Grid } from "@mui/material";
import TopNav from "../TopNav/TopNav.jsx";
import ContentPage from "../contentPage/ContentPage.jsx";
import AnnouncementsPage from "../announcementsPage/announcementsPage.jsx";

function LandingPage() {
  return (
    <Grid container>
      {/* spacer */}
      <Grid item xs={12}>
        <TopNav />
      </Grid>
      {/* spacer */}
      <Grid item xs={12}>
        <AnnouncementsPage />
      </Grid>
      {/* spacer */}
      <Grid item xs={12}>
        <ContentPage />
      </Grid>
      {/* spacer */}
    </Grid>
  );
}

export default LandingPage;
